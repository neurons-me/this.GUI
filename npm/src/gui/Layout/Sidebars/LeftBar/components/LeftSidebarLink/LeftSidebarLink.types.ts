import React from 'react';
import type { LeftSidebarView } from '@/gui-internals/Contexts/LeftSidebarContext';
export type LeftSidebarItemProps = {
  label?: string;
  icon?: string;
  iconColor?: string;
  href?: string;
  /** react-router path */
  to?: string;
  active?: boolean;
  external?: boolean;
  onClick?: () => void;
  view?: LeftSidebarView;
  children?: React.ReactNode;
};
