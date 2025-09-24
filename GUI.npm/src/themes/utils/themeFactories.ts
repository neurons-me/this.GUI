// src/themes/utils/themeFactories.ts
import type { ThemeManifest, Theme } from '@/themes';
import globalTokens from '../tokens/global.tokens.json';
import { makeMuiTheme } from '../fromTokens';
import type { Theme as MuiTheme } from '@mui/material/styles';
import { AVAILABLE_THEMES, normalizeThemes } from '@/themes/utils/catalog';

/**
 * Creates a theme object from the given ThemeManifest.
 *
 * This factory maps the correct stylesheet path and any inline variables or tokens defined
 * for the current mode. It is used by the GUI theme engine to instantiate runtime themes.
 *
 * @param manifest - The theme manifest definition.
 * @param mode - Either 'light' or 'dark'.
 * @returns A Theme object with resolved metadata and asset paths.
 */
export function createThemeFromManifest(
  manifest: ThemeManifest,
  mode: 'light' | 'dark' = 'light',
  tokensByMode?: Record<string, any>
): MuiTheme {
  const m = manifest || {};
  const chosenMode = mode || m.defaultMode || 'light';

  const tokens =
    tokensByMode?.[chosenMode] ??
    (m?.modes?.[chosenMode] && 'inlineTokens' in m.modes[chosenMode] ? m.modes[chosenMode].inlineTokens : null) ??
    null;

  if (!tokens) {
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
}

/**
 * Creates a MUI theme from token JSON and a mode.
 * Includes global tokens (radius, spacing, etc.) and mode-specific tokens.
 */
export function createThemeFromTokens(tokens: any, mode: 'light' | 'dark' = 'light'): MuiTheme {
  return makeMuiTheme(globalTokens, tokens, mode);
}

export function getTheme({
  key,
  mode,
  manifest,
  tokens,
  tokensByMode,
}: {
  key?: string;
  mode?: 'light' | 'dark';
  manifest?: ThemeManifest;
  tokens?: any;
  tokensByMode?: Record<string, any>;
} = {}): MuiTheme {
  if (tokens) return createThemeFromTokens(tokens, mode || 'light');
  if (manifest) return createThemeFromManifest(manifest, mode || 'light', tokensByMode);
  if (key) {
    const flat = normalizeThemes(AVAILABLE_THEMES);
    const entry = flat.find(t => t.id === key);
    if (entry) {
      return createThemeFromManifest(entry.manifest, entry.mode, (entry as any).tokensByMode);
    }
  }
  throw new Error('[themes] getTheme requires either tokens, a manifest, or a resolvable key.');
}