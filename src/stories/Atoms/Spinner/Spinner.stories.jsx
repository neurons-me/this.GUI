
import { Spinner } from './Spinner';

// Storybook configuration for Spinner component
export default {
  title: 'Atoms/Feedback/Spinner',
  component: Spinner,
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
    children: 'This is a primary Spinner',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Spinner',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Spinner',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Spinner',
  },
};
