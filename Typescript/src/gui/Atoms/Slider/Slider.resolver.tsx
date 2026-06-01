import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { SliderProps } from './Slider';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Slider from './Slider';

export type SliderSpec = {
  type: 'Slider';
  props?: SliderProps & {
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'atoms.slider',
  type: 'Slider',
  label: 'Slider',
  group: 'Atoms',
  path: ['Forms'],
  tags: ['slider', 'range', 'input'],
  story: {
    title: 'Atoms/Forms & Inputs/Slider',
  },
  demoSpec: {
    type: 'Slider',
    props: {
      defaultValue: 30,
      min: 0,
      max: 100,
    },
  },
} as const;

const SliderResolver: RegistryEntry = {
  type: 'Slider',
  resolve(spec: SliderSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const { id, className, ...rest } = p;

    return (
      <Slider
        id={ensureNodeId('slider', id)}
        className={className}
        data-testid={p['data-testid']}
        {...rest}
      />
    );
  },
};

export default SliderResolver;
