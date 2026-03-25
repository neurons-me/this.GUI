/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { alpha, darken, lighten } from '@mui/material/styles';
import { selectionStore } from './selectionStore';
import { useUpdateInsets } from '@/gui/Hooks';
import { useGuiTheme } from '@/gui/Hooks/useGuiTheme';
import { Box, Button, Drawer, Typography } from '@/gui/Atoms';
import CodeBlock from '@/gui/Molecules/CodeBlock/CodeBlock';
import type { ResolvedNodeRecord } from './renderer';

const ADMIN_VIEW_STORAGE_KEY = 'gui.runtime.admin.view.v2';
const ADMIN_VIEW_SET_EVENT = 'this.gui:adminView:set';
const ADMIN_VIEW_CHANGED_EVENT = 'this.gui:adminView:changed';
const ADMIN_VIEW_SCOPE_KEY = 'gui.runtime.admin.view.scope.v1';
const ADMIN_VIEW_SCOPE_SET_EVENT = 'this.gui:adminView:scope:set';
const ADMIN_VIEW_SCOPE_CHANGED_EVENT = 'this.gui:adminView:scope:changed';
const STYLE_ID = 'gui-admin-overlay-style';
const PANEL_WIDTH_COMPACT_MAX = 360;
const PANEL_WIDTH_EXPANDED_MAX = 560;
const PANEL_WIDTH_COMPACT_VIEWPORT = 0.88;
const PANEL_WIDTH_EXPANDED_VIEWPORT = 0.92;
type ScopeMode = 'global' | 'scoped';
type AdminTreeNode = {
  record: ResolvedNodeRecord;
  children: AdminTreeNode[];
};

function getPanelWidthPx(expanded: boolean, viewportWidth: number): number {
  const maxWidth = expanded ? PANEL_WIDTH_EXPANDED_MAX : PANEL_WIDTH_COMPACT_MAX;
  const viewportRatio = expanded ? PANEL_WIDTH_EXPANDED_VIEWPORT : PANEL_WIDTH_COMPACT_VIEWPORT;
  return Math.round(Math.min(viewportWidth * viewportRatio, maxWidth));
}

function comparePathSegments(a: string, b: string): number {
  const aParts = a.split('.');
  const bParts = b.split('.');
  const max = Math.max(aParts.length, bParts.length);

  for (let index = 0; index < max; index += 1) {
    const aPart = aParts[index];
    const bPart = bParts[index];
    if (aPart == null) return -1;
    if (bPart == null) return 1;
    const aNum = Number(aPart);
    const bNum = Number(bPart);
    const bothNumeric = Number.isFinite(aNum) && Number.isFinite(bNum);
    if (bothNumeric && aNum !== bNum) return aNum - bNum;
    if (aPart !== bPart) return aPart.localeCompare(bPart);
  }

  return 0;
}

function buildAdminTree(records: ResolvedNodeRecord[]): AdminTreeNode[] {
  const sorted = [...records].sort((a, b) => comparePathSegments(a.path, b.path));
  const nodesByPath = new Map<string, AdminTreeNode>();
  const roots: AdminTreeNode[] = [];

  sorted.forEach((record) => {
    const treeNode: AdminTreeNode = { record, children: [] };
    nodesByPath.set(record.path, treeNode);
    const segments = record.path.split('.');
    let parentNode: AdminTreeNode | undefined;

    while (segments.length > 1 && !parentNode) {
      segments.pop();
      parentNode = nodesByPath.get(segments.join('.'));
    }

    if (parentNode) {
      parentNode.children.push(treeNode);
      return;
    }

    roots.push(treeNode);
  });

  return roots;
}

function getTreeRecordLabel(record: ResolvedNodeRecord): string {
  const componentName =
    record.resolvedProps?.['data-gui-component'] ??
    record.spec?.props?.['data-gui-component'] ??
    record.type;
  if (typeof componentName === 'string' && componentName.trim()) return componentName;
  const idHead = String(record.id || '').split(':')[0];
  return idHead || 'node';
}

