import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { ChipProps } from './Chip';
import { ensureNodeId } from '@/gui/utils/nodeID';
import Chip from './Chip';

export type ChipSpec = {
  type: 'Chip';
  props?: ChipProps & {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'atoms.chip',
  type: 'Chip',
  label: 'Chip',
  group: 'Atoms',
  path: ['DataDisplay'],
  tags: ['chip', 'tag', 'pill'],
  story: {
    title: 'Atoms/Data Display/Chip',
  },
  demoSpec: {
    type: 'Chip',
    props: {
      label: 'Chip',
    },
  },
} as const;

const ChipResolver: RegistryEntry = {
  type: 'Chip',
  resolve(spec: ChipSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const {
      children,
      id,
      className,
      label,
      ...rest
    } = p;

    return (
      <Chip
        id={ensureNodeId('chip', id)}
        className={className}
        data-testid={p['data-testid']}
        label={label ?? children}
        {...rest}
      />
    );
  },
};

export default ChipResolver;
