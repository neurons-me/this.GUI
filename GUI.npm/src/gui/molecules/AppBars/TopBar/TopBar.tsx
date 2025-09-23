import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@/gui/atoms';
import { useGuiTheme, useGuiMediaQuery } from '@/gui';
import ThemeSelector from '../../Utilities/Appearance/ThemeSelector/ThemeSelector';
import Icon from '@/themes/Icon/Icon';
import SidebarToggleButton from '../LeftSidebar/SidebarToggleButton';

const sxN = (...parts: Array<SxProps<Theme> | undefined>): SxProps<Theme> => (parts.filter(Boolean) as unknown) as SxProps<Theme>;

interface TopBarLinkChild {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
}

interface TopBarLink {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
  children?: TopBarLinkChild[];
}

interface TopBarProps {
  title?: string;
  logo?: string;
  TopBarLinks?: TopBarLink[];
  showMenuButton?: boolean;
  onMenuClick?: () => void;
  showThemeToggle?: boolean;
  homeTo?: string;
  position?: "fixed" | "static" | "sticky";
  sx?: SxProps<Theme>;
  appBarSx?: SxProps<Theme>;
  toolbarSx?: SxProps<Theme>;
  brandSx?: SxProps<Theme>;
  logoSx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  linksSx?: SxProps<Theme>;
  linkSx?: SxProps<Theme>;
  menuSx?: SxProps<Theme>;
  menuItemSx?: SxProps<Theme>;
  actionsSx?: SxProps<Theme>;
  id?: string;
  className?: string;
  'data-testid'?: string;
  toggleLocation?: 'topbar' | 'sidebar' | 'none';
}

/**
 * TopBar (presentational)
 *
 * Props:
 * - title?: string = 'neurons.me'
 * - logo?: string (URL)
 * - TopBarLinks?: Array<{ label: string, href?: string, external?: boolean, icon?: string, iconColor?: string, children?: Array<{label: string, href?: string, external?: boolean, icon?: string, iconColor?: string}> }>
 *   // icon: string from This.GUI icon registry (e.g., 'mui:Settings', 'lucide:home')
 *   // iconColor: CSS color or theme key (e.g., '#00aa96', 'primary', 'text.secondary')
 * - showMenuButton?: boolean (controls left hamburger visibility)
 * - onMenuClick?: () => void (called when hamburger is clicked)
 * - showThemeToggle?: boolean (renders theme toggle icon)
 * - homeTo?: string (router link for brand/title)
 * - position?: "fixed" | "static" | "sticky" (AppBar position, default is "fixed")
 * - toggleLocation?: 'topbar' | 'sidebar' | 'none' (location prop for SidebarToggleButton)
 */
