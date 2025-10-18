// src/types/theme.d.ts
import '@mui/material/styles';
// Module augmentation so TS knows about our theme extensions injected by GuiProvider
declare module '@mui/material/styles' {
  /** Insets reported at runtime by NavBar/Drawers and read by layout components */
  interface Insets {
    left: number;
    right: number;
    top: number;
    bottom: number;
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

export type ThemeManifest = {
  themeId?: string;
  themeName?: string;
  description?: string;
  author?: string;
  version?: string;
  license?: string;
  homepage?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  badgeUrl: string;
  mode: {
    light?: Record<string, any> | string; 
    dark?: Record<string, any> | string;
  };
  defaultMode?: 'light' | 'dark';
};

export type GuiTheme = {
  themeId: string;           // unique identifier (e.g. UUID)
  themeName: string;         // human-readable name
  // top-level manifest metadata (copied from ThemeManifest)
  description?: string;
  author?: string;
  version?: string;
  license?: string;
  homepage?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  badgeUrl?: string;
  // group of modes for this theme
  mode: {
    light?: Record<string, any>;
    dark?: Record<string, any>;
  };
};

export interface FlatGuiTheme {
  themeId: string;
  themeName: string;
  description?: string;
  author?: string;
  version?: string;
  license?: string;
  homepage?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  badgeUrl?: string;
  mode: 'light' | 'dark';
  tokens: string | Record<string, any>;
}

// GuiContextValue types (from GuiProvider)
export type GuiContextValue = {
  themeId: string;
  setThemeId: (id: string) => void;
  themeName: string;
  mode: 'light' | 'dark';
  toggleMode: () => void;
  setMode: (mode: 'light' | 'dark') => void;
};

// Augment MUI Theme to include custom tokens and insets
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
      insets: { left: number; right: number; top: number; bottom: number };
    };
    /** Callback exposed by GuiProvider to update insets at runtime. */
    updateInsets?: (v: Partial<{ left: number; right: number; top: number; bottom: number }>) => void;
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
    insets?: { left?: number; right?: number; top?: number; bottom?: number };
    GUI: {
      // This was changed from `thisGui` to `GUI` as per instructions
      [key: string]: unknown;
    };
  }

  interface ThemeOptions {
    layout?: {
      insets?: Partial<{ left: number; right: number; top: number; bottom: number }>;
    };
    updateInsets?: (v: Partial<{ left: number; right: number; top: number; bottom: number }>) => void;
    custom?: {
      border?: string;
      gradients?: unknown;
      overlays?: unknown;
      iconSizes?: Record<string, unknown>;
      lineHeights?: Record<string, unknown>;
      [key: string]: unknown;
    };
    insets?: Partial<{ left: number; right: number; top: number; bottom: number }>;
    GUI?: {
      // This was changed from `thisGui` to `GUI` as per instructions
      [key: string]: unknown;
    };
  }
}

export {};