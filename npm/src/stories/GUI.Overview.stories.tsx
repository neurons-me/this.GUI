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
        <Paper
          variant="outlined"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: 0,
          }}
        >
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
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component="section"
              sx={{
                minHeight: '72vh',
                display: 'grid',
                placeItems: 'center',
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 3 },
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 820 }}>
                <Card variant="outlined">
                  <CardHeader title="Content" subheader="Hero / Page" />
                  <CardContent>
                    <Stack spacing={3} alignItems="center" textAlign="center">
                      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
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
                      <Stack spacing={1} alignItems="center">
                        <Typography variant="h5">Core molecules</Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 560 }}>
                          Compose sections with Cards, Grids, and layout-aware spacing.
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box
              component="section"
              sx={{
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 960, mx: 'auto' }}>
                <Card variant="outlined">
                  <CardHeader title="Section 1" subheader="First content block" />
                  <CardContent>
                    <Typography variant="body1" sx={{ opacity: 0.82 }}>
                      A clean section for introducing the first layer of the system, keeping the layout
                      simple, readable, and aligned with the main showcase.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box
              component="section"
              sx={{
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 960, mx: 'auto' }}>
                <Card variant="outlined">
                  <CardHeader title="Section 2" subheader="Second content block" />
                  <CardContent>
                    <Typography variant="body1" sx={{ opacity: 0.82 }}>
                      Another landing-page section to present structure, composition, and visual rhythm
                      without adding unnecessary complexity.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box
              component="section"
              sx={{
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 960, mx: 'auto' }}>
                <Card variant="outlined">
                  <CardHeader title="Section 3" subheader="Third content block" />
                  <CardContent>
                    <Typography variant="body1" sx={{ opacity: 0.82 }}>
                      A final section to close the page with one more simple block before the footer.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
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
