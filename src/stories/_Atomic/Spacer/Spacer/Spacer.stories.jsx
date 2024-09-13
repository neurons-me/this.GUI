
import { Spacer } from './Spacer';

// Storybook configuration for Spacer component
export default {
  title: '_Atomic/Spacer',
  component: Spacer,
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
    children: 'This is a primary Spacer',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Spacer',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Spacer',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Spacer',
  },
};
