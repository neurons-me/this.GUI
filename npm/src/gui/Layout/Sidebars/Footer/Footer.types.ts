import type React from 'react';
import type { SideBarsCollectionInput } from '@/gui/Layout/Sidebars/Collections/types';

export type FooterLinkProps = {
  label?: string;
  href?: string;
  icon?: string;
  iconColor?: string;
  external?: boolean;
  onClick?: () => void;
};

export type FooterActionProps = {
  label?: string;
  icon?: string;
  iconColor?: string;
  onClick?: () => void;
  element?: React.ReactNode;
};

export type FooterElement =
  | { type: 'link'; props: FooterLinkProps }
  | { type: 'action'; props: FooterActionProps };

export type FooterProps = {
  brandLabel?: string;
  brandLogo?: string;
  brandHref?: string;
  brandAvatarFallback?: string;
  leftElements?: FooterElement[];
  leftCollections?: SideBarsCollectionInput[];
  centerElements?: FooterElement[];
  centerCollections?: SideBarsCollectionInput[];
  rightElements?: FooterElement[];
  rightCollections?: SideBarsCollectionInput[];
  position?: 'static' | 'fixed' | 'sticky';
  elevation?: number;
  className?: string;
  id?: string;
  'data-testid'?: string;
  sx?: any;
  appBarSx?: any;
  sectionSx?: any;
};
