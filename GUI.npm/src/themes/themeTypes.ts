/**
 * A simplified theme definition generated at runtime from a ThemeManifest.
 * This object is used to apply styles and tokens to the GUI dynamically.
 */
export type Theme = {
  id: string;
  name: string;
  family?: string;
  mode: 'light' | 'dark';
  path: string;
  tokens?: Record<string, any>;
};

/**
 * Metadata for a theme family group.
 * Used for rendering selectors and organizing themes by group.
 */
export type ThemeFamilyGroup = {
  family: string;
  name: string;
  modes: ('light' | 'dark')[];
  manifest: ThemeManifest;
};

/**
 * Full manifest for a theme, defining its ID, label, supported modes,
 * and optionally variables or token sets per mode.
 */
export type ThemeManifest = {
  id: string;
  name: string;
  family?: string;
  modes: {
    light: { path: string };
    dark: { path: string };
  };
  tokens?: Record<string, any>;
  tokensByMode?: {
    light?: Record<string, any>;
    dark?: Record<string, any>;
  };
  icon?: {
    type: 'mui' | 'lucide' | 'material-symbol';
    value: string;
  };
};

/**
 * A theme entry used in selection UIs or lists.
 */
export type ThemeEntry = {
  id: string;
  name: string;
  family: string;
  mode: 'light' | 'dark';
  manifest: ThemeManifest;
};