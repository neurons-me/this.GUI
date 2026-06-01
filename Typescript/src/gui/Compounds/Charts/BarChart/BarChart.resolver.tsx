import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import BarChart, { type BarChartProps } from './BarChart';

export type BarChartSpec = {
  type: 'BarChart';
  props?: BarChartProps & {
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'compounds.charts.bar-chart',
  label: 'BarChart',
  kind: 'molecule' as const,
  path: ['Charts'],
  tags: ['chart', 'bar-chart', 'data', 'analytics'],
  story: {
    title: 'Compounds/Charts/BarChart',
  },
  demoSpec: {
    type: 'BarChart',
    props: {
      title: 'Quarterly sales',
      data: [
        { label: 'Q1', value: 18 },
        { label: 'Q2', value: 22 },
        { label: 'Q3', value: 29 },
        { label: 'Q4', value: 34 },
      ],
    },
  },
};

const BarChartResolver: RegistryEntry = {
  type: 'BarChart',
  meta,
  resolve(spec: BarChartSpec, _ctx?: ResolveCtx) {
    const p = (spec.props ?? {}) as NonNullable<BarChartSpec['props']>;
    const { id, className, ['data-testid']: dataTestId, ...rest } = p;

    return (
      <BarChart
        id={ensureNodeId('bar-chart', id)}
        className={className}
        data-testid={dataTestId}
        {...(rest as BarChartProps)}
      />
    );
  },
};

export default BarChartResolver;
