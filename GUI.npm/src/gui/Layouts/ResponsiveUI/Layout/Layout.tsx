import { LeftSidebarProvider } from '@/gui/contexts/LeftSidebarContext';
import { RightSidebarProvider } from '@/gui/contexts/RightSidebarContext';
import { Box } from '@/gui/components/atoms';
import TopBar from '@/gui/Layouts/ResponsiveUI/TopBar/TopBar';
import LeftSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar';
import RightSidebar from '@/gui/Layouts/ResponsiveUI/Sidebars/RightSidebar/RightSidebar';
import Footer from '@/gui/Layouts/ResponsiveUI/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Content from '@/gui/Layouts/ResponsiveUI/Content/Content';
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
        <Box
          id="layout-root"
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
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
          <Box sx={{ display: 'flex', flex: 1 }}>
            {hasLeftSidebar && (
              <LeftSidebar
                elements={[]}
                {...(typeof leftSidebarConfig === 'object' ? leftSidebarConfig : {})}
              />
            )}
            <Content>
              {children ?? <Outlet />}
            </Content>
            {hasRightSidebar && (
              <RightSidebar
                elements={[]}
                {...(typeof rightSidebarConfig === 'object' ? rightSidebarConfig : {})}
              />
            )}
          </Box>
          {footerConfig && (
            <Footer
              {...(typeof footerConfig === 'object'
                ? (() => {
                    const {
                      brandLabel,
                      brandLogo,
                      brandHref,
                      brandAvatarFallback,
                      leftElements,
                      centerElements,
                      rightElements,
                      position,
                      elevation,
                      className,
                      id,
                      sx,
                      appBarSx,
                      sectionSx,
                      'data-testid': dataTestId,
                    } = footerConfig;
                    return {
                      brandLabel,
                      brandLogo,
                      brandHref,
                      brandAvatarFallback,
                      leftElements,
                      centerElements,
                      rightElements,
                      position,
                      elevation,
                      className,
                      id,
                      sx,
                      appBarSx,
                      sectionSx,
                      'data-testid': dataTestId,
                    };
                  })()
                : {})}
            />
          )}
        </Box>
      </RightSidebarProvider>
    </LeftSidebarProvider>
  );
}

export default Layout;
