import type { Meta, StoryObj } from '@storybook/react';
import RootDomain from './RootDomain';

const RootDomainList = [
  { "domain": "abellae.com", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Brand extension" },
  { "domain": "abellae.me", "status": "Active", "provider": "Squarespace", "expiration": "May 16, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Creative identity site" },
  { "domain": "abellae.music", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Music/creative brand" },
  { "domain": "abellae.love", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Love brand" },
  { "domain": "abellae.lol", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Fun brand" },
  { "domain": "abellae.art", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Art brand" },
  { "domain": "abellae.space", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Space brand" },
  { "domain": "abellae.design", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Design brand" },
  { "domain": "abellae.dev", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Dev brand" },
  { "domain": "abellae.io", "status": "Active", "provider": "Squarespace", "expiration": "Jun 19, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Tech brand" },
  { "domain": "suign.com", "status": "Active", "provider": "Squarespace", "expiration": "Jun 30, 2026", "emails": ["me@neurons.me","jabellae@gmail.com"], "notes": "Forwards to www.suign.com" }
];

const meta: Meta<typeof RootDomain> = {
  title: 'RootDomain',
  component: RootDomain,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RootDomain>;

export const Default: Story = {
  render: () => <RootDomain services={RootDomainList} />,
};
