import { useGuiMediaQuery, useGuiTheme } from '@/gui/Hooks';

export function useLayoutBreakpoints() {
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useGuiMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useGuiMediaQuery(theme.breakpoints.up('lg'));
  return { isMobile, isTablet, isDesktop };
}