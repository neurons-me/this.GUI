// src/themes/index.js
import globalTokens from './tokens/global.tokens.json';
import { makeMuiTheme } from './fromTokens';

// Built-in themes (fallback)
import neuronsLight from './tokens/neurons.light.tokens.json';
import neuronsDark from './tokens/neurons.dark.tokens.json';

const BUILT_IN_THEMES = {
  'neurons-light': {
    tokens: neuronsLight,
    mode: 'light',
  },
  'neurons-dark': {
    tokens: neuronsDark,
    mode: 'dark',
  },
};

// Devuelve un tema MUI a partir de tokens arbitrarios
export const createThemeFromTokens = (tokens, mode = 'light') => {
  return makeMuiTheme(globalTokens, tokens, mode);
};

// Devuelve un tema built-in o usa tokens dinámicos si se pasan
export const getTheme = ({ key, tokens, mode } = {}) => {
  if (tokens) return createThemeFromTokens(tokens, mode);
  const builtIn = BUILT_IN_THEMES[key] || BUILT_IN_THEMES['neurons-dark'];
  return createThemeFromTokens(builtIn.tokens, builtIn.mode);
};

// Lista de temas locales disponibles (solo para selector)
export const AVAILABLE_THEMES = Object.keys(BUILT_IN_THEMES).map((key) => {
  const t = BUILT_IN_THEMES[key].tokens;
  return t.meta || {
    id: key,
    name: key,
    icon: { type: 'mui', value: 'Palette' },
    preview: [],
  };
});