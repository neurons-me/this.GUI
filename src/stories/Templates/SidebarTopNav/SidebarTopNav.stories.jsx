
import { SidebarTopNav } from './SidebarTopNav';

// Storybook configuration for SidebarTopNav template
export default {
  title: 'Templates/DashboardLayouts/SidebarTopNav',
  component: SidebarTopNav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default SidebarTopNav template.',
  },
};
