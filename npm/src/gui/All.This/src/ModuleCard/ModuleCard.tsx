import React from 'react';
import { Paper, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
import type { ModuleCardProps } from '../../All.This.types';

export default function ModuleCard({
  'data-gui-node-id': rootNodeId,
  'data-gui-component': rootNodeType = 'ModuleCard',
  title,
  subtitle,
  meta,
  actions,
  children,
}: ModuleCardProps) {
  return (
    <Paper
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      variant="outlined"
      sx={{ p: 2 }}
    >
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          {subtitle ? (
            <Typography variant="overline" color="text.secondary">
              {subtitle}
            </Typography>
          ) : null}
          <Typography variant="h6">{title}</Typography>
          {meta ? (
            <Typography variant="body2" color="text.secondary">
              {meta}
            </Typography>
          ) : null}
        </Stack>

        {children ? <Stack spacing={1}>{children}</Stack> : null}
        {actions ? <Stack direction="row" spacing={1}>{actions}</Stack> : null}
      </Stack>
    </Paper>
  );
}
