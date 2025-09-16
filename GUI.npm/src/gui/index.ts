// src/gui/index.ts
import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMuiMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles';
import { keyForWidth, resolveViewportProp } from '@/types/viewport';
// —— Tipos que expones como “contrato” de this.GUI
export type GuiTheme = Theme; // por ahora es el de MUI extendido (theme.d.ts)
// —— Hook central de tema (no importes MUI en los componentes)
export function useGuiTheme(): GuiTheme {
  return useMuiTheme() as GuiTheme;
}

// —— Wrapper genérico sobre useMediaQuery de MUI
export function useGuiMediaQuery(query: string | ((theme: GuiTheme) => string)): boolean {
  const theme = useGuiTheme();
  const finalQuery = typeof query === 'function' ? query(theme) : query;
  return useMuiMediaQuery(finalQuery);
}

// —— Breakpoints “portables”
export function useViewportKey(): 'xs'|'sm'|'md'|'lg'|'xl' {
  // si mañana cambias motor, reimplementas adentro y listo
  const theme = useGuiTheme();
  // usa window.innerWidth para no obligar a cada comp a pasar queries
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  return keyForWidth(width, theme);
}

export function useIsMobile(): boolean {
  const theme = useGuiTheme();
  return useMuiMediaQuery(theme.breakpoints.down('sm'));
}

// —— Insets coordinados (ya los inyectas en GuiProvider)
export function useInsets() {
  const theme = useGuiTheme();
  return theme?.layout?.insets ?? { left: 0, right: 0, nav: 0 };
}
export function useUpdateInsets() {
  const theme = useGuiTheme();
  return theme?.updateInsets ?? (() => {});
}

// —— Resolver genérico de viewport para props declarativas
export function useViewportProp<T extends string|number|boolean|object>(
  prop: T | Partial<Record<'xs'|'sm'|'md'|'lg'|'xl', T>> & { default?: T },
  opts?: { widthOverride?: number }
): T | undefined {
  const theme = useGuiTheme();
  return resolveViewportProp(prop as any, theme, opts);
}

// —— Resolver de color por token (unifica MUI/Lucide/htmlColor/color)
export function resolveColorToken(token?: string, theme?: GuiTheme): string | undefined {
  if (!token) return undefined;
  const pal: any = (theme ?? useGuiTheme()).palette;
  if (/^#|^rgb\(|^hsl\(/i.test(token)) return token; // CSS color directo
  if (token.includes('.')) {
    // "text.secondary", "action.active", etc.
    const v = token.split('.').reduce<any>((acc, k) => (acc ? acc[k] : undefined), pal);
    if (typeof v === 'string') return v;
    if (v && typeof v === 'object') return v.main ?? v.default;
    return undefined;
  }
  const v = pal[token];
  if (typeof v === 'string') return v;
  if (v && typeof v === 'object') return v.main ?? v.default;
  return undefined;
}