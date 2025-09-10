// src/stories/Theme/BreakPointsAndGrids.stories.jsx
// Storybook: Theme / Breakpoints & Grid
// Pure JSX (no MDX blocks). Demonstrates:
// 1) Reading theme breakpoints
// 2) Live media-query indicators
// 3) Responsive Grid examples (xs/sm/md/lg/xl)
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default {
  title: 'Theme/Breakpoints & Grid',
};

function BreakpointPill({ label, active }) {
  return (
    <Box
      sx={{
        px: 1.25,
        py: 0.5,
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        border: '1px solid',
        borderColor: (t) => (active ? t.palette.primary.main : t.palette.divider),
        color: (t) => (active ? t.palette.primary.main : t.palette.text.secondary),
        backgroundColor: (t) => (active ? t.palette.action.hover : 'transparent'),
        transition: 'all 120ms ease-out',
        minWidth: 52,
        textAlign: 'center',
      }}
    >
      {label}
    </Box>
  );
}

function BreakpointsHeader() {
  const theme = useTheme();
  const { xs, sm, md, lg, xl } = theme.breakpoints.values;

  const mq = {
    xs: useMediaQuery(theme.breakpoints.only('xs')),
    sm: useMediaQuery(theme.breakpoints.only('sm')),
    md: useMediaQuery(theme.breakpoints.only('md')),
    lg: useMediaQuery(theme.breakpoints.only('lg')),
    xl: useMediaQuery(theme.breakpoints.only('xl')),
    upSm: useMediaQuery(theme.breakpoints.up('sm')),
    upMd: useMediaQuery(theme.breakpoints.up('md')),
    upLg: useMediaQuery(theme.breakpoints.up('lg')),
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1.5}>
        <Typography variant="h5">Breakpoints</Typography>
        <Stack direction="row" spacing={1}>
          <BreakpointPill label={`xs ≥ ${xs}px`} active={mq.xs} />
          <BreakpointPill label={`sm ≥ ${sm}px`} active={mq.sm} />
          <BreakpointPill label={`md ≥ ${md}px`} active={mq.md} />
          <BreakpointPill label={`lg ≥ ${lg}px`} active={mq.lg} />
          <BreakpointPill label={`xl ≥ ${xl}px`} active={mq.xl} />
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
        Up queries (live):
      </Typography>
      <Stack direction="row" spacing={1}>
        <BreakpointPill label="≥ sm" active={mq.upSm} />
        <BreakpointPill label="≥ md" active={mq.upMd} />
        <BreakpointPill label="≥ lg" active={mq.upLg} />
      </Stack>
    </Paper>
  );
}

function ValuesTable() {
  const theme = useTheme();
  const { xs, sm, md, lg, xl } = theme.breakpoints.values;

  const Row = ({ name, px }) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: '160px 1fr', py: 0.75, borderTop: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ fontWeight: 600 }}>{name}</Box>
      <Box sx={{ color: 'text.secondary' }}>{px}px</Box>
    </Box>
  );

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Breakpoint values</Typography>
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }} />
      <Row name="xs" px={xs} />
      <Row name="sm" px={sm} />
      <Row name="md" px={md} />
      <Row name="lg" px={lg} />
      <Row name="xl" px={xl} />
    </Paper>
  );
}

function Block({ children }) {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        p: 2,
        textAlign: 'center',
        borderStyle: 'dashed',
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{children}</Typography>
    </Paper>
  );
}

function ResponsiveGridDemo() {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Responsive Grid</Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        This grid uses props like <code>xs</code>, <code>sm</code>, <code>md</code>, etc. Resize the canvas to see items reflow.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><Block>xs=12 sm=6 md=4 lg=3 xl=2</Block></Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>Auto layout</Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Below, items auto-size to content on each breakpoint.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs>
          <Block>xs (auto)</Block>
        </Grid>
        <Grid item xs={6} md={3}>
          <Block>xs=6 md=3</Block>
        </Grid>
        <Grid item xs>
          <Block>xs (auto)</Block>
        </Grid>
      </Grid>
    </Paper>
  );
}

export const Overview = () => (
  <Box sx={{ p: 2, display: 'grid', gap: 2 }}>
    <BreakpointsHeader />
    <ResponsiveGridDemo />
    <ValuesTable />
  </Box>
);

export const ValuesOnly = () => (
  <Box sx={{ p: 2 }}>
    <ValuesTable />
  </Box>
);

export const GridOnly = () => (
  <Box sx={{ p: 2 }}>
    <ResponsiveGridDemo />
  </Box>
);