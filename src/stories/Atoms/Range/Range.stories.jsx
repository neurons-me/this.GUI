// src/stories/Atoms/Range/Range.stories.jsx
import React, { useState } from 'react';
import { Range } from './Range';
import './Range.css';

export default {
  title: 'Atoms/Interactive/Range',
  component: Range,
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the range input.',
    },
    min: {
      control: 'number',
      description: 'Minimum value for the range.',
    },
    max: {
      control: 'number',
      description: 'Maximum value for the range.',
    },
    step: {
      control: 'number',
      description: 'Step size for the range input.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the range component.',
    },
    thumbColor: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the thumb (controller).',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to display the current value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the range input.',
    },
    label: {
      control: 'text',
      description: 'Label for the range input.',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Range
      {...args}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

export const DefaultRange = Template.bind({});
DefaultRange.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'primary',
  showValue: true,
  label: 'Volume',
  disabled: false,
};

export const WithDifferentThumbColors = () => (
  <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
    <Range min={0} max={100} value={75} color="info" thumbColor="warning" label="Brightness" />
    <Range min={0} max={100} value={40} color="warning" thumbColor="alert" label="Contrast" />
    <Range min={0} max={100} value={25} color="success" thumbColor="dark" label="Volume" />
  </div>
);

export const InteractiveRange = Template.bind({});
InteractiveRange.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'info',
  showValue: true,
  label: 'Volume Control',
  disabled: false,
};
InteractiveRange.storyName = 'Interactive Range';
