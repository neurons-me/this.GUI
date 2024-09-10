import React from 'react';
import Button from './Button';

// Grouping the Button under 'Example/Button'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
};

// Default story
export const Primary = (args) => <Button {...args} />;
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'medium',
};

export const Secondary = Primary.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

// Different sizes
export const Large = Primary.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const Small = Primary.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};