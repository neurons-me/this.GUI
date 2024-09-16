
import { TextArea } from './TextArea';

// Storybook configuration for TextArea component
export default {
  title: 'Atoms/Interactive/TextArea',
  component: TextArea,
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
    children: 'This is a primary TextArea',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary TextArea',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large TextArea',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small TextArea',
  },
};
