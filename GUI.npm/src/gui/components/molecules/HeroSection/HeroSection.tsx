import React from 'react';
import { Box, useTheme } from '@mui/material';
import type { HeroSectionProps } from './HeroSection.types';

// Fallback tokens in case theme doesn't provide blur tokens
const DEFAULT_BLUR_RADIUS: Record<'light'|'medium'|'heavy'|'all', string> = {
  light: '2px',
  medium: '6px',
  heavy: '12px',
  all: '20px',
};
const DEFAULT_OVERLAY_COLOR_LIGHT = 'rgba(30, 255, 0, 0.12)';
const DEFAULT_OVERLAY_COLOR_DARK  = 'rgba(0, 255, 4, 0.28)';

function resolveBlurRadius(theme: any, blur?: 'none'|'light'|'medium'|'heavy'|'all'): string {
  if (!blur || blur === 'none') return '0px';
  const fromTheme = theme?.custom?.blurRadius?.[blur];
  const paletteBlur = theme?.palette?.blur?.[blur];
  console.log('🎨 palette.blur token:', paletteBlur);
  console.log('💧 custom.blurRadius token:', fromTheme);
  if (typeof paletteBlur === 'string') return paletteBlur;
  return typeof fromTheme === 'string' ? fromTheme : DEFAULT_BLUR_RADIUS[blur];
}

function resolveOverlayColor(theme: any, blur?: 'none'|'light'|'medium'|'heavy'|'all', customColor?: string, overlayColor?: string): string {
  if (customColor) return customColor;
  if (overlayColor) return overlayColor;
  if (!blur || blur === 'none') {
    // Subtle default overlay when no blur requested
    return theme.palette.mode === 'dark' ? DEFAULT_OVERLAY_COLOR_DARK : DEFAULT_OVERLAY_COLOR_LIGHT;
  }
  // Try palette.blur token, otherwise fallback to a sensible semi-transparent wash
  const paletteBlur = theme?.palette?.blur?.[blur];
  console.log('🎨 Using palette.blur:', paletteBlur);
  if (typeof paletteBlur === 'string') return paletteBlur;
  return theme.palette.mode === 'dark' ? DEFAULT_OVERLAY_COLOR_DARK : DEFAULT_OVERLAY_COLOR_LIGHT;
}

function resolveOverlayOpacity(base: number, blur?: 'none'|'light'|'medium'|'heavy'|'all'): number {
  // Nudge opacity a bit by blur level so differences are visible
  const bump =
    blur === 'light' ? 0.05 :
    blur === 'medium' ? 0.12 :
    blur === 'heavy' ? 0.18 :
    blur === 'all' ? 0.22 : 0;
  return Math.min(1, Math.max(0, base + bump));
}

function resolveMediaFilter(blurRadius: string, blur?: 'none'|'light'|'medium'|'heavy'|'all'): string | undefined {
  if (!blur || blur === 'none') return 'none';
  // Give "all" a slightly stronger treatment to make the difference more obvious
  return blur === 'all'
    ? `blur(${blurRadius}) saturate(1.05) brightness(0.96)`
    : `blur(${blurRadius})`;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundSrc,
  backgroundType = 'image',
  overlayOpacity = 0.4,
  overlayColor,
  children,
  height = '100vh',
  padding = 4,
  blur,
  customColor,
}) => {
  const theme = useTheme();

  const blurRadius = resolveBlurRadius(theme, blur);
  const overlayBg  = resolveOverlayColor(theme, blur, customColor, overlayColor);
  const overlayOp  = resolveOverlayOpacity(overlayOpacity, blur);
  const mediaFilter = resolveMediaFilter(blurRadius, blur);

  return (
    <Box
      component="section"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        zIndex: 0,
        backgroundColor: 'transparent',
      }}
    >
      {backgroundSrc && (
        <>
          {backgroundType === 'video' ? (
            <Box
              component="video"
              src={backgroundSrc}
              autoPlay
              muted
              loop
              playsInline
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
                filter: mediaFilter,
                willChange: 'transform, filter',
                transform: 'translateZ(0)',
              }}
            />
          ) : (
            <Box
              component="img"
              src={backgroundSrc}
              alt=""
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
                filter: mediaFilter,
                willChange: 'transform, filter',
                transform: 'translateZ(0)',
              }}
            />
          )}

          {/* Overlay Layer */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: overlayBg,
              opacity: overlayOp,
              backdropFilter: blur && blur !== 'none' ? `blur(${blurRadius})` : undefined,
              WebkitBackdropFilter: blur && blur !== 'none' ? `blur(${blurRadius})` : undefined,
              zIndex: 2,
              transition: 'opacity 0.4s ease',
            }}
          />
        </>
      )}

      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: 'text.primary',
          px: padding,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};