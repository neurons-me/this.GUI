// src/themes/GuiProvider.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { generatePaletteCssVars } from './utils/themeUtils';
import { ThemeContext } from '@/themes/contexts/themeContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { themeTokens } from '@/themes/styles/theme.tokens';
import { usePersistentThemeId, usePersistentThemeMode } from './utils/persistence';
import { makeMuiTheme } from '@/themes/fromTokens';
import { GuiThemes, getGuiTheme } from './utils/catalog';
import { InsetsProvider } from '@/themes/contexts/InsetsContext';
// -------------------------------- Types --------------------------------
import type {
  Insets,
  GuiContextValue,
} from './theme';
export type GuiProviderProps = {
  initialThemeId?: string;
  initialMode?: 'light' | 'dark'; // <-- añadido
  children?: React.ReactNode;
};

export function GuiProvider({
  initialThemeId = 'neurons.me',
  initialMode = 'light', // default
  children,
}: GuiProviderProps) {
  // Persist last chosen `themeId`
  const [themeId, setThemeId] = usePersistentThemeId(initialThemeId);
  // Persist last chosen `mode`
  const [mode, setModeState] = usePersistentThemeMode(initialMode);
  // Resolve manifest for current themeId (the GuiTheme which contains both modes)
  const manifest = useMemo(() => {
    return getGuiTheme(themeId) ?? GuiThemes[0];
  }, [themeId]);
  // Expose an `active` object for convenience (manifest + current selected mode)
  const active = useMemo(() => {
    return {
      ...(manifest ?? {}),
      mode,
    } as (typeof manifest & { mode: 'light' | 'dark' });
  }, [manifest, mode]);
  // Build MUI themes for both dark and light using the manifest's mode tokens.
  // IMPORTANT: makeMuiTheme signature assumed: makeMuiTheme(baseTokens, modeTokens, mode)
  const { mode: manifestModes } = manifest || ({} as any);
  const lightMuiTheme = useMemo<Theme>(() => {
    const lightTokens = manifestModes?.light ?? {};
    return makeMuiTheme(themeTokens, lightTokens, 'light');
  }, [manifestModes]);
  const darkMuiTheme = useMemo<Theme>(() => {
    const darkTokens = manifestModes?.dark ?? {};
    return makeMuiTheme(themeTokens, darkTokens, 'dark');
  }, [manifestModes]);
  const theme = mode === 'dark' ? darkMuiTheme : lightMuiTheme;
  useEffect(() => {
    generatePaletteCssVars(theme);
  }, [theme]);
  // Ensure saved key is valid with the current catalog
  useEffect(() => {
    if (GuiThemes.length === 0) return;
    const ok = GuiThemes.some((e) => e.themeId === themeId);
    if (!ok) setThemeId(GuiThemes[0].themeId ?? '');
  }, [themeId, setThemeId]);
  // API for changing mode without touching themeId
  const setMode = (nextMode: 'light' | 'dark') => {
    setModeState(nextMode);
  };

  const toggleMode = () => setModeState((m) => (m === 'dark' ? 'light' : 'dark'));
  const ctxValue: GuiContextValue = useMemo(
    () => ({
      themeId: manifest?.themeId ?? '',
      setThemeId,
      themeName: manifest?.themeName ?? '',
      mode,
      setMode,
      toggleMode,
    }),
    [manifest?.themeId, manifest?.themeName, mode, setThemeId]
  );

  return (
    <InsetsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
      </ThemeProvider>
    </InsetsProvider>
  );
}

export default GuiProvider;