/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { alpha, darken, lighten } from '@mui/material/styles';
import { selectionStore } from './selectionStore';
import { useGuiTheme } from '@/gui/hooks/useGuiTheme';

const ADMIN_VIEW_STORAGE_KEY = 'gui.runtime.admin.view.v1';
const ADMIN_VIEW_SET_EVENT = 'this.gui:adminView:set';
const ADMIN_VIEW_CHANGED_EVENT = 'this.gui:adminView:changed';
const ADMIN_VIEW_SCOPE_KEY = 'gui.runtime.admin.view.scope.v1';
const ADMIN_VIEW_SCOPE_SET_EVENT = 'this.gui:adminView:scope:set';
const ADMIN_VIEW_SCOPE_CHANGED_EVENT = 'this.gui:adminView:scope:changed';
const STYLE_ID = 'gui-admin-overlay-style';
type ScopeMode = 'global' | 'scoped';

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
    }
  `;
  document.head.appendChild(style);
}

export function RuntimeAdminView() {
  const theme = useGuiTheme();
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const autoRafRef = React.useRef<number | null>(null);
  const lastAutoFrame = React.useRef<number>(0);
  const enabledRef = React.useRef<boolean>(readAdminViewState());
  const scopeModeRef = React.useRef<ScopeMode>(readAdminViewScope());
  const [enabled, setEnabled] = React.useState<boolean>(enabledRef.current);

  React.useEffect(() => {
    ensureStyle();
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
      outline.style.left = `${Math.max(0, rect.left) - offsetX}px`;
      outline.style.top = `${Math.max(0, rect.top) - offsetY}px`;
      outline.style.width = `${rect.width}px`;
      outline.style.height = `${rect.height}px`;
      outline.style.borderColor = alpha(depthColor, outlineAlpha);
      outline.style.background = alpha(depthColor, fillAlpha);

      const label = document.createElement('div');
      label.className = 'gui-admin-label';
      label.textContent =
        el.getAttribute('data-gui-component') ||
        el.getAttribute('data-gui-node-id') ||
        el.tagName.toLowerCase();
      const labelTop = Math.max(4, rect.top - 14) - offsetY;
      const labelLeft = Math.max(4, rect.left + 6) - offsetX;
      label.style.left = `${labelLeft}px`;
      label.style.top = `${labelTop}px`;
      label.style.background = alpha(depthColor, labelAlpha);
      label.style.color = labelText;

      overlay.appendChild(outline);
      overlay.appendChild(label);
    });
  }, [applyOverlayTheme, ensureOverlay, theme]);

  const scheduleOverlay = React.useCallback(() => {
    if (!enabledRef.current || typeof window === 'undefined') return;
    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateOverlay();
    });
  }, [updateOverlay]);

  const startAutoUpdate = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    if (autoRafRef.current != null) return;
    const step = (time: number) => {
      if (!enabledRef.current) {
        autoRafRef.current = null;
        return;
      }
      const last = lastAutoFrame.current;
      if (time - last > 32) {
        updateOverlay();
        lastAutoFrame.current = time;
      }
      autoRafRef.current = window.requestAnimationFrame(step);
    };
    autoRafRef.current = window.requestAnimationFrame(step);
  }, [updateOverlay]);

  const stopAutoUpdate = React.useCallback(() => {
    if (autoRafRef.current != null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(autoRafRef.current);
    }
    autoRafRef.current = null;
  }, []);

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
        startAutoUpdate();
      } else {
        clearOverlay();
        stopAutoUpdate();
      }
    },
    [clearOverlay, scheduleOverlay, startAutoUpdate, stopAutoUpdate]
  );

  const toggleAdminView = React.useCallback(() => {
    setAdminViewEnabled(!enabledRef.current);
  }, [setAdminViewEnabled]);

  React.useEffect(() => {
    enabledRef.current = enabled;
    if (enabled) {
      scheduleOverlay();
      startAutoUpdate();
    } else {
      clearOverlay();
      stopAutoUpdate();
    }
  }, [enabled, scheduleOverlay, clearOverlay, startAutoUpdate, stopAutoUpdate]);

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

  return null;
}
