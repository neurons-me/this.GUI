const validateTheme = (theme) => {
    const safeValue = (value, fallback = '') => {
        if (value === undefined || value === '') {
            return fallback;
        }
        return value;
    };

    const paletteDefaults = {
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' },
        background: { default: '#f0f0f0', paper: '#ffffff' },
        text: { primary: '#000000', secondary: '#555555' },
        common: { white: '#ffffff', black: '#000000' },
    };

    const typographyDefaults = {
        h1: { fontSize: '2rem', fontWeight: 700 },
        h2: { fontSize: '1.5rem', fontWeight: 600 },
        body1: { fontSize: '1rem' },
        caption: { fontSize: '0.875rem' },
    };

    if (!theme.palette) theme.palette = {};
    if (!theme.typography) theme.typography = {};

    const sections = ['primary', 'secondary', 'background', 'text', 'common'];

    sections.forEach((section) => {
        if (!theme.palette[section]) theme.palette[section] = {};
        Object.keys(paletteDefaults[section]).forEach((key) => {
            theme.palette[section][key] = safeValue(theme.palette[section][key], paletteDefaults[section][key]);
        });
    });

    Object.keys(typographyDefaults).forEach((key) => {
        if (!theme.typography[key]) theme.typography[key] = {};
        Object.keys(typographyDefaults[key]).forEach((propKey) => {
            theme.typography[key][propKey] = safeValue(theme.typography[key][propKey], typographyDefaults[key][propKey]);
        });
    });

    return theme;
};

export default validateTheme;