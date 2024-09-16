
import { Divider } from './Divider';

// Storybook configuration for Divider component
export default {
  title: 'Atoms/Visual/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary Divider',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Divider',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Divider',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Divider',
  },
};
