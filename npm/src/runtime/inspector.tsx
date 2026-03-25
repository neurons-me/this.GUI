/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { RightSidebarContext } from '@/gui/Contexts/RightSidebarContext';
import { useSelection } from './selection';
import CodeBlock from '@/gui/Molecules/CodeBlock/CodeBlock';
import { useGuiTheme } from '@/gui/Hooks/useGuiTheme';

const DATA_URI_PREFIXES = ['data:', 'blob:'];
const DATA_URI_PREVIEW_CHARS = 32;
const LARGE_STRING_LIMIT = 1024;
const ADMIN_VIEW_SCOPE_KEY = 'gui.runtime.admin.view.scope.v1';
const ADMIN_VIEW_SCOPE_SET_EVENT = 'this.gui:adminView:scope:set';
const ADMIN_VIEW_SCOPE_CHANGED_EVENT = 'this.gui:adminView:scope:changed';
type AdminScopeMode = 'global' | 'scoped';

function readAdminScopeMode(): AdminScopeMode {
  try {
    const raw = String(localStorage.getItem(ADMIN_VIEW_SCOPE_KEY) || '').toLowerCase();
    return raw === 'scoped' ? 'scoped' : 'global';
  } catch {
    return 'global';
  }
}

function writeAdminScopeMode(mode: AdminScopeMode) {
  try {
    localStorage.setItem(ADMIN_VIEW_SCOPE_KEY, mode);
  } catch {}
}

function truncateString(value: string): string {
  if (DATA_URI_PREFIXES.some((prefix) => value.startsWith(prefix))) {
    const head = value.slice(0, DATA_URI_PREVIEW_CHARS);
    return `${head}… [truncated data uri]`;
  }
  if (value.length > LARGE_STRING_LIMIT) {
    return `${value.slice(0, LARGE_STRING_LIMIT)}… [large string truncated]`;
  }
  return value;
}

function normalizeForInspector(value: any): any {
  if (typeof value === 'string') return truncateString(value);
  return value;
}

function safeStringify(value: any): string {
  const seen = new WeakSet<object>();
  try {
    return JSON.stringify(
      value,
      (_k, v) => {
        if (typeof v === 'object' && v !== null) {
          if (seen.has(v)) return '[Circular]';
          seen.add(v);
        }
        if (typeof v === 'function') return `[Function ${v.name || 'anonymous'}]`;
        return normalizeForInspector(v);
      },
      2
    );
  } catch {
    try {
      return String(value);
    } catch {
      return '[Unserializable]';
    }
  }
}

type InspectorTab = 'spec' | 'resolved' | 'diff';

function isPlainObject(value: any): value is Record<string, any> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function flattenObject(
  input: any,
  prefix = '',
  out: Record<string, any> = {}
): Record<string, any> {
  if (!isPlainObject(input)) {
    out[prefix || '$'] = input;
    return out;
  }
  const keys = Object.keys(input);
  if (!keys.length && prefix) out[prefix] = {};
  for (const key of keys) {
    const nextPath = prefix ? `${prefix}.${key}` : key;
    const value = input[key];
    if (isPlainObject(value)) {
      flattenObject(value, nextPath, out);
    } else {
      out[nextPath] = value;
    }
  }
  return out;
}

function buildPropsDiff(rawSpec: any, resolvedProps: any) {
  const specProps = isPlainObject(rawSpec?.props) ? rawSpec.props : {};
  const flatSpec = flattenObject(specProps);
  const flatResolved = flattenObject(isPlainObject(resolvedProps) ? resolvedProps : {});
  const normalizeFlat = (input: Record<string, any>) => {
    const out: Record<string, any> = {};
    for (const key of Object.keys(input)) {
      out[key] = normalizeForInspector(input[key]);
    }
    return out;
  };
  const normalizedSpec = normalizeFlat(flatSpec);
  const normalizedResolved = normalizeFlat(flatResolved);

  const added: Record<string, any> = {};
  const removed: Record<string, any> = {};
  const changed: Record<string, { from: any; to: any }> = {};

  for (const key of Object.keys(normalizedResolved)) {
    if (!(key in normalizedSpec)) {
      added[key] = normalizedResolved[key];
      continue;
    }
    const a = normalizedSpec[key];
    const b = normalizedResolved[key];
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      changed[key] = { from: a, to: b };
    }
  }

  for (const key of Object.keys(normalizedSpec)) {
    if (!(key in normalizedResolved)) {
      removed[key] = normalizedSpec[key];
    }
  }

  return {
    summary: {
      added: Object.keys(added).length,
      removed: Object.keys(removed).length,
      changed: Object.keys(changed).length,
    },
    added,
    removed,
    changed,
  };
}

