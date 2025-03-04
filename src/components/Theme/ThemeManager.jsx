import React, { useState } from 'react';
import { MenuItem, Select, Typography } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../../themes';

// Lista de temas disponibles
const themes = {
  light: { name: "Light", theme: lightTheme },
  dark: { name: "Dark", theme: darkTheme }
};

function ThemeManager({ children }) {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [currentTheme, setCurrentTheme] = useState(storedTheme);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]?.theme || lightTheme}>
      <CssBaseline />
      <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body1">Select Theme:</Typography>
        <Select value={currentTheme} onChange={handleThemeChange}>
          {Object.entries(themes).map(([key, { name }]) => (
            <MenuItem key={key} value={key}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Renderiza la app envuelta en el tema */}
      {children}
    </ThemeProvider>
  );
}

export default ThemeManager;