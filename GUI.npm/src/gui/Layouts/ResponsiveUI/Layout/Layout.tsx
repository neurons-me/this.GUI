import { LeftSidebarProvider } from '@/gui/contexts/LeftSidebarContext';
import { Box } from '@/gui/components/atoms';
import TopBar from '@/gui/Layouts/ResponsiveUI/TopBar/TopBar';
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';
import Footer from '@/gui/Layouts/ResponsiveUI/Footer/Footer';
import { Outlet } from 'react-router-dom';
import type { LayoutProps } from './Layout.types';
function Layout({ topBarConfig = false, leftSidebarConfig = false, footerConfig = false, children }: LayoutProps) {
  const hasTopBar = Boolean(topBarConfig);
  const hasLeftSidebar = Boolean(leftSidebarConfig);
  const sidebarToggleLocation: 'topbar' | 'sidebar' | 'none' =
  hasLeftSidebar ? (hasTopBar ? 'topbar' : 'sidebar') : 'none';
  return (
    <LeftSidebarProvider>
      <Box id="layout-root" display="contents">
        {hasTopBar && (
          <TopBar
            showMenuButton={hasLeftSidebar}
            toggleLocation={sidebarToggleLocation}
            {...(typeof topBarConfig === 'object' ? topBarConfig : {})}
          />
        )}
        {hasLeftSidebar && (
          <LeftSidebar
            toggleLocation={sidebarToggleLocation}
            {...(typeof leftSidebarConfig === 'object' ? leftSidebarConfig : {})}
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
    </LeftSidebarProvider>
  );
}

export default Layout;