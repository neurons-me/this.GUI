//@/gui/layouts/ResponsiveUI/Layout/Layout.types.ts
export interface TopBarConfig {
  showMenuButton?: boolean;
  [key: string]: any;
}

export interface LeftSidebarConfig {
  [key: string]: any;
}

export interface RightSidebarConfig {
  [key: string]: any;
}

export interface FooterConfig {
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

export interface LayoutProps {
  topBarConfig?: TopBarConfig | boolean;
  leftSidebarConfig?: LeftSidebarConfig | boolean;
  rightSidebarConfig?: RightSidebarConfig | boolean;
  footerConfig?: FooterConfig | boolean;
  children?: React.ReactNode;
}
