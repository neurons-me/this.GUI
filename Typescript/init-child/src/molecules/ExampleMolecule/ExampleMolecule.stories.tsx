import type { Meta, StoryObj } from '@storybook/react';
import ExampleMolecule from './ExampleMolecule';

const meta: Meta<typeof ExampleMolecule> = {
  title: '__APP_NAME_PASCAL__/Molecules/ExampleMolecule',
  component: ExampleMolecule,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExampleMolecule>;

export const Default: Story = {
  args: {
    title: 'Example item',
    subtitle: 'Optional subtitle line',
    tag: 'active',
    tagVariant: 'success',
  },
};

export const NoTag: Story = {
  args: {
    title: 'No tag',
    subtitle: 'This molecule has no badge',
  },
};

export const WithWarning: Story = {
  args: {
    title: 'Warning state',
    tag: 'stale',
    tagVariant: 'warning',
  },
};
