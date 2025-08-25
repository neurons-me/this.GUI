// neurons.me — this.GUI
// Generic Hero2 component with video background, overlay and titles
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

/**
 * Hero2
 * A compact hero/cover with background video or image, an opacity layer, and title/subtitle.
 *
 * Props:
 * - videoSrc: string URL for the background video.
 * - poster: string URL for the poster/fallback image.
 * - height: CSS size for hero height (e.g., '220px', '30vh'). Default: '220px'.
 * - title: string | ReactNode, main title text.
 * - subTitle: string | ReactNode, secondary text.
 * - overlayOpacity: number [0..1], darkness of overlay. Default: 0.5.
 * - overlayColor: CSS color of overlay. Default: '#000'.
 * - overlayBlur: CSS blur amount for overlay backdrop. Default: '8px'.
 * - overlayGradient: CSS gradient string for overlay background.
 * - borderRadius: number | string for rounding container. Default: 12.
 * - textColor: CSS color for text. Default: '#fff'.
 * - align: 'center' | 'left' | 'right'. Default: 'center'.
 * - autoPlay, loop, muted, playsInline: booleans for <video>. Defaults true/true/true/true.
 * - objectFit: how the media covers the box. Default: 'cover'.
 * - TitleComponent: optional component to render the title (defaults to GUI.TextTitle or 'h1').
 * - children: extra nodes rendered under the subtitle (e.g., buttons).
 */
export default function Hero2({
  videoSrc = '/apps/neurons1.mp4',
  poster,
  height = '220px',
  title = 'Apps',
  subTitle,
  overlayOpacity = 0.5,
  overlayColor = '#000',
  overlayBlur = '8px',
  overlayGradient,
  borderRadius = 8,
  textColor = '#fff',
  align = 'center',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  objectFit = 'cover',
  TitleComponent,
  children,
}) {
  const Title = TitleComponent || 'h1';
  const alignMap = {
    center: { justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
    left: { justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left', paddingLeft: '1rem' },
    right: { justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right', paddingRight: '1rem' },
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height, overflow: 'hidden', borderRadius, mb: '2rem' }}>
      {/* Background Video */}
      {videoSrc ? (
        <Box component="video"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          poster={poster}
          sx={{ width: '100%', height: '100%', objectFit }}>
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback text */}
          Tu navegador no soporta video.
        </Box>
      ) : (
        // If no videoSrc, show poster as background
        <Box sx={{ width: '100%', height: '100%', backgroundImage: poster ? `url(${poster})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      )}

      {/* Opacity Layer */}
      <Box
        sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: overlayGradient || overlayColor,
          opacity: overlayOpacity,
          backdropFilter: `blur(${overlayBlur})`,
          WebkitBackdropFilter: `blur(${overlayBlur})`,
        }}
      />

      {/* Foreground Content */}
      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', ...alignMap[align] }}>
        <Box sx={{ color: textColor, textShadow: '0 2px 10px rgba(0,0,0,.6)' }}>
          {title && (
            <Title style={{ margin: 0, fontWeight: 800, fontSize: '2rem' }}>
              {title}
            </Title>
          )}
          {subTitle && (
            <Typography variant="subtitle1" sx={{ mt: 0.5, opacity: 0.9 }}>
              {subTitle}
            </Typography>
          )}
          {children && (
            <Box sx={{ mt: 1.25 }}>
              {children}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

Hero2.propTypes = {
  videoSrc: PropTypes.string,
  poster: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  overlayOpacity: PropTypes.number,
  overlayColor: PropTypes.string,
  overlayBlur: PropTypes.string,
  overlayGradient: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  objectFit: PropTypes.string,
  TitleComponent: PropTypes.elementType,
  children: PropTypes.node,
};