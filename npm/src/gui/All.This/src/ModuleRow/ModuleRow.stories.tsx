import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem, Stack, TextField, Typography } from '@/gui/Atoms';
import ModuleRow from './ModuleRow';

const meta: Meta<typeof ModuleRow> = {
  title: 'All.This/Primitives/ModuleRow',
  component: ModuleRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ModuleRow>;

export const Default: Story = {
  args: {
    title: 'GUI',
    subtitle: 'Runtime',
    meta: '../../this/GUI/npm/dist/this.gui.umd.js',
    children: (
      <Stack spacing={0.5}>
        <Typography variant="overline" color="text.secondary">
          State
        </Typography>
        <Typography variant="body2" color="success.main">
          Loaded · v1.4.89
        </Typography>
      </Stack>
    ),
    actions: (
      <TextField select size="small" label="Source" value="local" sx={{ minWidth: 120 }}>
        <MenuItem value="local">Local</MenuItem>
        <MenuItem value="cdn">CDN</MenuItem>
      </TextField>
    ),
  },
};
