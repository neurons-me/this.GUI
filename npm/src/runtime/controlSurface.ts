import { selectionStore } from './selectionStore';

export const INSPECTOR_STORAGE_KEY = 'gui.runtime.inspector.v2';
export const ADMIN_VIEW_STORAGE_KEY = 'gui.runtime.admin.view.v2';
export const LEGACY_ADMIN_VIEW_STORAGE_KEY = 'gui.runtime.admin.view.v1';
export const INSPECTOR_SET_EVENT = 'this.gui:inspector:set';
export const INSPECTOR_CHANGED_EVENT = 'this.gui:inspector:changed';
export const ADMIN_VIEW_SET_EVENT = 'this.gui:adminView:set';
export const ADMIN_VIEW_CHANGED_EVENT = 'this.gui:adminView:changed';

const LISTENERS_KEY = '__THIS_GUI_RUNTIME_CONTROL_LISTENERS__';

function canUseWindow() {
  return typeof window !== 'undefined';
}

export function readInspectorPreference(): boolean {
  if (!canUseWindow()) return selectionStore.getState().inspectorEnabled;
  try {
    return window.localStorage.getItem(INSPECTOR_STORAGE_KEY) === 'true';
  } catch {
    return selectionStore.getState().inspectorEnabled;
  }
}

function writeInspectorPreference(enabled: boolean) {
  if (!canUseWindow()) return;
  try {
    window.localStorage.setItem(INSPECTOR_STORAGE_KEY, String(Boolean(enabled)));
  } catch {}
}

export function readAdminViewPreference(): boolean {
  if (!canUseWindow()) return false;
  try {
    return window.localStorage.getItem(ADMIN_VIEW_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeAdminViewPreference(enabled: boolean) {
  if (!canUseWindow()) return;
  try {
    const serialized = String(Boolean(enabled));
    window.localStorage.setItem(ADMIN_VIEW_STORAGE_KEY, serialized);
    window.localStorage.setItem(LEGACY_ADMIN_VIEW_STORAGE_KEY, serialized);
  } catch {}
}

function dispatchBooleanEvent(eventName: string, enabled: boolean) {
  if (!canUseWindow()) return;
  window.dispatchEvent(new CustomEvent(eventName, { detail: { enabled: Boolean(enabled) } }));
}

export function getInspectorEnabled(): boolean {
  const live = selectionStore.getState().inspectorEnabled;
  const stored = readInspectorPreference();
  return live || stored;
}

export function setInspectorEnabled(enabled: boolean): boolean {
  const value = Boolean(enabled);
  writeInspectorPreference(value);
  if (canUseWindow()) {
    dispatchBooleanEvent(INSPECTOR_SET_EVENT, value);
  } else {
    selectionStore.actions.setInspectorEnabled(value);
  }
  return value;
}

export function toggleInspector(): boolean {
  return setInspectorEnabled(!getInspectorEnabled());
}

export function getAdminViewEnabled(): boolean {
  return readAdminViewPreference();
}

export function setAdminViewEnabled(enabled: boolean): boolean {
  const value = Boolean(enabled);
  writeAdminViewPreference(value);
  if (canUseWindow()) {
    dispatchBooleanEvent(ADMIN_VIEW_SET_EVENT, value);
  }
  return value;
}

export function toggleAdminView(): boolean {
  return setAdminViewEnabled(!getAdminViewEnabled());
}

function installLegacyAliases() {
  if (!canUseWindow()) return;
  const g = globalThis as any;
  g.__guiToggleInspector = toggleInspector;
  g.__guiSetInspectorEnabled = (value: boolean) => setInspectorEnabled(Boolean(value));
  if (typeof g.__guiToggleAdminView !== 'function') {
    g.__guiToggleAdminView = toggleAdminView;
  }
  if (typeof g.__guiSetAdminViewEnabled !== 'function') {
    g.__guiSetAdminViewEnabled = (value: boolean) => setAdminViewEnabled(Boolean(value));
  }
}

export function ensureRuntimeControlSurface(): void {
  if (!canUseWindow()) return;
  const g = globalThis as any;
  if (g[LISTENERS_KEY]) {
    installLegacyAliases();
    return;
  }
  g[LISTENERS_KEY] = true;

  installLegacyAliases();

  window.addEventListener(INSPECTOR_CHANGED_EVENT, (event: Event) => {
    const detail = (event as CustomEvent<{ enabled?: boolean }>).detail;
    if (typeof detail?.enabled === 'boolean') {
      writeInspectorPreference(Boolean(detail.enabled));
    }
  });

  window.addEventListener(ADMIN_VIEW_CHANGED_EVENT, (event: Event) => {
    const detail = (event as CustomEvent<{ enabled?: boolean }>).detail;
    if (typeof detail?.enabled === 'boolean') {
      writeAdminViewPreference(Boolean(detail.enabled));
    }
  });
}
