// all.this/packages-src/this.GUI/npm/src/templates/Minimal.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopBarAndSideBar from "../components/generics/AppBars/TopBarAndSideBar";
import PageContainer from "../components/generics/Layout/PageContainer";
import Footer from "../components/generics/AppBars/Footer";
import RightContextDrawer from "../components/generics/AppBars/RightContextDrawer";
export default function MinimalLayout({ config, topic, rightContext }) {
  const {
    title = "This.GUI",
    logo = "https://neurons.me/neurons.me.png",
    sideBarLinks = [],
    topNavLinks = []
  } = config || {};
  const isObjectSideBar =
    sideBarLinks && typeof sideBarLinks === "object" && !Array.isArray(sideBarLinks);
  const showDropdown = isObjectSideBar && Object.keys(sideBarLinks).length > 0;
  const sections = showDropdown ? sideBarLinks : {};
  // no longer calculating finalSideBarLinks here; it's handled by TopBarAndSideBar
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <TopBarAndSideBar
        title={title}
        logo={logo}
        drawerWidth={240}
        contexts={sections}
        topic={topic}
        topNavLinks={topNavLinks}
      />
          <Box
            sx={{
              flex: 1,
              padding: { xs: 2, sm: 3 },
              width: '100%',
              maxWidth: { md: 'calc(100% - 240px - 260px)', xs: '100%' },
              marginLeft: { md: '240px' },
              marginRight: { md: rightContext?.items?.length > 0 ? '260px' : 0 },
              mt: 3,
              ml: 'auto',
              mr: 'auto'
            }}
          >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Box>
      <Footer />
      {rightContext?.items?.length > 0 && (
        <RightContextDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          rightContext={rightContext}
        />
      )}
    </>
  );
}