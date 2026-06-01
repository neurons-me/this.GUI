import type { Meta, StoryObj } from '@storybook/react';
import ExampleAtom from './ExampleAtom';

const meta: Meta<typeof ExampleAtom> = {
  title: '__APP_NAME_PASCAL__/Atoms/ExampleAtom',
  component: ExampleAtom,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'warning', 'error', 'success'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExampleAtom>;

export const Default: Story = {
  args: { label: 'example', variant: 'default' },
};

export const Primary: Story = {
  args: { label: 'primary', variant: 'primary' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['default', 'primary', 'secondary', 'warning', 'error', 'success'] as const).map(v => (
        <ExampleAtom key={v} label={v} variant={v} />
      ))}
    </div>
  ),
};
