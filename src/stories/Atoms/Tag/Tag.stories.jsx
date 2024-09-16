
import { Tag } from './Tag';

// Storybook configuration for Tag component
export default {
  title: 'Atoms/Visual/Tag',
  component: Tag,
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
    children: 'This is a primary Tag',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Tag',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Tag',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Tag',
  },
};
