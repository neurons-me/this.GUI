import { Paper, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
import type { ModuleRowProps } from '../../All.This.types';

export default function ModuleRow({
  'data-gui-node-id': rootNodeId,
  'data-gui-component': rootNodeType = 'ModuleRow',
  title,
  subtitle,
  meta,
  actions,
  children,
}: ModuleRowProps) {
  return (
    <Paper
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      variant="outlined"
      sx={{ p: 2 }}
    >
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'stretch', md: 'center' }}
      >
        <Stack spacing={0.5} sx={{ minWidth: 0, flex: 1 }}>
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

        {children ? <Stack spacing={1} sx={{ minWidth: 0, flex: 1 }}>{children}</Stack> : null}
        {actions ? <Stack direction="row" spacing={1}>{actions}</Stack> : null}
      </Stack>
    </Paper>
  );
}
