
import { Tooltip } from './Tooltip';

// Storybook configuration for Tooltip component
export default {
  title: 'Atoms/Visual/Tooltip',
  component: Tooltip,
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
    children: 'This is a primary Tooltip',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Tooltip',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Tooltip',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Tooltip',
  },
};
