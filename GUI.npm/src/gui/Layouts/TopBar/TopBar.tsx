import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import type { TopBarProps } from './TopBar.types';
import TopBarLink from './TopBarLink/TopBarLink';
import TopBarMenu from './TopBarMenu/TopBarMenu';
import TopBarAction from './TopBarAction/TopBarAction';
import { AppBar, Toolbar, Typography, Box } from '@/gui/atoms';
import { useGuiTheme, useGuiMediaQuery } from '@/gui';
const sxN = (...parts: Array<SxProps<Theme> | undefined>): SxProps<Theme> => (parts.filter(Boolean) as unknown) as SxProps<Theme>;
/**
 * TopBar (presentational)
 * Props:
 * - title?: string = 'neurons.me'
 * - logo?: string (URL)
 * - elements?: Array<TopBarLinkProps | TopBarMenuProps | TopBarActionProps>
 * - elementsCenter?: Array<TopBarLinkProps | TopBarMenuProps | TopBarActionProps>
 * - elementsRight?: Array<TopBarLinkProps | TopBarMenuProps | TopBarActionProps>
 * - homeTo?: string (router link for brand/title)
 * - position?: "fixed" | "static" | "sticky" (AppBar position, default is "fixed")
 * - toggleLocation?: 'topbar' | 'sidebar' | 'none' (location prop for SidebarToggleButton)
 */
export default function TopBar(props: TopBarProps) {
  const {
    title = '',
    logo = '',
    elements = [],
    elementsCenter = [],
    elementsRight = [],
    homeTo = '/',
    position = 'fixed',
    sx,
    appBarSx,
    toolbarSx,
    brandSx,
    logoSx,
    titleSx,
    linksSx,
    id,
    className,
  } = props;
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('md'));
  const [menuState, setMenuState] = useState<{ anchorEl: null | HTMLElement; openMenu: null | string }>({ anchorEl: null, openMenu: null });
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  // Sync nav inset with real rendered height (idempotent via provider)
  useEffect(() => {
    const setInsets = theme?.updateInsets;
    if (typeof setInsets !== 'function') return;
    const measure = () => {
      const h = (toolbarRef.current?.offsetHeight ?? 48);
      setInsets({ top: h });
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
      setInsets({ top: 0 });
    };
  }, [isMobile, theme.updateInsets]);
  // Determine if the TopBar is fixed or sticky for styling
  const isFixed = position === 'fixed' || position === 'sticky';
  // Indentation handled by Toolbar padding-left via --gui-inset-left CSS variable
  const baseAppBarSx = {
    minHeight: 48,
    backgroundColor: theme.palette.background.nav,
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    // Keep AppBar *below* the Drawer so the Drawer edge sits flush over it.
    zIndex: (theme as any)?.zIndex?.appBar ?? 1100,
    ...(isFixed && {
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
    }),
    boxSizing: 'border-box',
  } as const;

  return (
    <AppBar
      id={id}
      className={className}
      position={position}
      elevation={0}
      sx={sxN(baseAppBarSx as SxProps<Theme>, { '--has-topbar': 1 } as any, sx, appBarSx)}
    >
      <Toolbar
        ref={toolbarRef}
        variant="dense"
        disableGutters
        sx={sxN(
          isFixed
            ? {
                minHeight: 48,
                pl: 'var(--gui-rail-width, 0px)',
                pr: 'var(--gui-inset-right, 0px)',
                py: 0,
              }
            : {
                minHeight: 48,
                pl: 1.5,
                pr: 1.5,
                py: 0.5,
              },
          toolbarSx
        )}
      >
        <Box
          sx={sxN({ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', ml: 0, pl: 1.5 }, brandSx)}
          component={Link}
          to={homeTo}
        >
          {logo && (
            <Box component="img" src={logo} alt={`${title} logo`} sx={sxN({ height: 28, mr: 0.75 }, logoSx)} />
          )}
          <Typography variant="h6" noWrap component="div" sx={sxN({ color: theme.palette.text.secondary, fontWeight: 500 }, titleSx)}>
            {title}
          </Typography>
        </Box>

        {/* Center Elements */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mx: 'auto', color: theme.palette.text.secondary }}>
          {(elementsCenter.length > 0 ? elementsCenter : elements)?.map((item, idx) => {
            if (item.type === 'link') return <TopBarLink key={item.props.label ?? idx} {...item.props} />;
            if (item.type === 'menu') return <TopBarMenu key={item.props.label ?? idx} {...item.props} />;
            if (item.type === 'action') return <TopBarAction key={idx} {...item.props} />;
            return null;
          })}
        </Box>

        {/* Right Elements */}
        <Box sx={sxN({ display: 'flex', alignItems: 'center', gap: 1.25, pr: 1.5, color: theme.palette.text.secondary, transition: 'color 0.2s ease', '&:hover': { color: theme.palette.text.primary } }, linksSx)}>
          {elementsRight?.map((item, idx) => {
            if (item.type === 'link') return <TopBarLink key={item.props.label ?? idx} {...item.props} />;
            if (item.type === 'menu') return <TopBarMenu key={item.props.label ?? idx} {...item.props} />;
            if (item.type === 'action') return <TopBarAction key={idx} {...item.props} />;
            return null;
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}