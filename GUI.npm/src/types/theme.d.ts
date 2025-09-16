// src/types/theme.d.ts
import '@mui/material/styles';
// Module augmentation so TS knows about our theme extensions injected by GuiProvider
declare module '@mui/material/styles' {
  /** Insets reported at runtime by NavBar/Drawers and read by layout components */
  interface Insets {
    left: number;
    right: number;
    nav: number;
  }

  /** Runtime theme (what useTheme() returns) */
  interface Theme {
    layout: { insets: Insets };
    /** Callback to update insets; injected by GuiProvider */
    updateInsets?: (next: Partial<Insets>) => void;
    /** Optional legacy field for back-compat (some code reads theme.insets) */
    insets?: Partial<Insets>;
    /** Parking spot for all design tokens not mapped natively to MUI */
    custom: Record<string, any>;
  }

  /** Accepted options when creating the theme */
  interface ThemeOptions {
    layout?: { insets?: Partial<Insets> };
    updateInsets?: (next: Partial<Insets>) => void;
    /** Optional legacy field for back-compat */
    insets?: Partial<Insets>;
    /** Parking spot for all design tokens not mapped natively to MUI */
    custom?: Record<string, any>;
  }
}