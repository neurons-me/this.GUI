// src/themes/index.ts
// Global tokens shared by all themes (radius, spacing, zIndex, etc.)
export type { Theme as MuiTheme } from '@mui/material/styles';
// Theme persistence utilities
export { getInitialThemeId, usePersistentThemeId } from './utils/persistence';
// Theme context and Theme component
export { ThemeContext, useThemeContext } from '@/gui/Contexts/ThemeContext';
export { default as Theme } from './Theme';
export { default as DomIcon } from '@/gui/Atoms/Icon/DomIcon';
// Theme catalog UI (components)
export { default as ThemesCatalog } from './Catalog/Catalog';
// Back-compat / simple docs API (some pages expect `window.GUI.Catalog`)
export { default as Catalog } from './Catalog/Catalog';
export {
  GuiThemes,
  FlatGuiThemes,
  getGuiThemes,
  getFlatGuiThemes,
  getGuiTheme,
  getFlatGuiTheme
} from './utils/catalog';
