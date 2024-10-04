
import { AdminDashboard } from './AdminDashboard';

// Storybook configuration for AdminDashboard template
export default {
  title: 'Templates/DashboardLayouts/AdminDashboard',
  component: AdminDashboard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default AdminDashboard template.',
  },
};
