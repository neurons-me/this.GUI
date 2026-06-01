import type React from 'react';
import type { RightBarView } from '@/gui-internals/Contexts';
import type { SideBarsCollectionInput } from '@/gui/Layout/Sidebars/Collections/types';
export type { RightBarView };
export type RightBarElement =
  | { type: 'link'; props: Record<string, any> }
  | { type: 'menu'; props: Record<string, any> }
  | { type: 'action'; props: Record<string, any> };
export type RightSidebarElement = RightBarElement;
export type RightBarProps = {
  elements?: RightBarElement[];
  collections?: SideBarsCollectionInput[];
  footerElements?: RightBarElement[];
  footerCollections?: SideBarsCollectionInput[];
  className?: string;
  header?: React.ReactNode | { title?: string; icon?: string; iconColor?: string };
  initialView?: RightBarView;
  id?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
};

export type RightSidebarProps = RightBarProps;
