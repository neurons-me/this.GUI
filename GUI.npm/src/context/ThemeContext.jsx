// src/themes/ThemeContext.jsx
// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme, AVAILABLE_THEMES } from '../themes';

// Public API: use `useThemeContext()` only. `useThemeToggle` was removed to avoid confusion
// now that themes are multi-variant (not just light/dark).

const THEMES_SOURCE = AVAILABLE_THEMES || [];

// Context with a clear shape for IDEs
const ThemeToggleContext = createContext({
  themeName: 'neurons-dark',
  setThemeName: () => {},
  availableThemes: [],
  toggleTheme: () => {},
  getThemeMeta: () => ({})
});

export function CustomThemeProvider({ initialTheme = 'neurons-dark', children }) {
  // persist last chosen theme
  const [themeName, setThemeName] = useState(() => {
    try {
      return localStorage.getItem('this.gui:theme') || initialTheme;
    } catch {
      return initialTheme;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('this.gui:theme', themeName); } catch {}
  }, [themeName]);

  // Build MUI theme from tokens
  const theme = useMemo(() => getTheme({ key: themeName }), [themeName]);

  const availableThemes = useMemo(() => {
    // AVAILABLE_THEMES is an array of meta objects coming from tokens
    // Expected shape per item: { id, name, mode, icon, preview }
    if (!Array.isArray(THEMES_SOURCE)) return [];
    return THEMES_SOURCE.map((m) => ({
      key: m.id || m.key || m.name, // fallback for robustness
      name: m.name || m.id,
      mode: m.mode || (String(m.id || '').includes('dark') ? 'dark' : 'light'),
      icon: m.icon || { type: 'mui', value: 'Brush' },
      preview: Array.isArray(m.preview) ? m.preview : [],
    })).filter((t) => !!t.key);
  }, []);

  useEffect(() => {
    const keys = availableThemes.map((t) => t.key);
    if (!keys.includes(themeName) && keys.length > 0) {
      setThemeName(keys[0]);
    }
  }, [availableThemes, themeName]);

  // Helper to read meta for a key
  const getThemeMeta = (key) => {
    if (!Array.isArray(THEMES_SOURCE)) return {};
    return THEMES_SOURCE.find((m) => (m.id || m.key || m.name) === key) || {};
  };

  // Toggle cycles over the available keys unless a string key is provided
  const value = useMemo(() => {
    const keys = availableThemes.map((t) => t.key);

    return {
      themeName,
      setThemeName,
      availableThemes,
      getThemeMeta,
      toggleTheme: (next) => {
        const keys = availableThemes.map((t) => t.key);
        if (keys.length === 0) return; // no themes available
        if (typeof next === 'string' && keys.includes(next)) {
          setThemeName(next);
          return;
        }
        const currentIndex = Math.max(0, keys.indexOf(themeName));
        const nextIndex = (currentIndex + 1) % keys.length;
        setThemeName(keys[nextIndex]);
      },
    };
  }, [themeName, availableThemes]);

  return (
    <ThemeToggleContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeToggleContext);
export default CustomThemeProvider;