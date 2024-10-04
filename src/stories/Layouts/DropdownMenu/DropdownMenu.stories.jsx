
import { DropdownMenu } from './DropdownMenu';

// Storybook configuration for DropdownMenu component
export default {
  title: 'Layouts/NavigationAndMenus/DropdownMenu',
  component: DropdownMenu,
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
    children: 'This is a primary DropdownMenu layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary DropdownMenu layout.',
  },
};
