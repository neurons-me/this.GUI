// src/themes/index.ts
// Global tokens shared by all themes (radius, spacing, zIndex, etc.)
export type { Theme } from '@mui/material/styles';
// Theme persistence utilities
export { getInitialThemeId, usePersistentThemeId } from './utils/persistence';
// Theme context and provider
export { ThemeContext, useThemeContext } from './contexts/themeContext';
export { default as GuiProvider } from './GuiProvider';

// Theme types
export type {
  GuiTheme,
  FlatGuiTheme,
  ThemeManifest,
  Insets,
  GuiContextValue,
} from './theme.d.ts';

// Theme catalog access
export {
  GuiThemes,
  FlatGuiThemes,
  getGuiThemes,
  getFlatGuiThemes,
  getGuiTheme,
  getFlatGuiTheme,
} from './utils/catalog';