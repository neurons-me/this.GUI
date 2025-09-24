// src/themes/index.ts
// Global tokens shared by all themes (radius, spacing, zIndex, etc.)
export type { Theme } from '@mui/material/styles';
export { createThemeFromTokens, createThemeFromManifest, getTheme  } from './utils/themeFactories';
// src/themes/utils/index.ts
export { AVAILABLE_THEMES } from './utils/catalog';
// Full export surface for theme utilities
export { resolveActiveTheme } from './utils/themeResolver';
export { getInitialThemeKey, usePersistentThemeKey } from './utils/persistence';
export { ThemeContext, useThemeContext } from './utils/themeContext';
export { default as GuiProvider } from './GuiProvider';
export type {
  ThemeEntry,
  ThemeFamilyGroup,
  ThemeManifest,
  ThemeMode,
  ThemeIcon
} from './theme.d.ts';