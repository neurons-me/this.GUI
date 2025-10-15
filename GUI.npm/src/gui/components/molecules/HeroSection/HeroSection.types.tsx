export interface HeroSectionProps {
  /** Imagen, video o GIF de fondo */
  backgroundSrc?: string;
  /** Tipo de medio: 'image' | 'video' | 'gif' */
  backgroundType?: 'image' | 'video' | 'gif';
  /** Opacidad del overlay (0–1) */
  overlayOpacity?: number;
  /** Color del overlay (default: theme.palette.background.default) */
  overlayColor?: string;
  /** Contenido principal (texto, botones, etc.) */
  children?: React.ReactNode;
  /** Altura opcional (por defecto: 100vh) */
  height?: string | number;
  /** Padding interno (por defecto: responsive según theme.spacing) */
  padding?: number | string;
  /** Nivel de desenfoque: 'none' | 'light' | 'medium' | 'heavy' | 'all' */
  blur?: 'none' | 'light' | 'medium' | 'heavy' | 'all';
  /** Color personalizado del overlay (anula overlayColor si se define) */
  customColor?: string;
}