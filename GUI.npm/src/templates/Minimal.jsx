// all.this/packages-src/this.GUI/npm/src/templates/Minimal.jsx
import React, { useState } from "react";
class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error){ return { hasError: true, error }; }
  componentDidCatch(error, info){ console.error(`[MinimalLayout:${this.props.label}]`, error, info); }
  render(){
    if(this.state.hasError){
      return (
        <div style={{ padding: 16, border: '1px solid #f99', borderRadius: 8, background: 'rgba(255,0,0,0.05)', margin: '12px 0' }}>
          <strong>Component "{this.props.label}" failed to render.</strong>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>{String(this.state.error)}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopBarAndSideBar from "../components/generics/AppBars/TopBarAndSideBar/TopBarAndSideBar";
import PageContainer from "../components/generics/Layout/PageContainer";
import Footer from "../components/generics/AppBars/Footer/Footer";
import RightContextDrawer from "../components/generics/AppBars/RightContextDrawer/RightContextDrawer";
import StickyOptions from "../components/generics/AppBars/StickyOptions/StickyOptions";

export default function MinimalLayout({ config, topic, rightContext, stickyOptions, footer }) {
  const {
    title = "This.GUI",
    logo = "https://neurons.me/neurons.me.png",
    sideBarLinks = undefined,
    topNavLinks = undefined
  } = config || {};

  // ---- Normalize/guards ------------------------------------------------------
  const hasSideBarObject =
    sideBarLinks &&
    typeof sideBarLinks === "object" &&
    !Array.isArray(sideBarLinks) &&
    Object.keys(sideBarLinks).length > 0;

  // Only pass contexts if we truly have a section map. Otherwise omit the prop entirely.
  const sections = hasSideBarObject ? sideBarLinks : undefined;

  // StickyOptions: render only if we truly have an items array with content
  const ctaConfig = stickyOptions || (config && config.stickyOptions) || null;
  const hasCtas =
    !!ctaConfig &&
    Array.isArray(ctaConfig.items) &&
    ctaConfig.items.length > 0;

  // Right drawer width (guard if rightContext is malformed)
  const rightDrawerWidth =
    rightContext && Array.isArray(rightContext.items) && rightContext.items.length > 0 ? 260 : 0;

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ErrorBoundary label="TopBarAndSideBar">
        <TopBarAndSideBar
          title={title}
          logo={logo}
          drawerWidth={240}
          contexts={sections || {}}
          topic={topic}
          {...(Array.isArray(topNavLinks) ? { topNavLinks } : {})}
        />
      </ErrorBoundary>

      {hasCtas && (
        <ErrorBoundary label="StickyOptions">
          <StickyOptions
            items={ctaConfig.items}
            positioning={ctaConfig.positioning || {}}
            behavior={{ respectRightDrawer: true, ...(ctaConfig.behavior || {}) }}
            theme={ctaConfig.theme || {}}
            visibility={ctaConfig.visibility || {}}
            i18n={ctaConfig.i18n || {}}
          />
        </ErrorBoundary>
      )}

      <Box
        sx={{
          flex: 1,
          px: { xs: 2, sm: 3 },
          mt: 5,
          width: "auto",
          "--right-drawer-width": `${rightDrawerWidth}px`,
          ml: { md: "240px", xs: 0 },
          mr: { md: rightDrawerWidth ? `${rightDrawerWidth}px` : 0, xs: 0 }
        }}
      >
        <ErrorBoundary label="Page">
          <PageContainer>
            <Outlet />
          </PageContainer>
        </ErrorBoundary>
      </Box>

      {footer && (
        <ErrorBoundary label="Footer">
          <Footer
            leftInset={240}
            rightInset={rightDrawerWidth}
            {...(typeof footer === "object" ? footer : {})}
          />
        </ErrorBoundary>
      )}

      {rightContext && Array.isArray(rightContext.items) && rightContext.items.length > 0 && (
        <ErrorBoundary label="RightContextDrawer">
          <RightContextDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
            rightContext={rightContext}
          />
        </ErrorBoundary>
      )}
    </>
  );
}