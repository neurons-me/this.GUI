import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import InspectorToggle from './InspectorToggle';
import type { InspectorToggleResolverSpec } from './InspectorToggle.types';

export const meta = {
  id: 'molecules.inspector-toggle',
  type: 'InspectorToggle',
  label: 'Inspector Toggle',
  group: 'Molecules',
  path: ['Runtime'],
  tags: ['inspector', 'runtime', 'toggle'],
  demoSpec: {
    type: 'InspectorToggle',
    props: {
      variant: 'button',
      show: 'both',
    },
  },
} as const;

const InspectorToggleResolver: RegistryEntry = {
  type: 'InspectorToggle',
  resolve(spec: InspectorToggleResolverSpec) {
    const props = spec.props ?? {};
    return (
      <InspectorToggle
        {...props}
        id={ensureNodeId('inspector-toggle', props.id)}
      />
    );
  },
};

export default InspectorToggleResolver;
