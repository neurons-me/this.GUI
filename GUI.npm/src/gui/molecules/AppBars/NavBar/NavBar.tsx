import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import ThemeSelector from '../../Utilities/ThemeSelector';
import Icon from '../../../../themes/icons/Icon';

interface NavBarLinkChild {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
}

interface NavBarLink {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
  children?: NavBarLinkChild[];
}

interface NavBarProps {
  title?: string;
  logo?: string;
  NavBarLinks?: NavBarLink[];
  showMenuButton?: boolean;
  onMenuClick?: () => void;
  showThemeToggle?: boolean;
  homeTo?: string;
  position?: "fixed" | "static" | "sticky";
}

/**
 * NavBar (presentational)
 *
 * Props:
 * - title?: string = 'neurons.me'
 * - logo?: string (URL)
 * - NavBarLinks?: Array<{ label: string, href?: string, external?: boolean, icon?: string, iconColor?: string, children?: Array<{label: string, href?: string, external?: boolean, icon?: string, iconColor?: string}> }>
 *   // icon: string from This.GUI icon registry (e.g., 'mui:Settings', 'lucide:home')
 *   // iconColor: CSS color or theme key (e.g., '#00aa96', 'primary', 'text.secondary')
 * - showMenuButton?: boolean (controls left hamburger visibility)
 * - onMenuClick?: () => void (called when hamburger is clicked)
 * - showThemeToggle?: boolean (renders theme toggle icon)
 * - homeTo?: string (router link for brand/title)
 * - position?: "fixed" | "static" | "sticky" (AppBar position, default is "fixed")
 */
export default function NavBar({
  title = 'neurons.me',
  logo = 'https://neurons.me/neurons.me.png',
  NavBarLinks = [],
  showMenuButton = false,
  onMenuClick,
  showThemeToggle = true,
  homeTo = '/',
  position = 'fixed',
}: NavBarProps) {
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

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

  return (
    <AppBar
      position={position}
      elevation={0}
      sx={{
        minHeight: 48,
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.background.nav || '#ffffff'
            : theme.palette.background.paper,
        borderBottom: `1px solid ${theme.custom?.border || (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.1)')}`,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar ref={toolbarRef} variant="dense" sx={{ minHeight: 48 }}>
        {showMenuButton && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
            aria-label="open navigation"
          >
            <Icon name="mui:Menu" color={theme.palette.icon?.main || theme.palette.text.primary} size={24} />
          </IconButton>
        )}

        <Box
          sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none' }}
          component={Link}
          to={homeTo}
        >
          {logo && (
            <img src={logo} alt={`${title} logo`} style={{ height: 28, marginRight: 6 }} />
          )}
          <Typography variant="h6" noWrap component="div" sx={{ color: theme.palette.text.primary }}>
            {title}
          </Typography>
        </Box>

        {/* NavBarLinks */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          {NavBarLinks.map((link) => {
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;
            if (hasChildren) {
              return (
                <Box key={link.label}>
                  <Button
                    onClick={(e) => handleMenuOpen(e, link.label)}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': { backgroundColor: 'transparent', color: theme.palette.text.secondary },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      minWidth: 0,
                      px: 1,
                    }}
                  >
                    {link.icon && <Icon name={link.icon} color={link.iconColor} size={18} />}
                    {link.label}
                  </Button>
                  <Menu anchorEl={anchorEl} open={openMenu === link.label} onClose={handleMenuClose}>
                    {link.children!.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={child.external ? 'a' : Link}
                        {...(child.external
                          ? { href: child.href, target: '_blank', rel: 'noopener noreferrer' }
                          : { to: child.href })}
                        onClick={handleMenuClose}
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        {child.icon && <Icon name={child.icon} color={child.iconColor} size={18} />}
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
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': { backgroundColor: 'transparent', color: theme.palette.text.secondary },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  minWidth: 0,
                  px: 1,
                }}
              >
                {link.icon && <Icon name={link.icon} color={link.iconColor} size={18} />}
                {link.label}
              </Button>
            );
          })}
        </Box>

        {showThemeToggle && (
          <Box sx={{ ml: 1 }}>
            <ThemeSelector tooltip="Select theme" />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}