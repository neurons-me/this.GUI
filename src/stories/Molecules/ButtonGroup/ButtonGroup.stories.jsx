//this.GUI/src/stories/Molecules/ButtonGroup/ButtonGroup.stories.jsx
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Molecules/Actions/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2',
          'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    variant: {
      control: { type: 'select', options: ['solid', 'outline'] },
    },
  },
};

const buttonOptions = [
  { label: 'Button 1', value: 'button1' },
  { label: 'Button 2', value: 'button2' },
  { label: 'Button 3', value: 'button3' },
];

export const DefaultButtonGroup = (args) => <ButtonGroup {...args} buttons={buttonOptions} />;

DefaultButtonGroup.args = {
  size: 'medium',
  color: 'primary',
  variant: 'solid',
  onButtonClick: (value) => console.log('Clicked button:', value),
};