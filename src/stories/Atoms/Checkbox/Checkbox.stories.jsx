// src/stories/Atoms/Checkbox/Checkbox.stories.jsx
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import './Checkbox.css';

export default {
  title: 'Atoms/Interactive/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text', defaultValue: 'Checkbox Label' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Checkbox variant.',
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
      description: 'Checkbox size.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Checkbox color.',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded or squared checkbox.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox.',
    },
  },
};

/**
 * Primary Checkbox - Normal Size - Squared
 */
export const PrimaryNormal = () => (
  <Checkbox label="Primary Normal Checkbox" variant="primary" size="normal" color="info" />
);

/**
 * Secondary Checkbox - Large Size - Rounded
 */
export const SecondaryLargeRounded = () => (
  <Checkbox label="Secondary Large Rounded Checkbox" variant="secondary" size="large" color="warning" rounded />
);

/**
 * Primary Checkbox - Small Size - Rounded
 */
export const PrimarySmallRounded = () => (
  <Checkbox label="Primary Small Rounded Checkbox" variant="primary" size="small" color="success" rounded />
);

/**
 * Secondary Checkbox - Normal Size - Squared
 */
export const SecondaryNormal = () => (
  <Checkbox label="Secondary Normal Checkbox" variant="secondary" size="normal" color="neutral" />
);

/**
 * Interactive Checkbox
 */
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const InteractiveCheckbox = Template.bind({});
InteractiveCheckbox.args = {
  label: 'Interactive Checkbox',
  variant: 'primary',
  size: 'normal',
  color: 'info',
  rounded: false,
  disabled: false,
  checked: false,
};
InteractiveCheckbox.storyName = 'Interactive Checkbox';
