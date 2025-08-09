import { Box, Typography } from "@mui/material";

/**
 * PageSection
 * A reusable section container with a title and optional subtitle.
 * Useful for structuring page content within a PageContainer.
 */
export default function Section({ title, subtitle, children, sx = {}, padding, bgcolor }) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        px: padding?.x ?? 2,
        py: padding?.y ?? 2,
        bgcolor: bgcolor ?? "background.paper",
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: subtitle ? 0.5 : 1 }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginBottom: 1 }}
        >
          {subtitle}
        </Typography>
      )}
      {children}
    </Box>
  );
}
