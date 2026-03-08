import Icon from '@/gui/Theme/Icon/Icon';
import { Box, Divider, Stack, Typography } from '@/gui/atoms';
import { List, ListItem, ListItemIcon, ListItemText } from '@/gui/molecules';
import Card from '@/gui/atoms/Card/Card';
import CardContent from '@/gui/atoms/Card/CardContent/CardContent';
import { EnsureMaterialSymbols } from './GettingStartedHero';

const UsingThisDocsSection = () => {
  const renderIcon = (name: string) => (
    <Icon
      name={name}
      fontSize={28}
      iconColor="currentColor"
      style={{ display: 'inline-flex', lineHeight: 1 }}
    />
  );

  const listTextProps = {
    primaryTypographyProps: {
      variant: 'subtitle1',
      sx: { fontWeight: 500, lineHeight: 1.2, mb: 0.25 },
    },
    secondaryTypographyProps: {
      variant: 'body2',
      sx: { opacity: 0.82, lineHeight: 1.35 },
    },
    sx: {
      my: 0,
      '& .MuiListItemText-primary': {
        marginBottom: '2px',
      },
      '& .MuiListItemText-secondary': {
        marginTop: 0,
      },
    },
  } as const;

  return (
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, pb: 10 }}>
      <EnsureMaterialSymbols />
      <Typography variant="h3" sx={{ mb: 1.5, fontWeight: 700, lineHeight: 1.1 }}>
        How to navigate Storybook
      </Typography>
      <Card variant="outlined">
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack spacing={1} sx={{ maxWidth: 980 }}>
            <Typography variant="body1" sx={{ opacity: 0.88, mb: 0.75 }}>
              Storybook is the fastest way to learn the surface area of This.GUI.
            </Typography>
            <List dense sx={{ pl: 1, py: 0 }}>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('search')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Use the left search to find components"
                  secondary="Try: Layout, TopBar, LeftSidebar, Page, Button, Card"
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('tune')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Open Controls to tweak props live"
                  secondary="Most stories expose the important props via Storybook controls."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('description')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Use the Docs tab for intent + examples"
                  secondary="Docs explain what a component is for, not just how to render it."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('open_in_full')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Use fullscreen / responsive mode"
                  secondary="Layout + Sidebars are best evaluated across multiple widths."
                />
              </ListItem>
            </List>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
              This.GUI architecture (high-level)
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.88, mb: 0.75 }}>
              This.GUI is organized as a composable UI system:
            </Typography>
            <List dense sx={{ pl: 1, py: 0 }}>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('widgets')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Atoms → Molecules → Organisms"
                  secondary="Start small (Button, Box), combine into patterns (Card, Page), then full sections/shells (Layout)."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('palette')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Theme + tokens"
                  secondary="Design stays consistent via theme values + CSS vars (e.g. --gui-primary)."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('space_dashboard')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Layout shell"
                  secondary="TopBar / Sidebars / Footer cooperate by updating insets so content aligns automatically."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('route')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Routing + registries"
                  secondary="Router / Registry are the glue for declarative navigation and component lookup across namespaces."
                />
              </ListItem>
              <ListItem sx={{ py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 44, color: 'text.primary' }}>
                  {renderIcon('handshake')}
                </ListItemIcon>
                <ListItemText
                  {...listTextProps}
                  primary="Contexts + hooks"
                  secondary="Providers establish shared state (sidebar view, theme mode). Hooks read/write that state cleanly."
                />
              </ListItem>
            </List>
            <Typography variant="body2" sx={{ opacity: 0.72, mt: 0.5 }}>
              Tip: If something looks wrong, jump to the matching story under Layout / Sidebars / Theme — it’s the source of truth for intended behavior.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsingThisDocsSection;
