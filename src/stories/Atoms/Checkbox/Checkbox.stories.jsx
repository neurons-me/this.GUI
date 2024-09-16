
import { Checkbox } from './Checkbox';

// Storybook configuration for Checkbox component
export default {
  title: 'Atoms/Interactive/Checkbox',
  component: Checkbox,
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
    children: 'This is a primary Checkbox',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Checkbox',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Checkbox',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Checkbox',
  },
};
