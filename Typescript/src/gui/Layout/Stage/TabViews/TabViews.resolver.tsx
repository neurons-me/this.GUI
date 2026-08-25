// Layout/Stage/TabViews/TabViews.resolver.tsx
import * as React from 'react';
import TabViews from './TabViews';
import type { RegistryEntry } from '@/Registry/types';
import type { TabViewsItem } from './TabViews.types';

type TabViewsSpec = {
  type: 'TabViews';
  props?: {
    views: TabViewsItem[];
    activeId: string;
    onActiveChange: (id: string) => void;
    sx?: any;
  };
};

export const meta = {
  id: 'layout.tabviews',
  type: 'TabViews',
  label: 'TabViews',
  group: 'Layout',
  path: ['Layout', 'Stage'],
  tags: ['tabs', 'stage', 'views'],
} as const;

const TabViewsResolver: RegistryEntry = {
  type: 'TabViews',
  resolve(spec: TabViewsSpec) {
    const p = spec.props ?? ({} as TabViewsSpec['props']);
    if (!p) return null;

    return (
      <TabViews
        views={p.views}
        activeId={p.activeId}
        onActiveChange={p.onActiveChange}
        sx={p.sx}
      />
    );
  },
};

export default TabViewsResolver;
