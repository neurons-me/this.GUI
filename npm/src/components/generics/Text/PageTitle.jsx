import { Box, Typography, Divider } from "@mui/material";

/**
 * PageTitle Component
 * Displays a title (h1-h3) and an optional subtitle/description at the top of the page.
 * Meant to be used inside PageContainer for consistency across layouts.
 */
export default function PageTitle({ title, subtitle, level = 1 }) {
  const variants = {
    1: "h4", // main title
    2: "h5", // sub-title
    3: "h6", // sub-sub-title
  };

  const typographyVariant = variants[level] || "h4";

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Typography
        variant={typographyVariant}
        component={`h${level}`}
        sx={{
          fontWeight: 600,
          mb: subtitle ? 0.5 : 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 1.5 }}
        >
          {subtitle}
        </Typography>
      )}
      <Divider />
    </Box>
  );
}
