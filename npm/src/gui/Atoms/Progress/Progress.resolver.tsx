import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import Progress, { type ProgressProps } from './Progress';

export type ProgressSpec = {
  type: 'Progress';
  props?: ProgressProps;
};

export const meta = {
  id: 'atoms.progress',
  type: 'Progress',
  label: 'Progress',
  group: 'Atoms',
  path: ['Feedback'],
  tags: ['progress', 'loading', 'spinner'],
  story: {
    title: 'Atoms/Feedback/Progress',
  },
  demoSpec: {
    type: 'Progress',
    props: {
      kind: 'linear',
      variant: 'determinate',
      value: 50,
    },
  },
} as const;

const ProgressResolver: RegistryEntry = {
  type: 'Progress',
  resolve(spec: ProgressSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    return (
      <Progress
        id={ensureNodeId('progress', p.id)}
        data-testid={p['data-testid']}
        {...p}
      />
    );
  },
};

export default ProgressResolver;
