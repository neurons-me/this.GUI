// Layout/Layout/Layout.tsx
import { LeftBarProvider } from '@/gui/contexts/LeftSidebarContext';
import { RightBarProvider } from '@/gui/contexts/RightSidebarContext';
import Box from '@/gui/atoms/Box/Box';
import TopBar from '@/gui/Layout/TopBar/TopBar';
import LeftSidebar from '@/gui/Layout/Sidebars/LeftSidebar/LeftSidebar';
import RightSidebar from '@/gui/Layout/Sidebars/RightSidebar/RightSidebar';
import Footer from '@/gui/Layout/Footer/Footer';
import Namespace from '@/gui/Layout/Namespace/Namespace';
import Content from '@/gui/Layout/Content/Content';
import type { LayoutProps } from './Layout.types';
function Layout({
  topBarConfig = false,
  topBar,
  leftSidebarConfig: legacyLeftConfig = false,
  leftBar,
  rightSidebarConfig: legacyRightConfig = false,
  rightBar,
  footerConfig = false,
  footer,
  TopBar: TopBarProp,
  LeftBar,
  RightBar,
  LeftSideBar: legacyLeftBar,
  RightSideBar: legacyRightBar,
  Footer: FooterProp,
  children,
}: LayoutProps) {
  // Normalize preferred + legacy props into the config fields the layout consumes.
  const resolvedTopBar = topBar ?? TopBarProp ?? topBarConfig;
  const resolvedLeft = leftBar ?? LeftBar ?? legacyLeftBar ?? legacyLeftConfig;
  const resolvedRight = rightBar ?? RightBar ?? legacyRightBar ?? legacyRightConfig;
  const resolvedFooter = footer ?? FooterProp ?? footerConfig;

  const hasTopBar = Boolean(resolvedTopBar);
  const hasLeftBar = Boolean(resolvedLeft);
  const hasRightBar = Boolean(resolvedRight);
  const leftInitialView =
    typeof resolvedLeft === 'object' && 'initialView' in resolvedLeft
      ? (resolvedLeft as any).initialView
      : undefined;
  const rightInitialView =
    typeof resolvedRight === 'object' && 'initialView' in resolvedRight
      ? (resolvedRight as any).initialView
      : undefined;
  return (
    <LeftBarProvider initialView={leftInitialView}>
      <RightBarProvider initialView={rightInitialView}>
        <Box
          id="layout-root"
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          {hasTopBar && (
            <TopBar
              {...(typeof resolvedTopBar === 'object'
                ? (() => {
                    const { showMenuButton, brandLogo, ...rest } = resolvedTopBar as any;
                    return {
                      ...rest,
                      // Convention: use `brandLogo` as the config field, but TopBar expects `logo`.
                      ...(brandLogo ? { logo: brandLogo } : {}),
                    };
                  })()
                : {})}
            />
          )}
          <Box sx={{ display: 'flex', flex: 1 }}>
            {hasLeftBar && (
              <LeftSidebar
                elements={[]}
                {...(typeof resolvedLeft === 'object' ? (resolvedLeft as any) : {})}
              />
            )}
            <Content>
              {children ?? <Namespace />}
            </Content>
            {hasRightBar && (
              <RightSidebar
                elements={[]}
                {...(typeof resolvedRight === 'object' ? (resolvedRight as any) : {})}
              />
            )}
          </Box>
          {resolvedFooter && (
            <Footer
              {...(typeof resolvedFooter === 'object'
                ? (() => {
                    const {
                      title,
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
                    } = resolvedFooter;
                    return {
                      brandLabel: brandLabel ?? title,
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
      </RightBarProvider>
    </LeftBarProvider>
  );
}

export default Layout;