export default function TopBar({
  title = '',
  logo = '',
  TopBarLinks = [],
  showMenuButton = false,
  onMenuClick,
  showThemeToggle = true,
  homeTo = '/',
  position = 'fixed',
  sx,
  appBarSx,
  toolbarSx,
  brandSx,
  logoSx,
  titleSx,
  linksSx,
  linkSx,
  menuSx,
  menuItemSx,
  actionsSx,
  id,
  className,
  'data-testid': dataTestId,
  toggleLocation = 'topbar',
}: TopBarProps) {
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<null | string>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  // Sync nav inset with real rendered height (idempotent via provider)
  useEffect(() => {
    const setInsets = theme?.updateInsets;
    if (typeof setInsets !== 'function') return;
    const measure = () => {
      const h = (toolbarRef.current?.offsetHeight ?? 48);
      setInsets({ nav: h });
    };

    // initial measure
    measure();
    // observe toolbar size changes (density, breakpoints, etc.)
    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined' && toolbarRef.current) {
      ro = new ResizeObserver(() => measure());
      ro.observe(toolbarRef.current);
    }

    return () => {
      if (ro) ro.disconnect();
      setInsets({ nav: 0 });
    };
  }, [isMobile, theme.updateInsets]);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  // Indentation handled by Toolbar padding-left via --gui-inset-left CSS variable
  const baseAppBarSx = {
    minHeight: 48,
    backgroundColor: theme.palette.background.nav,
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    // Keep AppBar *below* the Drawer so the Drawer edge sits flush over it.
    zIndex: (theme as any)?.zIndex?.appBar ?? 1100,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    boxSizing: 'border-box',
  } as const;

  return (
    <AppBar
      id={id}
      className={className}
      data-testid={dataTestId}
      position={position}
      elevation={0}
      sx={sxN(baseAppBarSx as SxProps<Theme>, { '--has-topbar': 1 } as any, sx, appBarSx)}
    >
      <Toolbar
        ref={toolbarRef}
        variant="dense"
        disableGutters
        sx={sxN(
          {
            minHeight: 48,
            pl: 'var(--gui-rail-width, 0px)',
            pr: 'var(--gui-inset-right, 0px)',
          },
          toolbarSx
        )}
      >
        <SidebarToggleButton
          expanded={showMenuButton}
          onToggle={onMenuClick || (() => {})}
          location={toggleLocation}
          sx={{ mr: 1 }}
        />
        {showMenuButton && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
            aria-label="open navigation"
          >
            <Icon
              name="menu"
              style={{ color: theme.palette.icon?.main || theme.palette.text.primary, fontSize: 24 }}
            />
          </IconButton>
        )}

        <Box
          sx={sxN({ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', ml: showMenuButton ? 2 : 0 }, brandSx)}
          component={Link}
          to={homeTo}
        >
          {logo && (
            <Box component="img" src={logo} alt={`${title} logo`} sx={sxN({ height: 28, mr: 0.75 }, logoSx)} />
          )}
          <Typography variant="h6" noWrap component="div" sx={sxN({ color: theme.palette.text.primary }, titleSx)}>
            {title}
          </Typography>
        </Box>

        {/* TopBarLinks */}
        <Box sx={sxN({ display: 'flex', alignItems: 'center', gap: 1.25 }, linksSx)}>
          {TopBarLinks.map((link) => {
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;
            if (hasChildren) {
              return (
                <Box key={link.label}>
                  <Button
                    onClick={(e: MouseEvent<HTMLElement>) => handleMenuOpen(e, link.label)}
                    sx={sxN({
                      color: theme.palette.text.primary,
                      '&:hover': { backgroundColor: 'transparent', color: theme.palette.text.secondary },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      minWidth: 0,
                      px: 1,
                    }, linkSx)}
                  >
                    {link.icon && <Icon name={link.icon} style={{ color: link.iconColor, fontSize: 18 }} />}
                    {link.label}
                  </Button>
                  <Menu anchorEl={anchorEl} open={openMenu === link.label} onClose={handleMenuClose} sx={menuSx}>
                    {link.children!.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={child.external ? 'a' : Link}
                        {...(child.external
                          ? { href: child.href, target: '_blank', rel: 'noopener noreferrer' }
                          : { to: child.href })}
                        onClick={handleMenuClose}
                        sx={sxN({ display: 'flex', alignItems: 'center', gap: 0.5 }, menuItemSx)}
                      >
                        {child.icon && <Icon name={child.icon.replace('material-symbols:', '')} style={{ color: child.iconColor, fontSize: 18 }} />}
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
                component={link.external ? 'a' : Link}
                {...(link.external
                  ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { to: link.href })}
                sx={sxN({
                  color: theme.palette.text.primary,
                  '&:hover': { backgroundColor: 'transparent', color: theme.palette.text.secondary },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  minWidth: 0,
                  px: 1,
                }, linkSx)}
              >
                {link.icon && <Icon name={link.icon.replace('material-symbols:', '')} style={{ color: link.iconColor, fontSize: 18 }} />}
                {link.label}
              </Button>
            );
          })}
        </Box>

        {showThemeToggle && (
          <Box sx={sxN({ ml: 1 }, actionsSx)}>
            <ThemeSelector tooltip="Select theme" />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export type { TopBarLink };