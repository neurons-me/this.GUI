// src/themes/fromTokens.ts
import { createTheme, type Theme } from '@mui/material/styles';
// Manifest support ---------------------------------------------------------
export type ThemeAuthor = { name?: string; url?: string };
export type ThemeRepository = string | { url: string; type?: string };
export type ThemeModeKey = 'light' | 'dark' | string;
export type ThemeManifest = {
  id?: string;
  name?: string;
  version?: string;
  description?: string;
  license?: string;
  homepage?: string;
  repository?: ThemeRepository;
  keywords?: string[];
  author?: ThemeAuthor | string;
  createdAt?: string;
  updatedAt?: string;
  /** Optional global (shared) tokens applied to every mode */
  global?: any;
  /** Which mode to prefer when none is provided */
  defaultMode?: ThemeModeKey;
  /** Modes map (at minimum, usually `light` and/or `dark`) */
  modes: Record<ThemeModeKey, { tokens?: any }>;
};
// Helpers ------------------------------------------------------------
export const pxToRem = (n: number): string => `${n / 16}rem`;
const pick = <T = any,>(obj: any, path: Array<string | number>, fallback?: T): T => {
  // Safely read nested token value supporting Tokens Studio shape { $value }
  const raw =
    path.reduce<any>((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj) ??
    undefined;
  if (raw && typeof raw === 'object' && '$value' in raw) return (raw as any).$value as T;
  return (raw ?? fallback) as T;
};

const readNumber = (v: unknown, fb: number): number => {
  if (v === undefined || v === null) return fb;
  const n = typeof v === 'string' ? parseFloat(v) : (v as number);
  return Number.isFinite(n) ? (n as number) : fb;
};

const ensureArrayLen = <T,>(arr: T[] | unknown, len: number, filler: T): T[] => {
  const a = Array.isArray(arr) ? ([...arr] as T[]) : [];
  for (let i = a.length; i < len; i++) a.push(filler);
  return a.slice(0, len);
};

// Build MUI shadows (length 25). Accepts either an array or a map {0..24}
const buildShadows = (shadowTokens: any, mode: 'light' | 'dark'): Theme['shadows'] => {
  const DEFAULT_SHADOWS: string[] =
    mode === 'dark'
      ? [
          'none',
          '0px 1px 2px rgba(0,0,0,0.6)',
          '0px 2px 4px rgba(0,0,0,0.55)',
          '0px 3px 6px rgba(0,0,0,0.5)',
          '0px 4px 8px rgba(0,0,0,0.45)',
          '0px 5px 10px rgba(0,0,0,0.4)',
          '0px 6px 12px rgba(0,0,0,0.38)',
          '0px 7px 14px rgba(0,0,0,0.36)',
          '0px 8px 16px rgba(0,0,0,0.34)',
          '0px 9px 18px rgba(0,0,0,0.32)',
          '0px 10px 20px rgba(0,0,0,0.3)',
          '0px 11px 22px rgba(0,0,0,0.28)',
          '0px 12px 24px rgba(0,0,0,0.26)',
          '0px 13px 26px rgba(0,0,0,0.24)',
          '0px 14px 28px rgba(0,0,0,0.22)',
          '0px 15px 30px rgba(0,0,0,0.2)',
          '0px 16px 32px rgba(0,0,0,0.19)',
          '0px 17px 34px rgba(0,0,0,0.18)',
          '0px 18px 36px rgba(0,0,0,0.17)',
          '0px 19px 38px rgba(0,0,0,0.16)',
          '0px 20px 40px rgba(0,0,0,0.15)',
          '0px 22px 44px rgba(0,0,0,0.14)',
          '0px 24px 48px rgba(0,0,0,0.13)',
          '0px 26px 52px rgba(0,0,0,0.12)',
          '0px 28px 56px rgba(0,0,0,0.11)',
        ]
      : [
          'none',
          '0px 1px 2px rgba(0,0,0,0.08)',
          '0px 2px 4px rgba(0,0,0,0.1)',
          '0px 3px 6px rgba(0,0,0,0.12)',
          '0px 4px 8px rgba(0,0,0,0.14)',
          '0px 5px 10px rgba(0,0,0,0.15)',
          '0px 6px 12px rgba(0,0,0,0.16)',
          '0px 7px 14px rgba(0,0,0,0.17)',
          '0px 8px 16px rgba(0,0,0,0.18)',
          '0px 9px 18px rgba(0,0,0,0.19)',
          '0px 10px 20px rgba(0,0,0,0.2)',
          '0px 11px 22px rgba(0,0,0,0.21)',
          '0px 12px 24px rgba(0,0,0,0.22)',
          '0px 13px 26px rgba(0,0,0,0.23)',
          '0px 14px 28px rgba(0,0,0,0.24)',
          '0px 15px 30px rgba(0,0,0,0.25)',
          '0px 16px 32px rgba(0,0,0,0.26)',
          '0px 17px 34px rgba(0,0,0,0.27)',
          '0px 18px 36px rgba(0,0,0,0.28)',
          '0px 19px 38px rgba(0,0,0,0.29)',
          '0px 20px 40px rgba(0,0,0,0.3)',
          '0px 22px 44px rgba(0,0,0,0.31)',
          '0px 24px 48px rgba(0,0,0,0.32)',
          '0px 26px 52px rgba(0,0,0,0.33)',
          '0px 28px 56px rgba(0,0,0,0.34)',
        ];
  // If tokens is array: normalize; if map: read values "0..24" or "s0..s24".
  if (Array.isArray(shadowTokens)) {
    return ensureArrayLen<string>(shadowTokens as string[], 25, DEFAULT_SHADOWS[0]) as unknown as Theme['shadows'];
  }
  if (shadowTokens && typeof shadowTokens === 'object') {
    const arr: string[] = [];
    for (let i = 0; i < 25; i++) {
      const v =
        pick<string | undefined>(shadowTokens, [String(i)], undefined) ??
        pick<string | undefined>(shadowTokens, [`s${i}`], undefined);
      arr.push(v ?? DEFAULT_SHADOWS[i] ?? DEFAULT_SHADOWS[0]);
    }
    return arr as unknown as Theme['shadows'];
  }
  return DEFAULT_SHADOWS as unknown as Theme['shadows'];
};

const toAuthor = (a: unknown): ThemeAuthor | undefined => {
  if (!a) return undefined;
  if (typeof a === 'string') return { name: a };
  if (typeof a === 'object') return a as ThemeAuthor;
  return undefined;
};

// Main compiler ------------------------------------------------------
export function makeMuiTheme(globalTokens: any, themeTokens: any, mode: 'light' | 'dark' = 'light'): Theme {
  const g = globalTokens || {};
  const c = themeTokens?.color || {};
  // Core primitives
  const radius = readNumber(pick(g, ['radius', 'md'], 10), 10);
  const spacing = readNumber(pick(g, ['spacing', 'base'], 8), 8);
  const fontFamily = pick<string>(g, ['font', 'family'], 'Roboto, sans-serif');
  const borderDefault =
    pick<string | undefined>(g, ['border', 'default'], undefined) ??
    (mode === 'dark' ? 'rgb(45,45,55)' : 'rgba(0,0,0,0.08)');
  // Extended tokens
  const semantic = themeTokens?.extendedColors || themeTokens?.semantic || {};
  const gradients = semantic?.gradients || {};
  const overlays = semantic?.overlays || {};
  const zIndexTokens = g.zIndex || {};
  const breakpointsTokens = g.breakpoints || {};
  const motion = g.motion || {};
  const opacity = g.opacity || {};
  const iconSizes = g.iconSizes || {};
  const lineHeights = g.lineHeights || {};
  const shadowsTokens = g.shadows;
  // Build MUI theme
  const theme = createTheme({
    // Palette accepts custom keys like `link` and `background.nav` in our design system,
    // so we cast to any to avoid fighting MUI's strict palette types.
    palette: {
      mode,
      primary: { main: pick(c, ['primary'], '#1976d2') },
      secondary: { main: pick(c, ['secondary'], '#9c27b0') },
      icon: { main: pick(c, ['icon'], '#5e5e5e') },
      background: {
        default: pick(c, ['bgDefault'], mode === 'dark' ? '#121214' : '#f8f9fa'),
        paper: pick(c, ['bgPaper'], mode === 'dark' ? '#181a1c' : '#fff'),
        nav: pick(c, ['bgNav'], mode === 'dark' ? '#16181a' : '#fdfdfd'),
      },
      text: {
        primary: pick(c, ['textPrimary'], mode === 'dark' ? '#fff' : '#111'),
        secondary: pick(
          c,
          ['textSecondary'],
          mode === 'dark' ? 'rgba(255,255,255,0.7)' : '#444'
        ),
      },
      link: {
        main: pick(c, ['link'], mode === 'dark' ? '#00aa96' : '#008c7d'),
        visited: pick(c, ['linkVisited'], mode === 'dark' ? '#008278' : '#006e64'),
      },
      error:   { main: pick(semantic, ['error'],   mode === 'dark' ? '#ef5350' : '#d32f2f') },
      warning: { main: pick(semantic, ['warning'], '#ed6c02') },
      info:    { main: pick(semantic, ['info'],    '#0288d1') },
      success: { main: pick(semantic, ['success'], '#2e7d32') },
      divider: pick(c, ['border'], borderDefault),
      action: {
        hoverOpacity:     readNumber(pick(opacity, ['hover'],     0.08), 0.08),
        selectedOpacity:  readNumber(pick(opacity, ['selected'],  0.12), 0.12),
        disabledOpacity:  readNumber(pick(opacity, ['disabled'],  0.38), 0.38),
        focusOpacity:     readNumber(pick(opacity, ['focus'],     0.12), 0.12),
        activatedOpacity: readNumber(pick(opacity, ['activated'], 0.12), 0.12),
      },
    },
    // All tokens exposed under theme.custom for easy access
    custom: {
      border: pick(c, ['border'], borderDefault),
      gradients,
      overlays,
      iconSizes,
      lineHeights,
    },
    shape: { borderRadius: Number.isFinite(radius) ? (radius as number) : 10 },
    spacing: Number.isFinite(spacing) ? (spacing as number) : 8,
    breakpoints: {
      values: {
        xs: readNumber(pick(breakpointsTokens, ['values', 'xs'], 0), 0),
        sm: readNumber(pick(breakpointsTokens, ['values', 'sm'], 600), 600),
        md: readNumber(pick(breakpointsTokens, ['values', 'md'], 900), 900),
        lg: readNumber(pick(breakpointsTokens, ['values', 'lg'], 1200), 1200),
        xl: readNumber(pick(breakpointsTokens, ['values', 'xl'], 1536), 1536),
      },
    },
    zIndex: {
      appBar: readNumber(pick(zIndexTokens, ['appBar'], 1100), 1100),
      drawer: readNumber(pick(zIndexTokens, ['drawer'], 1200), 1200),
      modal: readNumber(pick(zIndexTokens, ['modal'], 1300), 1300),
      snackbar: readNumber(pick(zIndexTokens, ['snackbar'], 1400), 1400),
      tooltip: readNumber(pick(zIndexTokens, ['tooltip'], 1500), 1500),
    },
    transitions: {
      easing: {
        easeInOut: pick(motion, ['easing', 'standard'], 'cubic-bezier(0.4, 0, 0.2, 1)'),
        easeOut: pick(motion, ['easing', 'decelerate'], 'cubic-bezier(0.0, 0, 0.2, 1)'),
        easeIn: pick(motion, ['easing', 'accelerate'], 'cubic-bezier(0.4, 0, 1, 1)'),
        sharp: pick(motion, ['easing', 'sharp'], 'cubic-bezier(0.4, 0, 0.6, 1)'),
      },
      duration: {
        shortest: readNumber(pick(motion, ['duration', 'shortest'], 150), 150),
        shorter: readNumber(pick(motion, ['duration', 'shorter'], 200), 200),
        short: readNumber(pick(motion, ['duration', 'short'], 250), 250),
        standard: readNumber(pick(motion, ['duration', 'standard'], 300), 300),
        complex: readNumber(pick(motion, ['duration', 'complex'], 375), 375),
        enteringScreen: readNumber(pick(motion, ['duration', 'entering'], 225), 225),
        leavingScreen: readNumber(pick(motion, ['duration', 'leaving'], 195), 195),
      },
    },
    typography: {
      fontFamily,
      // existing variants
      h1: { fontSize: pxToRem(40), fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em' },
      h2: { fontSize: pxToRem(32), fontWeight: 600, lineHeight: 1.25 },
      h3: { fontSize: pxToRem(26), fontWeight: 600, lineHeight: 1.3 },
      h4: { fontSize: pxToRem(21), fontWeight: 600, lineHeight: 1.35 },
      h5: { fontSize: pxToRem(18), fontWeight: 600, lineHeight: 1.35 },
      subtitle1: { fontSize: pxToRem(16), fontWeight: 600, lineHeight: 1.4 },
      body1: { fontSize: pxToRem(16), lineHeight: 1.6 },
      body2: { fontSize: pxToRem(14), lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 700, letterSpacing: '0.02em' },
    },
    shadows: buildShadows(shadowsTokens, mode),
    layout: {
      insets: {
        left:  readNumber(pick(g, ['layout', 'insets', 'left'],  0), 0),
        right: readNumber(pick(g, ['layout', 'insets', 'right'], 0), 0),
        nav:   readNumber(pick(g, ['layout', 'insets', 'nav'],   0), 0),
      },
    },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: ({ theme }) => ({ borderRadius: theme.shape.borderRadius }),
          sizeLarge: { padding: '12px 20px' },
          sizeMedium: { padding: '10px 18px' },
          sizeSmall: { padding: '8px 14px' },
        },
      },
      MuiPaper: { styleOverrides: { rounded: { borderRadius: 14 } } },
      MuiTextField: { defaultProps: { size: 'small' } },
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          ':root': {
            '--gui-primary': theme.palette.primary.main,
            '--gui-secondary': theme.palette.secondary.main,
            '--gui-bg-default': theme.palette.background.default,
            '--gui-bg-paper': theme.palette.background.paper,
            '--gui-bg-nav': theme.palette.background.nav || theme.palette.background.paper,
            '--gui-text-primary': theme.palette.text.primary,
            '--gui-text-secondary': theme.palette.text.secondary,
            '--gui-link': theme.palette.link.main,
            '--gui-link-visited': theme.palette.link.visited || theme.palette.link.main,
            '--gui-border': theme.custom?.border || theme.palette.divider,
            // Motion / opacity / icon sizes CSS vars for non-MUI DOM
            '--gui-ease-standard': theme.transitions.easing.easeInOut,
            '--gui-duration-standard': `${theme.transitions.duration.standard}ms`,
            '--gui-opacity-hover': theme.palette.action.hoverOpacity,
            '--gui-opacity-disabled': theme.palette.action.disabledOpacity,
            '--gui-icon-size-sm': (iconSizes as any).sm ?? '16px',
            '--gui-icon-size-md': (iconSizes as any).md ?? '20px',
            '--gui-icon-size-lg': (iconSizes as any).lg ?? '24px',
            '--gui-radius': `${theme.shape.borderRadius}px`,
            '--gui-font-family': theme.typography.fontFamily,
            '--gui-spacing': typeof theme.spacing === 'function' ? theme.spacing(1) : `${(theme as any).spacing}px`,
            '--gui-inset-left': theme.layout.insets.left + 'px',
            '--gui-inset-right': theme.layout.insets.right + 'px',
          },
          body: {
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
          a: {
            color: theme.palette.link.main,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
            '&:visited': { color: theme.palette.link.visited || theme.palette.link.main },
          },
        }),
      },
    },
  });
  return theme;
}
// ========================= Manifest-based API =============================
/** Returns the list of modes declared in a manifest (e.g., ['light','dark']). */
export function getAvailableModes(manifest: ThemeManifest): ThemeModeKey[] {
  return Object.keys(manifest?.modes || {});
}

