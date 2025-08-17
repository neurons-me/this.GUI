import { Box, Typography, Divider } from "@mui/material";

/**
 * TextTitle Component
 * Displays a title (h1-h3) and an optional subtitle/description at the top of the page.
 * Meant to be used inside PageContainer for consistency across layouts.
 */
export default function TextTitle({ title, subtitle, h = 1, variant, showDivider = true }) {
  const variants = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  };

  const level = Math.min(Math.max(h, 1), 6);
  const typographyVariant = variant || variants[level];
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
      {showDivider && <Divider />}
    </Box>
  );
}
