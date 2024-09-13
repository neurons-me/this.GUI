
import { Button } from './Button';

// Storybook configuration for Button component
export default {
  title: '_Atomic/Button',
  component: Button,
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
    children: 'This is a primary Button',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Button',
  },
};
