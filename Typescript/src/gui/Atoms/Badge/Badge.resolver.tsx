import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { BadgeProps } from './Badge';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Badge from './Badge';

export type BadgeSpec = {
  type: 'Badge';
  props?: BadgeProps & {
    content?: React.ReactNode;
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'atoms.badge',
  type: 'Badge',
  label: 'Badge',
  group: 'Atoms',
  path: ['DataDisplay'],
  tags: ['badge', 'status', 'counter'],
  story: {
    title: 'Atoms/Data Display/Badge',
  },
  demoSpec: {
    type: 'Badge',
    props: {
      badgeContent: 4,
    },
  },
} as const;

const BadgeResolver: RegistryEntry = {
  type: 'Badge',
  resolve(spec: BadgeSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const {
      children,
      content,
      id,
      className,
      ...rest
    } = p;

    return (
      <Badge
        id={ensureNodeId('badge', id)}
        className={className}
        data-testid={p['data-testid']}
        badgeContent={p.badgeContent ?? content}
        {...rest}
      >
        {children ?? <span />}
      </Badge>
    );
  },
};

export default BadgeResolver;
