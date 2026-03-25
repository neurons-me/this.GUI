import React from 'react';
import { Stack } from '@/gui/Atoms';
import type { ModulesListProps } from '../../All.This.types';

export default function ModulesList({
  'data-gui-node-id': rootNodeId,
  'data-gui-component': rootNodeType = 'ModulesList',
  children,
}: ModulesListProps) {
  return (
    <Stack
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      spacing={2}
    >
      {children}
    </Stack>
  );
}
