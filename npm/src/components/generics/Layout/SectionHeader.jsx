import { Typography } from "@mui/material";
/**
 * SectionHeader
 * Heading block to use inside Section (optional).
 */
export default function SectionHeader({ title, subtitle, sx = {} }) {
  return (
    <>
      {title && (
        <Typography variant="h4" sx={{ fontWeight: 600, mb: subtitle ? 0.5 : 1, ...sx }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {subtitle}
        </Typography>
      )}
    </>
  );
}