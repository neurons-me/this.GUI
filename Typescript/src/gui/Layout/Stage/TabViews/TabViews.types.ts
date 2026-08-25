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
}
