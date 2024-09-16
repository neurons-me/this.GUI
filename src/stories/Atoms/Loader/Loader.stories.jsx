
import { Loader } from './Loader';

// Storybook configuration for Loader component
export default {
  title: 'Atoms/Feedback/Loader',
  component: Loader,
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
    children: 'This is a primary Loader',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Loader',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Loader',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Loader',
  },
};
