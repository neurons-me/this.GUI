
import { Pagination } from './Pagination';

// Storybook configuration for Pagination component
export default {
  title: 'Layouts/NavigationAndMenus/Pagination',
  component: Pagination,
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
    children: 'This is a primary Pagination layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Pagination layout.',
  },
};
