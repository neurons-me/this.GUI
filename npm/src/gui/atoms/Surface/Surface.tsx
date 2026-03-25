import React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme, alpha } from '@mui/material/styles';
import type { SurfaceProps } from './Surface.types';

/**
 * Surface
 * -------
 * A visual container primitive.
 * Acts as a thin wrapper around MUI's Paper.
 * Supports elevation, variant, square, and sx overrides.
 */
const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((props, ref) => {
  const {
    variant: variantProp = 'default',
    color, // Destructure color to prevent it from being passed to Paper
    elevation,
    sx,
    ...rest
  } = props;

  const theme = useTheme();
  // Mapea 'default' y 'elevation' a 'solid' para consistencia interna.
  const variant = (variantProp === 'default' || variantProp === 'elevation') ? 'solid' : (variantProp === 'outlined' ? 'outline' : variantProp);

  // El `variant` que se pasará a MUI Paper.
  // 'glass' y 'solid' no son valores nativos, así que los trataremos como 'elevation'
  // y aplicaremos sus estilos específicos vía `sx`.
  const mappedVariant = (variant === 'outline' ? 'outlined' : 'elevation') as 'elevation' | 'outlined';

  // Función que genera los estilos base para cada variante.
  const variantSx = () => {
    switch (variant) {
      case 'outline':
        return {
          border: `1px solid ${theme.palette.divider}`,
        };

      case 'glass':
        return {
          backgroundColor: alpha(theme.palette.background.paper, 0.6),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
          boxShadow: 'none',
          '@supports not (backdrop-filter: blur(12px))': {
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
          },
        };

      case 'card':
        return {
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[2],
        };

      case 'solid':
        return {
          backgroundColor: theme.palette.background.paper,
        };

      default:
        return {};
    }
  };

  return (
    <Paper
      ref={ref}
      variant={mappedVariant}
      elevation={elevation}
      sx={[variantSx(), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...rest}
    />
  );
});

Surface.displayName = 'Surface';
export default Surface;
export type { SurfaceProps, SurfaceVariant } from './Surface.types';
