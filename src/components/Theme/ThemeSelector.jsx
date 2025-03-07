import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from './ThemeContext';

function ThemeSelector() {
    const { currentMode, setCurrentMode } = useTheme();

    const toggleMode = () => {
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        setCurrentMode(newMode);
        localStorage.setItem('currentMode', newMode);
    };

    return (
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
            <Tooltip title={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton onClick={toggleMode} color="inherit">
                    {currentMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Tooltip>
        </div>
    );
}

export default ThemeSelector;