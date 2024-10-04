// src/themes/ThemeProvider.jsx
import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({
  children,
  initialTheme = 'neurons',
  initialMode = 'light',
  targetDocument = document, // Default to global document
}) => {
  const [theme, setTheme] = useState(initialTheme);
  const [mode, setMode] = useState(initialMode);

  // Preload themes with Vite's `import.meta.glob`
  // Updated to use 'query' and 'import' options instead of 'as'
  const themes = import.meta.glob('./styles/**/*.css', {
    query: '?raw',
    import: 'default',
  });

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    const themePath = `./styles/${theme}/${mode}.css`;

    if (themes[themePath]) {
      themes[themePath]().then((cssContent) => {
        // Remove any existing theme styles
        const existingStyle = targetDocument.getElementById('theme-styles');
        if (existingStyle) {
          existingStyle.parentNode.removeChild(existingStyle);
        }

        // Create a new style element
        const style = targetDocument.createElement('style');
        style.id = 'theme-styles';
        style.textContent = cssContent;

        // Append the style to the head
        targetDocument.head.appendChild(style);
      });
    } else {
      console.error(`Theme not found: ${theme} ${mode}`);
    }
  }, [theme, mode, targetDocument]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);