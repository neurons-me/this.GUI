import React from 'react';
import type { LeftSidebarView } from '@/gui/Contexts/LeftSidebarContext';
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
