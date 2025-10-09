//@/gui/hooks/useInsets.ts
import { useTheme } from '@mui/material/styles';
/**
 * Returns the current insets from the extended theme (top, nav, left, right).
 * If not defined, returns zeros.
 */
export function useInsets() {
  const theme = useTheme();
  return theme.layout?.insets ?? { top: 0, nav: 0, left: 0, right: 0 };
}
/**
 * Returns the function to update insets from the extended theme.
 * If not available, returns a no-op function.
 */
export function useUpdateInsets() {
  const theme = useTheme();
  return theme.updateInsets ?? (() => {});
}

export default useInsets;