// src/templates/Shell.jsx
// Clean Shell that composes NavBar, LeftDrawer, RightDrawer, StickyOptions and Footer
// and relies on runtime insets managed by the drawers themselves.
//
// Props (clean API)
// - navBar?:       props for <NavBar />
// - leftDrawer?:   { enabled?: boolean, drawerWidth?: number, drawerLinks?: RouteItem[] }
// - rightDrawer?:  props for <RightDrawer /> (enabled inferred by its content)
// - stickyOptions?: props for <StickyOptions />
// - footer?:       props for <Footer />
//
// Notes
// - Mobile: LeftDrawer is temporary and controlled here via `leftOpen`.
// - Desktop: LeftDrawer is permanent; it will update theme.layout.insets.left internally.
// - RightDrawer also updates theme.layout.insets.right when permanent.
// - Shell itself no longer sets manual `ml/mr`; content adapts via theme/layout insets.

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import NavBar from '../../components/generics/AppBars/NavBar/NavBar';
import LeftDrawer from '../../components/generics/AppBars/LeftDrawer/LeftDrawer';
import RightDrawer from '../../components/generics/AppBars/RightDrawer/RightDrawer';
import StickyOptions from '../../components/generics/AppBars/StickyOptions/StickyOptionsTop';
import Footer from '../../components/generics/AppBars/Footer/Footer';
import PageContainer from '../../components/generics/Layout/PageContainer';

export default function Shell({
  navBar = {},
  leftDrawer = {},
  rightDrawer = null,
  stickyOptions = null,
  footer = null,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // ---------------- Left drawer control (mobile temporary) ------------------
  const leftEnabled = leftDrawer?.enabled !== false; // default: true
  const leftWidth = leftDrawer?.drawerWidth ?? 240;
  const [leftOpen, setLeftOpen] = React.useState(false);
  const toggleLeft = () => setLeftOpen((v) => !v);

  // ---------------- NavBar props -------------------------------------------
  const navProps = {
    title: 'This.GUI',
    logo: 'https://neurons.me/neurons.me.png',
    showMenuButton: leftEnabled,
    onMenuClick: leftEnabled ? toggleLeft : undefined,
    showThemeToggle: true,
    ...navBar,
  };

  // ---------------- LeftDrawer props ---------------------------------------
  const leftProps = leftEnabled
    ? {
        open: !isDesktop ? leftOpen : true,
        onClose: () => setLeftOpen(false),
        drawerWidth: leftWidth,
        drawerLinks: leftDrawer?.drawerLinks || [],
        // cualquier otra prop declarativa se pasa tal cual
        ...leftDrawer,
      }
    : null;

  // ---------------- RightDrawer visibility ---------------------------------
  const hasRight = !!rightDrawer && (rightDrawer.enabled !== false);

  // ---------------- Sticky Options -----------------------------------------
  const hasSticky = !!(stickyOptions && Array.isArray(stickyOptions.items) && stickyOptions.items.length > 0);

  return (
    <>
      <NavBar {...navProps} />

      {leftEnabled && <LeftDrawer {...leftProps} />}

      {hasSticky && (
        <StickyOptions
          items={stickyOptions.items}
          positioning={stickyOptions.positioning || {}}
          behavior={stickyOptions.behavior || {}}
          theme={stickyOptions.theme || {}}
          visibility={stickyOptions.visibility || {}}
          i18n={stickyOptions.i18n || {}}
        />
      )}

      <Box
        sx={{
          flex: 1,
          px: { xs: 2, sm: 3 },
          mt: 5, // leave space for AppBar (48px dense + 8px tolerance)
          width: 'auto',
        }}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Box>

      {footer && <Footer {...(typeof footer === 'object' ? footer : {})} />}

      {hasRight && <RightDrawer {...rightDrawer} />}
    </>
  );
}