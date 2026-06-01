import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import LineChart, { type LineChartProps } from './LineChart';

export type LineChartSpec = {
  type: 'LineChart';
  props?: LineChartProps & {
    id?: string;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'compounds.charts.line-chart',
  label: 'LineChart',
  kind: 'molecule' as const,
  path: ['Charts'],
  tags: ['chart', 'line-chart', 'data', 'analytics'],
  story: {
    title: 'Compounds/Charts/LineChart',
  },
  demoSpec: {
    type: 'LineChart',
    props: {
      title: 'Revenue',
      data: [12, 18, 22, 26, 31, 44],
    },
  },
};

const LineChartResolver: RegistryEntry = {
  type: 'LineChart',
  meta,
  resolve(spec: LineChartSpec, _ctx?: ResolveCtx) {
    const p = (spec.props ?? {}) as NonNullable<LineChartSpec['props']>;
    const { id, className, ['data-testid']: dataTestId, ...rest } = p;

    return (
      <LineChart
        id={ensureNodeId('line-chart', id)}
        className={className}
        data-testid={dataTestId}
        {...(rest as LineChartProps)}
      />
    );
  },
};

export default LineChartResolver;
