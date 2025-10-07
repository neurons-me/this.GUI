import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';
import type { TopBarProps, TopBarElement } from './TopBar.types';
import type { TopBarMenuItemProps } from './TopBarMenu/TopBarMenu.types';
import TopBarLink from './TopBarLink/TopBarLink';
import TopBarMenu from './TopBarMenu/TopBarMenu';
import TopBarAction from './TopBarAction/TopBarAction';
import { AppBar, Toolbar, Typography, Box } from '@/gui/atoms';
import { useGuiTheme, useGuiMediaQuery } from '@/gui';
import Icon from '@/themes/Icon/Icon';
const sxN = (...parts: Array<SxProps<Theme> | undefined>): SxProps<Theme> => (parts.filter(Boolean) as unknown) as SxProps<Theme>;

const buildCollapsedItems = (elements: TopBarElement[]): TopBarMenuItemProps[] => {
  const items: TopBarMenuItemProps[] = [];
  elements.forEach((el) => {
    if (el.type === 'link') {
      const { label, href, icon, iconColor, external } = el.props as any;
      if (label && href) {
        items.push({ label, href, icon, iconColor, external });
      }
    } else if (el.type === 'menu') {
      const { items: sub } = el.props as any;
      if (Array.isArray(sub)) {
        // Flatten one level: include submenu items directly
        sub.forEach((si: TopBarMenuItemProps) => items.push(si));
      }
    }
    // 'action' elements are not included in collapsed menu by default
  });
  return items;
};
/**
 * ## TopBar Layout Overview
 *
 * The TopBar is divided into three main sections:
 * - **Brand (Left)** → Displays the logo and title, linking to `homeTo`.
 * - **Center Elements** → Typically used for navigation links or menus, centered horizontally.
 * - **Right Elements** → Used for actions, user menus, or secondary navigation.
 *
 * ---
 *
 * ## Responsiveness Behavior
 *
 * The TopBar adapts dynamically to screen width using MUI breakpoints:
 *
 * | Viewport        | Breakpoint Range     | Behavior                                 |
 * |-----------------|----------------------|-------------------------------------------|
 * | **Desktop**     | ≥ 900px (`md` and up) | Shows icons **and** labels (full view).   |
 * | **Tablet**      | 600–899px (`sm`–`md`) | Shows **icons only** (labels hidden).     |
 * | **Mobile**      | < 600px (`sm` down)   | Collapses into two grouped menus.         |
 *
 * - The **center section** and **right section** each collapse into a single `TopBarMenu` trigger in mobile view.
 * - The **collapsed menus** show their corresponding grouped elements as dropdown items.
 *
 * ---
 *
 * ## Collapsed Icons
 *
 * The props `collapsedIconCenter` and `collapsedIconRight` define the icons used when the TopBar collapses into mobile view:
 *
 * ```tsx
 * <TopBar
 *   collapsedIconCenter="settings"   // default
 *   collapsedIconRight="more_horiz"  // default
 * />
 * ```
 *
 * These determine which icons appear for the two grouped mobile dropdown triggers.
 * The values should correspond to names supported by the `Icon` component (e.g., Material Symbols).
 *
 * ---
 *
 * ## Notes
 *
 * - The TopBar ensures real visual centering of `elementsCenter` using absolute positioning.
 * - Padding and insets automatically adjust based on AppBar position (`fixed`, `static`, or `sticky`).
 * - `TopBarLink` and `TopBarMenu` each accept `showLabel` for tablet responsiveness (icons-only view).
 */
export default function TopBar(props: TopBarProps) {
  const {
    title = '',
    logo = '',
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
    collapsedIconCenter = 'settings',
    collapsedIconRight = 'more_horiz',
  } = props;
  const theme = useGuiTheme();
  // Adjusted breakpoints for later collapse:
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isTablet = useGuiMediaQuery(theme.breakpoints.between('sm', 'md')); // 600–899px
  const isDesktop = useGuiMediaQuery(theme.breakpoints.up('md')); // ≥900px
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
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                position: 'relative',
              }
            : {
                minHeight: 48,
                pl: 1.5,
                pr: 1.5,
                py: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                position: 'relative',
              },
          toolbarSx
        )}
      >
        <Box
          sx={sxN({ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none', ml: 0, pl: 1.5, gap: 1.25 }, brandSx)}
          component={Link}
          to={homeTo}
        >
          {logo && (
            <Box component="img" src={logo} alt={`${title} logo`} sx={sxN({ height: 28 }, logoSx)} />
          )}
          <Typography variant="h6" noWrap component="div" sx={sxN({ color: theme.palette.text.secondary, fontWeight: 500 }, titleSx)}>
            {title}
          </Typography>
        </Box>

        {/* Center Elements */}
        {!isMobile && (
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', color: theme.palette.text.secondary }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, pointerEvents: 'auto' }}>
              {elementsCenter.map((item, idx) => {
                if (item.type === 'link') return <TopBarLink showLabel={isDesktop} key={item.props.label ?? idx} {...item.props} />;
                if (item.type === 'menu') return <TopBarMenu showLabel={isDesktop} key={item.props.label ?? idx} {...item.props} />;
                if (item.type === 'action') return <TopBarAction key={idx} {...item.props} />;
                return null;
              })}
            </Box>
          </Box>
        )}

        {/* Right Elements */}
        <Box sx={sxN({ display: 'flex', alignItems: 'center', flexShrink: 0, marginLeft: 'auto', gap: 1.25, pr: 1.5, color: theme.palette.text.secondary, transition: 'color 0.2s ease', '&:hover': { color: theme.palette.text.primary } }, linksSx)}>
          {isMobile ? (
            <>
              {elementsCenter.length > 0 && (
                <TopBarMenu label="" icon={collapsedIconCenter} items={buildCollapsedItems(elementsCenter)} showLabel={false} />
              )}
              {elementsRight.length > 0 && (
                <TopBarMenu label="" icon={collapsedIconRight} items={buildCollapsedItems(elementsRight)} showLabel={false} />
              )}
            </>
          ) : (
            elementsRight?.map((item, idx) => {
              if (item.type === 'link') return <TopBarLink showLabel={isDesktop} key={item.props.label ?? idx} {...item.props} />;
              if (item.type === 'menu') return <TopBarMenu showLabel={isDesktop} key={item.props.label ?? idx} {...item.props} />;
              if (item.type === 'action') return <TopBarAction key={idx} {...item.props} />;
              return null;
            })
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}