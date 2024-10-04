
import { Header } from './Header';

// Storybook configuration for Header component
export default {
  title: 'Layouts/NavigationAndMenus/Header',
  component: Header,
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
    children: 'This is a primary Header layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Header layout.',
  },
};
