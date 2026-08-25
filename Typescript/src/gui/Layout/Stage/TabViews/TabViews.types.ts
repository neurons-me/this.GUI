import * as React from 'react';

export interface TabViewsItem {
  id: string;
  label: string;
  render: () => React.ReactNode;
  /** Optional small preview shown when this view is parked (not active).
   * Defaults to just the label. */
  renderPreview?: () => React.ReactNode;
  /** Locked/encrypted placeholder instead of real content, in both the
   * parked preview and the front frame — the view exists, its content
   * doesn't render until something else flips this off. */
  blurred?: boolean;
}

export interface TabViewsProps {
  views: TabViewsItem[];
  activeId: string;
  onActiveChange: (id: string) => void;
  sx?: any;
  /** Stable id prefix for this instance's Semantic Inspector / Layout Grid
   * nodes (root, parked strip, front box, each parked tile). Defaults to a
   * generated per-instance id — pass one explicitly if you want a
   * predictable id to reference from outside (tests, deep links). */
  id?: string;
}
