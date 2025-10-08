import { ReactNode } from 'react';
export type LeftSidebarMode = 'rail' | 'expanded' | 'mobile';

export type LeftSidebarProps = {
  open?: boolean; // used in mobile
  mode?: LeftSidebarMode;
  onClose?: () => void;
  items?: any[];
  children?: ReactNode;
  brand?: ReactNode;
  footer?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  enableCollapse?: boolean;
  defaultExpanded?: boolean;
  expandButton?: ReactNode;
  drawerLinks?: any[];
  collapsedWidth?: number;
  expandedWidth?: number;
  expanded?: boolean;
  id?: string;
  shouldShowToggle?: boolean;
  railMode?: boolean;
  toggleLocation?: 'sidebar' | 'topbar' | 'none';
  header?: ReactNode;
};

export type SidebarMode = LeftSidebarMode;
export type SidebarSection = {
  title?: string;
  items: any[];
};

export type SidebarToggleHandler = () => void;
