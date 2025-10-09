//@/gui/hooks/useTheme.ts
/**
 * React hook wrapper for MUI's `useTheme`.
 * 
 * Provides access to the current MUI theme, typically used for
 * styling decisions or accessing theme tokens (e.g., breakpoints, palette).
 */
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
/**
 * Wrapper around MUI's useTheme.
 * Keeps your components decoupled from MUI for future flexibility.
 */
export function useGuiTheme(): Theme {
  return useTheme();
}

export default useGuiTheme;