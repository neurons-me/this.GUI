import { useMemo, useState } from 'react';

import Theme from '@/gui/Theme/Theme';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Link,
  Paper,
  Progress,
  Switch,
  TextField,
  Typography,
} from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';

import type { Meta, StoryObj } from '@storybook/react';

const accents = {
  aurora: {
    soft: 'linear-gradient(135deg, rgba(31,81,255,0.16), rgba(43,208,169,0.12))',
    strong: 'linear-gradient(135deg, #1f51ff 0%, #2bd0a9 100%)',
    chip: 'primary',
  },
  ember: {
    soft: 'linear-gradient(135deg, rgba(255,111,60,0.14), rgba(255,184,77,0.12))',
    strong: 'linear-gradient(135deg, #ff6f3c 0%, #ffb84d 100%)',
    chip: 'warning',
  },
  monolith: {
    soft: 'linear-gradient(135deg, rgba(115,103,240,0.16), rgba(17,24,39,0.18))',
    strong: 'linear-gradient(135deg, #7367f0 0%, #111827 100%)',
    chip: 'secondary',
  },
} as const;

type AccentKey = keyof typeof accents;
type Status = 'online' | 'offline' | 'reviewing';

const Demo = () => {
  const [name, setName] = useState('Jose Abella');
  const [role, setRole] = useState('Semantic Systems Architect');
  const [headline, setHeadline] = useState('React-first UI scaffolding with design primitives ready on day one.');
  const [status, setStatus] = useState<Status>('online');
  const [count, setCount] = useState(3);
  const [accent, setAccent] = useState<AccentKey>('aurora');
  const [showTelemetry, setShowTelemetry] = useState(true);

  const accentTheme = accents[accent];
  const profileStrength = useMemo(() => {
    const raw = 36 + Math.min(name.trim().length * 2, 18) + Math.min(headline.trim().length / 3, 24) + count * 4;
    return Math.max(28, Math.min(100, Math.round(raw)));
  }, [name, headline, count]);

  const doubled = useMemo(() => count * 2, [count]);

  const applyPreset = (next: AccentKey) => {
    setAccent(next);
    if (next === 'aurora') {
      setStatus('online');
      setHeadline('React-first UI scaffolding with design primitives ready on day one.');
    } else if (next === 'ember') {
      setStatus('reviewing');
      setHeadline('A warmer landing surface for demos, product pages, and operational dashboards.');
    } else {
      setStatus('offline');
      setHeadline('A heavier systems aesthetic for internal control rooms and focused workspaces.');
    }
  };

  return (
    <Theme>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            minHeight: '100vh',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              px: { xs: 2, md: 3 },
              py: 1.25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.nav',
              flexWrap: 'wrap',
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>G</Avatar>
              <Box>
                <Typography variant="subtitle2">.GUI Overview</Typography>
                <Typography variant="caption" sx={{ opacity: 0.66 }}>
                  Design surface for fast app composition
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
              <Chip label={`Status: ${status}`} color={status === 'online' ? 'success' : status === 'offline' ? 'default' : 'warning'} />
              <Link href="https://neurons.me" underline="hover">
                neurons.me
              </Link>
              <Button size="small" variant="outlined" onClick={() => applyPreset('aurora')}>
                Reset
              </Button>
            </Stack>
          </Box>

          <Box
            component="section"
            sx={{
              px: { xs: 2, md: 4 },
              py: { xs: 3, md: 4 },
              background: accentTheme.soft,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ maxWidth: 1180, mx: 'auto' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
                  gap: 3,
                  alignItems: 'stretch',
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderColor: 'transparent',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(14px)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: accentTheme.strong,
                      opacity: 0.12,
                      pointerEvents: 'none',
                    }}
                  />
                  <CardContent sx={{ position: 'relative', p: { xs: 2.5, md: 4 } }}>
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                        <Chip label="React-first" color="primary" variant="filled" />
                        <Chip label="Storybook-ready" variant="outlined" />
                        <Chip label="Design primitives" variant="outlined" />
                      </Stack>

                      <Box>
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            maxWidth: 680,
                            lineHeight: 0.98,
                          }}
                        >
                          Build polished interfaces fast, then shape them into your own visual language.
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ maxWidth: 700, opacity: 0.82 }}>
                        This overview story behaves like a tiny GUI showroom: top bar, hero, form controls,
                        buttons, cards, chips, progress, and a live preview card that reacts as you edit values.
                      </Typography>

                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} alignItems={{ sm: 'center' }}>
                        <Button variant="contained" onClick={() => setStatus(status === 'online' ? 'reviewing' : 'online')}>
                          Toggle Hero Status
                        </Button>
                        <Button variant="outlined" onClick={() => setCount((current) => current + 1)}>
                          Add Module
                        </Button>
                        <Button variant="text" onClick={() => setShowTelemetry((current) => !current)}>
                          {showTelemetry ? 'Hide Telemetry' : 'Show Telemetry'}
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardHeader title="Quick Presets" subheader="Change the visual direction in one click." />
                  <CardContent>
                    <Stack spacing={2}>
                      <Button fullWidth variant={accent === 'aurora' ? 'contained' : 'outlined'} onClick={() => applyPreset('aurora')}>
                        Aurora
                      </Button>
                      <Button fullWidth variant={accent === 'ember' ? 'contained' : 'outlined'} onClick={() => applyPreset('ember')}>
                        Ember
                      </Button>
                      <Button fullWidth variant={accent === 'monolith' ? 'contained' : 'outlined'} onClick={() => applyPreset('monolith')}>
                        Monolith
                      </Button>
                      <Divider />
                      <Typography variant="body2" sx={{ opacity: 0.76 }}>
                        Use stories like this as a visual starting point for app templates, marketing surfaces,
                        internal dashboards, and interactive admin shells.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 4 },
              py: { xs: 3, md: 4 },
            }}
          >
            <Box sx={{ maxWidth: 1180, mx: 'auto' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', xl: '0.95fr 1.05fr' },
                  gap: 3,
                  alignItems: 'start',
                }}
              >
                <Card variant="outlined">
                  <CardHeader title="Live Form" subheader="Edit values and watch the preview update immediately." />
                  <CardContent>
                    <Stack spacing={2.25}>
                      <TextField
                        label="Profile name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                      />
                      <TextField
                        label="Role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                        fullWidth
                      />
                      <TextField
                        label="Headline"
                        value={headline}
                        onChange={(event) => setHeadline(event.target.value)}
                        fullWidth
                        multiline
                        minRows={3}
                      />

                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                          gap: 2,
                        }}
                      >
                        <TextField
                          label="Visible modules"
                          type="number"
                          value={count}
                          onChange={(event) => {
                            const next = Number(event.target.value);
                            setCount(Number.isFinite(next) ? Math.max(0, next) : 0);
                          }}
                          fullWidth
                        />

                        <TextField
                          label="Runtime status"
                          value={status}
                          onChange={(event) => setStatus((event.target.value as Status) || 'online')}
                          fullWidth
                          helperText="Try: online, offline, reviewing"
                        />
                      </Box>

                      <Box
                        sx={{
                          px: 1.5,
                          py: 1.25,
                          borderRadius: 2,
                          bgcolor: 'action.hover',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
                          <Box>
                            <Typography variant="subtitle2">Telemetry Strip</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.72 }}>
                              Toggle a secondary metrics area to test density and layout rhythm.
                            </Typography>
                          </Box>
                          <Switch checked={showTelemetry} onChange={(_, checked) => setShowTelemetry(checked)} />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} width="100%">
                      <Button variant="contained" fullWidth onClick={() => setName('Neuroverse Operator')}>
                        Apply Demo User
                      </Button>
                      <Button variant="outlined" fullWidth onClick={() => setCount((current) => Math.max(0, current - 1))}>
                        Remove Module
                      </Button>
                      <Button variant="text" fullWidth onClick={() => setHeadline('A customizable shell for visual systems, dashboards, and fast-start products.')}>
                        Rewrite Hero Copy
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>

                <Stack spacing={3}>
                  <Card variant="outlined">
                    <CardHeader title="Live Preview" subheader="A compact app shell preview rendered from the form values." />
                    <CardContent>
                      <Paper
                        variant="outlined"
                        sx={{
                          overflow: 'hidden',
                          borderRadius: 3,
                        }}
                      >
                        <Box
                          sx={{
                            px: 2,
                            py: 1.25,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 1.5,
                            background: accentTheme.strong,
                            color: '#fff',
                          }}
                        >
                          <Stack direction="row" spacing={1.25} alignItems="center">
                            <Avatar sx={{ width: 34, height: 34, bgcolor: 'rgba(255,255,255,0.16)' }}>
                              {name.trim().charAt(0) || 'G'}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle2" sx={{ color: 'inherit' }}>
                                {name || 'Unnamed'}
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.76)' }}>
                                {role}
                              </Typography>
                            </Box>
                          </Stack>
                          <Chip
                            label={status}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(255,255,255,0.14)',
                              color: '#fff',
                            }}
                          />
                        </Box>

                        <Box sx={{ p: { xs: 2, md: 2.5 } }}>
                          <Stack spacing={2.5}>
                            <Box>
                              <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: '-0.04em' }}>
                                {headline}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                                gap: 1.5,
                              }}
                            >
                              <Paper variant="outlined" sx={{ p: 1.5 }}>
                                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                  Modules
                                </Typography>
                                <Typography variant="h5">{count}</Typography>
                              </Paper>
                              <Paper variant="outlined" sx={{ p: 1.5 }}>
                                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                  Derived Double
                                </Typography>
                                <Typography variant="h5">{doubled}</Typography>
                              </Paper>
                              <Paper variant="outlined" sx={{ p: 1.5 }}>
                                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                  Profile Strength
                                </Typography>
                                <Typography variant="h5">{profileStrength}%</Typography>
                              </Paper>
                            </Box>

                            <Box>
                              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                Completion
                              </Typography>
                              <Progress
                                variant="determinate"
                                value={profileStrength}
                              />
                            </Box>

                            {showTelemetry ? (
                              <Box
                                sx={{
                                  display: 'grid',
                                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                  gap: 1.5,
                                }}
                              >
                                <Card variant="outlined">
                                  <CardContent>
                                    <Typography variant="subtitle2">Tokens Ready</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.72 }}>
                                      Buttons, cards, chips, progress, switches, links, and form fields are all in play.
                                    </Typography>
                                  </CardContent>
                                </Card>
                                <Card variant="outlined">
                                  <CardContent>
                                    <Typography variant="subtitle2">Preset Family</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.72 }}>
                                      Current accent: <strong>{accent}</strong>
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Box>
                            ) : null}
                          </Stack>
                        </Box>
                      </Paper>
                    </CardContent>
                  </Card>

                  <Card variant="outlined">
                    <CardHeader title="Component Gallery" subheader="A quick pass through common actions and surfaces." />
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} flexWrap="wrap">
                          <Button variant="contained">Primary Action</Button>
                          <Button variant="outlined">Secondary Action</Button>
                          <Button variant="text">Quiet Action</Button>
                          <Chip label="Interactive Chip" color={accentTheme.chip as any} />
                          <Chip label="Neutral Tag" variant="outlined" />
                        </Stack>

                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                            gap: 1.5,
                          }}
                        >
                          <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                              Layout
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.74 }}>
                              Uses cards, nested stacks, CSS grid sections, and surface layering.
                            </Typography>
                          </Paper>
                          <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                              Inputs
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.74 }}>
                              Text fields and switches let you test input density and feedback styling.
                            </Typography>
                          </Paper>
                          <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                              Actions
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.74 }}>
                              Button variants and chips show how control surfaces feel in one compact story.
                            </Typography>
                          </Paper>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Theme>
  );
};

const Home = () => {
  return <Demo />;
};

const meta = {
  title: 'Getting Started/GUI Overview',
  component: Home,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Home>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: () => <Home />,
};
