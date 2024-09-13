
import { Icon } from './Icon';

// Storybook configuration for Icon component
export default {
  title: '_Atomic/Icon',
  component: Icon,
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
    children: 'This is a primary Icon',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Icon',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Icon',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Icon',
  },
};
