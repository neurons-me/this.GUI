// src/themes/theme.d.ts

export type ThemeMode = 'light' | 'dark';
// src/themes/theme.d.ts
// ---------- This.GUI Theme Manifest types (library-level, not part of MUI) ----------
export type ThemeIcon =
  | { type: 'mui' | 'lucide' | 'material-symbol'; value: string }    // icon token from a known set
  | { type: 'url'; value: string }               // URL to an image (svg/png)
  | { type: 'svg'; value: string }               // inline SVG markup
  | { type: 'data'; value: string };             // data URI

/**
 * ThemeManifest
 * Describes a theme package and the paths to its light/dark token files.
 * This is metadata for discovery/marketplace; it is intentionally separate
 * from the runtime MUI Theme type augmentation below.
 */
export type ThemeManifest = {
  id: string;
  name: string;
  description?: string;
  author?: string;
  version?: string;
  license?: string;
  homepage?: string;
  repository?: { type: string; url: string };
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  defaultMode?: 'light' | 'dark';
  icon?: ThemeIcon;  // Optional theme icon for listings
  modes: {
    light: { path: string };
    dark: { path: string };
  };
};
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
    GUI: {
      // This was changed from `thisGui` to `GUI` as per instructions
      [key: string]: unknown;
    };
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
    GUI?: {
      // This was changed from `thisGui` to `GUI` as per instructions
      [key: string]: unknown;
    };
  }
}

export type Insets = {
  left: number;
  right: number;
  nav: number;
};

// ThemeEntry, ThemeFamilyGroup, and GuiContextValue types (from GuiProvider)
export type ThemeEntry = {
  id: string;
  family: string;
  name: string;
  mode: 'light' | 'dark';
  manifest: ThemeManifest;
};

export type ThemeFamilyGroup = {
  family: string;
  name: string;
  manifest: ThemeManifest;
  modes: ('light' | 'dark')[];
};

export type GuiContextValue = {
  themeKey: string;
  setThemeKey: (key: string) => void;
  toggleMode: () => void;
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  selectedFamily: string;
  setSelectedFamily: (family: string) => void;
  available: {
    flat: ThemeEntry[];
    grouped: ThemeFamilyGroup[];
  };
  // New fields
  family: string;
  availableFlat: ThemeEntry[];
  availableFamilies: ThemeFamilyGroup[];
  getManifestForFamily: (family: string) => ThemeManifest | undefined;
  setFamilyAndMode: (family: string, mode: 'light' | 'dark') => void;
};

export {};