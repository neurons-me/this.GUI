// ProgressBar.stories.jsx
import React from 'react';
import { ProgressBar } from './ProgressBar';
import './ProgressBar.css'; // Import the CSS styles

export default {
  title: 'Atoms/Feedback/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
          'small-switch-1', 'small-switch-2',
          'natural-1', 'natural-2', 'natural-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
      description: 'Semantic color of the progress bar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    progress: {
      control: {
        type: 'number',
      },
      description: 'Percentage of progress completed.',
      table: {
        type: { summary: 'number' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed within the progress bar.',
      table: {
        type: { summary: 'string' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to display the label within the progress bar.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  color: 'primary',
  label: '50% Complete',
  showLabel: true,
};

export const WithDifferentColors = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    {[
      'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
      'small-switch-1', 'small-switch-2',
      'natural-1', 'natural-2', 'natural-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4'
    ].map((color) => (
      <ProgressBar key={color} progress={75} color={color} label={`${color} bar`} />
    ))}
  </div>
);

export const InteractivePlayground = Template.bind({});
InteractivePlayground.args = {
  progress: 60,
  color: 'info',
  label: 'Interactive Progress',
  showLabel: true,
};
