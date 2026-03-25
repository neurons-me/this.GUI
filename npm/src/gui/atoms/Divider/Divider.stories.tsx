import type { Meta, StoryObj } from '@storybook/react';
import { Divider, Box, Typography, Stack } from '@/gui/Atoms';

 const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Divider component is a thin wrapper over MUI\'s `MuiDivider`. It preserves all props and allows styling via the `sx` prop.  \n\nUse it to divide content, lists or layouts.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider.',
    },
    variant: {
      control: { type: 'radio' },
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use.',
    },
    flexItem: {
      control: { type: 'boolean' },
      description: 'If true, the divider is a flex item.',
    },
  },
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth',
    flexItem: false,
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Variants: Story = {
  render: (args) => (
    <Stack spacing={2} sx={{ width: 300, display: 'flex' }}>
      <Typography variant="h6">Horizontal Divider</Typography>
       <Typography>Item One</Typography>
      <Divider  />
       <Typography>Item Two</Typography>

      <Typography variant="h6">Vertical Divider</Typography>
      <Box sx={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", height: "100px"}}>
        <Typography>Left</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>Right</Typography>
      </Box>

      <Typography variant="h6">Inset Divider</Typography>
       <Typography>First</Typography>
      <Divider variant="inset" />
       <Typography>Second</Typography>

      <Typography variant="h6">Text Divider</Typography>
      <Divider>Text Content</Divider>
    </Stack>
  ),
};
