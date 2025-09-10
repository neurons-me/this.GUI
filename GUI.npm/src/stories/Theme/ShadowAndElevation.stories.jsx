// src/stories/Theme/ShadowAndElevation.stories.jsx
import { Box, Paper, Typography, Grid, Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Theme/Shadows & Elevation',
  parameters: {
    docs: { autodocs: false },
    layout: 'fullscreen',
  },
};

function ShadowCard({ level }) {
  const theme = useTheme();
  const cssValue = theme.shadows?.[level] ?? 'none';
  return (
    <Paper
      elevation={level}
      sx={{ p: 2, height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <Typography variant="subtitle2">elevation: {level}</Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {cssValue}
      </Typography>
    </Paper>
  );
}

function SectionTitle({ children }) {
  return (
    <Typography variant="h5" sx={{ mb: 1.5 }}>
      {children}
    </Typography>
  );
}

const COMMON_STEPS = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];

export const Catalogue = () => {
  const theme = useTheme();
  const total = Array.isArray(theme.shadows) ? theme.shadows.length : 0;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h3" sx={{ mb: 0.5 }}>Shadows & Elevation</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        This catalogue renders Paper components using <code>elevation</code> levels backed by <code>theme.shadows</code>.
        Your theme currently provides <strong>{total}</strong> shadow levels.
      </Typography>

      {/* Common levels */}
      <SectionTitle>Common levels</SectionTitle>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        A quick glance of the most used elevation steps.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {COMMON_STEPS.map((lvl) => (
          <Grid key={`common-${lvl}`} item xs={12} sm={6} md={4} lg={3}>
            <ShadowCard level={lvl} />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Full scale */}
      <SectionTitle>Full scale</SectionTitle>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        Every available index in <code>theme.shadows</code> (0..{Math.max(total - 1, 0)}).
      </Typography>

      <Grid container spacing={2}>
        {Array.from({ length: total || 25 }, (_, i) => i).map((lvl) => (
          <Grid key={`all-${lvl}`} item xs={12} sm={6} md={4} lg={3}>
            <ShadowCard level={lvl} />
          </Grid>
        ))}
      </Grid>

      {/* Notes */}
      <Stack sx={{ mt: 4, color: 'text.secondary' }} spacing={1}>
        <Typography variant="subtitle2">Notes</Typography>
        <Typography variant="caption">
          • The CSS shown inside each card is the raw value from <code>theme.shadows[level]</code>.
        </Typography>
        <Typography variant="caption">
          • You can customize the entire scale via tokens (global <code>shadows</code>) or per-theme overrides.
        </Typography>
      </Stack>
    </Box>
  );
};

Catalogue.storyName = 'Catalogue';