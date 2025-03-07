import parameters from './parameters';
import userDictionary from './userDictionary';
import validateTheme from './validateTheme';

// Deep merge utility
const deepMerge = (base, overrides) => {
    const result = { ...base };
    for (const key in overrides) {
        if (typeof overrides[key] === 'object' && overrides[key] !== null) {
            result[key] = deepMerge(base[key] || {}, overrides[key]);
        } else {
            result[key] = overrides[key];
        }
    }
    return result;
};

// Final theme merge and validation
const mergeTheme = (activeThemeValues) => {
    const merged = deepMerge(parameters, userDictionary);
    const finalTheme = deepMerge(merged, activeThemeValues);
    return validateTheme(finalTheme);
};

export default mergeTheme;