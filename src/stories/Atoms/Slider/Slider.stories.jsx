// src/stories/Atoms/Slider/Slider.stories.jsx
import React, { useState } from 'react';
import { Slider } from './Slider';
import './Slider.css';

export default {
  title: 'Atoms/Interactive/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: 'array',
      description: 'Current value(s) of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value for the slider',
    },
    max: {
      control: 'number',
      description: 'Maximum value for the slider',
    },
    step: {
      control: 'number',
      description: 'Step size for the slider',
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
      description: 'Color of the slider track',
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
      description: 'Color of the slider thumb',
    },
    dual: {
      control: 'boolean',
      description: 'Enable dual handle for range selection',
    },
    showValue: {
      control: 'boolean',
      description: 'Display the current value(s) above the slider',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || [20, 80]);

  return (
    <Slider
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const InteractiveSlider = Template.bind({});
InteractiveSlider.args = {
  value: [20, 80],
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'info',
  showValue: true,
  dual: true,
  label: 'Select Range',
  disabled: false,
};
InteractiveSlider.storyName = 'Interactive Slider';
