// src/themes/GuiProvider.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/themes/utils/themeContext';
import { usePersistentThemeKey } from './utils/persistence';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { AVAILABLE_THEMES } from './utils/catalog';
import { getTheme } from '.';
import { injectInsetsIntoTheme } from './utils/themeUtils';
import { normalizeThemes, groupThemesByFamily } from './utils/catalog';
import { resolveActiveTheme } from './utils/themeResolver';
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
import type {
  ThemeMode,
  ThemeEntry,
  ThemeFamilyGroup,
  Insets,
  GuiContextValue,
  ThemeManifest,
} from './theme';

export type GuiProviderProps = {
  initialTheme?: string;
  children?: React.ReactNode;
};
const rawThemes = AVAILABLE_THEMES;

export function GuiProvider({ initialTheme = 'neurons-dark', children }: GuiProviderProps) {
  // Persist last chosen `themeKey`
  const [themeKey, setThemeKey] = usePersistentThemeKey(initialTheme);
  // Flat catalog straight from AVAILABLE_THEMES (normalized)
  const availableFlat = useMemo<ThemeEntry[]>(() => normalizeThemes(rawThemes), []);
  // Group by family to know which modes each theme provides
  const availableFamilies = useMemo<ThemeFamilyGroup[]>(() => groupThemesByFamily(availableFlat), [availableFlat]);
  // Derive family/mode from active key
  const active = useMemo<ThemeEntry>(() => resolveActiveTheme(availableFlat, themeKey), [availableFlat, themeKey]);
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
  const themed = useMemo(() => injectInsetsIntoTheme(theme, insets, updateInsetsCb), [theme, insets, updateInsetsCb]);
  // Ensure saved key is valid with the current catalog
  useEffect(() => {
    if (availableFlat.length === 0) return;
    const ok = availableFlat.some((e) => e.id === themeKey);
    if (!ok) setThemeKey(availableFlat[0].id);
  }, [availableFlat, themeKey]);

  // Helpers ------------------------------------------------------------
  const getManifestForFamily = (family: string): ThemeManifest => {
    const fam = availableFamilies.find((f) => f.family === family);
    // Compose the modes object as required by ThemeManifest type
    // If fam?.manifest?.modes exists, use it; else, fallback to empty paths
    const fallbackModes = {
      light: { path: '' },
      dark: { path: '' },
    };
    return {
      id: fam?.manifest?.id ?? '',
      name: fam?.manifest?.name ?? '',
      modes: fam?.manifest?.modes ?? fallbackModes,
    };
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
      selectedFamily: active.family,
      setSelectedFamily: (fam: string) => {
        const fallbackMode = active.mode;
        const target =
          availableFlat.find(e => e.family === fam && e.mode === fallbackMode) ||
          availableFlat.find(e => e.family === fam);
        if (target) setThemeKey(target.id);
      },
      available: {
        flat: availableFlat,
        grouped: availableFamilies,
      },
    }),
    [active.id, active.family, active.mode, availableFlat, availableFamilies, setThemeKey]
  );
  return (
    <ThemeProvider theme={themed}>
      <CssBaseline />
      <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default GuiProvider;