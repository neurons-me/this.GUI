import type { ReactNode } from 'react';

export type PageHeadMetaTag = {
  name?: string;
  property?: string;
  content?: string;
  httpEquiv?: string;
  itemProp?: string;
  charSet?: string;
};

export type PageHeadLinkTag = {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
  media?: string;
  color?: string;
};

export interface PageHeadConfig {
  title?: string;
  description?: string;
  favicon?: string;
  image?: string;
  socialImage?: string;
  ogImage?: string;
  twitterImage?: string;
  canonical?: string;
  url?: string;
  type?: string;
  siteName?: string;
  themeColor?: string;
  robots?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  meta?: PageHeadMetaTag[];
  links?: PageHeadLinkTag[];
}
/**
 * PageProps
 * ----------
 * Public props for the Page container.
 */
export interface PageProps {
  /** Page content */
  children?: ReactNode;
  /**
   * Padding applied to the page.
   *
   * - number → resolved via theme.spacing when available
   * - string → raw CSS value (e.g. "24px", "2rem", "16px 24px")
   */
  padding?: number | string;
  /** Any valid CSS background value (color / gradient / image). */
  background?: string;
  /** Additional style overrides forwarded to Box `sx`. */
  sx?: Record<string, any>;
  /** Respect layout insets via CSS vars: --gui-inset-* */
  insetsAware?: boolean;
  /** Optional document/head metadata applied while this Page is mounted. */
  head?: PageHeadConfig;
}
