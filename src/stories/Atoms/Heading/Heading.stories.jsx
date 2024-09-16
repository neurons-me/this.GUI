
import { Heading } from './Heading';

// Storybook configuration for Heading component
export default {
  title: 'Atoms/Text/Heading',
  component: Heading,
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
    children: 'This is a primary Heading',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Heading',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Heading',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Heading',
  },
};
