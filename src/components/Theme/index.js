// src/components/Theme/index.js
import { createTheme } from '@mui/material/styles';
import mergeTheme from './core/mergeTheme';
import neuronsTheme from './data/neurons.theme.json';
import cyberpunkTheme from './data/cyberpunk.theme.json';

const themes = {
    neurons: neuronsTheme,
    cyberpunk: cyberpunkTheme,
};

export function getTheme(currentTheme, mode) {
    const activeThemeValues = themes[currentTheme] || neuronsTheme;

    const mergedTheme = mergeTheme(activeThemeValues);

    const muiTheme = createTheme({
        ...mergedTheme,
        palette: {
            ...mergedTheme.palette,
            mode,
        },
    });

    return muiTheme;
}