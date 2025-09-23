// src/themes/index.ts
// Global tokens shared by all themes (radius, spacing, zIndex, etc.)
import globalTokens from './tokens/global.tokens.json';
import { makeMuiTheme } from './fromTokens';
import type { Theme } from '@mui/material/styles';
import type { ThemeManifest } from './theme.d.ts'; // Replace with actual path and type
// --- Built-in theme: neurons (manifest-driven) -------------------------------
import neuronsManifest from './tokens/neurons/manifest.json';
import neuronsLight from './tokens/neurons/light.tokens.json';
import neuronsDark from './tokens/neurons/dark.tokens.json';
/**
 * Registry of built-in themes shipped with the library.
 * Each entry couples a human-readable manifest (metadata) with the concrete
 * token payloads for its available modes.
 *
 * NOTE: We import token JSONs statically so bundlers (Vite) can include them.
 * The manifest gives us metadata (name, description, author, preview) and
 * declares the available modes. If you add another built-in theme, mirror this
 * structure.
 */
const BUILT_IN = {
  neurons: {
    manifest: neuronsManifest,
    tokensByMode: {
      light: neuronsLight,
      dark: neuronsDark,
    },
  },
};
// -----------------------------------------------------------------------------
// Factories
// -----------------------------------------------------------------------------
/** Create a MUI theme straight from token JSON + a mode. */
export const createThemeFromTokens = (tokens: any, mode: 'light' | 'dark' = 'light'): Theme => {
  return makeMuiTheme(globalTokens, tokens, mode);
};
/**
 * Create a MUI theme from a manifest entry and an optional preloaded map
 * { light, dark, ... } of token JSON objects. For built-ins we pass them
 * statically; for custom themes you can resolve them however you prefer.
 */
export const createThemeFromManifest = (
  manifest: ThemeManifest,
  mode: 'light' | 'dark' = 'light',
  tokensByMode?: Record<string, any>
): Theme => {
  const m = manifest || {};
  const chosenMode = mode || m.defaultMode || 'light';
  // Prefer explicitly provided tokensByMode (preloaded).
  const tokens =
    tokensByMode?.[chosenMode] ??
    // Optional: if your manifest inlines tokens under modes[mode].inlineTokens
    (m?.modes?.[chosenMode] && 'inlineTokens' in m.modes[chosenMode] ? m.modes[chosenMode].inlineTokens : null) ??
    null;

  if (!tokens) {
    // Fallback to light/dark if available; last resort throw a helpful error.
    const fallback =
      tokensByMode?.light ??
      tokensByMode?.dark ??
      null;
    if (!fallback) {
      throw new Error(
        `[themes] No tokens found for mode "${chosenMode}". ` +
          `Provide a tokensByMode map or inline tokens in the manifest.`
      );
    }
    return createThemeFromTokens(fallback, chosenMode);
  }
  return createThemeFromTokens(tokens, chosenMode);
};
// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
interface GetThemeOptions {
  key?: string;
  mode?: 'light' | 'dark';
  manifest?: any; // Replace with ThemeManifest if available
  tokens?: any;
  tokensByMode?: Record<string, any>;
}

/**
 * getTheme
 * - Prefer passing a manifest and (optionally) a tokensByMode map for custom themes.
 * - For built-ins, use key: 'neurons' with a mode, or legacy keys 'neurons-light'/'neurons-dark'.
 *
 * Examples:
 *   getTheme({ key: 'neurons', mode: 'dark' })
 *   getTheme({ manifest, mode: 'light', tokensByMode: { light, dark } })
 *   getTheme({ tokens, mode: 'light' }) // direct tokens
 */
export const getTheme = ({ key, mode, manifest, tokens, tokensByMode }: GetThemeOptions = {}): Theme => {
  // 1) Direct tokens take precedence
  if (tokens) return createThemeFromTokens(tokens, mode || 'light');
  // 2) Manifest-driven (custom or built-in)
  if (manifest) return createThemeFromManifest(manifest, mode || 'light', tokensByMode);
  // 3) Built-ins by key (preferred: 'neurons' + mode)
  if (key && key in BUILT_IN) {
    const entry = BUILT_IN[key as keyof typeof BUILT_IN];
    return createThemeFromManifest(entry.manifest as ThemeManifest, mode || 'light', entry.tokensByMode);
  }
  // 4) Legacy keys support ('neurons-light' | 'neurons-dark')
if (key === 'neurons-light') {
  return createThemeFromManifest(BUILT_IN.neurons.manifest as ThemeManifest, 'light', BUILT_IN.neurons.tokensByMode);
}
if (key === 'neurons-dark') {
  return createThemeFromManifest(BUILT_IN.neurons.manifest as ThemeManifest, 'dark', BUILT_IN.neurons.tokensByMode);
}
// 5) Default fallback → neurons dark
return createThemeFromManifest(BUILT_IN.neurons.manifest as ThemeManifest, 'dark', BUILT_IN.neurons.tokensByMode);
};

interface AvailableThemeItem {
  key: string;
  id: string;
  family: string;
  name: string;
  mode: string;
  manifest: any;
}

/**
 * AVAILABLE_THEMES
 * - Minimal info for theme pickers / galleries. Pulled from each manifest.
 */
export const AVAILABLE_THEMES: AvailableThemeItem[] = Object.entries(BUILT_IN).flatMap(([familyId, entry]) => {
  const m = entry.manifest || {};
  const modes = Object.keys(m.modes || { light: {}, dark: {} });
  return modes.map((mode) => ({
    key: familyId,                        // ← Add this line
    id: `${familyId}-${mode}`,           
    family: familyId,                    
    name: `${m.name || familyId} ${mode === 'light' ? 'Light' : 'Dark'}`,
    mode,
    // opcional: pasa el manifest completo si tu selector lo usa
    manifest: m,
  }));
});