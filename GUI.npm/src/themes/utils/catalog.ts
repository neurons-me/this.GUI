//@/themes/utils/catalog.ts
import type { ThemeEntry, ThemeFamilyGroup, ThemeManifest } from '@/themes/theme.d.ts';
/**
 * Normalize a flat array of raw theme entries to `ThemeEntry[]`.
 * Handles fallback values for id, name, and mode.
 */
export function normalizeThemes(raw: any[]): ThemeEntry[] {
  return raw
    .map((e) => ({
      id: String(e?.id ?? `${e?.family ?? 'neurons'}-${e?.mode ?? 'dark'}`),
      family: String((e?.family ?? String(e?.id ?? '').replace(/-(light|dark)$/i, '')) || 'default'),
      name: e?.name ?? e?.family ?? e?.id,
      mode: (String(e?.mode ?? (String(e?.id).includes('dark') ? 'dark' : 'light')).toLowerCase() as 'light' | 'dark'),
      manifest: e?.manifest ?? {},
      tokens: e?.tokens,
      tokensByMode: e?.tokensByMode ?? {},
    }))
    .filter((e) => !!e.id && !!e.family && !!e.mode);
}

/**
 * Group themes by their family and collect available modes.
 */
export function groupThemesByFamily(flatThemes: ThemeEntry[]): ThemeFamilyGroup[] {
  const byFamily = new Map<string, ThemeFamilyGroup>();
  for (const it of flatThemes) {
    const curr: ThemeFamilyGroup =
      byFamily.get(it.family) || {
        family: it.family,
        name: it.manifest?.name || it.family,
        manifest: it.manifest,
        modes: [],
      };
    if (!curr.modes.includes(it.mode)) curr.modes.push(it.mode);
    byFamily.set(it.family, curr);
  }
  return Array.from(byFamily.values());
}


import neuronsLight from '../tokens/neurons/light.tokens.json';
import neuronsDark from '../tokens/neurons/dark.tokens.json';
import neuronsManifest from '../tokens/neurons/manifest.json';

export const BUILT_IN = {
  neurons: {
    manifest: neuronsManifest,
    tokensByMode: {
      light: neuronsLight,
      dark: neuronsDark,
    },
  },
};

/**
 * Minimal list of all available themes, normalized from raw manifest entries.
 */
export const AVAILABLE_THEMES: ThemeEntry[] = normalizeThemes(
  Object.entries(BUILT_IN).flatMap(([family, entry]) =>
    Object.entries(entry.tokensByMode).map(([mode, tokens]) => ({
      id: `${family}-${mode}`,
      family,
      mode,
      manifest: entry.manifest,
      tokensByMode: entry.tokensByMode,
      tokens,
    }))
  )
);

/**
 * Returns a manifest map by family from a flat list of themes.
 * Ensures that the return value is properly typed as Record<string, ThemeManifest>
 */
export function getManifestForFamily(
  flatThemes: ThemeEntry[]
): Record<string, ThemeManifest> {
  const result: Record<string, ThemeManifest> = {};
  for (const theme of flatThemes) {
    const { family, manifest } = theme;
    if (!result[family]) {
      result[family] = {
        ...manifest,
      };
    }
  }
  return result;
}