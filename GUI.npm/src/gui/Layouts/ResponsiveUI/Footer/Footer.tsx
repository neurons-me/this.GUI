import { Box, Typography, Link } from "@/gui/components/atoms";
import { useGuiTheme, useGuiMediaQuery } from "@/gui";
import Icon from "@/gui/Theme/Icon/Icon";
import type * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
// Utility: normalize optional SxProps into a single SxProps (filters out undefined)
const sxN = (...parts: Array<SxProps<Theme> | undefined>): SxProps<Theme> =>
  (parts.filter(Boolean) as unknown) as SxProps<Theme>;
export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  icon: string;
  href: string;
  iconColor?: string;
};

export type FooterProps = {
  title?: string;
  logoSrc?: string;
  homeHref?: string;
  brandComponent?: any;  // ElementType for SPA routing (e.g., Link)
  brandTo?: string;      // Destination for SPA routing
  onBrandClick?: () => void;
  socialLinks?: SocialLink[];
  links?: LinkItem[];
  leftInset?: number;
  rightInset?: number;
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  linkProps?: React.ComponentProps<typeof Link>;
  iconProps?: Record<string, any>;
  id?: string;
  className?: string;
  'data-testid'?: string;

  // Granular styling overrides
  sx?: SxProps<Theme>;              // root footer container
  leftSx?: SxProps<Theme>;          // left cluster (social + startSlot)
  centerSx?: SxProps<Theme>;        // center links container
  rightSx?: SxProps<Theme>;         // right cluster (brand + endSlot)
  brandSx?: SxProps<Theme>;         // wrapper around brand (logo + title)
  logoSx?: SxProps<Theme>;          // logo image
  titleSx?: SxProps<Theme>;         // title typography
  socialLinkSx?: SxProps<Theme>;    // each social link <Link>
  navLinkSx?: SxProps<Theme>;       // each center link <Link>
};

