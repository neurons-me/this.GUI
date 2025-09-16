import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Separator,
  Box,
  Collapse,
  Typography,
} from '@/gui/primitives';
import { useGuiTheme, useGuiMediaQuery } from '@/gui';
import Icon from '../../../../themes/icons/Icon';

// -------------------- Types --------------------
export type RouteItem = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
  children?: RouteItem[];
};

export type LeftDrawerHeader = {
  title?: string;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
};

export type LeftDrawerProps = {
  open?: boolean;              // Controlled (temporary/mobile)
  onClose?: () => void;        // Close callback for temporary drawer
  drawerWidth?: number;        // px, default 240
  drawerLinks?: RouteItem[];   // declarative menu tree
  header?: LeftDrawerHeader;   // optional header
};

// -------------------- Component --------------------
export default function LeftDrawer({
  open: openProp,
  onClose,
  drawerWidth = 240,
  drawerLinks = [],
  header,
}: LeftDrawerProps) {
  const theme = useGuiTheme() as any; // theme is extended by GuiProvider (layout.insets, updateInsets)
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const open = typeof openProp === 'boolean' ? openProp : internalOpen;

  const handleToggle = () => {
    if (typeof openProp === 'boolean') {
      onClose && onClose();
    } else {
      setInternalOpen((v) => !v);
    }
  };

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Drawer mode: permanent on desktop, temporary on mobile
  const isPermanent = !isMobile;

  // Sync insets.left with theme when mode/width changes
  useEffect(() => {
    const setInsets: ((v: { left?: number; right?: number; nav?: number }) => void) | undefined = theme?.updateInsets;
    const currentLeft: number = theme?.layout?.insets?.left ?? 0;
    if (typeof setInsets === 'function') {
      const desired = isPermanent ? drawerWidth : 0;
      if (currentLeft !== desired) {
        setInsets({ left: desired });
      }
      return () => {
        const leftOnCleanup: number = theme?.layout?.insets?.left ?? 0;
        if (leftOnCleanup !== 0) setInsets({ left: 0 });
      };
    }
    return undefined;
  }, [isPermanent, drawerWidth, theme]);

  const renderChildren = (children: RouteItem[] = [], level: number = 2): React.ReactNode => (
    <List disablePadding>
      {children.map((child, idx) => {
        const hasNested = Array.isArray(child.children) && child.children.length > 0;
        const isSelected = !!(child.href && location.pathname === child.href);
        const nodeId = child.href || `${child.label}-${level}-${idx}`;
        const toProps: any = child.external
          ? { component: 'a', href: child.href, target: '_blank', rel: 'noopener noreferrer' }
          : { component: RouterLink, to: child.href || '#' };
        return (
          <React.Fragment key={nodeId}>
            <ListItemButton
              {...toProps}
              selected={!!isSelected}
              onClick={(e: React.MouseEvent) => {
                if (hasNested) {
                  e.preventDefault();
                  toggleGroup(nodeId);
                  return;
                }
                if (isMobile) handleToggle();
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
                    <Icon name={child.icon} iconColor={child.iconColor} size={18} />
                  ) : typeof child.icon === 'function' ? (
                    React.createElement(child.icon as React.ComponentType<any>)
                  ) : (
                    child.icon
                  )}
                </ListItemIcon>
              ) : null}
              <ListItemText primary={child.label} />
              {hasNested ? (openGroups[nodeId] ? <Icon name="mui:ExpandLess" size={18} /> : <Icon name="mui:ExpandMore" size={18} />) : null}
            </ListItemButton>
            {hasNested ? (
              <Collapse in={!!openGroups[nodeId]} timeout="auto" unmountOnExit>
                {renderChildren(child.children!, level + 1)}
              </Collapse>
            ) : null}
          </React.Fragment>
        );
      })}
    </List>
  );

  const listContent = (
    <Box sx={{ overflowY: 'auto', height: '100%' }}>
      {header?.title && (
        <Box sx={{ px: 2, pt: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1 }}>
          {header.icon ? (
            <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
              {typeof header.icon === 'string' ? (
                <Icon name={header.icon} iconColor={header.iconColor} size={18} />
              ) : React.isValidElement(header.icon) ? (
                header.icon
              ) : typeof header.icon === 'function' ? (
                React.createElement(header.icon as React.ComponentType<any>)
              ) : null}
            </ListItemIcon>
          ) : null}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {header.title}
          </Typography>
        </Box>
      )}
      <Separator sx={{ mx: -1.5 }} />
      {/* Navigation tree */}
      <List>
        {drawerLinks.map((route) => {
          const hasChildren = Array.isArray(route.children) && route.children.length > 0;
          if (hasChildren) {
            const isOpen = !!openGroups[route.label];
            return (
              <React.Fragment key={route.label}>
                <ListItemButton
                  onClick={() => {
                    if (route.href) {
                      if (route.external) {
                        window.open(route.href, '_blank');
                      } else {
                        navigate(route.href);
                        if (isMobile) handleToggle();
                      }
                    }
                    if (!route.href || !route.external) toggleGroup(route.label);
                  }}
                  sx={{
                    '& .MuiListItemText-primary': { color: theme.palette.text.primary, fontWeight: 500 },
                  }}
                >
                  {route.icon ? (
                    <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                      {typeof route.icon === 'string' ? (
                        <Icon name={route.icon} iconColor={route.iconColor} size={18} />
                      ) : typeof route.icon === 'function' ? (
                        React.createElement(route.icon as React.ComponentType<any>)
                      ) : (
                        route.icon
                      )}
                    </ListItemIcon>
                  ) : null}
                  <ListItemText primary={route.label} />
                  {isOpen ? <Icon name="mui:ExpandLess" size={18} /> : <Icon name="mui:ExpandMore" size={18} />}
                </ListItemButton>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  {renderChildren(route.children!, 2)}
                </Collapse>
              </React.Fragment>
            );
          }
          const toProps: any = route.external
            ? { component: 'a', href: route.href, target: '_blank', rel: 'noopener noreferrer' }
            : { component: RouterLink, to: route.href || '#' };
          const isSelected = !!(route.href && location.pathname === route.href);
          return (
            <ListItemButton
              key={route.label}
              {...toProps}
              selected={!!isSelected}
              onClick={() => {
                if (isMobile) handleToggle();
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
                    <Icon name={route.icon} iconColor={route.iconColor} size={18} />
                  ) : typeof route.icon === 'function' ? (
                    React.createElement(route.icon as React.ComponentType<any>)
                  ) : (
                    route.icon
                  )}
                </ListItemIcon>
              ) : null}
              <ListItemText primary={route.label} />
            </ListItemButton>
          );
        })}
      </List>
      <Separator sx={{ mx: -1.5 }} />
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
            mt: 'var(--gui-nav-height, 48px)',
            height: 'calc(100vh - var(--gui-nav-height, 48px))',
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
          top: 'var(--gui-nav-height, 48px)',
          height: 'calc(100vh - var(--gui-nav-height, 48px))',
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
