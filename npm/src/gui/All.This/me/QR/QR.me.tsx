import React from 'react';
import { Avatar, Box, Typography } from '@/gui/Atoms';
import { useGuiTheme } from '@/gui-internals/Hooks';
import QR from '../QR';

export type QRmeProps = {
  value: string;
  username?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarFallback?: string;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  const [hovered, setHovered] = React.useState(false);
  const [pinned, setPinned] = React.useState(defaultFace === 'avatar');

  const showingAvatar = pinned || (hoverFlip && hovered);
  const faceRotation = showingAvatar ? 180 : 0;
  const rootNodeId = String(dataGuiNodeId || 'QR.me');
  const rootNodeType = String(dataGuiComponent || 'QR.me');
  const qrInset = Math.max(6, Math.round(resolvedDiameter * 0.06));
  const qrSize = resolvedDiameter - qrInset * 2;
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
  const showAvatarLabelOverlay = showAvatarLabel && !avatarSrc;

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
        width: resolvedDiameter,
        height: resolvedDiameter,
        display: 'inline-flex',
        perspective: `${resolvedDiameter * 6}px`,
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
          transition: 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)',
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
            boxShadow: showingAvatar
              ? `0 0 0 1px ${theme.palette.primary.main}22, 0 12px 22px rgba(0,0,0,0.18)`
              : `0 0 0 1px ${theme.palette.primary.main}33, 0 8px 18px rgba(0,0,0,0.14)`,
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
              embedMode="positive-overlay"
              embedScale={0.28}
            />
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                px: 0.95,
                py: 0.35,
                borderRadius: 999,
                bgcolor: `${theme.palette.background.paper}EE`,
                border: '1px solid',
                borderColor: `${theme.palette.primary.main}44`,
                backdropFilter: 'blur(8px)',
                boxShadow: `0 2px 8px ${theme.palette.primary.main}22`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  fontSize: resolvedDiameter <= 80 ? '0.62rem' : '0.68rem',
                  letterSpacing: '0.08em',
                }}
              >
                .me
              </Typography>
            </Box>
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
            boxShadow: `0 0 0 1px ${theme.palette.primary.main}33, 0 10px 24px rgba(0,0,0,0.16)`,
            overflow: 'hidden',
          }}
        >
          <Avatar
            src={avatarSrc || undefined}
            alt={String(avatarAlt || username || '.me avatar')}
            sx={{
              width: resolvedDiameter - 10,
              height: resolvedDiameter - 10,
              bgcolor: avatarBg,
              color: avatarTextColor,
              fontSize: Math.max(18, Math.round(resolvedDiameter * 0.22)),
              fontWeight: 800,
              letterSpacing: '-0.03em',
              border: '2px solid',
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
                bottom: Math.max(6, Math.round(resolvedDiameter * 0.04)),
                left: '50%',
                transform: 'translateX(-50%)',
                px: 0.9,
                py: 0.35,
                borderRadius: 999,
                bgcolor: `${theme.palette.background.paper}E8`,
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: `${theme.palette.primary.main}30`,
                minWidth: Math.max(44, Math.round(resolvedDiameter * 0.42)),
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
  );
}
