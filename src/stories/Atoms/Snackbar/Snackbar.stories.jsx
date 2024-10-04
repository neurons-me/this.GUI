// src/stories/Atoms/Snackbar/Snackbar.stories.jsx
import React from 'react';
import { Snackbar } from './Snackbar';

export default {
  title: 'Atoms/Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'This is a snackbar message.',
    },
    duration: {
      control: 'number',
      defaultValue: 3000,
    },
    actionLabel: {
      control: 'text',
      defaultValue: 'Undo',
    },
    onActionClick: {
      action: 'action clicked',
    },
    onClose: {
      action: 'closed',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
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
    },
  },
};

const Template = (args) => <Snackbar {...args} />;

export const PrimarySnackbar = Template.bind({});
PrimarySnackbar.args = {
  message: 'This is a primary snackbar.',
  duration: 3000,
  actionLabel: 'Undo',
  variant: 'primary',
  color: 'primary',
};

export const SecondarySnackbar = Template.bind({});
SecondarySnackbar.args = {
  message: 'This is a secondary snackbar with border.',
  duration: 3000,
  actionLabel: 'Dismiss',
  variant: 'secondary',
  color: 'success',
};

// Interactive Snackbar Example
export const InteractiveSnackbar = Template.bind({});
InteractiveSnackbar.args = {
  message: 'This is a customizable snackbar.',
  duration: 3000,
  actionLabel: 'Dismiss',
  variant: 'primary',
  color: 'primary',
  onActionClick: () => alert('Action clicked!'),
  onClose: () => alert('Snackbar closed!'),
};
InteractiveSnackbar.storyName = 'Interactive Snackbar';