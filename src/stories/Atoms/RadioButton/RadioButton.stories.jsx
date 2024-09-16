
import { RadioButton } from './RadioButton';

// Storybook configuration for RadioButton component
export default {
  title: 'Atoms/Interactive/RadioButton',
  component: RadioButton,
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
    children: 'This is a primary RadioButton',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary RadioButton',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large RadioButton',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small RadioButton',
  },
};