export function RuntimeInspector({
  toggleVisible = false,
}: {
  toggleVisible?: boolean;
}) {
  const {
    inspectorEnabled,
    setInspectorEnabled,
    selectedNodeId,
    selected,
    selectNode,
    clearSelection,
    selectedMeta,
    setSelectedMeta,
    getNode,
    getNodeByPath,
  } = useSelection();
  const rightSidebar = React.useContext(RightSidebarContext);
  const theme = useGuiTheme();
  const codeVariant = theme?.palette?.mode === 'light' ? 'light' : 'dark';
  const [tab, setTab] = React.useState<InspectorTab>('spec');
  const [adminScopeMode, setAdminScopeMode] = React.useState<AdminScopeMode>(() => readAdminScopeMode());
  const lastHighlighted = React.useRef<HTMLElement | null>(null);
  const highlightClass = 'gui-inspector-selected';
  const lastInspectorEnabled = React.useRef<boolean>(inspectorEnabled);

  const getLabel = React.useCallback((el: HTMLElement) => {
    const dataName = el.getAttribute('data-gui-component');
    if (dataName) return dataName;
    return el.tagName.toLowerCase();
  }, []);

  const buildResolvedPath = React.useCallback(
    (start: HTMLElement, host: HTMLElement) => {
      const path: string[] = [];
      let current: HTMLElement | null = start;
      while (current) {
        path.unshift(getLabel(current));
        if (current === host) break;
        current = current.parentElement;
      }
      return path;
    },
    [getLabel]
  );

  const resolveNodeId = React.useCallback(
    (rawId?: string | null) => {
      if (!rawId) return null;
      let resolvedId = rawId;
      if (!getNode(resolvedId)) {
        const parts = rawId.split(':');
        const path = parts.length > 1 ? parts.slice(1).join(':') : '';
        const fallback = getNodeByPath(path);
        if (fallback?.id) resolvedId = fallback.id;
      }
      return resolvedId;
    },
    [getNode, getNodeByPath]
  );

  const selectHostElement = React.useCallback(
    (host: HTMLElement, metaFrom?: HTMLElement | null) => {
      const rawId = host.getAttribute('data-gui-node-id');
      const resolvedId = resolveNodeId(rawId);
      if (!resolvedId) return false;
      selectNode(resolvedId);
      const metaSource = metaFrom ?? host;
      setSelectedMeta({
        elementTag: metaSource.tagName.toLowerCase(),
        resolvedTag: host.tagName.toLowerCase(),
        resolvedPath: buildResolvedPath(metaSource, host),
      });
      rightSidebar?.setView?.('expanded');
      return true;
    },
    [resolveNodeId, selectNode, setSelectedMeta, buildResolvedPath, rightSidebar]
  );

  const getSelectedHostElement = React.useCallback(() => {
    if (!selectedNodeId) return null;
    let host: HTMLElement | null = null;
    try {
      host = document.querySelector(
        `[data-gui-node-id="${CSS.escape(selectedNodeId)}"]`
      ) as HTMLElement | null;
    } catch {
      host = document.querySelector(
        `[data-gui-node-id="${selectedNodeId}"]`
      ) as HTMLElement | null;
    }
    return host;
  }, [selectedNodeId]);

  const selectParentNode = React.useCallback(() => {
    const host = getSelectedHostElement();
    if (!host) return;
    let cursor: HTMLElement | null = host.parentElement;
    while (cursor) {
      if (cursor.hasAttribute('data-gui-node-id')) {
        selectHostElement(cursor, cursor);
        return;
      }
      cursor = cursor.parentElement;
    }
  }, [getSelectedHostElement, selectHostElement]);

  const selectTopmostNode = React.useCallback(() => {
    const host = getSelectedHostElement();
    if (!host) return;
    let cursor: HTMLElement | null = host;
    let topMost: HTMLElement | null = host;
    while (cursor) {
      if (cursor.hasAttribute('data-gui-node-id')) {
        topMost = cursor;
      }
      cursor = cursor.parentElement;
    }
    if (topMost) selectHostElement(topMost, topMost);
  }, [getSelectedHostElement, selectHostElement]);

  const findNearestChildNode = React.useCallback((root: HTMLElement) => {
    const queue: HTMLElement[] = Array.from(root.children) as HTMLElement[];
    while (queue.length) {
      const node = queue.shift();
      if (!node) continue;
      if (node.hasAttribute('data-gui-node-id')) return node;
      queue.push(...Array.from(node.children) as HTMLElement[]);
    }
    return null;
  }, []);

  const selectChildNode = React.useCallback(() => {
    const host = getSelectedHostElement();
    if (!host) return;
    const child = findNearestChildNode(host);
    if (!child) return;
    selectHostElement(child, child);
  }, [findNearestChildNode, getSelectedHostElement, selectHostElement]);
  const imagePreviews = React.useMemo(() => {
    const results: { path: string; src: string }[] = [];
    const maxDepth = 6;
    const maxResults = 6;
    const maxKeys = 200;

    const isImageLike = (value: string, keyHint?: string) => {
      if (value.startsWith('data:image/')) return true;
      if (value.startsWith('blob:')) return true;
      if (/^https?:\/\//i.test(value) || value.startsWith('/')) {
        if (/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(value)) return true;
        if (keyHint && /image|img|icon|avatar|badge|src/i.test(keyHint)) return true;
      }
      return false;
    };

    const walk = (node: any, path: string[], depth: number) => {
      if (results.length >= maxResults) return;
      if (depth > maxDepth || !node) return;
      if (typeof node === 'string') {
        const keyHint = path[path.length - 1];
        if (isImageLike(node, keyHint)) {
          results.push({ path: path.join('.'), src: node });
        }
        return;
      }
      if (Array.isArray(node)) {
        const limit = Math.min(node.length, 25);
        for (let i = 0; i < limit; i += 1) {
          walk(node[i], [...path, String(i)], depth + 1);
          if (results.length >= maxResults) return;
        }
        return;
      }
      if (typeof node === 'object') {
        const keys = Object.keys(node).slice(0, maxKeys);
        for (const key of keys) {
          walk(node[key], [...path, key], depth + 1);
          if (results.length >= maxResults) return;
        }
      }
    };

    walk(selected?.resolvedProps ?? null, [], 0);
    return results;
  }, [selected?.resolvedProps]);

  React.useEffect(() => {
    const onExternalInspectorSet = (ev: Event) => {
      const custom = ev as CustomEvent<{ enabled?: boolean }>;
      const nextEnabled = custom?.detail?.enabled;
      if (typeof nextEnabled !== 'boolean') return;
      setInspectorEnabled(nextEnabled);
      if (!nextEnabled) {
        clearSelection();
      }
    };

    window.addEventListener('this.gui:inspector:set', onExternalInspectorSet as EventListener);
    return () => {
      window.removeEventListener('this.gui:inspector:set', onExternalInspectorSet as EventListener);
    };
  }, [clearSelection, setInspectorEnabled]);

  React.useEffect(() => {
    const onScopeChanged = (ev: Event) => {
      const custom = ev as CustomEvent<{ mode?: AdminScopeMode }>;
      const nextMode = custom?.detail?.mode;
      if (nextMode === 'scoped' || nextMode === 'global') {
        setAdminScopeMode(nextMode);
      }
    };
    window.addEventListener(ADMIN_VIEW_SCOPE_CHANGED_EVENT, onScopeChanged as EventListener);
    return () => {
      window.removeEventListener(ADMIN_VIEW_SCOPE_CHANGED_EVENT, onScopeChanged as EventListener);
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (lastInspectorEnabled.current === inspectorEnabled) return;
    lastInspectorEnabled.current = inspectorEnabled;
    window.dispatchEvent(
      new CustomEvent('this.gui:inspector:changed', { detail: { enabled: inspectorEnabled } })
    );
  }, [inspectorEnabled]);

  React.useEffect(() => {
    const styleId = 'gui-inspector-highlight-style';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .${highlightClass} {
        outline: 2px solid rgba(59, 130, 246, 0.85);
        outline-offset: 2px;
        box-shadow:
          0 0 0 2px rgba(59, 130, 246, 0.25),
          inset 0 0 0 2px rgba(59, 130, 246, 0.4);
        border-radius: 6px;
      }
      .gui-inspector-preview {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 6px;
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 8px;
        background: rgba(255,255,255,0.06);
        color: #e5e7eb;
        font-size: 11px;
        cursor: default;
      }
      .gui-inspector-preview-pop {
        position: absolute;
        left: 0;
        top: calc(100% + 6px);
        background: #0b1220;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 8px;
        padding: 6px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        opacity: 0;
        transform: translateY(-4px);
        pointer-events: none;
        transition: opacity 120ms ease, transform 120ms ease;
        z-index: 2002;
        max-width: 220px;
      }
      .gui-inspector-preview:hover .gui-inspector-preview-pop {
        opacity: 1;
        transform: translateY(0);
      }
      .gui-inspector-preview-pop img {
        display: block;
        width: auto;
        height: auto;
        max-width: 180px;
        max-height: 180px;
        border-radius: 6px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, [highlightClass]);

  React.useEffect(() => {
    const clearHighlight = () => {
      if (lastHighlighted.current) {
        lastHighlighted.current.classList.remove(highlightClass);
        lastHighlighted.current = null;
      }
    };

    if (!inspectorEnabled) {
      clearHighlight();
      return;
    }

    if (!selectedNodeId) {
      clearHighlight();
      return;
    }

    let host: HTMLElement | null = null;
    try {
      host = document.querySelector(
        `[data-gui-node-id="${CSS.escape(selectedNodeId)}"]`
      ) as HTMLElement | null;
    } catch {
      host = document.querySelector(
        `[data-gui-node-id="${selectedNodeId}"]`
      ) as HTMLElement | null;
    }

    if (!host) {
      clearHighlight();
      return;
    }

    if (lastHighlighted.current && lastHighlighted.current !== host) {
      lastHighlighted.current.classList.remove(highlightClass);
    }
    host.classList.add(highlightClass);
    lastHighlighted.current = host;
  }, [highlightClass, inspectorEnabled, selectedNodeId]);

  React.useEffect(() => {
    const onClickCapture = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('[data-gui-inspector-control="true"]')) return;
      let host = target.closest('[data-gui-node-id]') as HTMLElement | null;
      if (!host) return;

      // Respect OFF strictly: no click-to-inspect path when disabled.
      if (!inspectorEnabled) return;

      let metaSource: HTMLElement = target;
      if (ev.metaKey || ev.ctrlKey) {
        const child = findNearestChildNode(host);
        if (child) {
          host = child;
          if (!child.contains(target)) {
            metaSource = child;
          }
        }
      } else if (ev.altKey) {
        let cursor: HTMLElement | null = host;
        let topMost: HTMLElement | null = host;
        while (cursor) {
          if (cursor.hasAttribute('data-gui-node-id')) {
            topMost = cursor;
          }
          cursor = cursor.parentElement;
        }
        host = topMost ?? host;
      } else if (ev.shiftKey) {
        let cursor: HTMLElement | null = host.parentElement;
        let parentMatch: HTMLElement | null = null;
        while (cursor) {
          if (cursor.hasAttribute('data-gui-node-id')) {
            parentMatch = cursor;
            break;
          }
          cursor = cursor.parentElement;
        }
        if (parentMatch) host = parentMatch;
      }

      selectHostElement(host, metaSource);

      ev.preventDefault();
      ev.stopPropagation();
    };

    window.addEventListener('click', onClickCapture, true);
    return () => window.removeEventListener('click', onClickCapture, true);
  }, [inspectorEnabled, findNearestChildNode, selectHostElement]);

  const open = inspectorEnabled && !!selectedNodeId;
  const diffPayload = React.useMemo(
    () => buildPropsDiff(selected?.spec, selected?.resolvedProps),
    [selected?.spec, selected?.resolvedProps]
  );

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    border: '1px solid rgba(255,255,255,0.2)',
    background: active ? 'rgba(255,255,255,0.14)' : 'transparent',
    color: '#e5e7eb',
    borderRadius: 8,
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: 11,
    fontWeight: active ? 700 : 500,
  });

  const shortcutKeyStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 10,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'rgba(229, 231, 235, 0.75)',
  };
  const keycapStyle: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 6,
    padding: '2px 6px',
    fontSize: 10,
    background: 'rgba(255,255,255,0.06)',
    color: '#e5e7eb',
  };
  const shortcutButtonStyle: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent',
    color: '#e5e7eb',
    borderRadius: 6,
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: 11,
  };

  return (
    <>
      {toggleVisible && (
        <button
          type="button"
          onClick={() => setInspectorEnabled(!inspectorEnabled)}
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 2000,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.2)',
            background: inspectorEnabled ? '#0f172a' : '#111827',
            color: '#fff',
            fontSize: 12,
            padding: '8px 12px',
            cursor: 'pointer',
          }}
        >
          {inspectorEnabled ? 'Inspector ON' : 'Inspector OFF'}
        </button>
      )}

      {open && (
        <aside
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 380,
            maxWidth: '90vw',
            height: '100vh',
            zIndex: 1999,
            background: '#0b1220',
            color: '#e5e7eb',
            borderLeft: '1px solid rgba(255,255,255,0.12)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <header
            style={{
              padding: '12px 14px',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <strong style={{ fontSize: 13 }}>Semantic Inspector</strong>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button type="button" onClick={() => setTab('spec')} style={tabButtonStyle(tab === 'spec')}>
                Spec
              </button>
              <button
                type="button"
                onClick={() => setTab('resolved')}
                style={tabButtonStyle(tab === 'resolved')}
              >
                Resolved
              </button>
              <button type="button" onClick={() => setTab('diff')} style={tabButtonStyle(tab === 'diff')}>
                Diff
              </button>
              <button
                type="button"
                onClick={clearSelection}
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: '#e5e7eb',
                  borderRadius: 6,
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: 11,
                }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => {
                  clearSelection();
                  setInspectorEnabled(false);
                }}
                aria-label="Close inspector"
                title="Close inspector"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: '#e5e7eb',
                  borderRadius: 999,
                  padding: '2px 8px',
                  cursor: 'pointer',
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          </header>

          <div style={{ padding: 12, overflow: 'auto', fontSize: 12, lineHeight: 1.45 }}>
            <div style={{ marginBottom: 10 }}>
              <div style={{ opacity: 0.75 }}>nodeId</div>
              <code>{selectedNodeId}</code>
            </div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ opacity: 0.75 }}>type</div>
              <code>{selected?.type ?? 'unknown'}</code>
            </div>
            {imagePreviews.length > 0 && (
              <div style={{ marginBottom: 10 }}>
                <div style={{ opacity: 0.75, marginBottom: 6 }}>image preview</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {imagePreviews.map((item, idx) => (
                    <div key={`${item.path}-${idx}`} className="gui-inspector-preview" title={item.path}>
                      <span style={{ display: 'inline-flex', width: 14, height: 14 }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                          <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Zm-2 0H5V5h14Zm-2-2H7l3.5-4.5 2.5 3 2-2.5L17 17Z" />
                        </svg>
                      </span>
                      <span>{item.path || 'image'}</span>
                      <div className="gui-inspector-preview-pop">
                        <img src={item.src} alt={item.path || 'preview'} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedMeta?.resolvedPath && (
              <div style={{ marginBottom: 10 }}>
                <div style={{ opacity: 0.75 }}>resolved path</div>
                <code>{selectedMeta.resolvedPath.join(' > ')}</code>
              </div>
            )}
            <div style={{ marginBottom: 12 }}>
              <div style={{ opacity: 0.75, marginBottom: 6, fontWeight: 700 }}>SHORTCUTS</div>
              <div style={{ display: 'grid', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>Select parent</div>
                    <div style={shortcutKeyStyle}>
                      <span style={keycapStyle}>Shift</span>
                      <span>+ Click</span>
                    </div>
                  </div>
                  <button type="button" onClick={selectParentNode} style={shortcutButtonStyle}>
                    Select
                  </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>Select child</div>
                    <div style={shortcutKeyStyle}>
                      <span style={keycapStyle}>Ctrl/⌘</span>
                      <span>+ Click</span>
                    </div>
                  </div>
                  <button type="button" onClick={selectChildNode} style={shortcutButtonStyle}>
                    Select
                  </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>Select topmost</div>
                    <div style={shortcutKeyStyle}>
                      <span style={keycapStyle}>Alt</span>
                      <span>+ Click</span>
                    </div>
                  </div>
                  <button type="button" onClick={selectTopmostNode} style={shortcutButtonStyle}>
                    Select
                  </button>
                </div>
              </div>
            </div>
            {tab === 'spec' && (
              <div style={{ marginBottom: 10 }}>
                <div style={{ opacity: 0.75, marginBottom: 6, fontWeight: 700 }}>
                  INTENTION (RAW SPEC)
                </div>
                <CodeBlock
                  code={safeStringify(selected?.spec ?? null)}
                  language="json"
                  variant={codeVariant}
                  title="raw.spec.json"
                  showLineNumbers
                  wrapLongLines
                  showCopyButton
                />
              </div>
            )}

            {tab === 'resolved' && (
              <div>
                <div style={{ opacity: 0.75, marginBottom: 6, fontWeight: 700 }}>
                  MANIFESTATION (RESOLVED PROPS)
                </div>
                <CodeBlock
                  code={safeStringify(selected?.resolvedProps ?? null)}
                  language="json"
                  variant={codeVariant}
                  title="resolved.props.json"
                  showLineNumbers
                  wrapLongLines
                  showCopyButton
                />
              </div>
            )}

            {tab === 'diff' && (
              <div>
                <div style={{ opacity: 0.75, marginBottom: 6, fontWeight: 700 }}>
                  DIFF (SPEC.PROPS VS RESOLVED.PROPS)
                </div>
                <CodeBlock
                  code={safeStringify(diffPayload)}
                  language="json"
                  variant={codeVariant}
                  title="spec-vs-resolved.diff.json"
                  showLineNumbers
                  wrapLongLines
                  showCopyButton
                />
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  );
}
