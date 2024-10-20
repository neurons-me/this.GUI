import React from 'react';
import { Grid } from './Grid';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { control: 'text', defaultValue: '16px', description: 'Gap between grid items' },
    border: { control: 'boolean', defaultValue: false, description: 'Show border around grid items' },
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
      defaultValue: 'primary',
      description: 'Color for grid item borders',
    },
    rounded: { control: 'boolean', defaultValue: false, description: 'Apply rounded corners' },
    shadow: {
      control: { type: 'select', options: ['none', 'small', 'medium', 'large'] },
      defaultValue: 'none',
      description: 'Shadow depth around grid items',
    },
    hover: { control: 'boolean', defaultValue: false, description: 'Apply hover effect' },
  },
};

const Template = (args) => (
  <Grid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  gap: '16px',
  border: false,
  rounded: false,
  shadow: 'none',
  hover: false,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  gap: '16px',
  border: true,
  color: 'primary',
  rounded: true,
  shadow: 'medium',
};

export const HoverEffect = Template.bind({});
HoverEffect.args = {
  gap: '16px',
  border: true,
  color: 'secondary',
  rounded: true,
  shadow: 'small',
  hover: true,
};

export const LargeShadow = Template.bind({});
LargeShadow.args = {
  gap: '24px',
  border: true,
  color: 'alert',
  rounded: true,
  shadow: 'large',
};