import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Tooltip, Collapse } from '@/gui/atoms';
import Icon from '../../../../themes/icons/Icon';
import { memo, useCallback, useState } from 'react';
import SidebarToggleButton from './SidebarToggleButton';

const MemoizedListItemButton = memo(ListItemButton);

/**
 * LeftSidebar — single-file implementation (reset)
 *
 * Goals:
 *  - Fixed rail column width on desktop (collapsedWidth)
 *  - Optional expanded overlay panel to the right (does not move TopBar)
 *  - Full height; starts below TopBar if present via CSS var `--gui-nav-height`
 *  - Mobile: temporary drawer overlay
 */

// -------------------- Types --------------------
export type RouteItem = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
  children?: RouteItem[];
};

export type LeftSidebarProps = {
  drawerLinks?: RouteItem[];
  /** Desktop rail width (px). */
  collapsedWidth?: number;
  /** Overlay panel width when expanded (px). */
  expandedWidth?: number;
  /** Start in expanded (desktop only). */
  expanded?: boolean;
  /** Temporary drawer on mobile. If provided, controls open state.  */
  open?: boolean;
  onClose?: () => void;
  /** Optional id/class for .MuiDrawer-root */
  id?: string;
  className?: string;
};

// -------------------- Component --------------------
export default function LeftSidebar({
  drawerLinks = [],
  collapsedWidth = 72,
  expandedWidth = 264,
  expanded: expandedProp,
  open: openProp,
  onClose,
  id,
  className,
}: LeftSidebarProps) {
  // Simple media query using window width to avoid external hooks
  const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 959.95px)').matches : false;

  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = typeof openProp === 'boolean' ? openProp : internalOpen;
  const toggleMobile = () => {
    if (typeof openProp === 'boolean') return onClose?.();
    setInternalOpen((v) => !v);
  };

  const [expanded, setExpanded] = React.useState(!!expandedProp);
  React.useEffect(() => {
    if (typeof expandedProp === 'boolean') setExpanded(expandedProp);
  }, [expandedProp]);

  // Top inset (reads CSS var set by TopBar) so the sidebar starts below it
  const navHeightVar = 'var(--gui-nav-height, 0px)';

  React.useEffect(() => {
    const hasTopbar = getComputedStyle(document.body).getPropertyValue('--has-topbar').trim();
    const location = hasTopbar === '1' ? 'none' : 'leftsidebar';
    document.body.style.setProperty('--sidebar-toggle-location', location);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  // State to track which groups are open in expanded mode
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const go = (href?: string, external?: boolean) => {
    if (!href) return;
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
      if (isMobile) toggleMobile();
    }
  };

  // -------------------- Render helpers --------------------
  const renderIcon = (node?: RouteItem['icon'], color?: string, size = 20) => {
    if (!node) return null;
    if (typeof node === 'string') return <Icon name={node} iconColor={color} size={size} />;
    if (typeof node === 'function') return React.createElement(node as React.ComponentType<any>);
    return node as React.ReactElement;
  };

  // Render drawer links recursively for expanded sidebar, showing nested items inline
  // Adjusted to handle behavior based on expanded state ('railview' or 'expanded')
  const renderExpandedItems = (items: RouteItem[], level = 0) => {
    return items.map((route) => {
      const isSelected = !!(route.href && location.pathname === route.href);
      const hasChildren = Array.isArray(route.children) && route.children.length > 0;
      const isOpen = openGroups[route.label] || false;

      if (hasChildren) {
        if (!expanded) {
          // railview behavior: clicking a parent shows nested items as a separate floating menu (keep current behavior)
          return (
            <React.Fragment key={route.label}>
              <ListItemButton
                onClick={() => toggleGroup(route.label)}
                selected={isSelected}
                aria-haspopup="true"
                aria-expanded={isOpen}
                sx={[
                  { pl: 2 + level * 2, minHeight: 44 },
                  level > 1 && ((theme: Theme) => ({
                    position: 'relative',
                    pl: level * 2 + 1,
                    ml: level > 2 ? 2 : 1,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: `${level * 8}px`,
                      top: 0,
                      bottom: 0,
                      width: '1px',
                      backgroundImage: theme.palette.mode === 'light'
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
                    '&:hover::after': {
                      borderTop: `1px dashed ${theme.palette.text.secondary}`,
                    },
                  })),
                ]}
              >
                <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>{renderIcon(route.icon, route.iconColor, 20)}</ListItemIcon>
                <ListItemText primary={route.label} />
                <Icon name={isOpen ? "mui:ExpandLess" : "mui:ExpandMore"} size={18} />
              </ListItemButton>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {renderExpandedItems(route.children!, level + 1)}
                </List>
              </Collapse>
            </React.Fragment>
          );
        } else {
          // expanded behavior: render inline with Collapse and styled nested items
          return (
            <React.Fragment key={route.label}>
              <ListItemButton
                onClick={() => toggleGroup(route.label)}
                selected={isSelected}
                aria-haspopup="true"
                aria-expanded={isOpen}
                sx={{
                  pl: 2 + level * 2,
                  minHeight: 44,
                }}
              >
                <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>{renderIcon(route.icon, route.iconColor, 20)}</ListItemIcon>
                <ListItemText primary={route.label} />
                <Icon name={isOpen ? "mui:ExpandLess" : "mui:ExpandMore"} size={18} />
              </ListItemButton>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {route.children!.map((child) => {
                    const childSelected = !!(child.href && location.pathname === child.href);
                    const toProps: any = child.external
                      ? { component: 'a', href: child.href, target: '_blank', rel: 'noopener noreferrer' }
                      : { component: RouterLink, to: child.href || '#' };
                    return (
                      <ListItemButton
                        key={child.label}
                        {...toProps}
                        selected={childSelected}
                        onClick={() => { if (!child.external) { if (!child.href) return; navigate(child.href); } if (isMobile) toggleMobile(); }}
                        sx={(theme: Theme) => ({
                          position: 'relative',
                          pl: level * 2 + 1,
                          ml: level > 2 ? 2 : 1,
                          fontSize: level === 3 ? '0.85rem' : '0.9rem',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: `${level * 8}px`,
                            top: 0,
                            bottom: 0,
                            width: '1px',
                            backgroundImage: theme.palette.mode === 'light'
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
                          '&:hover::after': {
                            borderTop: `1px dashed ${theme.palette.text.secondary}`,
                          },
                        })}
                      >
                        <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>{renderIcon(child.icon, (child as any).iconColor, 20)}</ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </React.Fragment>
          );
        }
      }

      const toProps: any = route.external
        ? { component: 'a', href: route.href, target: '_blank', rel: 'noopener noreferrer' }
        : { component: RouterLink, to: route.href || '#' };

      return (
        <ListItemButton
          key={route.label}
          {...toProps}
          selected={isSelected}
          onClick={() => { if (!route.external) { if (!route.href) return; navigate(route.href); } if (isMobile) toggleMobile(); }}
          sx={[
            { pl: 2 + level * 2, minHeight: 44 },
            level > 1 && ((theme: Theme) => ({
              position: 'relative',
              pl: level * 2 + 1,
              ml: level > 2 ? 2 : 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: `${level * 8}px`,
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundImage: theme.palette.mode === 'light'
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
              '&:hover::after': {
                borderTop: `1px dashed ${theme.palette.text.secondary}`,
              },
            })),
          ]}
        >
          <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>{renderIcon(route.icon, route.iconColor, 20)}</ListItemIcon>
          <ListItemText primary={route.label} />
        </ListItemButton>
      );
    });
  };

  // Floating menu for railview: track anchor position for each open group
  const [anchorEls, setAnchorEls] = useState<Record<string, HTMLElement | null>>({});

  // Helper to handle outside click for floating menus
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // If any open group, check if click is outside any open floating menu or its button
      Object.entries(anchorEls).forEach(([label, anchorEl]) => {
        if (openGroups[label] && anchorEl) {
          const menu = document.getElementById(`rail-float-menu-${label}`);
          if (
            menu &&
            !menu.contains(event.target as Node) &&
            !anchorEl.contains(event.target as Node)
          ) {
            setOpenGroups((prev) => ({ ...prev, [label]: false }));
          }
        }
      });
    };
    if (Object.values(openGroups).some(Boolean)) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [openGroups, anchorEls]);

  const RailList = (
    <List disablePadding sx={{ py: 1, '& .MuiListItemButton-root': { justifyContent: 'center' }, position: 'relative' }}>
      {drawerLinks.map((route) => {
        const hasChildren = Array.isArray(route.children) && route.children.length > 0;
        const isSelected = !!(route.href && location.pathname === route.href);

        if (hasChildren) {
          // Floating menu for railview
          return (
            <React.Fragment key={route.label}>
              <MemoizedListItemButton
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  // Set anchor for floating menu
                  setAnchorEls((prev) => ({ ...prev, [route.label]: e.currentTarget }));
                  toggleGroup(route.label);
                }}
                selected={isSelected}
                aria-haspopup="true"
                aria-expanded={openGroups[route.label] || false}
                sx={{ px: 1, py: 1, minHeight: 44 }}
                aria-label={route.label}
              >
                <ListItemIcon sx={{ minWidth: 0, m: 0 }}>
                  <Tooltip title={route.label} placement="right" arrow size="xl">
                    <span style={{ display: 'inline-flex', lineHeight: 0 }}>
                      {renderIcon(route.icon, route.iconColor)}
                    </span>
                  </Tooltip>
                </ListItemIcon>
              </MemoizedListItemButton>
              {openGroups[route.label] && anchorEls[route.label] && (
                <Box
                  id={`rail-float-menu-${route.label}`}
                  sx={{
                    position: 'fixed',
                    // Compute position: right of anchorEl, vertically aligned
                    left: (() => {
                      const rect = anchorEls[route.label]?.getBoundingClientRect();
                      return rect ? rect.right : collapsedWidth;
                    })(),
                    top: (() => {
                      const rect = anchorEls[route.label]?.getBoundingClientRect();
                      return rect ? rect.top : 0;
                    })(),
                    zIndex: 1300,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    borderRadius: 1,
                    py: 1,
                    minWidth: 200,
                    // For accessibility: prevent accidental horizontal overflow
                    maxHeight: '80vh',
                    overflowY: 'auto',
                  }}
                >
                  {route.children!.map((child) => {
                    const childSelected = !!(child.href && location.pathname === child.href);
                    const toProps: any = child.external
                      ? { component: 'a', href: child.href, target: '_blank', rel: 'noopener noreferrer' }
                      : { component: RouterLink, to: child.href || '#' };
                    return (
                      <ListItemButton
                        key={child.label}
                        {...toProps}
                        selected={childSelected}
                        onClick={() => {
                          if (!child.external) {
                            if (!child.href) return;
                            navigate(child.href);
                          }
                          if (isMobile) toggleMobile();
                          // Close the floating menu after click
                          setOpenGroups((prev) => ({ ...prev, [route.label]: false }));
                        }}
                        sx={{
                          minHeight: 44,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 24 }}>{renderIcon(child.icon, (child as any).iconColor, 18)}</ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    );
                  })}
                </Box>
              )}
            </React.Fragment>
          );
        }

        // Leaf
        const toProps: any = route.external
          ? { component: 'a', href: route.href, target: '_blank', rel: 'noopener noreferrer' }
          : { component: RouterLink, to: route.href || '#' };

        return (
          <MemoizedListItemButton
            key={route.label}
            {...toProps}
            selected={isSelected}
            onClick={() => { if (!route.external) { if (!route.href) return; navigate(route.href); } if (isMobile) toggleMobile(); }}
            sx={{ px: 1, py: 1, minHeight: 44 }}
            aria-label={route.label}
          >
            <ListItemIcon sx={{ minWidth: 0, m: 0 }}>
              <Tooltip title={route.label} placement="right" arrow size="xl">
                <span style={{ display: 'inline-flex', lineHeight: 0 }}>
                  {renderIcon(route.icon, route.iconColor)}
                </span>
              </Tooltip>
            </ListItemIcon>
          </MemoizedListItemButton>
        );
      })}
    </List>
  );

  const ExpandedList = (
    <List disablePadding sx={{ py: 1, '& .MuiListItemButton-root': { px: 2, minHeight: 44 } }}>
      {renderExpandedItems(drawerLinks)}
    </List>
  );

  // --------------- Layout ----------------
  // Drawer paper is the rail column with fixed width on desktop.
  const paperSx: SxProps<Theme> = {
    '& .MuiDrawer-paper': {
      position: 'fixed',
      // Top starts just below TopBar border: add 1px
      top: 'calc(var(--gui-nav-height, 48px) + 1px)',
      left: 0,
      // Height subtracts nav height and 1px for border
      height: 'calc(100vh - var(--gui-nav-height, 48px) - 1px)',
      width: isMobile ? expandedWidth : expanded ? expandedWidth : collapsedWidth,
      overflowY: 'auto',
      boxSizing: 'border-box',
      backgroundColor: (theme: any) => theme.palette.background.nav || theme.palette.background.paper,
      borderRight: '1px solid',
      borderColor: 'divider',
      '--has-left-sidebar': 1,
    },
  } as const;

  return (
    <>
      {/* Rail Drawer */}
      {isMobile ? (
        <Drawer variant="temporary" open={open} onClose={toggleMobile} sx={paperSx} ModalProps={{ keepMounted: true }}>
          {/* Mobile content: show full list inside drawer */}
          <Box sx={{ width: expandedWidth }}>{ExpandedList}</Box>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          sx={paperSx}
          id={id}
          className={className}
        >
          <SidebarToggleButton
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            location="sidebar"
            sx={{ mt: 1, ml: 1 }}
          />
          {expanded ? ExpandedList : RailList}
        </Drawer>
      )}
    </>
  );
}
