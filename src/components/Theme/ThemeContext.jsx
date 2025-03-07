import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './index';  // your centralized getTheme function

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProviderWithSwitcher({ children }) {
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('currentTheme') || 'neurons');
    const [currentMode, setCurrentMode] = useState(() => localStorage.getItem('currentMode') || 'light');

    // Memoize the theme - this will recompute if currentTheme or currentMode changes
    const muiTheme = useMemo(() => getTheme(currentTheme, currentMode), [currentTheme, currentMode]);

    // Save to localStorage when theme or mode changes
    useEffect(() => {
        localStorage.setItem('currentTheme', currentTheme);
        localStorage.setItem('currentMode', currentMode);
    }, [currentTheme, currentMode]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, currentMode, setCurrentMode }}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}