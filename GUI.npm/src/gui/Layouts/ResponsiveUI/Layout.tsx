import React from 'react';
import { Box } from '@/gui/atoms';
import TopBar from '@/gui/Layouts/TopBar/TopBar';
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';
import Footer from '@/gui/Layouts/ResponsiveUI/Footer/Footer';
import { Outlet } from 'react-router-dom';
interface TopBarConfig {
  showMenuButton?: boolean;
  [key: string]: any;
}

interface LeftSidebarConfig {
  [key: string]: any;
}

interface FooterConfig {
  title?: string;
  logoSrc?: string;
  socialLinks?: Array<{
    name: string;
    url: string;
    icon: string;
    href?: string;
  }>;
  links?: Array<{
    name: string;
    url: string;
    icon?: string;
    href?: string;
  }>;
}

interface LayoutProps {
  topBarConfig?: TopBarConfig | boolean;
  leftSidebarConfig?: LeftSidebarConfig | boolean;
  footerConfig?: FooterConfig | boolean;
  children?: React.ReactNode;
}

function Layout({ topBarConfig = false, leftSidebarConfig = false, footerConfig = false, children }: LayoutProps) {
  const hasTopBar = Boolean(topBarConfig);
  const hasLeftSidebar = Boolean(leftSidebarConfig);
  const sidebarToggleLocation: 'topbar' | 'sidebar' | 'none' =
    hasLeftSidebar ? (hasTopBar ? 'topbar' : 'sidebar') : 'none';
  return (
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
  );
}

export default Layout;