import type { PaperProps } from '@mui/material/Paper';
import type { ReactNode } from 'react';
export type SurfaceVariant =
  | 'default'
  | 'elevation'
  | 'solid'
  | 'outline'
  | 'outlined'
  | 'glass'
  | 'card';

export interface SurfaceProps extends Omit<PaperProps, 'variant' | 'color'> {
  /**
   * Visual style for the surface.
   * `default`/`elevation` map to the standard solid paper surface.
   */
  variant?: SurfaceVariant;
  color?: unknown;
}

export type SurfaceResolverSpec = {
  type?: 'Surface';
  props?: Partial<SurfaceProps> & {
    children?: ReactNode;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};
