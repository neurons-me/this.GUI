import { Button } from './Button';

export default {
  title: '_Atomic/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for various user interactions.',
      },
    },
  },
  argTypes: {
    primary: { control: 'boolean', description: 'Is this the primary button?' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] }, description: 'Size of the button' },
    noborder: { control: 'boolean', description: 'No border button style' },
    label: { control: 'text', description: 'Text label for the button' },
    children: { control: 'text', description: 'Content inside the button' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
  },
};

export const NoBorder = {
  args: {
    noborder: true,
    children: 'No Border Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};