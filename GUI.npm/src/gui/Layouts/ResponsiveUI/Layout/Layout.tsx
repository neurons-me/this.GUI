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
  return (
    <LeftSidebarProvider>
      <Box id="layout-root" display="contents">
        {hasTopBar && (
          <TopBar
            {...(typeof topBarConfig === 'object' ? (() => {
              const { showMenuButton, ...rest } = topBarConfig;
              return rest;
            })() : {})}
          />
        )}
        {hasLeftSidebar && (
          <LeftSidebar
            elements={[]}
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