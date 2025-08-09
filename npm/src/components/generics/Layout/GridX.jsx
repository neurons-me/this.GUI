import { Grid, Box, Typography } from '@mui/material';

/**
 * PageGrid
 * Standardized grid container for organizing content in pages.
 *
 * Props:
 * - items: Array of { title, content, xs, md }
 * - spacing: Grid spacing (default 3)
 * - sx: Additional styling for the Box wrapper
 */
export default function GridX({ items = [], spacing = 3, sx = {} }) {
  return (
    <Box sx={{ width: '100%', mt: 2, ...sx }}>
      <Grid container spacing={spacing}>
        {items.map((item, index) => (
          <Grid item xs={item.xs || 12} md={item.md || 6} key={index}>
            {item.title && (
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                {item.title}
              </Typography>
            )}
            {item.content}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
