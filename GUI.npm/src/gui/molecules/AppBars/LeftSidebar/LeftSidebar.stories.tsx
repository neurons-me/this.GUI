import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import LeftSidebar from './LeftSidebar';
import TopBar from '../TopBar/TopBar';
import Layout from '@/templates/Layout';
// Demo routes with icons + nested items
const sampleLinks = [
  { label: 'Home', href: '/', icon: 'home', iconColor: '#1976d2' },
  { label: 'Sockets', href: '/sockets', icon: 'power', iconColor: '#388e3c' },
  {
    label: 'Settings',
    icon: 'settings',
    iconColor: '#f57c00',
    children: [
      { label: 'Profile', href: '/settings/profile', icon: 'person', iconColor: '#7b1fa2' },
      { label: 'Billing', href: '/settings/billing', icon: 'credit_card', iconColor: '#d32f2f' },
    ],
  },
  { label: 'Docs (ext)', href: 'https://neurons.me', external: true, icon: 'menu_book', iconColor: '#0288d1' },
];

const meta: Meta<typeof LeftSidebar> = {
  title: 'Molecules/AppBars/LeftSidebar',
  component: LeftSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
        <div>
          <Story />
        </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof LeftSidebar>;
export const SidebarOnly: Story = {
  render: () => (
    <Layout leftSidebarConfig={{}}>
      <LeftSidebar railMode drawerLinks={sampleLinks} />
      <Box sx={{ flex: 1, bgcolor: 'background.default' }} />
    </Layout>
  ),
};

export const SidebarWithTopbar: Story = {
  render: () => (
    <Layout topBarConfig={{}} leftSidebarConfig={{}}>
      <TopBar showMenuButton={false} />
      <LeftSidebar railMode={false} drawerLinks={sampleLinks} />
      <Box sx={{ flex: 1, bgcolor: 'background.default' }} />
    </Layout>
  ),
};