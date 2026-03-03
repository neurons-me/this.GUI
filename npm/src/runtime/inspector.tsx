/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { RightSidebarContext } from '@/gui/contexts/RightSidebarContext';
import { useSelection } from './selection';
import CodeBlock from '@/gui/molecules/CodeBlock/CodeBlock';
import { useGuiTheme } from '@/gui/hooks/useGuiTheme';

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
        return v;
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

  const added: Record<string, any> = {};
  const removed: Record<string, any> = {};
  const changed: Record<string, { from: any; to: any }> = {};

  for (const key of Object.keys(flatResolved)) {
    if (!(key in flatSpec)) {
      added[key] = flatResolved[key];
      continue;
    }
    const a = flatSpec[key];
    const b = flatResolved[key];
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      changed[key] = { from: a, to: b };
    }
  }

  for (const key of Object.keys(flatSpec)) {
    if (!(key in flatResolved)) {
      removed[key] = flatSpec[key];
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

export function RuntimeInspector() {
  const {
    inspectorEnabled,
    setInspectorEnabled,
    selectedNodeId,
    selected,
    selectNode,
    clearSelection,
  } = useSelection();
  const rightSidebar = React.useContext(RightSidebarContext);
  const theme = useGuiTheme();
  const codeVariant = theme?.palette?.mode === 'light' ? 'light' : 'dark';
  const [tab, setTab] = React.useState<InspectorTab>('spec');

  React.useEffect(() => {
    const onClickCapture = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const host = target.closest('[data-gui-node-id]') as HTMLElement | null;
      if (!host) return;

      // Alt+click always selects (and enables inspector). Otherwise only if inspector is enabled.
      if (!ev.altKey && !inspectorEnabled) return;

      const id = host.getAttribute('data-gui-node-id');
      if (!id) return;

      if (ev.altKey && !inspectorEnabled) setInspectorEnabled(true);
      selectNode(id);
      rightSidebar?.setView?.('expanded');

      ev.preventDefault();
      ev.stopPropagation();
    };

    window.addEventListener('click', onClickCapture, true);
    return () => window.removeEventListener('click', onClickCapture, true);
  }, [inspectorEnabled, rightSidebar, selectNode, setInspectorEnabled]);

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
