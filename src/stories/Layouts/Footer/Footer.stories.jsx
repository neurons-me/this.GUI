
import { Footer } from './Footer';

// Storybook configuration for Footer component
export default {
  title: 'Layouts/NavigationAndMenus/Footer',
  component: Footer,
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
    children: 'This is a primary Footer layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Footer layout.',
  },
};
