// src/stories/Theme/Motion.stories.jsx
// CSF stories (no MDX, no @storybook/blocks). Visualizes easing curves and durations
// using values coming from the compiled theme (theme.transitions & theme.custom).
import { Box, Typography, Stack, Paper, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Theme/Motion',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: { autodocs: false },
  },
};

const Row = ({ label, value, children }) => (
  <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 1 }}>
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
      {value && (
        <Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-all' }}>
          {String(value)}
        </Typography>
      )}
    </Box>
    <Box sx={{ flex: 1 }}>{children}</Box>
  </Stack>
);

function EasingDemo({ name, func }) {
  // Animated dot that moves left→right using the provided timing function
  return (
    <Box sx={{ position: 'relative', height: 28 }}>
      <Box sx={{ position: 'absolute', top: 13, left: 0, right: 0, height: 2, bgcolor: 'divider' }} />
      <Box
        sx={{
          position: 'absolute',
          top: 4,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          animationName: 'motion-move',
          animationDuration: '1600ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: func,
          '@keyframes motion-move': {
            '0%': { transform: 'translateX(0px)' },
            '50%': { transform: 'translateX(220px)' },
            '100%': { transform: 'translateX(0px)' },
          },
        }}
        title={`${name}: ${func}`}
      />
    </Box>
  );
}

function DurationDemo({ label, ms, easing }) {
  // Bar that fills to 100% with a given duration
  const timing = easing || 'ease';
  return (
    <Box sx={{ position: 'relative', height: 16, bgcolor: 'action.hover', borderRadius: 1, overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '0%',
          bgcolor: 'secondary.main',
          animationName: 'motion-fill',
          animationDuration: `${ms}ms`,
          animationTimingFunction: timing,
          animationIterationCount: 'infinite',
          '@keyframes motion-fill': {
            '0%': { width: '0%' },
            '50%': { width: '100%' },
            '100%': { width: '0%' },
          },
        }}
        title={`${label}: ${ms}ms`}
      />
    </Box>
  );
}

const Section = ({ title, subtitle, children }) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
    <Typography variant="h5" sx={{ mb: 0.5 }}>{title}</Typography>
    {subtitle && (
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{subtitle}</Typography>
    )}
    {children}
  </Paper>
);

export const Overview = () => {
  const theme = useTheme();

  const easings = [
    { key: 'easeInOut', label: 'easing.easeInOut', value: theme.transitions.easing?.easeInOut },
    { key: 'easeOut',   label: 'easing.easeOut',   value: theme.transitions.easing?.easeOut },
    { key: 'easeIn',    label: 'easing.easeIn',    value: theme.transitions.easing?.easeIn },
    { key: 'sharp',     label: 'easing.sharp',     value: theme.transitions.easing?.sharp },
  ].filter(e => !!e.value);

  const durations = [
    { key: 'shortest',       label: 'duration.shortest',       value: theme.transitions.duration?.shortest },
    { key: 'shorter',        label: 'duration.shorter',        value: theme.transitions.duration?.shorter },
    { key: 'short',          label: 'duration.short',          value: theme.transitions.duration?.short },
    { key: 'standard',       label: 'duration.standard',       value: theme.transitions.duration?.standard },
    { key: 'complex',        label: 'duration.complex',        value: theme.transitions.duration?.complex },
    { key: 'enteringScreen', label: 'duration.enteringScreen', value: theme.transitions.duration?.enteringScreen },
    { key: 'leavingScreen',  label: 'duration.leavingScreen',  value: theme.transitions.duration?.leavingScreen },
  ].filter(d => Number.isFinite(d.value));

  return (
    <Box sx={{ p: 2 }}>
      <Section
        title="Easing"
        subtitle="Values come from tokens → theme.transitions.easing.*. The dot uses that timing function to travel across the rail."
      >
        <Stack spacing={1.5}>
          {easings.map(({ key, label, value }) => (
            <Row key={key} label={label} value={value}>
              <EasingDemo name={label} func={value} />
            </Row>
          ))}
        </Stack>
      </Section>

      <Section
        title="Duration"
        subtitle="Values come from tokens → theme.transitions.duration.*. The bar fills/empties using that duration."
      >
        <Stack spacing={1.5}>
          {durations.map(({ key, label, value }) => (
            <Row key={key} label={label} value={`${value}ms`}>
              <DurationDemo label={label} ms={value} easing={theme.transitions.easing?.easeInOut} />
            </Row>
          ))}
        </Stack>
      </Section>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Notes</Typography>
        <Typography variant="body2" color="text.secondary">
          • All values are compiled from your token files (global + theme overrides).<br/>
          • If a token is missing, sensible fallbacks are used. You can still access raw values under <code>theme.custom</code> if you expose them there.
        </Typography>
      </Paper>
    </Box>
  );
};

export const EasingsOnly = () => {
  const theme = useTheme();
  const easings = [
    { key: 'easeInOut', label: 'easing.easeInOut', value: theme.transitions.easing?.easeInOut },
    { key: 'easeOut',   label: 'easing.easeOut',   value: theme.transitions.easing?.easeOut },
    { key: 'easeIn',    label: 'easing.easeIn',    value: theme.transitions.easing?.easeIn },
    { key: 'sharp',     label: 'easing.sharp',     value: theme.transitions.easing?.sharp },
  ].filter(e => !!e.value);

  return (
    <Box sx={{ p: 2 }}>
      <Section title="Easing">
        <Stack spacing={1.5}>
          {easings.map(({ key, label, value }) => (
            <Row key={key} label={label} value={value}>
              <EasingDemo name={label} func={value} />
            </Row>
          ))}
        </Stack>
      </Section>
    </Box>
  );
};

export const DurationsOnly = () => {
  const theme = useTheme();
  const durations = [
    { key: 'shortest',       label: 'duration.shortest',       value: theme.transitions.duration?.shortest },
    { key: 'shorter',        label: 'duration.shorter',        value: theme.transitions.duration?.shorter },
    { key: 'short',          label: 'duration.short',          value: theme.transitions.duration?.short },
    { key: 'standard',       label: 'duration.standard',       value: theme.transitions.duration?.standard },
    { key: 'complex',        label: 'duration.complex',        value: theme.transitions.duration?.complex },
    { key: 'enteringScreen', label: 'duration.enteringScreen', value: theme.transitions.duration?.enteringScreen },
    { key: 'leavingScreen',  label: 'duration.leavingScreen',  value: theme.transitions.duration?.leavingScreen },
  ].filter(d => Number.isFinite(d.value));

  return (
    <Box sx={{ p: 2 }}>
      <Section title="Duration">
        <Stack spacing={1.5}>
          {durations.map(({ key, label, value }) => (
            <Row key={key} label={label} value={`${value}ms`}>
              <DurationDemo label={label} ms={value} easing={theme.transitions.easing?.easeInOut} />
            </Row>
          ))}
        </Stack>
      </Section>
    </Box>
  );
};
