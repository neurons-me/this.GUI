import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  useTheme,
  useMediaQuery,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ThemeSelector from '../../Theme/ThemeSelector';

export default function TopBarAndSideBar({
  title = 'neurons.me',
  logo = 'https://neurons.me/neurons.me.png',
  sideBarLinks = [],
  injectThemeToggle = true,
  drawerWidth = 240,
  contexts = {},
  topNavLinks = [],
  topic = null
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  // Use topic prop as the sole source of truth for context
  const effectiveContext = topic;

  const handleMenuOpen = (event, label) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleGroup = (groupLabel) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupLabel]: !prev[groupLabel],
    }));
  };


  const renderChildren = (children, level = 2) => (
    <List disablePadding>
      {children.map((child) => {
        const hasNested = Array.isArray(child.children) && child.children.length > 0;
        const isSelected = location.pathname === child.path;

        return (
          <React.Fragment key={child.label}>
            <ListItemButton
              component={child.external ? 'a' : Link}
              {...(child.external
                ? { href: child.path, target: '_blank', rel: 'noopener noreferrer' }
                : { to: child.path })}
              selected={isSelected}
              style={{ color: theme.palette.text.primary, textDecoration: 'none' }}
              sx={{
                position: 'relative',
                mt: 0.2,
                pl: level * 2 + 1,
                ml: level > 2 ? 2 : 1,
                color: theme.palette.text.primary,
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: theme.palette.text.primary,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: `${level * 8}px`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundImage:
                    theme.palette.mode === 'light'
                      ? 'linear-gradient(rgba(0,0,0,0.2) 40%, transparent 40%)'
                      : 'linear-gradient(rgba(255,255,255,0.2) 40%, transparent 40%)',
                  backgroundSize: '1px 6px',
                  backgroundRepeat: 'repeat-y',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: `${level * 8}px`,
                  top: '50%',
                  width: '12px',
                  height: '1px',
                  borderTop: `1px dashed ${
                    theme.palette.mode === 'light'
                      ? 'rgba(0,0,0,0.2)'
                      : 'rgba(255,255,255,0.2)'
                  }`,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.text.primary,
                  fontWeight: isSelected ? 500 : 400,
                  fontSize: level === 3 ? '0.85rem' : '0.9rem',
                },
                '&:hover::after': {
                  borderTop: `1px dashed ${theme.palette.text.secondary}`,
                },
              }}
              onClick={() => {
                if (!child.external) {
                  if (isMobile) setMobileOpen(false);
                  navigate(child.path);
                }
              }}
            >
              {child.icon && (
                <Box sx={{ minWidth: 24, mr: 1 }}>
                  {React.createElement(child.icon)}
                </Box>
              )}
              <ListItemText primary={child.label} />
            </ListItemButton>

            {hasNested && renderChildren(child.children, level + 1)}
          </React.Fragment>
        );
      })}
    </List>
  );

  const drawer = (
    <>
      <Box sx={{ overflowY: 'auto', height: '100%' }}>
        {/* Sticky section/context dropdown + divider in sidebar */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            backgroundColor: theme.palette.background.paper,
            height: '78px',
            minHeight: '78px',
            maxHeight: '78px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {Object.keys(contexts).length > 1 && (
            <Box
              sx={{
                px: 0,
                pt: 1.68,
                pb: 1.25,
                mb: 2,
                mt: 3.33,
              }}
            >
              <FormControl
                fullWidth
                sx={{
                  minHeight: '21px',
                  width: '100%',
                  mx: 'auto',
                  px: 2
                }}
              >
                <InputLabel id="context-select-label" sx={{ pl: 2.5 }}>Topic</InputLabel>
                <Select
                  labelId="context-select-label"
                  id="context-select"
                  value={topic}
                  label="Section"
                  onChange={(e) => {
                    const selected = e.target.value;
                    const firstLink = contexts[selected]?.[0]?.path || '/';
                    navigate(firstLink);
                  }}
                  sx={{
                    fontSize: '0.85rem',
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.default,
                    '& .MuiSelect-icon': { color: theme.palette.text.primary },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.divider,
                    },
                    height: 42,
                    paddingTop: '4px',
                    paddingBottom: '4px'
                  }}
                >
                  {Object.keys(contexts).map((ctx) => (
                    <MenuItem key={ctx} value={ctx}>
                      {ctx}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Divider sx={{ position: 'relative', left: 0, right: 0, width: '100%', mt: 2 }} />
            </Box>
          )}
          {Object.keys(contexts).length <= 1 && (
            <Divider sx={{ mx: -1.5 }} />
          )}
        </Box>
        <List>
          {/* keep sidebar link rendering as it is */}
          {(
            Object.keys(contexts).length > 0
              ? contexts[effectiveContext] || []
              : sideBarLinks
          ).length > 0 ? (
            (Object.keys(contexts).length > 0
              ? contexts[effectiveContext] || []
              : sideBarLinks
            ).map((route) => {
              if (Array.isArray(route.children) && route.children.length > 0) {
                const isOpen = openGroups[route.label] || false;
                return (
                  <React.Fragment key={route.label}>
                    <ListItemButton
                      onClick={() => {
                        if (route.path) {
                          if (route.external) {
                            window.open(route.path, '_blank');
                          } else {
                            navigate(route.path);
                            if (isMobile) setMobileOpen(false);
                          }
                        }
                        if (!route.path || !route.external) {
                          toggleGroup(route.label);
                        }
                      }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        },
                      }}
                    >
                      <ListItemText primary={route.label} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      {renderChildren(route.children, 2)}
                    </Collapse>
                  </React.Fragment>
                );
              }
              return route.external ? (
                <ListItemButton
                  key={route.label}
                  component="a"
                  href={route.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {route.icon && (
                    <Box sx={{ minWidth: 24, mr: 1 }}>
                      {React.createElement(route.icon)}
                    </Box>
                  )}
                  <ListItemText primary={route.label} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  key={route.label}
                  component={Link}
                  to={route.path}
                  selected={location.pathname === route.path}
                  style={{ color: theme.palette.text.primary, textDecoration: 'none' }}
                  sx={{
                    color: theme.palette.text.primary,
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      color: theme.palette.text.primary,
                    },
                    '& .MuiListItemText-primary': {
                      color: theme.palette.text.primary,
                      fontWeight: location.pathname === route.path ? 500 : 400,
                    },
                  }}
                  onClick={() => {
                    if (isMobile) setMobileOpen(false);
                    navigate(route.path);
                  }}
                >
                  {route.icon && (
                    <Box sx={{ minWidth: 24, mr: 1 }}>
                      {React.createElement(route.icon)}
                    </Box>
                  )}
                  <ListItemText primary={route.label} />
                </ListItemButton>
              );
            })
          ) : (
            <ListItemText primary="No Available Routes." />
          )}
        </List>
        <Divider sx={{ mx: -1.5 }} />
      </Box>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          minHeight: 48,
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.background.nav || '#ffffff'
              : theme.palette.background.paper,
          borderBottom: `1px solid ${theme.custom.border}`,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 48 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: theme.palette.icon.main }} />
            </IconButton>
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              textDecoration: 'none',
            }}
            component={Link}
            to="/"
          >
            {logo && (
              <img
                src={logo}
                alt={`${title} logo`}
                style={{ height: 28, marginRight: 6 }}
              />
            )}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: theme.palette.text.primary }}
            >
              {title}
            </Typography>
          </Box>

          {/* Context dropdown moved to sidebar */}

          {/* Links en TopBar */}
          {topNavLinks.map((link) => {
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;
            if (hasChildren) {
              return (
                <Box key={link.label} sx={{ ml: 2 }}>
                  <Button
                    onClick={(e) => handleMenuOpen(e, link.label)}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: theme.palette.text.secondary
                      }
                    }}
                  >
                    {link.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu === link.label}
                    onClose={handleMenuClose}
                  >
                    {link.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={child.external ? "a" : Link}
                        {...(child.external
                          ? { href: child.path, target: "_blank", rel: "noopener noreferrer" }
                          : { to: child.path })}
                        onClick={() => {
                          if (!child.external) navigate(child.path);
                          handleMenuClose();
                        }}
                      >
                        {child.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              );
            }
            return (
              <Button
                key={link.label}
                component={link.external ? "a" : Link}
                {...(link.external
                  ? { href: link.path, target: "_blank", rel: "noopener noreferrer" }
                  : { to: link.path })}
                sx={{
                  ml: 2,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.text.secondary
                  }
                }}
                onClick={() => {
                  if (!link.external) navigate(link.path);
                }}
                style={{ color: theme.palette.text.primary, textDecoration: 'none' }}
              >
                {link.label}
              </Button>
            );
          })}

          {injectThemeToggle && (
            <ThemeSelector />
          )}
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="navigation links"
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                mt: 6,
                height: 'calc(100vh - 48px)',
                overflowY: 'auto'
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                top: 48,
                height: 'calc(100vh - 48px)',
                paddingTop: 1,
                backgroundColor: theme.palette.background.paper,
                overflowY: 'auto'
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}