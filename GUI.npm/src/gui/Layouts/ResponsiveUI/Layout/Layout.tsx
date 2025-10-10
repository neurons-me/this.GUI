import { LeftSidebarProvider } from '@/gui/contexts/LeftSidebarContext';
import { RightSidebarProvider } from '@/gui/contexts/RightSidebarContext';
import { Box } from '@/gui/components/atoms';
import TopBar from '@/gui/Layouts/ResponsiveUI/TopBar/TopBar';
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';
import RightSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/RightSidebar/RightSidebar';
import Footer from '@/gui/Layouts/ResponsiveUI/Footer/Footer';
import { Outlet } from 'react-router-dom';
import type { LayoutProps } from './Layout.types';
function Layout({
  topBarConfig = false,
  leftSidebarConfig = false,
  rightSidebarConfig = false,
  footerConfig = false,
  children,
}: LayoutProps) {
  const hasTopBar = Boolean(topBarConfig);
  const hasLeftSidebar = Boolean(leftSidebarConfig);
  const hasRightSidebar = Boolean(rightSidebarConfig);
  const leftInitialView =
    typeof leftSidebarConfig === 'object' && 'initialView' in leftSidebarConfig
      ? leftSidebarConfig.initialView
      : undefined;
  const rightInitialView =
    typeof rightSidebarConfig === 'object' && 'initialView' in rightSidebarConfig
      ? rightSidebarConfig.initialView
      : undefined;

  return (
    <LeftSidebarProvider initialView={leftInitialView}>
      <RightSidebarProvider initialView={rightInitialView}>
        <Box id="layout-root" display="contents">
          {hasTopBar && (
            <TopBar
              {...(typeof topBarConfig === 'object'
                ? (() => {
                    const { showMenuButton, ...rest } = topBarConfig;
                    return rest;
                  })()
                : {})}
            />
          )}
          {hasLeftSidebar && (
            <LeftSidebar
              elements={[]}
              {...(typeof leftSidebarConfig === 'object' ? leftSidebarConfig : {})}
            />
          )}
          {hasRightSidebar && (
            <RightSidebar
              elements={[]}
              {...(typeof rightSidebarConfig === 'object' ? rightSidebarConfig : {})}
            />
          )}
          {children ?? <Outlet />}
          {footerConfig && (
            <Footer
              {...(typeof footerConfig === 'object'
                ? {
                    ...footerConfig,
                    socialLinks: footerConfig.socialLinks?.map((link) => ({
                      icon: link.icon,
                      href: link.href ?? link.url,
                      label: link.name,
                    })),
                    links: footerConfig.links?.map((link) => ({
                      icon: link.icon,
                      href: link.href ?? link.url,
                      label: link.name,
                    })),
                  }
                : {})}
            />
          )}
        </Box>
      </RightSidebarProvider>
    </LeftSidebarProvider>
  );
}

export default Layout;
