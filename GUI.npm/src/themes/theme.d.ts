// src/themes/theme.d.ts
// src/themes/theme.d.ts
import '@mui/material/styles';
declare module '@mui/material/styles' {
  // -----------------------------
  // Palette extensions
  // -----------------------------
  interface TypeBackground {
    /** Custom background color for navigation surfaces (e.g., AppBar). */
    nav?: string;
  }

  interface Palette {
    /** Default/iconic color separate from text/action semantics. */
    icon: Palette['primary'];
    /** Link colors (normal + optional visited). */
    link: { main: string; visited?: string };
  }
  interface PaletteOptions {
    icon?: PaletteOptions['primary'];
    link?: { main: string; visited?: string };
  }

  // -----------------------------
  // Typography extensions
  // -----------------------------
  interface TypographyVariants {
    /** Optional helper scale for line-heights used by generators/utilities. */
    lineHeights?: {
      tight?: number;
      normal?: number;
      relaxed?: number;
      [key: string]: number | undefined;
    };
  }
  interface TypographyVariantsOptions {
    lineHeights?: {
      tight?: number;
      normal?: number;
      relaxed?: number;
      [key: string]: number | undefined;
    };
  }

  // -----------------------------
  // Theme extensions
  // -----------------------------
  interface Theme {
    /** Runtime layout insets coordinated by NavBar/Drawers (pixels). */
    layout: {
      insets: { left: number; right: number; nav: number };
    };
    /** Callback exposed by GuiProvider to update insets at runtime. */
    updateInsets?: (v: Partial<{ left: number; right: number; nav: number }>) => void;
    /** Bag for tokens that don't map 1:1 to MUI. */
    custom?: {
      border?: string;
      gradients?: unknown;
      overlays?: unknown;
      iconSizes?: Record<string, unknown>;
      lineHeights?: Record<string, unknown>;
      [key: string]: unknown;
    };
    /** (Optional) legacy insets for backwards compatibility. */
    insets?: { left?: number; right?: number; nav?: number };
  }

  interface ThemeOptions {
    layout?: {
      insets?: Partial<{ left: number; right: number; nav: number }>;
    };
    updateInsets?: (v: Partial<{ left: number; right: number; nav: number }>) => void;
    custom?: {
      border?: string;
      gradients?: unknown;
      overlays?: unknown;
      iconSizes?: Record<string, unknown>;
      lineHeights?: Record<string, unknown>;
      [key: string]: unknown;
    };
    insets?: Partial<{ left: number; right: number; nav: number }>;
  }
}

export {};