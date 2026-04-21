import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Slider, { type ChartSliderProps } from './Slider';

export type ChartSliderSpec = {
  type: 'ChartSlider';
  props?: ChartSliderProps & {
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'compounds.charts.slider',
  label: 'Slider',
  kind: 'molecule' as const,
  path: ['Charts'],
  tags: ['chart', 'slider', 'range', 'control'],
  story: {
    title: 'Compounds/Charts/Slider',
  },
  demoSpec: {
    type: 'ChartSlider',
    props: {
      label: 'Granularity',
      defaultValue: 30,
      min: 0,
      max: 100,
    },
  },
};

const ChartSliderResolver: RegistryEntry = {
  type: 'ChartSlider',
  meta,
  resolve(spec: ChartSliderSpec, _ctx?: ResolveCtx) {
    const p = (spec.props ?? {}) as NonNullable<ChartSliderSpec['props']>;
    const { id, className, ['data-testid']: dataTestId, ...rest } = p;

    return (
      <Slider
        id={ensureNodeId('chart-slider', id)}
        className={className}
        data-testid={dataTestId}
        {...(rest as ChartSliderProps)}
      />
    );
  },
};

export default ChartSliderResolver;
