import React from 'react';
import { Box, Button, Stack, Typography } from '@/gui/Atoms';
import ModuleCard from './src/ModuleCard/ModuleCard';
import ModuleRow from './src/ModuleRow/ModuleRow';
import ModulesGrid from './src/ModulesGrid/ModulesGrid';
import ModulesList from './src/ModulesList/ModulesList';

export type AllThisProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  title?: string;
  description?: string;
};

export default function AllThis({
  'data-gui-node-id': rootNodeId = 'AllThisOverview',
  'data-gui-component': rootNodeType = 'AllThisOverview',
  title = 'Module primitives',
  description = 'Reusable surfaces for package UIs. Package-specific components can live in their own folders and compose these primitives.',
}: AllThisProps) {
  return (
    <Box
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      sx={{ px: 2, py: 4, bgcolor: 'background.default' }}
    >
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 960, mx: 'auto' }}>
        <Stack spacing={1}>
          <Typography variant="overline" color="text.secondary">
            All.This
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </Stack>

        <ModuleCard
          data-gui-node-id={`${rootNodeId}.card`}
          title="ModuleCard"
          meta="Standalone surface for a single module."
          actions={<Button size="small">Action</Button>}
        >
          <Typography variant="body2" color="text.secondary">
            Any module can bring its own content here.
          </Typography>
        </ModuleCard>

        <ModuleRow
          data-gui-node-id={`${rootNodeId}.row`}
          title="ModuleRow"
          meta="Compact horizontal surface for indexes, menus, or status strips."
          actions={<Button size="small">Open</Button>}
        >
          <Typography variant="body2" color="text.secondary">
            Useful when the module lives inside a list.
          </Typography>
        </ModuleRow>

        <ModulesGrid data-gui-node-id={`${rootNodeId}.grid`}>
          <ModuleCard title="GUI" meta="Package surface">
            <Typography variant="body2" color="text.secondary">
              Theme, layout, and interaction primitives.
            </Typography>
          </ModuleCard>
          <ModuleCard title="DOM" meta="Package surface">
            <Typography variant="body2" color="text.secondary">
              Document and render-facing components.
            </Typography>
          </ModuleCard>
        </ModulesGrid>

        <ModulesList data-gui-node-id={`${rootNodeId}.list`}>
          <ModuleRow title="ModuleCard" meta="Detail-oriented module surface" />
          <ModuleRow title="ModuleRow" meta="Dense horizontal module surface" />
          <ModuleRow title="ModulesGrid" meta="Responsive container for cards" />
          <ModuleRow title="ModulesList" meta="Vertical stack for rows or cards" />
        </ModulesList>
      </Stack>
    </Box>
  );
}
