import React from 'react';
import { Container } from './Container';

export default {
  title: 'Atoms/Layout/Container',
  component: Container,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    border: {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    fluid: { control: 'boolean' },
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    marginTop: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    marginLeft: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    marginRight: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    position: {
      control: { type: 'select' },
      options: ['relative', 'static', 'fixed', 'absolute', 'sticky'],
    },
    rounded: { control: 'boolean' }, // Add control for 'rounded' prop
    borderColor: {
      control: { type: 'select' },
      options: [
        'none',
        'primary',
        'secondary',
        'link',
        'focus',
        'info',
        'warning',
        'alert',
        'success',
        'neutral',
        'dark',
        'classy-1',
        'classy-2',
        'classy-3',
        'classy-4',
        'classy-5',
        'small-switch-1',
        'small-switch-2',
        'natural-1',
        'natural-2',
        'natural-3',
        'grey-friend-1',
        'grey-friend-2',
        'shade-1',
        'shade-2',
        'shade-3',
        'shade-4',
      ],
    },
    backgroundColor: {
      control: { type: 'select' }, // Use 'select' control type
      options: [
        'none',
        'primary',
        'secondary',
        'link',
        'focus',
        'info',
        'warning',
        'alert',
        'success',
        'neutral',
        'dark',
        'classy-1',
        'classy-2',
        'classy-3',
        'classy-4',
        'classy-5',
        'small-switch-1',
        'small-switch-2',
        'natural-1',
        'natural-2',
        'natural-3',
        'grey-friend-1',
        'grey-friend-2',
        'shade-1',
        'shade-2',
        'shade-3',
        'shade-4',
      ],
    },
  },
};

const Template = (args) => <Container {...args}>Content goes here</Container>;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  border: 'on',
  align: 'left',
  fluid: false,
  padding: 'md',
  marginTop: 'md',
  marginBottom: 'md',
  marginLeft: 'md',
  marginRight: 'md',
  position: 'relative',
};

export const Fluid = Template.bind({});
Fluid.args = {
  ...Default.args,
  fluid: true,
};

export const Centered = Template.bind({});
Centered.args = {
  ...Default.args,
  align: 'center',
};

export const LargePadding = Template.bind({});
LargePadding.args = {
  ...Default.args,
  padding: 'lg',
};
