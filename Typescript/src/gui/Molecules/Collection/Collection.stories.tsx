import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Collection from './Collection';
import type { CollectionData } from './Collection.types';

const meta: Meta<typeof Collection> = {
  title: 'Molecules/Collection',
  component: Collection,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Collection>;

const ITEMS: CollectionData['items'] = [
  { id: 'monad-1',    label: 'macbook',      icon: '🖥️' },
  { id: 'monad-2',    label: 'iphone',       icon: '📱' },
  { id: 'netget-1',   label: 'gateway',      icon: '𓆣' },
  { id: 'ns-1',       label: 'jabellae',     icon: '◉',  color: 'rgba(79,195,247,0.15)' },
  { id: 'claim-1',    label: 'is.human',     icon: '✓',  color: 'rgba(102,187,106,0.15)' },
  { id: 'surface-1',  label: 'local.netget', icon: '⚡' },
  { id: 'link-1',     label: 'neurons.me',   icon: '🌐' },
  { id: 'monad-3',    label: 'server',       icon: '🗄️' },
];

const Controlled = (props: Partial<React.ComponentProps<typeof Collection>>) => {
  const [col, setCol] = useState<CollectionData>({
    id: 'demo',
    label: props.collection?.label,
    items: props.collection?.items ?? ITEMS,
    groups: props.collection?.groups ?? [],
  });
  return (
    <Collection
      {...props}
      collection={col}
      onChange={setCol}
      onSelect={item => console.log('selected', item)}
    />
  );
};

export const Grid: Story = {
  render: () => <Controlled collection={{ id: 'demo', items: ITEMS, groups: [] }} />,
};

export const WithGroups: Story = {
  render: () => (
    <Controlled
      collection={{
        id: 'demo',
        items: ITEMS.slice(4),
        groups: [
          { id: 'g1', label: 'Monads', itemIds: ['monad-1', 'monad-2', 'monad-3'] },
          { id: 'g2', label: 'Identity', itemIds: ['ns-1', 'claim-1'] },
        ],
      }}
    />
  ),
};

export const Sidebar: Story = {
  render: () => (
    <div style={{ width: 200 }}>
      <Controlled
        surface="sidebar"
        collection={{ id: 'demo', items: ITEMS, groups: [] }}
      />
    </div>
  ),
};

export const Mobile: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Controlled
        surface="mobile"
        collection={{ id: 'demo', label: 'My Collection', items: ITEMS, groups: [] }}
      />
    </div>
  ),
  parameters: { layout: 'centered' },
};
