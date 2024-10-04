
import { Tabs } from './Tabs';

// Storybook configuration for Tabs component
export default {
  title: 'Layouts/ContentOrganization/Tabs',
  component: Tabs,
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
    children: 'This is a primary Tabs layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Tabs layout.',
  },
};
