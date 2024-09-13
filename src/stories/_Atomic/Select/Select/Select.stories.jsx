
import { Select } from './Select';

// Storybook configuration for Select component
export default {
  title: '_Atomic/Select',
  component: Select,
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
    children: 'This is a primary Select',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Select',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Select',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Select',
  },
};