function readAdminViewState(): boolean {
  try {
    return localStorage.getItem(ADMIN_VIEW_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeAdminViewState(enabled: boolean) {
  try {
    localStorage.setItem(ADMIN_VIEW_STORAGE_KEY, String(enabled));
  } catch {}
}

function readAdminViewScope(): ScopeMode {
  try {
    const raw = String(localStorage.getItem(ADMIN_VIEW_SCOPE_KEY) || '').toLowerCase();
    return raw === 'scoped' ? 'scoped' : 'global';
  } catch {
    return 'global';
  }
}

function writeAdminViewScope(mode: ScopeMode) {
  try {
    localStorage.setItem(ADMIN_VIEW_SCOPE_KEY, mode);
  } catch {}
}

function ensureStyle() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    :root {
      --gui-admin-panel-width: 0px;
    }
    #gui-admin-overlay {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1600;
      font-family: var(--mui-font-family, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif);
    }
    #gui-admin-overlay .gui-admin-outline {
      position: absolute;
      border: 1px dashed var(--gui-admin-outline, rgba(79, 209, 197, 0.55));
      background: var(--gui-admin-fill, rgba(79, 209, 197, 0.06));
      box-sizing: border-box;
      border-radius: 4px;
    }
    #gui-admin-overlay .gui-admin-label {
      position: absolute;
      padding: 2px 6px;
      border-radius: 999px;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gui-admin-label-text, #0b1114);
      background: var(--gui-admin-label-bg, rgba(79, 209, 197, 0.9));
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      white-space: nowrap;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: auto;
      cursor: pointer;
      user-select: none;
      transition: transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease;
    }
    #gui-admin-overlay .gui-admin-label:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.25);
    }
    #gui-admin-overlay .gui-admin-label:focus-visible {
      outline: 2px solid var(--gui-admin-label-text, #0b1114);
      outline-offset: 2px;
    }
    body.gui-admin-panel-open #runtime-controls {
      margin-right: var(--gui-inset-right, 0px) !important;
      width: calc(100% - var(--gui-inset-left, 0px) - var(--gui-inset-right, 0px)) !important;
    }
  `;
  document.head.appendChild(style);
}

function normalizeForPreview(value: any): any {
  if (typeof value === 'function') return `[Function ${value.name || 'anonymous'}]`;
  if (typeof value === 'string' && value.length > 4000) {
    return `${value.slice(0, 4000)}… [truncated]`;
  }
  return value;
}

function safeStringify(value: any): string {
  const seen = new WeakSet<object>();
  try {
    return JSON.stringify(
      value,
      (_key, current) => {
        if (typeof current === 'object' && current !== null) {
          if (seen.has(current)) return '[Circular]';
          seen.add(current);
        }
        return normalizeForPreview(current);
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

export function RuntimeAdminView({
  enabled: externalEnabled,
}: {
  enabled?: boolean;
}) {
  const theme = useGuiTheme();
  const setInsets = useUpdateInsets();
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const activeRecordIdRef = React.useRef<string | null>(null);
  const treeItemRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const enabledRef = React.useRef<boolean>(
    typeof externalEnabled === 'boolean' ? Boolean(externalEnabled) : readAdminViewState()
  );
  const selectionState = React.useSyncExternalStore(
    selectionStore.subscribe,
    selectionStore.getState,
    selectionStore.getState
  );
  const scopeModeRef = React.useRef<ScopeMode>(readAdminViewScope());
  const [enabled, setEnabled] = React.useState<boolean>(enabledRef.current);
  const [activeRecord, setActiveRecord] = React.useState<ResolvedNodeRecord | null>(null);
  const [panelExpanded, setPanelExpanded] = React.useState(false);
  const [viewportWidth, setViewportWidth] = React.useState<number>(() =>
    typeof window === 'undefined' ? PANEL_WIDTH_EXPANDED_MAX : window.innerWidth
  );
  const codeVariant = theme?.palette?.mode === 'light' ? 'light' : 'dark';
  const selectedAccent = React.useMemo(
    () =>
      theme?.palette?.secondary?.main ??
      theme?.palette?.info?.main ??
      theme?.palette?.warning?.main ??
      theme?.palette?.primary?.main ??
      '#ff9f1c',
    [theme]
  );
  const selectedAccentText = React.useMemo(() => {
    if (typeof theme?.palette?.getContrastText === 'function') {
      return theme.palette.getContrastText(selectedAccent);
    }
    return theme?.palette?.secondary?.contrastText ?? '#0b1114';
  }, [selectedAccent, theme]);
  const panelWidthPx = React.useMemo(
    () => getPanelWidthPx(panelExpanded, viewportWidth),
    [panelExpanded, viewportWidth]
  );
  const panelWidth = `${panelWidthPx}px`;
  const panelOpen = enabled && Boolean(activeRecord);
  const selectedNodeId = selectionState.selectedNodeId;
  const treeRoots = React.useMemo(
    () => buildAdminTree(Object.values(selectionState.records)),
    [selectionState.records]
  );
  const treeCount = React.useMemo(
    () => Object.keys(selectionState.records).length,
    [selectionState.records]
  );

  React.useEffect(() => {
    ensureStyle();
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const body = document.body;
    root.style.setProperty('--gui-admin-panel-width', panelOpen ? panelWidth : '0px');
    if (body) body.classList.toggle('gui-admin-panel-open', panelOpen);
    if (typeof setInsets === 'function') {
      setInsets({ right: panelOpen ? panelWidthPx : 0 }, 'runtime-admin-view');
    }
    return () => {
      root.style.setProperty('--gui-admin-panel-width', '0px');
      if (body) body.classList.remove('gui-admin-panel-open');
      if (typeof setInsets === 'function') {
        setInsets({ right: 0 }, 'runtime-admin-view');
      }
    };
  }, [panelOpen, panelWidth, panelWidthPx, setInsets]);

  const resolveRecord = React.useCallback((rawId?: string | null) => {
    if (!rawId) return null;
    const direct = selectionStore.actions.getNode(rawId);
    if (direct) return direct;
    const parts = rawId.split(':');
    const path = parts.length > 1 ? parts.slice(1).join(':') : '';
    if (!path) return null;
    return selectionStore.actions.getNodeByPath(path);
  }, []);

  const applyOverlayTheme = React.useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay || !theme?.palette) return;
    const primary = theme.palette.primary?.main ?? '#4fd1c5';
    const contrast = theme.palette.primary?.contrastText ?? '#0b1114';
    overlay.style.setProperty('--gui-admin-outline', alpha(primary, 0.55));
    overlay.style.setProperty('--gui-admin-fill', alpha(primary, 0.06));
    overlay.style.setProperty('--gui-admin-label-bg', alpha(primary, 0.9));
    overlay.style.setProperty('--gui-admin-label-text', contrast);
  }, [theme]);

  const ensureOverlay = React.useCallback(() => {
    if (typeof document === 'undefined') return null;
    if (overlayRef.current) return overlayRef.current;
    const el = document.createElement('div');
    el.id = 'gui-admin-overlay';
    document.body.appendChild(el);
    overlayRef.current = el;
    applyOverlayTheme();
    return el;
  }, [applyOverlayTheme]);

  const clearOverlay = React.useCallback(() => {
    if (!overlayRef.current) return;
    overlayRef.current.remove();
    overlayRef.current = null;
  }, []);

  const updateOverlay = React.useCallback(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    if (!enabledRef.current) return;
    const overlay = ensureOverlay();
    if (!overlay) return;
    applyOverlayTheme();
    const isDark = theme?.palette?.mode === 'dark';
    const baseColor = theme?.palette?.primary?.main ?? '#4fd1c5';
    const labelTextFallback = theme?.palette?.primary?.contrastText ?? '#0b1114';
    overlay.innerHTML = '';
    const state = selectionStore.getState();
    const selectedNodeId = state?.selectedNodeId;
    let scopeRoot: HTMLElement | null = null;
    if (scopeModeRef.current === 'scoped' && state?.inspectorEnabled && selectedNodeId) {
      try {
        scopeRoot = document.querySelector(
          `[data-gui-node-id="${CSS.escape(selectedNodeId)}"]`
        ) as HTMLElement | null;
      } catch {
        scopeRoot = document.querySelector(
          `[data-gui-node-id="${selectedNodeId}"]`
        ) as HTMLElement | null;
      }
    }
    const overlayRect = overlay.getBoundingClientRect();
    const offsetX = overlayRect.left;
    const offsetY = overlayRect.top;
    const nodes = document.querySelectorAll('[data-gui-node-id]');
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    nodes.forEach((node) => {
      const el = node as HTMLElement;
      if (!el || typeof el.getBoundingClientRect !== 'function') return;
      if (typeof el.closest === 'function' && el.closest('#gui-admin-overlay')) return;
      if (scopeRoot && !scopeRoot.contains(el)) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 4 || rect.height < 4) return;
      if (rect.bottom < 0 || rect.top > viewportH) return;
      if (rect.right < 0 || rect.left > viewportW) return;
      let depth = 0;
      let parent = el.parentElement;
      while (parent) {
        if (parent.hasAttribute('data-gui-node-id')) depth += 1;
        parent = parent.parentElement;
      }
      const baseStep = isDark ? 0.12 : 0.1;
      const falloff = 0.82;
      const delta = Math.max(0.02, baseStep * Math.pow(falloff, depth));
      const depthColor = isDark ? lighten(baseColor, delta) : darken(baseColor, delta);
      const outlineAlpha = 0.5 * Math.pow(0.9, depth);
      const fillAlpha = 0.05 * Math.pow(0.9, depth);
      const labelAlpha = 0.85 * Math.pow(0.92, depth);
      const labelText =
        typeof theme?.palette?.getContrastText === 'function'
          ? theme.palette.getContrastText(depthColor)
          : labelTextFallback;

      const outline = document.createElement('div');
      outline.className = 'gui-admin-outline';
      const nodeId = el.getAttribute('data-gui-node-id') || '';
      const nodeRecord = resolveRecord(nodeId);
      const isSelected = Boolean(selectedNodeId) && nodeId === selectedNodeId;
      outline.style.left = `${Math.max(0, rect.left) - offsetX}px`;
      outline.style.top = `${Math.max(0, rect.top) - offsetY}px`;
      outline.style.width = `${rect.width}px`;
      outline.style.height = `${rect.height}px`;
      outline.style.borderWidth = isSelected ? '2px' : '1px';
      outline.style.borderStyle = isSelected ? 'solid' : 'dashed';
      outline.style.borderColor = isSelected
        ? alpha(selectedAccent, 0.98)
        : alpha(depthColor, outlineAlpha);
      outline.style.background = isSelected
        ? alpha(selectedAccent, 0.18)
        : alpha(depthColor, fillAlpha);

      const label = document.createElement('div');
      label.className = 'gui-admin-label';
      label.textContent =
        el.getAttribute('data-gui-component') ||
        nodeRecord?.type ||
        nodeId ||
        el.tagName.toLowerCase();
      const labelTop = Math.max(4, rect.top - 14) - offsetY;
      const labelLeft = Math.max(4, rect.left + 6) - offsetX;
      label.style.left = `${labelLeft}px`;
      label.style.top = `${labelTop}px`;
      label.style.background = isSelected
        ? alpha(selectedAccent, 0.96)
        : alpha(depthColor, labelAlpha);
      label.style.color = isSelected ? selectedAccentText : labelText;
      label.style.opacity = isSelected ? '1' : '0.96';
      label.style.fontWeight = isSelected ? '800' : '700';
      label.style.boxShadow = isSelected
        ? `0 0 0 2px ${alpha(selectedAccent, 0.35)}, 0 8px 18px ${alpha(selectedAccent, 0.32)}`
        : '0 2px 6px rgba(0,0,0,0.2)';
      label.setAttribute('role', 'button');
      label.setAttribute('tabindex', '0');
      label.setAttribute('aria-haspopup', 'dialog');
      if (nodeId) label.setAttribute('data-gui-node-id', nodeId);

      const openRecord = () => {
        const record = resolveRecord(nodeId);
        if (!record) return;
        selectionStore.actions.selectNode(record.id);
        setActiveRecord(record);
      };
      label.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openRecord();
      });
      label.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        event.stopPropagation();
        openRecord();
      });

      overlay.appendChild(outline);
      overlay.appendChild(label);
    });
  }, [
    applyOverlayTheme,
    ensureOverlay,
    resolveRecord,
    selectedAccent,
    selectedAccentText,
    selectedNodeId,
    theme,
  ]);

  const scheduleOverlay = React.useCallback(() => {
    if (!enabledRef.current || typeof window === 'undefined') return;
    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateOverlay();
    });
  }, [updateOverlay]);

  const setAdminViewEnabled = React.useCallback(
    (next: boolean, options: { persist?: boolean; dispatch?: boolean } = {}) => {
      const value = Boolean(next);
      enabledRef.current = value;
      setEnabled(value);
      if (options.persist !== false) writeAdminViewState(value);
      if (options.dispatch !== false && typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent(ADMIN_VIEW_CHANGED_EVENT, { detail: { enabled: value } })
        );
      }
      if (value) {
        scheduleOverlay();
      } else {
        setActiveRecord(null);
        clearOverlay();
      }
    },
    [clearOverlay, scheduleOverlay]
  );

  const toggleAdminView = React.useCallback(() => {
    setAdminViewEnabled(!enabledRef.current);
  }, [setAdminViewEnabled]);

  React.useEffect(() => {
    enabledRef.current = enabled;
    if (enabled) {
      scheduleOverlay();
    } else {
      clearOverlay();
    }
  }, [enabled, scheduleOverlay, clearOverlay]);

  React.useEffect(() => {
    if (!enabled) return;
    scheduleOverlay();
  }, [enabled, scheduleOverlay, selectedNodeId]);

  React.useEffect(() => {
    activeRecordIdRef.current = activeRecord?.id ?? null;
  }, [activeRecord]);

  React.useEffect(() => {
    if (!enabled || !selectedNodeId) return;
    const nextRecord = resolveRecord(selectedNodeId);
    if (!nextRecord) return;
    if (activeRecordIdRef.current === nextRecord.id) return;
    setActiveRecord(nextRecord);
  }, [enabled, resolveRecord, selectedNodeId]);

  React.useEffect(() => {
    if (typeof externalEnabled !== 'boolean') return;
    if (enabledRef.current === Boolean(externalEnabled)) return;
    setAdminViewEnabled(Boolean(externalEnabled), { persist: true, dispatch: true });
  }, [externalEnabled, setAdminViewEnabled]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const onExternalSet = (ev: Event) => {
      const custom = ev as CustomEvent<{ enabled?: boolean }>;
      const next = custom?.detail?.enabled;
      if (typeof next !== 'boolean') return;
      setAdminViewEnabled(next, { persist: true, dispatch: true });
    };
    const onStorage = (ev: StorageEvent) => {
      if (ev.key !== ADMIN_VIEW_STORAGE_KEY) return;
      const next = readAdminViewState();
      setAdminViewEnabled(next, { persist: false, dispatch: true });
    };
    window.addEventListener(ADMIN_VIEW_SET_EVENT, onExternalSet as EventListener);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(ADMIN_VIEW_SET_EVENT, onExternalSet as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, [setAdminViewEnabled]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const setScopeMode = (nextMode: ScopeMode, options: { persist?: boolean; dispatch?: boolean } = {}) => {
      const mode = nextMode === 'scoped' ? 'scoped' : 'global';
      scopeModeRef.current = mode;
      if (options.persist !== false) writeAdminViewScope(mode);
      if (options.dispatch !== false) {
        window.dispatchEvent(
          new CustomEvent(ADMIN_VIEW_SCOPE_CHANGED_EVENT, { detail: { mode } })
        );
      }
      scheduleOverlay();
    };
    const onScopeSet = (ev: Event) => {
      const custom = ev as CustomEvent<{ mode?: ScopeMode; scoped?: boolean }>;
      if (typeof custom?.detail?.mode === 'string') {
        setScopeMode(custom.detail.mode as ScopeMode);
        return;
      }
      if (typeof custom?.detail?.scoped === 'boolean') {
        setScopeMode(custom.detail.scoped ? 'scoped' : 'global');
      }
    };
    const onStorage = (ev: StorageEvent) => {
      if (ev.key !== ADMIN_VIEW_SCOPE_KEY) return;
      const next = readAdminViewScope();
      setScopeMode(next, { persist: false, dispatch: true });
    };
    window.addEventListener(ADMIN_VIEW_SCOPE_SET_EVENT, onScopeSet as EventListener);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(ADMIN_VIEW_SCOPE_SET_EVENT, onScopeSet as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, [scheduleOverlay]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!enabled) return;
    const schedule = () => scheduleOverlay();
    window.addEventListener('resize', schedule);
    window.addEventListener('scroll', schedule, true);
    const onScopeChange = () => scheduleOverlay();
    window.addEventListener(ADMIN_VIEW_SCOPE_CHANGED_EVENT, onScopeChange as EventListener);

    const observers: Array<{ disconnect: () => void }> = [];
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => scheduleOverlay());
      ro.observe(document.documentElement);
      observers.push(ro);
    }
    if (typeof MutationObserver !== 'undefined') {
      const mo = new MutationObserver(() => scheduleOverlay());
      mo.observe(document.body, { childList: true, subtree: true, attributes: true });
      observers.push(mo);
    }

    const fonts = (document as any).fonts;
    if (fonts && typeof fonts.ready?.then === 'function') {
      fonts.ready.then(() => scheduleOverlay());
    }

    return () => {
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scroll', schedule, true);
      window.removeEventListener(ADMIN_VIEW_SCOPE_CHANGED_EVENT, onScopeChange as EventListener);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [enabled, scheduleOverlay]);

  React.useEffect(() => {
    const g = globalThis as any;
    g.__guiToggleAdminView = toggleAdminView;
    g.__guiSetAdminViewEnabled = (value: boolean) => setAdminViewEnabled(Boolean(value));
    return () => {
      if (g.__guiToggleAdminView === toggleAdminView) {
        delete g.__guiToggleAdminView;
      }
      if (g.__guiSetAdminViewEnabled) {
        delete g.__guiSetAdminViewEnabled;
      }
    };
  }, [toggleAdminView, setAdminViewEnabled]);

  const specPropsCode = React.useMemo(
    () => safeStringify(activeRecord?.spec?.props ?? {}),
    [activeRecord]
  );
  const resolvedPropsCode = React.useMemo(
    () => safeStringify(activeRecord?.resolvedProps ?? {}),
    [activeRecord]
  );
  const showResolvedProps =
    activeRecord != null && resolvedPropsCode !== specPropsCode;
  const selectRecord = React.useCallback((record: ResolvedNodeRecord) => {
    selectionStore.actions.selectNode(record.id);
    setActiveRecord(record);
  }, []);
  const registerTreeItem = React.useCallback(
    (recordId: string) => (element: HTMLButtonElement | null) => {
      if (element) {
        treeItemRefs.current[recordId] = element;
        return;
      }
      delete treeItemRefs.current[recordId];
    },
    []
  );
  React.useEffect(() => {
    if (!panelOpen || !selectedNodeId || typeof window === 'undefined') return;
    let rafA: number | null = null;
    let rafB: number | null = null;

    rafA = window.requestAnimationFrame(() => {
      rafB = window.requestAnimationFrame(() => {
        const target = treeItemRefs.current[selectedNodeId];
        if (!target) return;
        target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        if (document.activeElement !== target) {
          target.focus({ preventScroll: true });
        }
      });
    });

    return () => {
      if (rafA != null) window.cancelAnimationFrame(rafA);
      if (rafB != null) window.cancelAnimationFrame(rafB);
    };
  }, [panelOpen, selectedNodeId]);
  const renderTreeNodes = React.useCallback(
    (nodes: AdminTreeNode[], depth = 0): React.ReactNode =>
      nodes.map((node) => {
        const isSelected = node.record.id === selectedNodeId;
        return (
          <React.Fragment key={node.record.id}>
            <Box
              ref={registerTreeItem(node.record.id)}
              component="button"
              type="button"
              onClick={() => selectRecord(node.record)}
              tabIndex={isSelected ? 0 : -1}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                px: 0.9,
                py: 0.5,
                pl: 0.9 + depth * 1.35,
                border: '1px solid',
                borderColor: isSelected ? selectedAccent : 'transparent',
                borderRadius: 1,
                backgroundColor: isSelected
                  ? alpha(selectedAccent, 0.14)
                  : 'transparent',
                color: isSelected ? selectedAccent : 'text.primary',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background-color 160ms ease, border-color 160ms ease',
                '&:hover': {
                  backgroundColor: isSelected
                    ? alpha(selectedAccent, 0.2)
                    : (muiTheme) => alpha(muiTheme.palette.text.primary, 0.06),
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isSelected ? 700 : 600,
                  lineHeight: 1.1,
                  color: isSelected ? selectedAccent : 'text.primary',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {getTreeRecordLabel(node.record)}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: isSelected ? alpha(selectedAccent, 0.9) : 'text.secondary',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  lineHeight: 1.1,
                  minWidth: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {node.record.path}
              </Typography>
            </Box>
            {node.children.length ? renderTreeNodes(node.children, depth + 1) : null}
          </React.Fragment>
        );
      }),
    [registerTreeItem, selectRecord, selectedAccent, selectedNodeId]
  );

  return (
    <>
      <Drawer
        anchor="right"
        open={Boolean(activeRecord)}
        onClose={() => setActiveRecord(null)}
        variant="persistent"
        ModalProps={{ keepMounted: true }}
        sx={{ zIndex: 1700 }}
        PaperProps={{
          sx: {
            width: panelWidth,
            maxWidth: '100vw',
            p: 2.5,
            display: 'grid',
            gap: 2,
            boxSizing: 'border-box',
            borderLeft: '1px solid',
            borderColor: 'divider',
            backgroundImage: 'none',
            transition: 'width 220ms ease',
          },
        }}
      >
        {activeRecord ? (
          <Box sx={{ display: 'grid', gap: 2, minHeight: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1.5 }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                  Admin View
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                  {activeRecord.type || 'node'} props
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary', wordBreak: 'break-word' }}>
                  {activeRecord.path}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setPanelExpanded((value) => !value)}
              >
                {panelExpanded ? 'Compact' : 'Expand'}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setActiveRecord(null)}
              >
                Close
              </Button>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gap: 0.5,
                p: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                Runtime Node
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                {activeRecord.id}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                path: {activeRecord.path}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gap: 0.6,
                p: 0.75,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1.5,
                bgcolor: 'background.default',
                minHeight: 84,
                maxHeight: panelExpanded ? 148 : 108,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                  Component Tree
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {treeCount} nodes
                </Typography>
              </Box>
              <Box
                sx={{
                  minHeight: 0,
                  overflowY: 'auto',
                  display: 'grid',
                  gap: 0.12,
                  pr: 0.1,
                }}
              >
                {treeRoots.length ? (
                  renderTreeNodes(treeRoots)
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    No runtime nodes available yet.
                  </Typography>
                )}
              </Box>
            </Box>

            <CodeBlock
              title="spec.props"
              language="json"
              variant={codeVariant}
              showLineNumbers
              wrapLongLines
              code={specPropsCode}
              maxHeight={panelExpanded ? '42vh' : '34vh'}
            />

            {showResolvedProps ? (
              <CodeBlock
                title="resolvedProps"
                language="json"
                variant={codeVariant}
                showLineNumbers
                wrapLongLines
                code={resolvedPropsCode}
                maxHeight={panelExpanded ? '28vh' : '22vh'}
              />
            ) : null}
          </Box>
        ) : null}
      </Drawer>
    </>
  );
}
