import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { lightTheme, darkTheme } from '../../themes';

// Lista de temas disponibles
const themes = {
  light: lightTheme,
  dark: darkTheme
};

function ThemeManager({ children }) {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [currentTheme, setCurrentTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme] || lightTheme}>
      <CssBaseline />
      {/* Floating Theme Toggle Button */}
      <Box position="fixed" bottom={16} right={16} zIndex={1000}>
    <IconButton onClick={toggleTheme} color="inherit">
        {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
</Box>

      {/* Renderiza la app envuelta en el tema */}
      {children}
    </ThemeProvider>
  );
}

export default ThemeManager;