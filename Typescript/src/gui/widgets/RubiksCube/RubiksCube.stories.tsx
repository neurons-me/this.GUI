import type { Meta, StoryObj } from '@storybook/react';
import RubiksCube from './RubiksCube';

const meta: Meta<typeof RubiksCube> = {
  title: 'Widgets/RubiksCube',
  component: RubiksCube,
  tags: ['autodocs'],
  args: {
    height: 340,
    spin: true,
    orbit: true,
    borderRadius: 16,
    palette: 'classic',
  },
};

export default meta;
type Story = StoryObj<typeof RubiksCube>;

export const Default: Story = {
  name: 'Default (spinning, draggable)',
};

export const Themed: Story = {
  name: 'Themed (neurons.me palette)',
  args: { palette: 'themed' },
};

export const Static: Story = {
  name: 'No spin',
  args: { spin: false },
};

export const NoOrbitControls: Story = {
  name: 'Orbit disabled',
  args: { orbit: false },
};
