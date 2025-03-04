import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Cookies from 'js-cookie';

const ThemeToggleContext = createContext();

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

function getDomain() {
  const parts = window.location.hostname.split('.');
  if (parts.length >= 2) {
    return `.${parts.slice(-2).join('.')}`;  // e.g., .mlearning.studio, .polls.studio
  }
  return undefined;  // fallback for localhost
}

export function CustomThemeProvider({ children }) {
  const storedTheme = Cookies.get('theme') === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      Cookies.set('theme', newTheme ? 'dark' : 'light', {
        domain: getDomain(),
        secure: true,
        sameSite: 'lax',
      });
      return newTheme;
    });
  };

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}