
import { Audio } from './Audio';

// Storybook configuration for Audio component
export default {
  title: '_Atomic/Audio',
  component: Audio,
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
    children: 'This is a primary Audio',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Audio',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Audio',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Audio',
  },
};
