import type { LeftSidebarView } from '@/gui-internals/Contexts';
import type { SideBarsCollectionInput } from '@/gui/Layout/Sidebars/Collections/types';
import { ReactNode } from 'react';
export type LeftBarView = LeftSidebarView;
export type LeftBarMode = 'rail' | 'expanded' | 'mobile';
export type LeftSidebarMode = LeftBarMode;

export type LeftBarProps = {
  open?: boolean; // used in mobile
  mode?: LeftBarMode;
  onClose?: () => void;
  items?: any[];
  children?: ReactNode;
  brand?: ReactNode;
  footer?: ReactNode;
  elements?: LeftBarElement[];
  collections?: SideBarsCollectionInput[];
  footerElements?: LeftBarElement[];
  footerCollections?: SideBarsCollectionInput[];
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
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  shouldShowToggle?: boolean;
  railMode?: boolean;
  toggleLocation?: 'sidebar' | 'topbar' | 'none';
  header?: ReactNode | { title?: string; icon?: string; iconColor?: string };
  initialView?: LeftBarView;
};

export type LeftSidebarProps = LeftBarProps;

export type LeftBarElement =
  | { type: 'link'; props: Record<string, any> }
  | { type: 'menu'; props: Record<string, any> }
  | { type: 'action'; props: Record<string, any> };

export type LeftSidebarElement = LeftBarElement;

export type SidebarMode = LeftBarMode;
export type SidebarSection = {
  title?: string;
  items: any[];
};

export type SidebarToggleHandler = () => void;
