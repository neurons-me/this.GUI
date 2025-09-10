// src/stories/Theme/SpacingAndRadius.stories.jsx
import { Box, Stack, Typography, Paper, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Theme/Spacing & Radius',
  parameters: {
    layout: 'fullscreen',
  },
};

// ————————————————————————————————————————————————
// Helpers
// ————————————————————————————————————————————————
const Row = ({ label, children, hint }) => (
  <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 1 }}>
    <Box sx={{ width: 140 }}>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
      {hint && (
        <Typography variant="caption" sx={{ opacity: 0.7 }}>{hint}</Typography>
      )}
    </Box>
    <Box sx={{ flex: 1 }}>{children}</Box>
  </Stack>
);

// ————————————————————————————————————————————————
// Spacing scale preview (0..8)
// ————————————————————————————————————————————————
function SpacingScaleView() {
  const theme = useTheme();
  // Build a scale of 0..8 using theme.spacing(n)
  const scale = Array.from({ length: 9 }, (_, i) => i);

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Spacing</Typography>
      <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
        The spacing function multiplies the base unit and returns pixel values. Below you can see
        the vertical size for <code>theme.spacing(n)</code> with <code>n = 0..8</code>.
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Stack>
        {scale.map((n) => {
          const px = typeof theme.spacing === 'function' ? theme.spacing(n) : `${Number(theme.spacing || 8) * n}px`;
          const minH = n === 0 ? 1 : undefined;
          return (
            <Row key={n} label={`spacing(${n})`} hint={px}>
              <Box
                sx={{
                  height: px,
                  minHeight: minH,
                  width: '100%',
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.12) 0 8px, transparent 8px) 0 0/16px 100% no-repeat',
                  borderRadius: 1,
                }}
              />
            </Row>
          );
        })}
      </Stack>
    </Paper>
  );
}

// ————————————————————————————————————————————————
// Radius showcase
// ————————————————————————————————————————————————
function RadiusShowcaseView() {
  const theme = useTheme();
  const base = Number(theme.shape?.borderRadius ?? 10);
  const variants = [
    { label: '0 (square)', value: 0 },
    { label: 'sm (½× base)', value: Math.round(base * 0.5) },
    { label: 'md (base)', value: base },
    { label: 'lg (1.5× base)', value: Math.round(base * 1.5) },
    { label: 'xl (2× base)', value: Math.round(base * 2) },
  ];

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Radius</Typography>
      <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
        Shape radius is driven by the global token <code>radius.md</code>. Below are a few
        derived sizes relative to the current base.
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {variants.map((r) => (
          <Stack key={r.label} spacing={1} alignItems="center" sx={{ width: 160 }}>
            <Box
              sx={{
                width: '100%',
                height: 72,
                borderRadius: `${r.value}px`,
                border: (t) => `1px solid ${t.palette.divider}`,
                background: (t) => (t.palette.mode === 'dark' ? t.palette.background.paper : '#fff'),
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{r.label}</Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>{r.value}px</Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

// ————————————————————————————————————————————————
// Stories
// ————————————————————————————————————————————————
export const Spacing = () => (
  <Box sx={{ p: { xs: 2, md: 4 } }}>
    <SpacingScaleView />
  </Box>
);
Spacing.storyName = 'Spacing scale';

export const Radius = () => (
  <Box sx={{ p: { xs: 2, md: 4 } }}>
    <RadiusShowcaseView />
  </Box>
);
Radius.storyName = 'Border radius';