export default function Footer({
  title = "neurons.me",
  logoSrc,
  homeHref,
  brandComponent,
  brandTo,
  onBrandClick,
  socialLinks = [],
  links = [],
  leftInset,
  rightInset,
  startSlot,
  endSlot,
  linkProps,
  iconProps,
  id,
  className,
  'data-testid': dataTestId,
  sx,
  leftSx,
  centerSx,
  rightSx,
  brandSx,
  logoSx,
  titleSx,
  socialLinkSx,
  navLinkSx,
}: FooterProps) {
  // Theme + media
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down("sm"));
  const toCssSize = (v: number | string | undefined, fallback: string = '0px'): string => {
    if (v == null) return fallback;
    if (typeof v === 'number') return `${v}px`;
    const s = String(v);
    // if already has unit, return as-is
    return /[a-z%]+$/i.test(s) ? s : `${s}px`;
  };

  const themeLeftInset = theme?.layout?.insets?.left ?? theme?.insets?.left;
  const themeRightInset = theme?.layout?.insets?.right ?? theme?.insets?.right;
  const effectiveLeftInset = toCssSize(
    leftInset != null ? leftInset : themeLeftInset,
    '0px'
  );
  const effectiveRightInset = toCssSize(
    rightInset != null ? rightInset : themeRightInset,
    '0px'
  );

  const effectiveLogo =
    logoSrc && String(logoSrc).trim().length > 0
      ? logoSrc
      : "https://www.neurons.me/media/neurons-grey.png"; // required fallback

  const activateOnKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onBrandClick) onBrandClick();
    }
  };

  const Brand = onBrandClick ? (
    // Button-like div when an explicit click handler is provided (keyboard accessible)
    <Box
      sx={sxN(
        { display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' },
        brandSx
      )}
      onClick={onBrandClick}
      onKeyDown={activateOnKey}
      role="button"
      tabIndex={0}
      aria-label={title}
    >
      <Box component="img" src={effectiveLogo} alt={`${title} logo`} sx={sxN({ width: 28, height: 28 }, logoSx)} />
      {title && (
        <Typography
          variant="subtitle1"
          sx={sxN({ color: theme.palette.text.primary, fontWeight: 600 }, titleSx)}
        >
          {title}
        </Typography>
      )}
    </Box>
  ) : brandComponent && brandTo ? (
    // SPA routing: use provided brandComponent (e.g., This.GUI Link) with `to`
    <Box
      component={brandComponent as any}
      to={brandTo}
      sx={sxN(
        { display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', cursor: 'pointer' },
        brandSx
      )}
      aria-label={title}
    >
      <Box component="img" src={effectiveLogo} alt={`${title} logo`} sx={sxN({ width: 28, height: 28 }, logoSx)} />
      {title && (
        <Typography
          variant="subtitle1"
          sx={sxN({ color: theme.palette.text.primary, fontWeight: 600 }, titleSx)}
        >
          {title}
        </Typography>
      )}
    </Box>
  ) : homeHref ? (
    // Semantic anchor when a homeHref is provided (SSR/router safe)
    <Box
      component="a"
      href={homeHref}
      sx={sxN(
        { display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', cursor: 'pointer' },
        brandSx
      )}
      aria-label={title}
    >
      <Box component="img" src={effectiveLogo} alt={`${title} logo`} sx={sxN({ width: 28, height: 28 }, logoSx)} />
      {title && (
        <Typography
          variant="subtitle1"
          sx={sxN({ color: theme.palette.text.primary, fontWeight: 600 }, titleSx)}
        >
          {title}
        </Typography>
      )}
    </Box>
  ) : (
    // Non-clickable brand
    <Box
      sx={sxN(
        { display: 'flex', alignItems: 'center', gap: 1, cursor: 'default' },
        brandSx
      )}
      aria-label={title}
    >
      <Box component="img" src={effectiveLogo} alt={`${title} logo`} sx={sxN({ width: 28, height: 28 }, logoSx)} />
      {title && (
        <Typography
          variant="subtitle1"
          sx={sxN({ color: theme.palette.text.primary, fontWeight: 600 }, titleSx)}
        >
          {title}
        </Typography>
      )}
    </Box>
  );

  const renderIcon = (item: SocialLink): React.ReactNode => {
    const { icon, iconColor } = item || {};
    return (
      <Icon
        name={icon}
        iconColor={iconColor}
        {...iconProps}
      />
    );
  };

  const { sx: linkPropsSx, ...restLinkProps } = linkProps || ({} as any);

  return (
    // Footer respects global insets from ThemeProvider
    <Box
      component="footer"
      id={id}
      className={className}
      data-testid={dataTestId}
      sx={sxN(
        {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1,
          pl: { xs: 2, sm: `calc(${effectiveLeftInset} + ${theme.spacing(3)})` },
          pr: { xs: 2, sm: `calc(${effectiveRightInset} + ${theme.spacing(3)})` },
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          transition: 'padding-left 0.3s ease, padding-right 0.3s ease',
          gap: 2,
          boxSizing: 'border-box',
        },
        sx
      )}
    >
      {/* Left cluster: social icons + optional start slot */}
      <Box sx={sxN({ display: 'flex', alignItems: 'center', gap: 1, flex: '0 0 auto', minWidth: 0 }, leftSx)}>
        {socialLinks?.map((item, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              aria-label={typeof item.icon === 'string' ? item.icon : 'social link'}
              {...restLinkProps}
              sx={sxN({ display: 'flex', alignItems: 'center' }, linkPropsSx as any, socialLinkSx)}
            >
              {renderIcon(item)}
            </Link>
          </Box>
        ))}
        {startSlot}
      </Box>

      {/* Center: links stack (responsive) */}
      <Box
        sx={sxN(
          {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            flex: '1 1 auto',
            minWidth: 0,
            flexWrap: isMobile ? 'nowrap' : 'wrap',
            gap: isMobile ? 0.5 : 2,
          },
          centerSx
        )}
      >
        {links?.map(({ label, href, external }, idx) => (
          <Link
            key={`${label}-${idx}`}
            href={href}
            underline="none"
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            {...restLinkProps}
            sx={sxN(
              { color: theme.palette.text.primary, fontSize: 14, fontWeight: 500, '&:hover': { textDecoration: 'underline' } },
              linkPropsSx as any,
              navLinkSx
            )}
          >
            {label}
          </Link>
        ))}
      </Box>

      {/* Right cluster: branding + optional end slot */}
      <Box sx={sxN({ display: 'flex', alignItems: 'center', gap: 2, flex: '0 0 auto', minWidth: 0 }, rightSx)}>
        {Brand}
        {endSlot}
      </Box>
    </Box>
  );
}