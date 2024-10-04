// src/stories/Atoms/RadioButton/RadioButton.stories.jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import './RadioButton.css';

export default {
  title: 'Atoms/Interactive/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text', defaultValue: 'Radio Button Label' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Radio button variant.',
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
      description: 'Radio button size.',
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
      description: 'Radio button color.',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded or squared radio button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio button.',
    },
  },
};

/**
 * Primary RadioButton - Normal Size
 */
export const PrimaryNormal = () => (
  <RadioButton label="Primary Normal RadioButton" variant="primary" size="normal" color="info" name="group1" />
);

/**
 * Secondary RadioButton - Large Size - Rounded
 */
export const SecondaryLargeRounded = () => (
  <RadioButton label="Secondary Large Rounded RadioButton" variant="secondary" size="large" color="warning" rounded name="group2" />
);

/**
 * Primary RadioButton - Small Size - Rounded
 */
export const PrimarySmallRounded = () => (
  <RadioButton label="Primary Small Rounded RadioButton" variant="primary" size="small" color="success" rounded name="group3" />
);

/**
 * Secondary RadioButton - Normal Size
 */
export const SecondaryNormal = () => (
  <RadioButton label="Secondary Normal RadioButton" variant="secondary" size="normal" color="neutral" name="group4" />
);

/**
 * Interactive RadioButton
 */
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <RadioButton {...args} checked={checked} onChange={handleChange} />;
};

export const InteractiveRadioButton = Template.bind({});
InteractiveRadioButton.args = {
  label: 'Interactive RadioButton',
  variant: 'primary',
  size: 'normal',
  color: 'info',
  rounded: false,
  disabled: false,
  checked: false,
  name: 'interactive',
};
InteractiveRadioButton.storyName = 'Interactive RadioButton';
