import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

/**
 * Footer Component – generic and customizable
 * ----------------
 * Accepts props for title, logo, social links, footer links, and drawer insets.
 * Responsive layout with MUI styling.
 *
 * Props:
 * - title: string
 * - logoSrc: string
 * - socialLinks: Array<{ icon: ReactNode, url: string }>
 * - links: Array<{ label: string, href: string }>
 * - leftInset: number (px)  -> reserved space for a persistent LEFT drawer (default 240)
 * - rightInset: number (px) -> reserved space for a persistent RIGHT drawer (default 0)
 */
export default function Footer({
  title = "neurons.me",
  logoSrc = "https://neurons.me/neurons.me.png",
  socialLinks = [],
  links = [],
  leftInset = 240,
  rightInset = 0,
}) {
  const theme = useTheme();
  const socialIcons = {
    Instagram: <InstagramIcon sx={{ fontSize: 24, color: "#E4405F", cursor: "pointer", "&:hover": { opacity: 0.8 } }} />,
    GitHub: <GitHubIcon sx={{ fontSize: 24, color: "inherit", cursor: "pointer", "&:hover": { opacity: 0.8 } }} />,
  };

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: { sm: `${leftInset + 40}px`, xs: '20px' },
        paddingRight: { sm: `${rightInset + 40}px`, xs: '20px' },
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
        transition: 'padding-left 0.3s ease, padding-right 0.3s ease',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "right",
        }}
      >
        <Box sx={{ display: "flex", gap: "12px", marginBottom: "10px" }}>
          {socialLinks.map(({ name, url }, index) => (
            <Box
              key={index}
              sx={{ display: "flex" }}
              onClick={() => window.open(url, "_blank")}
            >
              {socialIcons[name]}
            </Box>
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ textAlign: "right" }}>
          {links.map(({ name, url }, index) => (
            <Link
              key={index}
              href={url}
              underline="none"
              sx={{
                display: "block",
                color: theme.palette.text.primary,
                fontSize: "14px",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {name}
            </Link>
          ))}
        </Box>
      </Box>

      <Box sx={{ marginLeft: "20px" }}>
        <img
          src={logoSrc}
          alt={`${title} logo`}
          style={{ width: "50px", height: "50px" }}
        />
      </Box>
    </Box>
  );
}