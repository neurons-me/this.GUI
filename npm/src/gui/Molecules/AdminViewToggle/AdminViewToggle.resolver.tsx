import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import AdminViewToggle from './AdminViewToggle';
import type { AdminViewToggleResolverSpec } from './AdminViewToggle.types';

export const meta = {
  id: 'molecules.admin-view-toggle',
  type: 'AdminViewToggle',
  label: 'Admin View Toggle',
  group: 'Molecules',
  path: ['Runtime'],
  tags: ['admin', 'runtime', 'toggle'],
  demoSpec: {
    type: 'AdminViewToggle',
    props: {
      variant: 'button',
      show: 'both',
    },
  },
} as const;

const AdminViewToggleResolver: RegistryEntry = {
  type: 'AdminViewToggle',
  resolve(spec: AdminViewToggleResolverSpec) {
    const props = spec.props ?? {};
    return (
      <AdminViewToggle
        {...props}
        id={ensureNodeId('admin-view-toggle', props.id)}
      />
    );
  },
};

export default AdminViewToggleResolver;
