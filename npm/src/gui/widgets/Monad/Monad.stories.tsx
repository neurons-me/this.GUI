import type { Meta, StoryObj } from '@storybook/react';
import Monad from './Monad';

const meta: Meta<typeof Monad> = {
  title: 'Users/monad.ai',
  component: Monad,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Monad>;

export const Bubble: Story = {
  args: {
    variant: 'bubble',
  },
};

export const Inline: Story = {
  args: {
    variant: 'inline',
  },
  parameters: {
    layout: 'padded',
  },
};
