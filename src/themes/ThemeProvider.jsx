import React, { useState, useEffect } from 'react';
import { SelectTheme } from '../stories/Molecules/SelectTheme/SelectTheme'; // Import the SelectTheme component

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('github'); // Default theme
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    import(`../themes/typ/${theme}.css`)
      .then(() => {
        console.log(`${theme} theme loaded`);
        setThemeLoaded(true);
      })
      .catch((error) => {
        console.error(`Error loading ${theme} theme: `, error);
      });
  }, [theme]);

  // Ensure theme is loaded before rendering the app
  if (!themeLoaded) {
    return <div>Loading theme...</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <SelectTheme onThemeChange={(newTheme) => setTheme(newTheme)} />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);