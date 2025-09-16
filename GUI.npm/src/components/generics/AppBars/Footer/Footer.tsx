import { Box, Typography, Link } from "@/gui/primitives";
import { useGuiTheme, useGuiMediaQuery } from "@/gui";
import Icon from "../../../../themes/icons/Icon";
import type * as React from 'react';

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  icon: string | React.ReactNode;
  href: string;
  iconColor?: string;
};

export type FooterProps = {
  title?: string;
  logoSrc?: string;
  homeHref?: string;
  onBrandClick?: () => void;
  socialLinks?: SocialLink[];
  links?: LinkItem[];
  leftInset?: number;
  rightInset?: number;
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  linkProps?: React.ComponentProps<typeof Link>;
  iconProps?: Record<string, any>;
};

export default function Footer({
  title = "neurons.me",
  logoSrc,
  homeHref,
  onBrandClick,
  socialLinks = [],
  links = [],
  leftInset,
  rightInset,
  startSlot,
  endSlot,
  linkProps,
  iconProps,
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

  const Brand = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: homeHref || onBrandClick ? "pointer" : "default",
      }}
      onClick={() => {
        if (onBrandClick) onBrandClick();
        else if (homeHref) window.location.assign(homeHref);
      }}
      role={homeHref || onBrandClick ? "button" : undefined}
      aria-label={title}
    >
      <img src={effectiveLogo} alt={`${title} logo`} style={{ width: 28, height: 28 }} />
      {title && (
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );

  const renderIcon = (item: SocialLink): React.ReactNode => {
    const { icon, iconColor } = item || {};
    if (!icon) return null;
    if (typeof icon === "string") {
      // Declarative via registry
      return (
        <Icon
          name={icon}
          iconColor={iconColor}
          size={20}
          {...iconProps}
        />
      );
    }
    // React element provided directly
    return icon;
  };

  return (
    // Footer respects global insets from ThemeProvider
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1,
        pl: {
          xs: 2,
          sm: `calc(${effectiveLeftInset} + ${theme.spacing(5)})`, // +40px baseline padding
        },
        pr: {
          xs: 2,
          sm: `calc(${effectiveRightInset} + ${theme.spacing(5)})`,
        },
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
        transition: "padding-left 0.3s ease, padding-right 0.3s ease",
        gap: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Left cluster: social icons + optional start slot */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {socialLinks?.map((item, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ display: "flex", alignItems: "center" }}
              aria-label={typeof item.icon === "string" ? item.icon : "social link"}
              {...linkProps}
            >
              {renderIcon(item)}
            </Link>
          </Box>
        ))}
        {startSlot}
      </Box>

      {/* Center: links stack (responsive) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 0.5 : 2,
        }}
      >
        {links?.map(({ label, href, external }, idx) => (
          <Link
            key={`${label}-${idx}`}
            href={href}
            underline="none"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            sx={{
              color: theme.palette.text.primary,
              fontSize: 14,
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
            {...linkProps}
          >
            {label}
          </Link>
        ))}
      </Box>

      {/* Right cluster: branding + optional end slot */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {Brand}
        {endSlot}
      </Box>
    </Box>
  );
}