import Theme from '@/gui/Theme/Theme';
import Icon from '@/gui/Theme/Icon/Icon';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import Catalog from '@/gui/Theme/Catalog/Catalog';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  Grid,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@/gui/atoms';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@/gui/molecules';
import Card from '@/gui/atoms/Card/Card';
import CardActions from '@/gui/atoms/Card/CardActions/CardActions';
import CardContent from '@/gui/atoms/Card/CardContent/CardContent';
import CardHeader from '@/gui/atoms/Card/CardHeader/CardHeader';
import TextField from '@/gui/atoms/TextField/TextField';

const Home = () => {
  return (
  <Theme>
  <Box
    sx={{
      minHeight: '100vh',
      color: 'text.primary',
    }}
  >
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '21vh',
        padding: 5,
        textAlign: 'center',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          component="img"
          src="GUI.png"
          alt=".GUI"
          sx={{ width: 72, height: 'auto', imageRendering: 'auto' }}
        />
        <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: '-0.04em' }}>
          .GUI Overview
        </Typography>
      </Stack>
    </Box>
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, pb: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Layout preview
      </Typography>
      <Paper variant="outlined" sx={{ overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            backgroundColor: 'background.nav',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ width: 28, height: 28 }}>G</Avatar>
            <Typography variant="subtitle2">TopBar</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small">
              <Icon name="search" />
            </IconButton>
            <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '72px 1fr 68px',
            minHeight: 220,
          }}
        >
          <Box
            sx={{
              borderRight: '1px solid',
              borderColor: 'divider',
              py: 2,
              px: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
              backgroundColor: 'background.nav',
            }}
          >
            {['dashboard', 'hub', 'bolt', 'settings'].map((name) => (
              <IconButton key={name} size="small">
                <Icon name={name} />
              </IconButton>
            ))}
          </Box>
          <Box sx={{ p: 2, display: 'grid', gap: 1.5 }}>
            <Typography variant="subtitle1">Content</Typography>
            <Card variant="outlined">
              <CardHeader title="Hero / Page" subheader="Core molecules" />
              <CardContent>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Compose sections with Cards, Grids, and layout-aware spacing.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action</Button>
                <Button size="small" variant="outlined">
                  Secondary
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            sx={{
              borderLeft: '1px solid',
              borderColor: 'divider',
              py: 2,
              px: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
              backgroundColor: 'background.nav',
            }}
          >
            <Tooltip title="Right sidebar">
              <IconButton size="small">
                <Icon name="insights" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton size="small">
                <Icon name="notifications" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            px: 2,
            py: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.nav',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption">Footer</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Link href="https://neurons.me" underline="hover">
            Docs
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link href="https://neurons.me" underline="hover">
            Support
            </Link>
          </Stack>
        </Box>
      </Paper>
    </Box>
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, pb: 8 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Component sampler
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
      }}
    >
        <Card variant="outlined">
          <CardHeader title="Buttons & actions" />
          <CardContent>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Button variant="contained" startIcon={<Icon name="auto_awesome" />}>
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Outline
              </Button>
              <IconButton size="small" color="primary">
                <Icon name="favorite" />
              </IconButton>
              <Tooltip title="IconButton + Tooltip">
                <IconButton size="small">
                  <Icon name="bolt" />
                </IconButton>
              </Tooltip>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Inputs & toggles" />
          <CardContent>
            <Stack spacing={1.5}>
              <TextField size="small" label="Search" placeholder="Type a query" />
              <Stack direction="row" spacing={1} alignItems="center">
                <Switch defaultChecked />
                <Typography variant="body2">Notifications</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Lists & navigation" />
          <CardContent>
            <List dense>
              {[
                { label: 'Overview', icon: 'dashboard' },
                { label: 'Experiments', icon: 'science' },
                { label: 'Models', icon: 'memory' },
              ].map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon name={item.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Grid layouts" />
          <CardContent>
            <Grid container spacing={1.5}>
              {[1, 2, 3, 4].map((i) => (
                <Grid item xs={6} md={3} key={i}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 1.5,
                      textAlign: 'center',
                      borderStyle: 'dashed',
                      borderColor: 'divider',
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="caption">Grid cell {i}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Avatars & tooltips" />
          <CardContent>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1}>
                {['A', 'B', 'C', 'D'].map((label) => (
                  <Tooltip title={`User ${label}`} key={label}>
                    <Avatar sx={{ width: 32, height: 32 }}>{label}</Avatar>
                  </Tooltip>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                {['info', 'favorite', 'bolt'].map((name) => (
                  <Tooltip title={name} key={name}>
                    <IconButton size="small" color="primary">
                      <Icon name={name} />
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Data display" />
          <CardContent>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                <Typography variant="body2">Avatar + Typography</Typography>
              </Stack>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Signal</TableCell>
                    <TableCell align="right">Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { label: 'Attention', score: '0.92' },
                    { label: 'Recall', score: '0.86' },
                  ].map((row) => (
                    <TableRow key={row.label}>
                      <TableCell>{row.label}</TableCell>
                      <TableCell align="right">{row.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, pb: 8 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Interface gallery
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
        }}
      >
        <Card variant="outlined">
          <CardHeader title="Dashboard surface" subheader="Cards, metrics, lists, and quick actions" />
          <CardContent>
            <Grid container spacing={1.5}>
              {[
                { label: 'Signals', value: '24', icon: 'insights' },
                { label: 'Routes', value: '08', icon: 'route' },
                { label: 'Themes', value: '07', icon: 'palette' },
              ].map((tile) => (
                <Grid item xs={4} key={tile.label}>
                  <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
                    <Stack spacing={0.5}>
                      <Icon name={tile.icon} />
                      <Typography variant="caption" sx={{ opacity: 0.72 }}>
                        {tile.label}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {tile.value}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12} md={7}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(17,35,52,0.96) 0%, rgba(12,16,25,0.92) 100%)',
                  }}
                >
                  <Typography variant="overline" sx={{ opacity: 0.7 }}>
                    Runtime card
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.75 }}>
                    Declarative shell, visual output.
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.82, mb: 1.5 }}>
                    Use the same visual language for docs, dashboards, and runtime-driven screens.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="contained" startIcon={<Icon name="play_arrow" />}>
                      Mount
                    </Button>
                    <Button size="small" variant="outlined" startIcon={<Icon name="code" />}>
                      Inspect
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2, height: '100%' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Activity feed
                  </Typography>
                  <List dense>
                    {[
                      { label: 'Theme switched', hint: 'neurons.me -> GhostShell', icon: 'palette' },
                      { label: 'Route resolved', hint: '/runtime/overview', icon: 'route' },
                      { label: 'Action fired', hint: "me/public/status = 'active'", icon: 'bolt' },
                    ].map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon name={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.label} secondary={item.hint} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Stack spacing={2}>
          <Card variant="outlined">
            <CardHeader title="Theme gallery" subheader="Theming is part of the product surface" />
            <CardContent sx={{ p: 1.25 }}>
              <Catalog minimal />
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title="Compact control panel" subheader="Dense controls for app shells" />
            <CardContent>
              <Stack spacing={1.5}>
                <TextField size="small" label="Workspace" defaultValue="Neuroverse" />
                <TextField size="small" label="Semantic path" defaultValue="me/views/dashboard/title" />
                <Stack direction="row" spacing={1} alignItems="center">
                  <Switch defaultChecked />
                  <Typography variant="body2">Live mode</Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Button size="small" variant="contained">Save</Button>
                  <Button size="small" variant="outlined">Preview</Button>
                  <Button size="small" variant="text">Reset</Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, pb: 8 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Patterns
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: 860, opacity: 0.85, mb: 2 }}>
        Quick, copy/paste-friendly examples of common patterns used across This.GUI.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        <Card variant="outlined">
          <CardHeader title="Icon + tokens" subheader="Material Symbols + GUI CSS vars" />
          <CardContent>
            <Stack spacing={1.25}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Icons come from Material Symbols. Colors typically use GUI tokens like{' '}
                <code>var(--gui-primary)</code>.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                <Icon name="auto_awesome" style={{ color: 'var(--gui-primary)' }} />
                <Icon name="insights" style={{ color: 'var(--gui-info)' }} />
                <Icon name="warning" style={{ color: 'var(--gui-warning)' }} />
                <Icon name="error" style={{ color: 'var(--gui-error)' }} />
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  (These are just icons + tokens — minimal + readable.)
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Actions + feedback" subheader="Tooltip, loading, disabled" />
          <CardContent>
            <Stack spacing={1.25}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Common micro-interactions: tooltip hints, disabled states, and icon-first actions.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
                <Tooltip title="Primary action">
                  <span>
                    <Button variant="contained" startIcon={<Icon name="bolt" />}>
                      Run
                    </Button>
                  </span>
                </Tooltip>
                <Button variant="outlined" disabled startIcon={<Icon name="lock" />}>
                  Restricted
                </Button>
                <Tooltip title="Copy">
                  <IconButton size="small">
                    <Icon name="content_copy" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open">
                  <IconButton size="small">
                    <Icon name="open_in_new" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Navigation row" subheader="Link + secondary text" />
          <CardContent>
            <List dense>
              {[
                { label: 'Docs', icon: 'menu_book', hint: 'Read the component guides' },
                { label: 'Storybook', icon: 'auto_stories', hint: 'Browse atoms → organisms' },
                { label: 'GitHub', icon: 'code', hint: 'Source + issues + PRs' },
              ].map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon name={item.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item.label} secondary={item.hint} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Declarative layout (mental model)" subheader="Think: config → shell" />
          <CardContent>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1.25 }}>
              Most UI in This.GUI can be expressed as a config object that maps to components.
              (Storybook stories are a great place to see what props matter.)
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.25, borderRadius: 2, backgroundColor: 'background.nav' }}>
              <Typography
                component="pre"
                sx={{
                  m: 0,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 12,
                  lineHeight: 1.4,
                  whiteSpace: 'pre-wrap',
                  color: 'text.primary',
                }}
              >{`{
  "type": "Layout",
  "props": {
    "topBarConfig": { "title": "Workspace" },
    "leftSidebarConfig": {
      "elements": [
        { "type": "link", "props": { "label": "Dashboard", "icon": "dashboard" } },
        { "type": "link", "props": { "label": "Insights", "icon": "insights" } }
      ]
    }
  }
}`}</Typography>
          </Paper>
          </CardContent>
        </Card>
      </Box>
    </Box>
      <Typography
        variant="caption"
        sx={{
          maxWidth: 640,
          mb: 3,
          mx: 'auto',
          opacity: 0.48,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Veracruz, Mexico
      </Typography>
  </Box>
    </Theme>
  );
};
import type { Meta, StoryObj } from '@storybook/react';
const meta = {
  title: 'Getting Started/GUI Overview',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => <Home />,
};
