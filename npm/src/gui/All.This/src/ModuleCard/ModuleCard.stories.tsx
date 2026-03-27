import type { Meta, StoryObj } from '@storybook/react';
import { Button, TextField, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
import ModuleCard from './ModuleCard';

const meta: Meta<typeof ModuleCard> = {
  title: 'All.This/Primitives/ModuleCard',
  component: ModuleCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ModuleCard>;

export const Default: Story = {
  args: {
    title: 'DOM',
    subtitle: 'Runtime',
    meta: './npm/dist/dom.umd.js',
    children: (
      <Stack spacing={2}>
        <TextField
          size="small"
          label="URL"
          fullWidth
          value="https://example.com"
        />
        <Typography variant="body2" color="text.secondary">
          DOM workbenches can place parse inputs and output panes here.
        </Typography>
      </Stack>
    ),
    actions: (
      <>
        <Button size="small">Fetch & Parse URL</Button>
        <Button size="small" variant="outlined">
          Load Sample
        </Button>
      </>
    ),
  },
};