/** Picks a mode honoring explicit arg, manifest.defaultMode, or sensible fallback. */
function pickMode(manifest: ThemeManifest, prefer?: ThemeModeKey): ThemeModeKey {
  const modes = getAvailableModes(manifest);
  if (prefer && modes.includes(prefer)) return prefer;
  if (manifest.defaultMode && modes.includes(manifest.defaultMode)) return manifest.defaultMode;
  // Prefer 'light' or 'dark' when present; otherwise first key
  if (modes.includes('light')) return 'light';
  if (modes.includes('dark')) return 'dark';
  return modes[0] as ThemeModeKey;
}

/**
 * Create a MUI theme from a ThemeManifest.
 * - `manifest.global` is merged conceptually into `globalTokens`.
 * - Mode tokens are taken from `manifest.modes[mode].tokens`.
 * - `mode` is coerced to 'light'/'dark' for MUI's palette.mode; non-binary keys are supported
 *   but will map to 'light' unless explicitly equal to 'dark'.
 */
export function makeMuiThemeFromManifest(
  manifest: ThemeManifest,
  options?: { mode?: ThemeModeKey }
): Theme {
  if (!manifest || typeof manifest !== 'object') {
    throw new Error('makeMuiThemeFromManifest: invalid manifest');
  }
  const chosen = pickMode(manifest, options?.mode);
  const entry = manifest.modes?.[chosen] || {};
  const tokens = (entry as any).tokens || {};
  const globalTokens = manifest.global || {};

  // Coerce to MUI palette mode ('light' | 'dark')
  const muiMode: 'light' | 'dark' = (String(chosen).toLowerCase() === 'dark' ? 'dark' : 'light');

  return makeMuiTheme(globalTokens, tokens, muiMode);
}