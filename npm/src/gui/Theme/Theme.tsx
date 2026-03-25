// src/themes/Theme.tsx
import React, { useEffect, useMemo } from 'react';
import { generatePaletteCssVars } from './utils/themeUtils';
import { ThemeContext } from '@/gui/Contexts/ThemeContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Theme as MuiTheme } from '@mui/material/styles';
import { themeTokens } from '@/gui/Theme/styles/theme.tokens';
import { usePersistentThemeId, usePersistentThemeMode } from './utils/persistence';
import { makeMuiTheme } from '@/gui/Theme/fromTokens';
import { GuiThemes, getGuiTheme } from './utils/catalog';
import { InsetsProvider, useInsetsContext } from '@/gui/Contexts/InsetsContext';
// -------------------------------- Types --------------------------------
import type {
  GuiContextValue,
} from '@/types/theme';
export type ThemeProps = {
  initialThemeId?: string;
  initialMode?: 'light' | 'dark'; // <-- añadido
  children?: React.ReactNode;
};

export function Theme({
  initialThemeId = 'neurons.me',
  initialMode = 'light', // default
  children,
}: ThemeProps) {
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
  const lightMuiTheme = useMemo<MuiTheme>(() => {
    const lightTokens = manifestModes?.light ?? {};
    return makeMuiTheme(themeTokens, lightTokens, 'light');
  }, [manifestModes]);
  const darkMuiTheme = useMemo<MuiTheme>(() => {
    const darkTokens = manifestModes?.dark ?? {};
    return makeMuiTheme(themeTokens, darkTokens, 'dark');
  }, [manifestModes]);
  const theme = mode === 'dark' ? darkMuiTheme : lightMuiTheme;
  useEffect(() => {
    const root = document.documentElement;
    const vars = generatePaletteCssVars(theme);
    const muiVars = generatePaletteCssVars(theme, '--mui-palette');
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    Object.entries(muiVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
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
  useEffect(() => {
    try {
      window.dispatchEvent(new CustomEvent('this.gui:themeMode:changed', { detail: { mode } }));
    } catch {}
  }, [mode]);
  useEffect(() => {
    try {
      window.dispatchEvent(new CustomEvent('this.gui:themeId:changed', { detail: { themeId } }));
    } catch {}
  }, [themeId]);
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
      <GuiThemeBridge theme={theme} ctxValue={ctxValue}>
        {children}
      </GuiThemeBridge>
    </InsetsProvider>
  );
}

const GuiThemeBridge: React.FC<{ theme: MuiTheme; ctxValue: GuiContextValue; children?: React.ReactNode }> = ({ theme, ctxValue, children }) => {
  const { insets, updateInsets } = useInsetsContext();
  const themeWithInsets = useMemo(() => {
    return {
      ...theme,
      layout: {
        ...(theme as any).layout,
        insets,
      },
      updateInsets,
    } as MuiTheme & { layout: any; updateInsets: typeof updateInsets };
  }, [insets, theme, updateInsets]);

  return (
    <ThemeProvider theme={themeWithInsets}>
      <CssBaseline />
      <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
