import React from 'react';
import Layout from './Layout';
import type { RegistryEntry } from '@/Registry/types';
import type { LayoutSpec } from './Layout.types';
/**
 * The LayoutResolver dynamically constructs a responsive layout
 * using declarative JSON configuration.
 *
 * It resolves topBar, sidebars, footer, and content sections
 * by passing their configs into the Layout component.
 */
const LayoutResolver: RegistryEntry = {
  type: 'Layout',
  resolve(spec: LayoutSpec) {
    const props = spec.props ?? {};

    // Allow declarative specs to use semantic region names (preferred):
    //   TopBar / LeftBar / RightBar / Footer
    // while still supporting legacy *Config keys and older LeftSideBar/RightSideBar.
    // We normalize to the legacy prop names that the Layout component expects.
    const {
      topBar,
      leftBar,
      rightBar,
      footer,
      TopBar,
      LeftBar,
      RightBar,
      // Deprecated aliases
      LeftSideBar,
      RightSideBar,
      Footer,
      topBarConfig,
      leftSidebarConfig,
      rightSidebarConfig,
      footerConfig,
      ...rest
    } = props as any;

    const resolvedChildren = props.children;
    const normalizedProps = {
      ...rest,
      topBarConfig: topBar ?? TopBar ?? topBarConfig,
      leftSidebarConfig: leftBar ?? LeftBar ?? LeftSideBar ?? leftSidebarConfig,
      rightSidebarConfig: rightBar ?? RightBar ?? RightSideBar ?? rightSidebarConfig,
      footerConfig: footer ?? Footer ?? footerConfig,
    };
    return (
      <Layout {...normalizedProps}>
        {resolvedChildren}
      </Layout>
    );
  },
};

export default LayoutResolver;
