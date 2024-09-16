// this.GUI/src/Theme.jsx
import React, { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';  // Import MUI Joy's CssVarsProvider
import lightTheme from './themes/light';  // Import light theme
import darkTheme from './themes/dark';    // Import dark theme

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);  // Persist theme preference in localStorage
  }, [theme]);

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <CssVarsProvider theme={currentTheme}> {/* Wrap with the correct theme */}
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        {children}
      </div>
    </CssVarsProvider>
  );
};

export default Theme;