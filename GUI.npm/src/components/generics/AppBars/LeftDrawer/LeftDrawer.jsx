import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Icon from '../../../../icons/Icon';
/**
 * LeftDrawer (navigation)
 *
 * Controlled props (preferred):
 *  - open?: boolean           // for temporary drawer on mobile
 *  - onClose?: () => void     // close callback for temporary drawer
 *
 * Data props:
 *  - drawerWidth?: number = 240
 *  - drawerLinks?: Array<RouteItem> = []   // full declarative menu for this layout
 *
 * RouteItem shape:
 *  {
 *    label: string,
 *    path?: string,
 *    external?: boolean,
 *    icon?: ReactNode | Component | string,    // e.g. 'mui:Settings' or 'lucide:home' via registry
 *    iconColor?: string,                       // CSS color or theme key (e.g. '#00aa96', 'primary')
 *    children?: RouteItem[]
 *  }
 */
export default function LeftDrawer({
  open: openProp,
  onClose,
  drawerWidth = 240,
  drawerLinks = [],
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = typeof openProp === 'boolean' ? openProp : internalOpen;
  const handleToggle = () => {
    if (typeof openProp === 'boolean') {
      onClose && onClose();
    } else {
      setInternalOpen((v) => !v);
    }
  };
  const [openGroups, setOpenGroups] = useState({});
  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderChildren = (children, level = 2) => (
    <List disablePadding>
      {children.map((child, idx) => {
        const hasNested = Array.isArray(child.children) && child.children.length > 0;
        const isSelected = child.path && location.pathname === child.path;
        const nodeId = child.path || `${child.label}-${level}-${idx}`;
        const toProps = child.external
          ? { component: 'a', href: child.path, target: '_blank', rel: 'noopener noreferrer' }
          : { component: RouterLink, to: child.path || '#' };
        return (
          <React.Fragment key={nodeId}>
            <ListItemButton
              {...toProps}
              selected={!!isSelected}
              onClick={(e) => {
                // Navigate if applicable
                if (!child.external && child.path) {
                  navigate(child.path);
                  if (isMobile) handleToggle();
                }
                // Toggle collapse when it has nested children
                if (hasNested) {
                  e.preventDefault();
                  toggleGroup(nodeId);
                }
              }}
              sx={{
                position: 'relative',
                mt: 0.2,
                pl: level * 2 + 1,
                ml: level > 2 ? 2 : 1,
                color: theme.palette.text.primary,
                '&.Mui-selected': { backgroundColor: 'transparent', color: theme.palette.text.primary },
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
                    theme.palette.mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'
                  }`,
                },
                '& .MuiListItemText-primary': {
                  color: theme.palette.text.primary,
                  fontWeight: isSelected ? 500 : 400,
                  fontSize: level === 3 ? '0.85rem' : '0.9rem',
                },
                '&:hover::after': { borderTop: `1px dashed ${theme.palette.text.secondary}` },
              }}
            >
              {child.icon ? (
                <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                  {typeof child.icon === 'string' ? (
                    <Icon name={child.icon} color={child.iconColor} size={18} />
                  ) : typeof child.icon === 'function' ? (
                    React.createElement(child.icon)
                  ) : (
                    child.icon
                  )}
                </ListItemIcon>
              ) : null}
              <ListItemText primary={child.label} />
              {hasNested ? (openGroups[nodeId] ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
            {hasNested ? (
              <Collapse in={!!openGroups[nodeId]} timeout="auto" unmountOnExit>
                {renderChildren(child.children, level + 1)}
              </Collapse>
            ) : null}
          </React.Fragment>
        );
      })}
    </List>
  );

  const listContent = (
    <Box sx={{ overflowY: 'auto', height: '100%' }}>
      <Divider sx={{ mx: -1.5 }} />
      {/* Navigation tree */}
      <List>
        {drawerLinks.map(
          (route) => {
            const hasChildren = Array.isArray(route.children) && route.children.length > 0;
            if (hasChildren) {
              const isOpen = !!openGroups[route.label];
              return (
                <React.Fragment key={route.label}>
                  <ListItemButton
                    onClick={() => {
                      if (route.path) {
                        if (route.external) {
                          window.open(route.path, '_blank');
                        } else {
                          navigate(route.path);
                          if (isMobile) handleToggle();
                        }
                      }
                      if (!route.path || !route.external) toggleGroup(route.label);
                    }}
                    sx={{
                      '& .MuiListItemText-primary': { color: theme.palette.text.primary, fontWeight: 500 },
                    }}
                  >
                    {route.icon ? (
                      <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                        {typeof route.icon === 'string' ? (
                          <Icon name={route.icon} color={route.iconColor} size={18} />
                        ) : typeof route.icon === 'function' ? (
                          React.createElement(route.icon)
                        ) : (
                          route.icon
                        )}
                      </ListItemIcon>
                    ) : null}
                    <ListItemText primary={route.label} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    {renderChildren(route.children, 2)}
                  </Collapse>
                </React.Fragment>
              );
            }
            const toProps = route.external
              ? { component: 'a', href: route.path, target: '_blank', rel: 'noopener noreferrer' }
              : { component: RouterLink, to: route.path || '#' };
            const isSelected = route.path && location.pathname === route.path;
            return (
              <ListItemButton
                key={route.label}
                {...toProps}
                selected={!!isSelected}
                onClick={() => {
                  if (!route.external && route.path) {
                    navigate(route.path);
                    if (isMobile) handleToggle();
                  }
                }}
                sx={{
                  color: theme.palette.text.primary,
                  '&.Mui-selected': { backgroundColor: 'transparent', color: theme.palette.text.primary },
                  '& .MuiListItemText-primary': {
                    color: theme.palette.text.primary,
                    fontWeight: isSelected ? 500 : 400,
                  },
                }}
              >
                {route.icon ? (
                  <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                    {typeof route.icon === 'string' ? (
                      <Icon name={route.icon} color={route.iconColor} size={18} />
                    ) : typeof route.icon === 'function' ? (
                      React.createElement(route.icon)
                    ) : (
                      route.icon
                    )}
                  </ListItemIcon>
                ) : null}
                <ListItemText primary={route.label} />
              </ListItemButton>
            );
          }
        )}
      </List>
      <Divider sx={{ mx: -1.5 }} />
    </Box>
  );

  // Choose variant by breakpoint
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose || handleToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            mt: 6,
            height: 'calc(100vh - 48px)',
            overflowY: 'auto',
          },
        }}
      >
        {listContent}
      </Drawer>
    );
  }

  return (
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
          overflowY: 'auto',
        },
      }}
    >
      {listContent}
    </Drawer>
  );
}
