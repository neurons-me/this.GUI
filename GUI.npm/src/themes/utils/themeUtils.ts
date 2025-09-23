import { Theme } from '@mui/material/styles';
import type { Insets } from '../../context/GuiProvider';

// Helper to get CSS variable from theme
export const getCssVar = (theme: Theme, name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`) || theme.palette?.[name as keyof typeof theme.palette];
};

// Generates a string of CSS custom properties based on theme.palette
export const generatePaletteCssVars = (theme: Theme) => {
  const cssVars: Record<string, string> = {};

  Object.entries(theme.palette).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subVal]) => {
        const cssVarName = `--palette-${key}-${subKey}`;
        cssVars[cssVarName] = String(subVal);
      });
    } else {
      const cssVarName = `--palette-${key}`;
      cssVars[cssVarName] = String(value);
    }
  });

  return cssVars;
};

// Appends generated CSS variables to the document root
export const applyThemeCssVars = (theme: Theme) => {
  const cssVars = generatePaletteCssVars(theme);
  const root = document.documentElement;

  Object.entries(cssVars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
};

export const injectInsetsIntoTheme = (
  theme: Theme,
  insets: Insets,
  updateInsetsCb: (insets: Partial<Insets>) => void
): Theme => {
  return {
    ...theme,
    thisGui: {
      insets,
      updateInsets: updateInsetsCb,
    },
  };
};