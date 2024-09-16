
import { RangeInput } from './RangeInput';

// Storybook configuration for RangeInput component
export default {
  title: 'Atoms/Interactive/RangeInput',
  component: RangeInput,
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
    children: 'This is a primary RangeInput',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary RangeInput',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large RangeInput',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small RangeInput',
  },
};
