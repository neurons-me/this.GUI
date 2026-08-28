import React from 'react';
import { GlobalStyles } from '@mui/system';
import { Avatar, Box, Typography } from '@/gui/Atoms';
import { useGuiTheme } from '@/gui-internals/Hooks';
import QR from '../QR';
import PixelWordmark from './PixelWordmark';
import { ME_WORDMARK_EMBED_BITMAP } from './meMark';

export type QRmeProps = {
  value: string;
  username?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarFallback?: string;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'topbar';
  diameter?: number;
  size?: number;
  bg?: string;
  fg?: string;
  defaultFace?: 'qr' | 'avatar';
  hoverFlip?: boolean;
  clickFlip?: boolean;
  showAvatarLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
};

const DIAMETER_BY_VARIANT = {
  xs: 72,
  sm: 96,
  md: 112,
  lg: 148,
  xl: 184,
  topbar: 40,
} as const;

function fallbackInitial(username: string, avatarFallback: string): string {
  const direct = String(avatarFallback || '').trim();
  if (direct) return direct.slice(0, 2).toUpperCase();
  const source = String(username || '').trim();
  if (!source) return '.m';
  return source.slice(0, 2).toUpperCase();
}

export default function QRme({
  value,
  username = '',
  avatarSrc = '',
  avatarAlt = '',
  avatarFallback = '',
  variant = 'md',
  diameter,
  size = 112,
  bg,
  fg,
  defaultFace = 'qr',
  hoverFlip = true,
  clickFlip = true,
  showAvatarLabel = false,
  className,
  style,
  'data-gui-node-id': dataGuiNodeId,
  'data-gui-component': dataGuiComponent,
}: QRmeProps) {
  const theme = useGuiTheme();
  const resolvedDiameter = Math.max(
    48,
    Number.isFinite(diameter as number)
      ? Number(diameter)
      : Number.isFinite(size as number)
        ? Number(size)
        : DIAMETER_BY_VARIANT[variant]
  );
  const isTopbar = variant === 'topbar';
  const effectiveDiameter = isTopbar ? Math.min(resolvedDiameter, 40) : resolvedDiameter;
  const [hovered, setHovered] = React.useState(false);
  const [pinned, setPinned] = React.useState(defaultFace === 'avatar');

  const showingAvatar = pinned || (hoverFlip && hovered);
  const faceRotation = showingAvatar ? 180 : 0;
  const rootNodeId = String(dataGuiNodeId || 'QR.me');
  const rootNodeType = String(dataGuiComponent || 'QR.me');
  // Small inset — just enough to keep the QR's own square corners (clipped
  // by the circular mask below) from touching the outer rim border. A
  // bigger inset here is what read as "too much white circle around it" —
  // the square QR should nearly circumscribe the circle, not float inside
  // it with room to spare.
  const qrInset = isTopbar
    ? Math.max(2, Math.round(effectiveDiameter * 0.02))
    : Math.max(2, Math.round(effectiveDiameter * 0.015));
  const qrSize = effectiveDiameter - qrInset * 2;
  const qrBg = bg ?? theme.palette.background.paper;
  const qrFg = fg ?? theme.palette.primary.main;
  const avatarBg = avatarSrc ? 'transparent' : theme.palette.primary.main;
  const avatarTextColor = avatarSrc
    ? theme.palette.primary.contrastText
    : theme.palette.getContrastText(theme.palette.primary.main);
  const borderColor = `${theme.palette.primary.main}55`;
  const rimBackground =
    theme.palette.mode === 'dark'
      ? `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.section.subtle})`
      : `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.section.default})`;
  const avatarRing =
    theme.palette.mode === 'dark'
      ? `radial-gradient(circle at 28% 24%, ${theme.palette.primary.main}22, ${theme.palette.section.subtle} 58%, ${theme.palette.background.paper})`
      : `radial-gradient(circle at 28% 24%, ${theme.palette.primary.main}18, ${theme.palette.section.default} 58%, ${theme.palette.background.paper})`;
  const showAvatarLabelOverlay = !isTopbar && showAvatarLabel && !avatarSrc;

  const handlePointerEnter = () => {
    if (hoverFlip) setHovered(true);
  };

  const handlePointerLeave = () => {
    if (hoverFlip) setHovered(false);
  };

  const handleToggle = () => {
    if (!clickFlip) return;
    setPinned((current) => !current);
  };

  return (
    <>
      {/* Less "glowing ring," more "drifting in zero gravity" — a jellyfish
          (medusa de mar) feel: a soft, mostly-static glow with a slow
          vertical drift + gentle breathing scale, not an intensity pulse.
          The earlier version animated opacity/glow-strength and read as
          "too much glow" — the motion was the part that landed, so the
          glow itself is now flat and weak and only the transform animates.
          Scoped to the QR face only (not the avatar face, not the tiny
          topbar variant). */}
      <GlobalStyles
        styles={{
          '@keyframes qrmeGlow': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-5px) scale(1.012)' },
          },
        }}
      />
      <Box
        data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      className={className}
      role={clickFlip ? 'button' : undefined}
      tabIndex={clickFlip ? 0 : undefined}
      aria-label={showingAvatar ? 'Show .me QR' : 'Show avatar'}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onFocus={handlePointerEnter}
      onBlur={handlePointerLeave}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (!clickFlip) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleToggle();
        }
      }}
      sx={{
        width: effectiveDiameter,
        height: effectiveDiameter,
        display: 'inline-flex',
        perspective: `${effectiveDiameter * 6}px`,
        cursor: clickFlip ? 'pointer' : 'default',
        userSelect: 'none',
      }}
      style={style}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${faceRotation}deg)`,
          transition: isTopbar
            ? 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: rimBackground,
            border: '1px solid',
            borderColor,
            boxShadow: isTopbar
              ? `0 0 0 1px ${theme.palette.primary.main}22, 0 3px 8px rgba(0,0,0,0.14)`
              : showingAvatar
                ? `0 0 0 1px ${theme.palette.primary.main}22, 0 12px 22px rgba(0,0,0,0.18)`
                // Dialed way back from the earlier "stronger" pass, which
                // read as too much glow — thin ring, soft low-alpha spread.
                // The drift/scale animation (qrmeGlow, above) is doing the
                // "alive" work now, not shadow intensity.
                : `0 0 0 2px ${theme.palette.primary.main}, 0 0 14px 3px ${theme.palette.primary.main}40, 0 8px 18px rgba(0,0,0,0.14)`,
            animation: !isTopbar && !showingAvatar ? 'qrmeGlow 5s ease-in-out infinite' : undefined,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: qrInset,
              width: qrSize,
              height: qrSize,
              borderRadius: '50%',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <QR
              value={value}
              size={qrSize}
              bg={qrBg}
              fg={qrFg}
              ecc="H"
              // Default quietZone (4 modules) bakes a wide white margin
              // into the QR's own square canvas, on top of the circular
              // frame's own inset — combined, that's what read as "too
              // much white circle around it." A slim 1-module zone (still
              // real whitespace, just not padded) plus ECC=H keeps it
              // scannable while letting the pattern reach much closer to
              // the circular clip.
              quietZone={1}
              // No embed props at all here — QR.tsx's embedMode="negative-space"
              // turned out to still draw the bitmap back as a filled shape
              // (buildAsciiOverlayPath runs for both "negative-space" and
              // "positive-overlay" — a real inconsistency in that
              // component, not something this call site can configure its
              // way around). A full, undisturbed QR underneath, with
              // PixelWordmark sitting directly on top below (no backing
              // patch — see that comment for why that's fine for
              // scannability, not just a look).
            />
            <PixelWordmark
              bitmap={ME_WORDMARK_EMBED_BITMAP}
              pixelSize={Math.max(1.4, qrSize / 100)}
              // Widens the glyphs without redrawing the bitmap — cells are
              // wider than tall instead of square. Pushed further (1.5 -> 1.8).
              pixelAspect={1.8}
              fg={qrFg}
              // No backing patch: an opaque patch was a clean geometric cut
              // against the QR's noise — asked for it to just blend instead.
              // Drawing the wordmark directly onto the QR (letting whatever
              // sits underneath show through the gaps between strokes) is
              // both the more organic look and, if anything, safer for
              // scannability than the patch was — sparse text strokes cover
              // less area than a solid filled shape did, well inside what
              // ECC=H already tolerates. Stacked drop-shadows (qrBg) give
              // it real separation from busy QR noise without reintroducing
              // a hard geometric shape — each one follows the letters' own
              // silhouette, not a box. Radii capped at 0.5x-2x the base
              // pixel size (not 1x-4x, tried first) — at the compact default
              // size the wordmark is only ~9px tall, so a 4x radius blurred
              // way past the actual letters into a big vertical smear above
              // and below; halving the ceiling keeps the glow close to the
              // glyphs themselves at every size.
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: Array.from(
                  { length: 4 },
                  (_, i) => `drop-shadow(0 0 ${Math.max(1.4, qrSize / 100) * (i + 1) * 0.5}px ${qrBg})`,
                ).join(' '),
              }}
              data-gui-node-id="QR.me.wordmark"
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: avatarRing,
            border: '1px solid',
            borderColor,
            boxShadow: isTopbar
              ? `0 0 0 1px ${theme.palette.primary.main}22, 0 3px 8px rgba(0,0,0,0.14)`
              : `0 0 0 1px ${theme.palette.primary.main}33, 0 10px 24px rgba(0,0,0,0.16)`,
            overflow: 'hidden',
          }}
        >
          <Avatar
            src={avatarSrc || undefined}
            alt={String(avatarAlt || username || '.me avatar')}
            sx={{
              width: effectiveDiameter - (isTopbar ? 6 : 10),
              height: effectiveDiameter - (isTopbar ? 6 : 10),
              bgcolor: avatarBg,
              color: avatarTextColor,
              fontSize: isTopbar
                ? Math.max(11, Math.round(effectiveDiameter * 0.24))
                : Math.max(18, Math.round(effectiveDiameter * 0.22)),
              fontWeight: 800,
              letterSpacing: '-0.03em',
              border: isTopbar ? '1.5px solid' : '2px solid',
              borderColor: theme.palette.background.paper,
              '& .MuiAvatar-img': {
                objectFit: 'cover',
                backgroundColor: 'transparent',
              },
            }}
          >
            {fallbackInitial(username, avatarFallback)}
          </Avatar>

          {showAvatarLabelOverlay ? (
            <Box
              sx={{
                position: 'absolute',
                bottom: Math.max(6, Math.round(effectiveDiameter * 0.04)),
                left: '50%',
                transform: 'translateX(-50%)',
                px: 0.9,
                py: 0.35,
                borderRadius: 999,
                bgcolor: `${theme.palette.background.paper}E8`,
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: `${theme.palette.primary.main}30`,
                minWidth: Math.max(44, Math.round(effectiveDiameter * 0.42)),
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  color: 'text.primary',
                  fontFamily: 'monospace',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {username ? `@${username}` : '.me'}
              </Typography>
            </Box>
          ) : null}
        </Box>
      </Box>
      </Box>
    </>
  );
}
