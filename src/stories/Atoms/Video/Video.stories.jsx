
import { Video } from './Video';

// Storybook configuration for Video component
export default {
  title: '_Atomic/Video',
  component: Video,
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
    children: 'This is a primary Video',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Video',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Video',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Video',
  },
};
