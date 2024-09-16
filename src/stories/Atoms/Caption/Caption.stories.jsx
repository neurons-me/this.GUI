
import { Caption } from './Caption';

// Storybook configuration for Caption component
export default {
  title: 'Atoms/Text/Caption',
  component: Caption,
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
    children: 'This is a primary Caption',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Caption',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Caption',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Caption',
  },
};
