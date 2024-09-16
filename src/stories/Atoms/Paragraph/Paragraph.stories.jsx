
import { Paragraph } from './Paragraph';

// Storybook configuration for Paragraph component
export default {
  title: 'Atoms/Text/Paragraph',
  component: Paragraph,
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
    children: 'This is a primary Paragraph',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Paragraph',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Paragraph',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Paragraph',
  },
};
