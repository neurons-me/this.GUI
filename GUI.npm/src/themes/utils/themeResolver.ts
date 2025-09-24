// src/themes/utils/themeResolver.ts
import type { ThemeEntry } from '@/themes/theme.d.ts';
/**
 * Given a flat list of themes and a themeKey, resolve the active theme.
 * Falls back to a reasonable default if not found.
 *
 * @param availableFlat - List of available ThemeEntry objects.
 * @param themeKey - The currently selected theme key (e.g. 'neurons-light').
 * @returns The resolved ThemeEntry.
 */
export function resolveActiveTheme(availableFlat: ThemeEntry[], themeKey: string): ThemeEntry {
  const found = availableFlat.find((e) => e.id === themeKey);
  if (found) return found;
  const isDark = /dark$/i.test(themeKey);
  const fam = String(themeKey).replace(/-(light|dark)$/i, '') || 'neurons';
  const fallback =
    availableFlat.find((e) => e.family === fam && e.mode === (isDark ? 'dark' : 'light')) ||
    availableFlat[0];
  return (
    fallback || {
      id: 'neurons-dark',
      family: 'neurons',
      mode: 'dark',
      manifest: {},
    }
  ) as ThemeEntry;
}