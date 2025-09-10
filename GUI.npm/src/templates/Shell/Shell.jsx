// src/templates/Shell.jsx
// Generic app shell that composes NavBar, LeftSidebar, RightSidebar, StickyOptions and Footer
// The shell is **route-driven**: it renders the current route via <Outlet /> and
// lets the route (or parent) pass declarative config objects for each frame area.
//
// Props
// - navBar: { title, logo, topNavLinks, injectThemeToggle }
// - leftSidebar: { enabled=true, drawerWidth=240, contexts, sideBarLinks, topic }
// - rightSidebar: { items, title, drawerWidth=260, ... } (same shape expected by RightContextDrawer)
// - stickyOptions: { items, positioning, behavior, theme, visibility, i18n }
// - footer: { ...props } (passed to Footer)
//
// Notes
// - Mobile: LeftSidebar is temporary and controlled via `leftOpen` state here.
// - Desktop: LeftSidebar is permanent and reserves content space (ml).
// - RightSidebar reserves content space (mr) on desktop only when it has items.
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import NavBar from '../../components/generics/AppBars/NavBar/NavBar';
import LeftSidebar from '../../components/generics/AppBars/LeftSidebar/LeftSidebar';
import RightContextDrawer from '../../components/generics/AppBars/RightContextDrawer/RightContextDrawer';
import StickyOptions from '../../components/generics/AppBars/StickyOptions/StickyOptions';
import Footer from '../../components/generics/AppBars/Footer/Footer';
import PageContainer from '../../components/generics/Layout/PageContainer';

export default function Shell({
  navBar = {},
  leftSidebar = {},
  rightSidebar = null,
  stickyOptions = null,
  footer = null,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  // ----- Left sidebar control (mobile temporary) ----------------------------
  const [leftOpen, setLeftOpen] = React.useState(false);
  const toggleLeft = () => setLeftOpen((v) => !v);
  // Normalized left sidebar settings
  const leftEnabled = leftSidebar?.enabled !== false; // default: true
  const leftWidth = leftSidebar?.drawerWidth ?? 240;
  // Right drawer width (reserve space only if has items)
  const rightItems = rightSidebar && Array.isArray(rightSidebar.items) ? rightSidebar.items : [];
  const hasRight = rightItems.length > 0;
  const rightWidth = hasRight ? (rightSidebar?.drawerWidth ?? 260) : 0;
  // Expose a handler to NavBar so it can open the left drawer on mobile
  const navProps = {
    title: 'This.GUI',
    logo: 'https://neurons.me/neurons.me.png',
    injectThemeToggle: true,
    topNavLinks: [],
    onMenuClick: leftEnabled ? toggleLeft : undefined,
    ...navBar,
  };

  // Left sidebar props
  const leftProps = leftEnabled
    ? {
        open: !isDesktop ? leftOpen : true,
        onClose: () => setLeftOpen(false),
        drawerWidth: leftWidth,
        contexts: leftSidebar?.contexts || {},
        sideBarLinks: leftSidebar?.sideBarLinks || [],
        topic: leftSidebar?.topic || null,
      }
    : null;

  // Sticky Options normalization
  const cta = stickyOptions && Array.isArray(stickyOptions.items) && stickyOptions.items.length > 0
    ? stickyOptions
    : null;
  // Content insets (desktop only). We still set a CSS var for components that read it.
  const contentSx = {
    flex: 1,
    px: { xs: 2, sm: 3 },
    mt: 5, // below AppBar
    width: 'auto',
    '--right-drawer-width': `${rightWidth}px`,
    ml: { md: leftEnabled ? `${leftWidth}px` : 0, xs: 0 },
    mr: { md: hasRight ? `${rightWidth}px` : 0, xs: 0 },
  };

  return (
    <>
      <NavBar {...navProps} />
      {leftEnabled && <LeftSidebar {...leftProps} />}
      {cta && (
        <StickyOptions
          items={cta.items}
          positioning={cta.positioning || {}}
          behavior={{ respectRightDrawer: true, ...(cta.behavior || {}) }}
          theme={cta.theme || {}}
          visibility={cta.visibility || {}}
          i18n={cta.i18n || {}}
        />
      )}

      <Box sx={contentSx}>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Box>
      {footer && (
        <Footer
          leftInset={leftEnabled ? leftWidth : 0}
          rightInset={rightWidth}
          {...(typeof footer === 'object' ? footer : {})}
        />
      )}
      {hasRight && (
        <RightContextDrawer rightContext={rightSidebar} />
      )}
    </>
  );
}