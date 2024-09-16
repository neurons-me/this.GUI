
import { Image } from './Image';

// Storybook configuration for Image component
export default {
  title: 'Atoms/Media/Image',
  component: Image,
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
    children: 'This is a primary Image',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Image',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Image',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Image',
  },
};
