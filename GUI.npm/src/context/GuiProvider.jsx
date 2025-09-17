// src/context/GuiProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme, AVAILABLE_THEMES } from '../themes';

/**
 * New theme model (family + mode)
 * --------------------------------
 * AVAILABLE_THEMES now comes as a flat list of entries like:
 *   { id: 'neurons-light', family: 'neurons', name: 'Neurons Light', mode: 'light', manifest }
 * We normalize that into:
 *   • availableFlat: same flat array
 *   • availableFamilies: [{ family, name, manifest, modes: ['light','dark'] }]
 *
 * Provider state keeps a single `themeKey` (e.g. 'neurons-light').
 * We expose helpers to change mode or family without callers knowing the key format.
 */

const THEMES_SOURCE = Array.isArray(AVAILABLE_THEMES) ? AVAILABLE_THEMES : [];

const ThemeCtx = createContext({
  // identity of the active theme entry (e.g. 'neurons-light')
  themeKey: 'neurons-dark',
  setThemeKey: () => {},

  // derived
  family: 'neurons',
  mode: 'dark',

  // catalog
  availableFlat: /** @type {Array<any>} */ ([]),
  availableFamilies: /** @type {Array<any>} */ ([]),
  getManifestForFamily: /** @type {(family: string)=>any} */ (() => ({})),

  // actions
  setMode: /** @type {(mode: 'light'|'dark')=>void} */ (() => {}),
  setFamilyAndMode: /** @type {(family: string, mode: 'light'|'dark')=>void} */ (() => {}),
  toggleMode: /** @type {() => void} */ (() => {}),
});

export function GuiProvider({ initialTheme = 'neurons-dark', children }) {
  // Persist last chosen `themeKey`
  const [themeKey, setThemeKey] = useState(() => {
    try { return localStorage.getItem('this.gui:theme') || initialTheme; } catch { return initialTheme; }
  });

  useEffect(() => {
    try { localStorage.setItem('this.gui:theme', themeKey); } catch {}
  }, [themeKey]);

  // Flat catalog straight from AVAILABLE_THEMES
  const availableFlat = useMemo(() => {
    return THEMES_SOURCE.map((e) => ({
      id: e.id || `${e.family}-${e.mode}`,
      family: e.family || String(e.id || '').replace(/-(light|dark)$/,'') || 'default',
      name: e.name || e.family || e.id,
      mode: e.mode || (String(e.id).includes('dark') ? 'dark' : 'light'),
      manifest: e.manifest || {},
    })).filter((e) => e.id && e.family && e.mode);
  }, []);

  // Group by family to know which modes each theme provides
  const availableFamilies = useMemo(() => {
    const byFamily = new Map();
    for (const it of availableFlat) {
      const curr = byFamily.get(it.family) || { family: it.family, name: it.manifest?.name || it.family, manifest: it.manifest, modes: [] };
      if (!curr.modes.includes(it.mode)) curr.modes.push(it.mode);
      byFamily.set(it.family, curr);
    }
    return Array.from(byFamily.values());
  }, [availableFlat]);

  // Derive family/mode from active key
  const active = useMemo(() => {
    const found = availableFlat.find((e) => e.id === themeKey);
    if (found) return found;
    // fallback: try to coerce from saved string
    const isDark = /dark$/.test(themeKey);
    const fam = String(themeKey).replace(/-(light|dark)$/,'') || 'neurons';
    // pick a valid entry in that family
    const fallback = availableFlat.find((e) => e.family === fam && e.mode === (isDark ? 'dark' : 'light')) || availableFlat[0];
    return fallback || { id: 'neurons-dark', family: 'neurons', mode: 'dark', manifest: {} };
  }, [themeKey, availableFlat]);

  // Build MUI theme from tokens using the single source of truth: themeKey
  const theme = useMemo(() => getTheme({ key: active.id }), [active.id]);

  // Insets state (unchanged)
  const [insets, setInsets] = useState({ left: 0, right: 0, nav: 0 });
  const updateInsetsCb = React.useCallback(({ left, right, nav } = {}) => {
    setInsets((prev) => {
      const next = {
        left: left != null ? left : prev.left,
        right: right != null ? right : prev.right,
        nav: nav != null ? nav : prev.nav,
      };
      if (next.left === prev.left && next.right === prev.right && next.nav === prev.nav) return prev;
      return next;
    });
  }, []);

  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty('--gui-inset-left', `${insets.left || 0}px`);
    style.setProperty('--gui-inset-right', `${insets.right || 0}px`);
    style.setProperty('--gui-nav-height', `${insets.nav || 0}px`);
  }, [insets]);

  // Inject insets helpers into the theme object
  const themed = useMemo(() => {
    const t = { ...theme };
    t.layout = { ...(theme.layout || {}), insets: { left: insets.left || 0, right: insets.right || 0, nav: insets.nav || 0 } };
    t.updateInsets = updateInsetsCb;
    return t;
  }, [theme, insets, updateInsetsCb]);

  // Ensure saved key is valid with the current catalog
  useEffect(() => {
    if (availableFlat.length === 0) return;
    const ok = availableFlat.some((e) => e.id === themeKey);
    if (!ok) setThemeKey(availableFlat[0].id);
  }, [availableFlat, themeKey]);

  // Helpers ------------------------------------------------------------
  const getManifestForFamily = (family) => {
    const fam = availableFamilies.find((f) => f.family === family);
    return fam?.manifest || {};
  };

  const setMode = (mode) => {
    const target = availableFlat.find((e) => e.family === active.family && e.mode === mode);
    if (target) setThemeKey(target.id);
  };

  const setFamilyAndMode = (family, mode) => {
    const target = availableFlat.find((e) => e.family === family && e.mode === mode) ||
                   availableFlat.find((e) => e.family === family); // any mode of that family
    if (target) setThemeKey(target.id);
  };

  const toggleMode = () => setMode(active.mode === 'dark' ? 'light' : 'dark');

  const ctxValue = useMemo(() => ({
    themeKey: active.id,
    setThemeKey,
    family: active.family,
    mode: active.mode,
    availableFlat,
    availableFamilies,
    getManifestForFamily,
    setMode,
    setFamilyAndMode,
    toggleMode,
  }), [active.id, active.family, active.mode, availableFlat, availableFamilies]);

  return (
    <ThemeProvider theme={themed}>
      <CssBaseline />
      <ThemeCtx.Provider value={ctxValue}>{children}</ThemeCtx.Provider>
    </ThemeProvider>
  );
}

export const useThemeContext = () => useContext(ThemeCtx);
export default GuiProvider;