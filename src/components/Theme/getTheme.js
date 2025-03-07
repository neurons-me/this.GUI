import { createTheme } from '@mui/material/styles';
import mergeTheme from './core/mergeTheme';
import neuronsTheme from './data/neurons.theme.json';
import cyberpunkTheme from './data/cyberpunk.theme.json';
import minimalTheme from './data/minimal.theme.json';

const themes = {
    neurons: neuronsTheme,
    cyberpunk: cyberpunkTheme,
    minimal: minimalTheme,
};

export function getTheme(currentTheme, mode) {
    const activeThemeValues = themes[currentTheme]?.[mode] || themes['neurons'][mode];

    const mergedTheme = mergeTheme(activeThemeValues);

    return createTheme({
        ...mergedTheme,
        palette: {
            ...mergedTheme.palette,
            mode, // <- This tells MUI "this is dark" or "this is light"
        },
    });
}