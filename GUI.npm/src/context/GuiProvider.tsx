// src/context/GuiProvider.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
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

// -------------------------------- Types --------------------------------
export type ThemeMode = 'light' | 'dark';

export type ThemeEntry = {
  id: string;
  family: string;
  name?: string;
  mode: ThemeMode;
  manifest?: Record<string, any>;
};

export type ThemeFamilyGroup = {
  family: string;
  name?: string;
  manifest?: Record<string, any>;
  modes: ThemeMode[];
};

export type Insets = { left: number; right: number; nav: number };

export type GuiContextValue = {
  // identity of the active theme entry (e.g. 'neurons-light')
  themeKey: string;
  setThemeKey: React.Dispatch<React.SetStateAction<string>>;

  // derived
  family: string;
  mode: ThemeMode;

  // catalog
  availableFlat: ThemeEntry[];
  availableFamilies: ThemeFamilyGroup[];
  getManifestForFamily: (family: string) => Record<string, any>;

  // actions
  setMode: (mode: ThemeMode) => void;
  setFamilyAndMode: (family: string, mode: ThemeMode) => void;
  toggleMode: () => void;
};

export type GuiProviderProps = {
  initialTheme?: string;
  children?: React.ReactNode;
};

// Normalize AVAILABLE_THEMES as ThemeEntry[] (best-effort)
const THEMES_SOURCE: ThemeEntry[] = Array.isArray(AVAILABLE_THEMES)
  ? (AVAILABLE_THEMES as any[]).map((e) => ({
      id: String(e?.id ?? `${e?.family ?? 'neurons'}-${e?.mode ?? 'dark'}`),
      family:
        String((e?.family ?? String(e?.id ?? '').replace(/-(light|dark)$/i, '')) || 'default'),
      name: e?.name ?? e?.family ?? e?.id,
      mode: (String(e?.mode ?? (String(e?.id).includes('dark') ? 'dark' : 'light')).toLowerCase() as ThemeMode),
      manifest: (e?.manifest ?? {}) as Record<string, any>,
    }))
  : [];

// Context (with safe defaults for tooling/tests)
const ThemeCtx = createContext<GuiContextValue>({
  themeKey: 'neurons-dark',
  setThemeKey: () => {},
  family: 'neurons',
  mode: 'dark',
  availableFlat: [],
  availableFamilies: [],
  getManifestForFamily: () => ({}),
  setMode: () => {},
  setFamilyAndMode: () => {},
  toggleMode: () => {},
});

