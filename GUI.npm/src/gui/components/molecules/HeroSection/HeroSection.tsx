import React from 'react';
import { Box, useTheme } from '@mui/material';
import type { HeroSectionProps } from './HeroSection.types';

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

  // Usa tokens del theme
  const blurColor =
    blur === 'none'
      ? 'transparent'
      : blur
      ? theme.palette.blur?.[blur as keyof typeof theme.palette.blur] || 'transparent'
      : 'transparent';
  const blurRadius =
    blur && blur !== 'none'
      ? theme.custom?.blurRadius?.[blur as keyof typeof theme.custom.blurRadius] || '0px'
      : '0px';

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
                filter: blur !== 'none' ? `blur(${blurRadius})` : undefined,
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
                filter: blur !== 'none' ? `blur(${blurRadius})` : undefined,
              }}
            />
          )}

          {/* Blur Layer */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'none',
              // backdropFilter: blur !== 'none' ? `blur(${blurRadius})` : undefined,
              // WebkitBackdropFilter: blur !== 'none' ? `blur(${blurRadius})` : undefined,
              transition: 'backdrop-filter 0.4s ease, opacity 0.4s ease',
            }}
          />
          {/* Overlay Layer */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: customColor || overlayColor || blurColor,
              opacity: blur === 'none' ? overlayOpacity : Math.min(overlayOpacity + 0.15, 1),
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