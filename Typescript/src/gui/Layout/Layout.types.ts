// @/gui/layouts/ResponsiveUI/Layout/Layout.types.ts
import type { FooterProps } from '@/gui/Layout/Sidebars/Footer/Footer.types';
import type { LeftBarProps } from '@/gui/Layout/Sidebars/LeftBar/LeftBar.types';
import type { RightBarProps } from '@/gui/Layout/Sidebars/RightBar/RightBar.types';
import type { TopBarProps } from '@/gui/Layout/Sidebars/TopBar/TopBar.types';
import type { StickyItem, StickyOptionsTopProps } from '@/gui/Layout/StickyOptions/StickyOptionsTop';
import type { ReactNode } from 'react';
export interface TopBarConfig extends Partial<TopBarProps> {
  showMenuButton?: boolean;
}

export interface LeftBarConfig extends Partial<LeftBarProps> {}
export interface RightBarConfig extends Partial<RightBarProps> {}
export interface FooterConfig extends Partial<FooterProps> {
  title?: string;
}
export type StickyOptionsLayoutItem = Omit<StickyItem, 'icon'> & {
  // Layout config follows the same declarative icon token pattern as the rest of GUI.
  // Use <StickyOptionsTop /> directly if you need to pass a composed <Icon /> element.
  icon: string;
};

export interface StickyOptionsConfig extends Omit<Partial<StickyOptionsTopProps>, 'items'> {
  enabled?: boolean;
  items?: StickyOptionsLayoutItem[];
}

export interface LayoutProps {
  TopBar?: TopBarConfig | boolean;
  LeftBar?: LeftBarConfig | boolean;
  RightBar?: RightBarConfig | boolean;
  Footer?: FooterConfig | boolean;
  topBar?: TopBarConfig | boolean;
  leftBar?: LeftBarConfig | boolean;
  rightBar?: RightBarConfig | boolean;
  footer?: FooterConfig | boolean;
  topBarConfig?: TopBarConfig | boolean;
  leftBarConfig?: LeftBarConfig | boolean;
  leftSidebarConfig?: LeftBarConfig | boolean;
  rightBarConfig?: RightBarConfig | boolean;
  rightSidebarConfig?: RightBarConfig | boolean;
  footerConfig?: FooterConfig | boolean;
  stickyOptions?: StickyOptionsConfig | boolean;
  stickyOptionsConfig?: StickyOptionsConfig | boolean;
  children?: ReactNode;
}

export interface ContentChild {
  type: string;
  props?: Record<string, any>;
}

export interface ContentProps {
  children?: ContentChild[];
}

export interface LayoutSpec {
  type: 'Layout';
  props?: LayoutProps;
  children?: ReactNode;
  Content?: ContentProps[];
}
