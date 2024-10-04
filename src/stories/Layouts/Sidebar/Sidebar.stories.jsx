
import { Sidebar } from './Sidebar';

// Storybook configuration for Sidebar component
export default {
  title: 'Layouts/ContentOrganization/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary Sidebar layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Sidebar layout.',
  },
};
