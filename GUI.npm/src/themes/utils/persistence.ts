import { useState, useEffect } from 'react';

/**
 * Retrieves the initial theme key from localStorage.
 * Falls back to the provided default if not found or on error.
 *
 * @param fallback - The fallback theme key to use if none is stored.
 * @returns The stored theme key or the fallback value.
 */
export function getInitialThemeKey(fallback: string): string {
  try {
    return localStorage.getItem('this.gui:theme') || fallback;
  } catch {
    return fallback;
  }
}

/**
 * React hook to persist and manage the theme key using localStorage.
 * Returns a [themeKey, setThemeKey] tuple just like useState.
 *
 * @param fallback - The fallback theme key if no previous value is stored.
 * @returns A tuple [themeKey, setThemeKey] that syncs with localStorage.
 */
export function usePersistentThemeKey(
  fallback: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [themeKey, setThemeKey] = useState<string>(() => getInitialThemeKey(fallback));

  useEffect(() => {
    try {
      localStorage.setItem('this.gui:theme', themeKey);
    } catch {
      // fail silently
    }
  }, [themeKey]);

  return [themeKey, setThemeKey];
}