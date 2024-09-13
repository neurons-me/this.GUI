
import { Slider } from './Slider';

// Storybook configuration for Slider component
export default {
  title: '_Atomic/Slider',
  component: Slider,
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
    children: 'This is a primary Slider',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Slider',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Slider',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Slider',
  },
};