export function GuiProvider({ initialTheme = 'neurons-dark', children }: GuiProviderProps) {
  // Persist last chosen `themeKey`
  const [themeKey, setThemeKey] = useState<string>(() => {
    try {
      return localStorage.getItem('this.gui:theme') || initialTheme;
    } catch {
      return initialTheme;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('this.gui:theme', themeKey);
    } catch {}
  }, [themeKey]);

  // Flat catalog straight from AVAILABLE_THEMES (normalized)
  const availableFlat = useMemo<ThemeEntry[]>(() => {
    return THEMES_SOURCE.map((e) => ({
      id: e.id || `${e.family}-${e.mode}`,
      family: e.family || String(e.id || '').replace(/-(light|dark)$/i, '') || 'default',
      name: e.name || e.family || e.id,
      mode: (e.mode ?? (String(e.id).includes('dark') ? 'dark' : 'light')) as ThemeMode,
      manifest: e.manifest || {},
    })).filter((e) => !!e.id && !!e.family && !!e.mode);
  }, []);

  // Group by family to know which modes each theme provides
  const availableFamilies = useMemo<ThemeFamilyGroup[]>(() => {
    const byFamily = new Map<string, ThemeFamilyGroup>();
    for (const it of availableFlat) {
      const curr: ThemeFamilyGroup =
        byFamily.get(it.family) || {
          family: it.family,
          name: (it.manifest as any)?.name || it.family,
          manifest: it.manifest,
          modes: [] as ThemeMode[],
        };
      if (!curr.modes.includes(it.mode)) curr.modes.push(it.mode);
      byFamily.set(it.family, curr);
    }
    return Array.from(byFamily.values());
  }, [availableFlat]);

  // Derive family/mode from active key
  const active = useMemo<ThemeEntry>(() => {
    const found = availableFlat.find((e) => e.id === themeKey);
    if (found) return found;
    // fallback: try to coerce from saved string
    const isDark = /dark$/i.test(themeKey);
    const fam = String(themeKey).replace(/-(light|dark)$/i, '') || 'neurons';
    // pick a valid entry in that family
    const fallback =
      availableFlat.find((e) => e.family === fam && e.mode === (isDark ? 'dark' : 'light')) ||
      availableFlat[0];
    return (
      fallback || { id: 'neurons-dark', family: 'neurons', mode: 'dark', manifest: {} }
    ) as ThemeEntry;
  }, [themeKey, availableFlat]);

  // Build MUI theme from tokens using the single source of truth: themeKey
  const theme = useMemo<Theme>(() => getTheme({ key: active.id }) as Theme, [active.id]);

  // Insets state (unchanged)
  const [insets, setInsets] = useState<Insets>({ left: 0, right: 0, nav: 0 });
  const updateInsetsCb = React.useCallback(
    ({ left, right, nav }: Partial<Insets> = {}) => {
      setInsets((prev) => {
        const next: Insets = {
          left: left != null ? left : prev.left,
          right: right != null ? right : prev.right,
          nav: nav != null ? nav : prev.nav,
        };
        if (next.left === prev.left && next.right === prev.right && next.nav === prev.nav)
          return prev;
        return next;
      });
    },
    []
  );

  useEffect(() => {
    // Browser-only side effect: safe in CSR; skipped in SSR
    if (typeof document !== 'undefined') {
      const style = document.documentElement.style;
      style.setProperty('--gui-inset-left', `${insets.left || 0}px`);
      style.setProperty('--gui-inset-right', `${insets.right || 0}px`);
      style.setProperty('--gui-nav-height', `${insets.nav || 0}px`);
    }
  }, [insets]);

  // Inject insets helpers into the theme object
  const themed = useMemo(() => {
    // Note: we intentionally use `any` to avoid module augmentation here.
    const t: any = { ...theme };
    t.layout = { ...(theme as any).layout, insets: { left: insets.left || 0, right: insets.right || 0, nav: insets.nav || 0 } };
    t.updateInsets = updateInsetsCb;
    return t as Theme & { layout: { insets: Insets }; updateInsets: typeof updateInsetsCb };
  }, [theme, insets, updateInsetsCb]);

  // Ensure saved key is valid with the current catalog
  useEffect(() => {
    if (availableFlat.length === 0) return;
    const ok = availableFlat.some((e) => e.id === themeKey);
    if (!ok) setThemeKey(availableFlat[0].id);
  }, [availableFlat, themeKey]);

  // Helpers ------------------------------------------------------------
  const getManifestForFamily = (family: string): Record<string, any> => {
    const fam = availableFamilies.find((f) => f.family === family);
    return fam?.manifest || {};
  };

  const setMode = (mode: ThemeMode) => {
    const target = availableFlat.find((e) => e.family === active.family && e.mode === mode);
    if (target) setThemeKey(target.id);
  };

  const setFamilyAndMode = (family: string, mode: ThemeMode) => {
    const target =
      availableFlat.find((e) => e.family === family && e.mode === mode) ||
      availableFlat.find((e) => e.family === family); // any mode of that family
    if (target) setThemeKey(target.id);
  };

  const toggleMode = () => setMode(active.mode === 'dark' ? 'light' : 'dark');

  const ctxValue: GuiContextValue = useMemo(
    () => ({
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
    }),
    [active.id, active.family, active.mode, availableFlat, availableFamilies]
  );

  return (
    <ThemeProvider theme={themed}>
      <CssBaseline />
      <ThemeCtx.Provider value={ctxValue}>{children}</ThemeCtx.Provider>
    </ThemeProvider>
  );
}

export const useThemeContext = () => useContext(ThemeCtx);
export default GuiProvider;