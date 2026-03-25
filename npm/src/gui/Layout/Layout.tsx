// Layout/Layout/Layout.tsx
import { LeftBarProvider } from '@/gui/Contexts/LeftSidebarContext';
import { RightBarProvider } from '@/gui/Contexts/RightSidebarContext';
import Box from '@/gui/Atoms/Box/Box';
import TopBar from '@/gui/Layout/TopBar/TopBar';
import LeftSidebar from '@/gui/Layout/Sidebars/LeftSidebar/LeftSidebar';
import RightSidebar from '@/gui/Layout/Sidebars/RightSidebar/RightSidebar';
import Footer from '@/gui/Layout/Footer/Footer';
import Content from '@/gui/Layout/Content/Content';
import type { LayoutProps } from './Layout.types';
import React from 'react';
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
  const childArray = React.Children.toArray(children);
  let topBarChild: React.ReactElement | null = null;
  let leftBarChild: React.ReactElement | null = null;
  let rightBarChild: React.ReactElement | null = null;
  let footerChild: React.ReactElement | null = null;
  type ContentElement = React.ReactElement<React.ComponentProps<typeof Content>>;
  const isContentElement = (child: React.ReactNode): child is ContentElement =>
    React.isValidElement(child) && child.type === Content;
  let contentChild: ContentElement | null = null;
  const contentExtras: React.ReactNode[] = [];
  childArray.forEach((child) => {
    if (!React.isValidElement(child)) {
      contentExtras.push(child);
      return;
    }
    if (child.type === TopBar) {
      topBarChild = child;
      return;
    }
    if (child.type === LeftSidebar) {
      leftBarChild = child;
      return;
    }
    if (child.type === RightSidebar) {
      rightBarChild = child;
      return;
    }
    if (child.type === Footer) {
      footerChild = child;
      return;
    }
    if (isContentElement(child)) {
      contentChild = child;
      return;
    }
    contentExtras.push(child);
  });

  const resolvedContent =
    contentChild
      ? (() => {
          const element: React.ReactElement<any> = contentChild;
          return React.cloneElement(
            element,
            element.props,
            [...React.Children.toArray(element.props.children), ...contentExtras]
          );
        })()
      : (
          <Content>
            {contentExtras.length ? contentExtras : children}
          </Content>
        );

  return (
    <LeftBarProvider initialView={leftInitialView}>
      <RightBarProvider initialView={rightInitialView}>
        <Box
          id="layout-root"
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          {topBarChild ?? (hasTopBar && (
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
          ))}
          <Box sx={{ display: 'flex', flex: 1 }}>
            {leftBarChild ?? (hasLeftBar && (
              <LeftSidebar
                elements={[]}
                {...(typeof resolvedLeft === 'object' ? (resolvedLeft as any) : {})}
              />
            ))}
            {resolvedContent}
            {rightBarChild ?? (hasRightBar && (
              <RightSidebar
                elements={[]}
                {...(typeof resolvedRight === 'object' ? (resolvedRight as any) : {})}
              />
            ))}
          </Box>
          {footerChild ?? (resolvedFooter && (
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
          ))}
        </Box>
      </RightBarProvider>
    </LeftBarProvider>
  );
}

export default Layout;
