
import { Link } from './Link';

// Storybook configuration for Link component
export default {
  title: 'Atoms/Interactive/Link',
  component: Link,
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
    children: 'This is a primary Link',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Link',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Link',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Link',
  },
};
