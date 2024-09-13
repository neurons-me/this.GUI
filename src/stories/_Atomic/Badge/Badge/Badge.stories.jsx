
import { Badge } from './Badge';

// Storybook configuration for Badge component
export default {
  title: '_Atomic/Badge',
  component: Badge,
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
    children: 'This is a primary Badge',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Badge',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Badge',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Badge',
  },
};
