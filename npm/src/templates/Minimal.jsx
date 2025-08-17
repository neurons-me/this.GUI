// all.this/packages-src/this.GUI/npm/src/templates/Minimal.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopBarAndSideBar from "../components/generics/AppBars/TopBarAndSideBar";
import PageContainer from "../components/generics/Layout/PageContainer";
import Footer from "../components/generics/AppBars/Footer";
import RightContextDrawer from "../components/generics/AppBars/RightContextDrawer";
import StickyOptions from "../components/generics/AppBars/StickyOptions";

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
      <TopBarAndSideBar
        title={title}
        logo={logo}
        drawerWidth={240}
        contexts={sections || {}}
        topic={topic}
        {...(Array.isArray(topNavLinks) ? { topNavLinks } : {})}
      />

      {hasCtas && (
        <StickyOptions
          items={ctaConfig.items}
          positioning={ctaConfig.positioning || {}}
          behavior={{ respectRightDrawer: true, ...(ctaConfig.behavior || {}) }}
          theme={ctaConfig.theme || {}}
          visibility={ctaConfig.visibility || {}}
          i18n={ctaConfig.i18n || {}}
        />
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
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Box>

      {footer && (
        <Footer
          leftInset={240}
          rightInset={rightDrawerWidth}
          {...(typeof footer === "object" ? footer : {})}
        />
      )}

      {rightContext && Array.isArray(rightContext.items) && rightContext.items.length > 0 && (
        <RightContextDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          rightContext={rightContext}
        />
      )}
    </>
  );
}