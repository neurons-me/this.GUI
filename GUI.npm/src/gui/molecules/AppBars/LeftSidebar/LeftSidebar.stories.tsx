import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import LeftSidebar from './LeftSidebar';
import TopBar from '../TopBar/TopBar';
import { MemoryRouter } from 'react-router-dom';
import GuiProvider from '../../../../context/GuiProvider';

// Demo routes with icons + nested items
const sampleLinks = [
  { label: 'Home', href: '/', icon: 'lucide:Home' },
  { label: 'Sockets', href: '/sockets', icon: 'mui:Power' },
  {
    label: 'Settings',
    icon: 'mui:Settings',
    children: [
      { label: 'Profile', href: '/settings/profile', icon: 'lucide:User' },
      { label: 'Billing', href: '/settings/billing', icon: 'lucide:CreditCard' },
    ],
  },
  { label: 'Docs (ext)', href: 'https://neurons.me', external: true, icon: 'lucide:BookOpen' },
];

const meta: Meta<typeof LeftSidebar> = {
  title: 'Molecules/AppBars/LeftSidebar',
  component: LeftSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <GuiProvider>
          <Story />
        </GuiProvider>
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof LeftSidebar>;

export const SidebarOnly: Story = {
  render: () => (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar railMode drawerLinks={sampleLinks} />
      <Box sx={{ flex: 1, bgcolor: 'background.default' }} />
    </Box>
  ),
};

export const SidebarWithTopbar: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar title="Demo" showMenuButton={false} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <LeftSidebar railMode={false} drawerLinks={sampleLinks} />
        <Box sx={{ flex: 1, bgcolor: 'background.default' }} />
      </Box>
    </Box>
  ),
};