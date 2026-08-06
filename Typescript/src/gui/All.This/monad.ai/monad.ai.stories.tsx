import type { Meta, StoryObj } from '@storybook/react';
import Monad from './monad.ai';
const meta: Meta<typeof Monad> = {
  title: 'All.This/monad.ai/monad.ai',
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

export const Identity: Story = {
  args: {
    variant: 'identity',
    kind: 'me',
    seed: 'jabellae',
  },
};

export const IdentityMonad: Story = {
  args: {
    variant: 'identity',
    kind: 'monad',
    seed: 'jabellae',
  },
  parameters: {
    docs: {
      description: {
        story:
          'monad has no identityHash-ring concept yet — variant="identity" intentionally falls back to the same pixel-grid it uses under variant="bubble".',
      },
    },
  },
};

export const Inline: Story = {
  args: {
    variant: 'inline',
    children: 'monad.ai is present with no shape.',
  },
  parameters: {
    layout: 'padded',
  },
};
