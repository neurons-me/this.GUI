// Layout/Stage/ViewStage/ViewStage.resolver.tsx
import * as React from 'react';
import ViewStage from './ViewStage';
import type { RegistryEntry } from '@/Registry/types';
import type { ViewStageItem } from './ViewStage.types';

type ViewStageSpec = {
  type: 'ViewStage';
  props?: {
    views: ViewStageItem[];
    activeId: string;
    onActiveChange: (id: string) => void;
    sx?: any;
  };
};

export const meta = {
  id: 'layout.viewstage',
  type: 'ViewStage',
  label: 'ViewStage',
  group: 'Layout',
  path: ['Layout', 'Stage'],
  tags: ['tabs', 'stage', 'views'],
} as const;

const ViewStageResolver: RegistryEntry = {
  type: 'ViewStage',
  resolve(spec: ViewStageSpec) {
    const p = spec.props ?? ({} as ViewStageSpec['props']);
    if (!p) return null;

    return (
      <ViewStage
        views={p.views}
        activeId={p.activeId}
        onActiveChange={p.onActiveChange}
        sx={p.sx}
      />
    );
  },
};

export default ViewStageResolver;
