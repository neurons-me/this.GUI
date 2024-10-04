import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Atoms/Interactive/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ]},
      defaultValue: 'primary',
    },
    label: { control: 'text', defaultValue: 'Toggle label' },
    labelPosition: {
      control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
      defaultValue: 'right',
    },
  },
};

export const InteractiveToggle = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};
