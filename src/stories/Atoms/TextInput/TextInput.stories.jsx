
import { TextInput } from './TextInput';

// Storybook configuration for TextInput component
export default {
  title: 'Atoms/Interactive/TextInput',
  component: TextInput,
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
    children: 'This is a primary TextInput',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary TextInput',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large TextInput',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small TextInput',
  },
};
