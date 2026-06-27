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
  },
};

export default meta;
type Story = StoryObj<typeof RubiksCube>;

export const Default: Story = {
  name: 'Default (spinning, draggable)',
};

export const Static: Story = {
  name: 'No spin',
  args: { spin: false },
};

export const NoOrbitControls: Story = {
  name: 'Orbit disabled',
  args: { orbit: false },
};
