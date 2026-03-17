/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { RightSidebarContext } from '@/gui/contexts/RightSidebarContext';
import { useSelection } from './selection';
import CodeBlock from '@/gui/molecules/CodeBlock/CodeBlock';
import { useGuiTheme } from '@/gui/hooks/useGuiTheme';

const DATA_URI_PREFIXES = ['data:', 'blob:'];
const DATA_URI_PREVIEW_CHARS = 32;
const LARGE_STRING_LIMIT = 1024;

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
  const lastHighlighted = React.useRef<HTMLElement | null>(null);
  const highlightClass = 'gui-inspector-selected';
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
    const styleId = 'gui-inspector-highlight-style';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .${highlightClass} {
        outline: 2px solid rgba(59, 130, 246, 0.85);
        outline-offset: 2px;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
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
    const getLabel = (el: HTMLElement) => {
      const dataName = el.getAttribute('data-gui-component');
      if (dataName) return dataName;
      return el.tagName.toLowerCase();
    };

    const buildResolvedPath = (start: HTMLElement, host: HTMLElement) => {
      const path: string[] = [];
      let current: HTMLElement | null = start;
      while (current) {
        path.unshift(getLabel(current));
        if (current === host) break;
        current = current.parentElement;
      }
      return path;
    };

    const onClickCapture = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const host = target.closest('[data-gui-node-id]') as HTMLElement | null;
      if (!host) return;

      // Respect OFF strictly: no click-to-inspect path when disabled.
      if (!inspectorEnabled) return;

      const id = host.getAttribute('data-gui-node-id');
      if (!id) return;
      let resolvedId = id;
      if (!getNode(resolvedId)) {
        const parts = id.split(':');
        const path = parts.length > 1 ? parts.slice(1).join(':') : '';
        const fallback = getNodeByPath(path);
        if (fallback?.id) resolvedId = fallback.id;
      }
      selectNode(resolvedId);
      setSelectedMeta({
        elementTag: target.tagName.toLowerCase(),
        resolvedTag: host.tagName.toLowerCase(),
        resolvedPath: buildResolvedPath(target, host),
      });
      rightSidebar?.setView?.('expanded');

      ev.preventDefault();
      ev.stopPropagation();
    };

    window.addEventListener('click', onClickCapture, true);
    return () => window.removeEventListener('click', onClickCapture, true);
  }, [inspectorEnabled, rightSidebar, selectNode, setSelectedMeta, getNode, getNodeByPath]);

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
