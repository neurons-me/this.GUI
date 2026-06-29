import type { Meta, StoryObj } from '@storybook/react';
import MonadClaims from './MonadClaims';

const meta: Meta<typeof MonadClaims> = {
  title: 'All.This/monad.ai/MonadClaims',
  component: MonadClaims,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof MonadClaims>;

const claimRows = [
  { hash: 'a1', short: 'a1', username: 'suign', isOwner: true, role: 'owner' as const },
  { hash: 'b2', short: 'b2', username: 'rafael', role: 'identity' as const },
  { hash: 'c3', short: 'c3', username: 'jacobo', role: 'identity' as const },
];

export const Collapsed: Story = {
  args: { claimed: true, claimRows },
};

export const Expanded: Story = {
  args: { claimed: true, claimRows, defaultOpen: true },
};

export const Unclaimed: Story = {
  args: { claimed: false, claimRows: [], defaultOpen: true },
};
