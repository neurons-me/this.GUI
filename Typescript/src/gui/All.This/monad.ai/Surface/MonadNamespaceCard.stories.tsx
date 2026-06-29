import type { Meta, StoryObj } from '@storybook/react';
import MonadNamespaceCard from './MonadNamespaceCard';

const meta: Meta<typeof MonadNamespaceCard> = {
  title: 'All.This/monad.ai/MonadNamespaceCard',
  component: MonadNamespaceCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof MonadNamespaceCard>;

const claimRows = [
  { hash: 'a1', short: 'a1', username: 'suign', isOwner: true, role: 'owner' as const },
  { hash: 'b2', short: 'b2', username: 'rafael', role: 'identity' as const },
  { hash: 'c3', short: 'c3', username: 'jacobo', role: 'identity' as const },
  { hash: 'd4', short: 'd4', username: 'esteban', role: 'identity' as const },
  { hash: 'e5', short: 'e5', username: 'eduardo', role: 'identity' as const },
];

const apps = [
  { name: 'monad:cleaker', port: 4101, healthy: true },
  { name: 'monad:netget', port: 4102, healthy: true },
];

export const Claimed: Story = {
  args: {
    namespace: 'suis-macbook-air.local',
    healthy: true,
    claimed: true,
    claimRows,
    apps,
    sleepingEntries: [{ name: 'monad:cold-store' }],
    waking: {},
    restartStatus: 'idle',
  },
};

export const Unclaimed: Story = {
  args: {
    namespace: 'suis-macbook-air.local',
    healthy: null,
    claimed: false,
    claimRows: [],
    apps: [],
    sleepingEntries: [],
    waking: {},
    restartStatus: 'idle',
  },
};

export const NoMonadsRegistered: Story = {
  args: {
    namespace: 'suis-macbook-air.local',
    healthy: false,
    claimed: true,
    claimRows: [claimRows[0]],
    apps: [],
    sleepingEntries: [],
    waking: {},
    restartStatus: 'idle',
  },
};

export const RestartingMesh: Story = {
  args: {
    namespace: 'suis-macbook-air.local',
    healthy: true,
    claimed: true,
    claimRows,
    apps,
    sleepingEntries: [{ name: 'monad:cold-store' }],
    waking: { 'monad:cold-store': true },
    restartStatus: 'restarting',
  },
};
