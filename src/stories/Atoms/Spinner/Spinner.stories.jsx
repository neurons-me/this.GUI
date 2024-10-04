// src/stories/Atoms/Spinner/Spinner.stories.jsx
import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Atoms/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the spinner',
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ]},
      description: 'Spinner color',
      defaultValue: 'primary',
    },
    variant: {
      control: { type: 'select', options: ['circle', 'dots', 'bars'] },
      description: 'Spinner variant',
      defaultValue: 'circle',
    },
    speed: {
      control: { type: 'text' },
      description: 'Speed of the spinner animation (e.g., "1s")',
      defaultValue: '1s',
    },
    text: {
      control: 'text',
      description: 'Optional loading text',
      defaultValue: 'Loading...',
    },
    fullScreen: {
      control: 'boolean',
      description: 'Display spinner in full-screen mode',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const InteractiveSpinner = Template.bind({});
InteractiveSpinner.args = {
  size: 'medium',
  color: 'primary',
  variant: 'circle',
  speed: '1s',
  text: 'Loading...',
  fullScreen: false,
};
InteractiveSpinner.storyName = 'Interactive Spinner';
