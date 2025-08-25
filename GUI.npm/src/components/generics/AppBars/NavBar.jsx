import { useState } from 'react';
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
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useThemeToggle } from '../../../context/ThemeContext';
//routes if no custom routes are provided
const defaultRoutes = [
  { label: 'Home', path: '/', external: false },
  { label: 'neurons.me', path: 'https://neurons.me', external: true }
];

export default function NavBar({
  title = 'neurons.me',
  logo = 'https://neurons.me/neurons.me.png',
  navBarRoutes = [],
  injectThemeToggle = true,
  drawerWidth = 240
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const { isDarkMode, toggleTheme } = useThemeToggle();

  // Merge navBarRoutes first, then append any defaultRoutes not already present (by label)
  const mergedRoutes = [
    ...navBarRoutes,
    ...defaultRoutes.filter(d => !navBarRoutes.some(r => r.label === d.label))
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleGroup = (groupLabel) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupLabel]: !prev[groupLabel],
    }));
  };

  // ✅ Add a recursive renderer for nested children (before return)
  const renderChildren = (children, level = 2) => {
    return (
      <List disablePadding>
        {children.map((child) => {
          const hasNested = Array.isArray(child.children) && child.children.length > 0;
          const isSelected = location.pathname === child.path;

          return (
            <React.Fragment key={child.label}>
              <ListItemButton
                component={child.external ? "a" : Link}
                {...(child.external
                  ? { href: child.path, target: "_blank", rel: "noopener noreferrer" }
                  : { to: child.path })}
                selected={isSelected}
                sx={{
                  position: "relative",
                  mt: 0.2,
                  pl: level * 2 + 1,
                  ml: level > 2 ? 2 : 1,
                  '&::before': {
                    content: '""',
                    position: "absolute",
                    left: `${level * 8}px`,
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    backgroundImage:
                      theme.palette.mode === "light"
                        ? "linear-gradient(rgba(0,0,0,0.2) 40%, transparent 40%)"
                        : "linear-gradient(rgba(255,255,255,0.2) 40%, transparent 40%)",
                    backgroundSize: "1px 6px", // intermitente
                    backgroundRepeat: "repeat-y",
                  },
                  '&::after': {
                    content: '""',
                    position: "absolute",
                    left: `${level * 8}px`,
                    top: "50%",
                    width: "12px",
                    height: "1px",
                    borderTop: `1px dashed ${
                      theme.palette.mode === "light"
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(255,255,255,0.2)"
                    }`,
                  },
                  '& .MuiListItemText-primary': {
                    color: isSelected
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    fontWeight: isSelected ? 500 : 400,
                    fontSize: level === 3 ? "0.85rem" : "0.9rem", // slightly smaller for level 3
                  },
                  '&:hover::after': {
                    borderTop: `1px dashed ${
                      theme.palette.mode === "light"
                        ? theme.palette.primary.light
                        : theme.palette.primary.main
                    }`,
                  },
                }}
                onClick={() => {
                  if (!child.external) {
                    if (isMobile) setMobileOpen(false);
                    navigate(child.path);
                  }
                }}
              >
                <ListItemText primary={child.label} />
              </ListItemButton>

              {hasNested && renderChildren(child.children, level + 1)}
            </React.Fragment>
          );
        })}
      </List>
    );
  };

  const drawer = (
    <Box sx={{ mt: 2, px: 1.5 }}>
      <List>
        {mergedRoutes.map((route) => {
          if (Array.isArray(route.children) && route.children.length > 0) {
            const isOpen = openGroups[route.label] || false;
            if (route.path && !route.external) {
              return (
                <React.Fragment key={route.label}>
                  <Box component={Link} to={route.path} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        toggleGroup(route.label);
                      }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: theme.palette.text.primary,
                          fontWeight: 500
                        }
                      }}
                    >
                      <ListItemText primary={route.label} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </Box>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    {renderChildren(route.children, 2)}
                  </Collapse>
                </React.Fragment>
              );
            } else {
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
                        fontWeight: 500
                      }
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
          }
          // No children: render as before
          return route.external ? (
            <ListItemButton
              key={route.label}
              component="a"
              href={route.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText primary={route.label} />
            </ListItemButton>
          ) : (
            <ListItemButton
              key={route.label}
              component={Link}
              to={route.path}
              selected={location.pathname === route.path}
              sx={{
                '& .MuiListItemText-primary': {
                  color:
                    location.pathname === route.path
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  fontWeight: location.pathname === route.path ? 500 : 400
                }
              }}
              onClick={() => {
                if (isMobile) setMobileOpen(false);
                navigate(route.path);
              }}
            >
              <ListItemText primary={route.label} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider sx={{ mt: 1 }} />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          minHeight: 56,
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.background.nav || '#ffffff'
              : theme.palette.background.paper,
          borderBottom: `1px solid ${theme.custom.border}`,
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 56 }}>
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
              textDecoration: 'none'
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

          {injectThemeToggle && (
            <IconButton
              onClick={toggleTheme}
              sx={{ color: theme.palette.icon.main }}
            >
              {isDarkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
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
              '& .MuiDrawer-paper': { width: drawerWidth, mt: 6 }
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
                paddingTop: 1,
                backgroundColor: theme.palette.background.paper
              }
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}