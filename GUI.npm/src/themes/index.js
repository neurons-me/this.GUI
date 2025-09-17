// src/themes/index.js

// Global tokens shared by all themes (radius, spacing, zIndex, etc.)
import globalTokens from './tokens/global.tokens.json';
import { makeMuiTheme } from './fromTokens';

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
export const createThemeFromTokens = (tokens, mode = 'light') => {
  return makeMuiTheme(globalTokens, tokens, mode);
};

/**
 * Create a MUI theme from a manifest entry and an optional preloaded map
 * { light, dark, ... } of token JSON objects. For built-ins we pass them
 * statically; for custom themes you can resolve them however you prefer.
 */
export const createThemeFromManifest = (manifest, mode = 'light', tokensByMode) => {
  const m = manifest || {};
  const chosenMode = mode || m.defaultMode || 'light';

  // Prefer explicitly provided tokensByMode (preloaded).
  const tokens =
    tokensByMode?.[chosenMode] ??
    // Optional: if your manifest inlines tokens under modes[mode].inlineTokens
    m?.modes?.[chosenMode]?.inlineTokens ??
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
export const getTheme = ({ key, mode, manifest, tokens, tokensByMode } = {}) => {
  // 1) Direct tokens take precedence
  if (tokens) return createThemeFromTokens(tokens, mode || 'light');

  // 2) Manifest-driven (custom or built-in)
  if (manifest) return createThemeFromManifest(manifest, mode || 'light', tokensByMode);

  // 3) Built-ins by key (preferred: 'neurons' + mode)
  if (key && BUILT_IN[key]) {
    const entry = BUILT_IN[key];
    return createThemeFromManifest(entry.manifest, mode || 'light', entry.tokensByMode);
  }

  // 4) Legacy keys support ('neurons-light' | 'neurons-dark')
  if (key === 'neurons-light') {
    return createThemeFromManifest(BUILT_IN.neurons.manifest, 'light', BUILT_IN.neurons.tokensByMode);
  }
  if (key === 'neurons-dark') {
    return createThemeFromManifest(BUILT_IN.neurons.manifest, 'dark', BUILT_IN.neurons.tokensByMode);
  }

  // 5) Default fallback → neurons dark
  return createThemeFromManifest(BUILT_IN.neurons.manifest, 'dark', BUILT_IN.neurons.tokensByMode);
};

/**
 * AVAILABLE_THEMES
 * - Minimal info for theme pickers / galleries. Pulled from each manifest.
 */
export const AVAILABLE_THEMES = Object.entries(BUILT_IN).flatMap(([familyId, entry]) => {
  const m = entry.manifest || {};
  const modes = Object.keys(m.modes || { light: {}, dark: {} });
  return modes.map((mode) => ({
    id: `${familyId}-${mode}`,         // ej: "neurons-light"
    family: familyId,                  // ej: "neurons"
    name: `${m.name || familyId} ${mode === 'light' ? 'Light' : 'Dark'}`,
    mode,                              // "light" | "dark"
    // opcional: pasa el manifest completo si tu selector lo usa
    manifest: m,
  }));
});