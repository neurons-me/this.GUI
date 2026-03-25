import React from 'react';
import { Box } from '@/gui/Atoms';
import { useInsets, useGuiTheme } from '@/gui/Hooks';
import type { SectionProps } from './Section.types';

const DEFAULT_PADDING = {
  xs: 2,
  sm: 3,
  md: 4,
} as const;

const Section: React.FC<SectionProps> = ({
  id,
  children,
  sx,
  maxWidth = '100%',
  component = 'section',
  bgcolor,
  colorVariant,
  padding,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  className,
  elevation,
  padded = true,
  centered = false,
  'data-testid': dataTestId,
}) => {
  const insets = useInsets();
  const theme = useGuiTheme();
  // Determine if bgcolor is a theme token or raw color
  // We check if bgcolor matches a key path in theme.palette or if it is a raw color string
  const isThemeToken = (color: string) => {
    if (!color) return false;
    // Simple heuristic: theme tokens contain dot notation or match keys in palette
    if (color.includes('.')) {
      const parts = color.split('.');
      let obj: any = theme.palette;
      for (const part of parts) {
        if (obj && part in obj) {
          obj = obj[part];
        } else {
          return false;
        }
      }
      return true;
    }
    return color in theme.palette;
  };

  let finalBgcolor: string | undefined;
  if (bgcolor) {
    finalBgcolor = isThemeToken(bgcolor) ? bgcolor : bgcolor;
  } else if (colorVariant && theme.palette.section && colorVariant in theme.palette.section) {
    finalBgcolor = theme.palette.section[colorVariant];
  }

  const resolvedPadding =
    padding !== undefined
      ? padding
      : padded === false
      ? 0
      : DEFAULT_PADDING;

  const resolvedElevation =
    typeof elevation === 'number' && Array.isArray(theme.shadows)
      ? theme.shadows[Math.max(0, Math.min(Math.trunc(elevation), theme.shadows.length - 1))]
      : undefined;

  return (
    <Box
      id={id}
      component={component}
      className={className}
      data-testid={dataTestId}
      sx={{
        // Responsive width/height: fill viewport, but margin aligns with insets
        width: `calc(100vw - ${insets.left + insets.right}px)`,
        height: height ? height : `calc(100vh - ${insets.top + insets.bottom}px)`,
        marginTop: marginTop !== undefined ? marginTop : insets.top,
        marginBottom: marginBottom !== undefined ? marginBottom : insets.bottom,
        marginLeft: marginLeft !== undefined ? marginLeft : centered ? 'auto' : insets.left,
        marginRight: marginRight !== undefined ? marginRight : centered ? 'auto' : insets.right,
        maxWidth,
        // Responsive internal padding
        padding: resolvedPadding,
        ...(finalBgcolor ? { bgcolor: finalBgcolor } : {}),
        ...(resolvedElevation ? { boxShadow: resolvedElevation } : {}),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
