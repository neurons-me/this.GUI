// src/stories/atoms/Interactive/Icon/Icon.stories.jsx

import React from 'react';
import { Icon } from './Icon';

export default {
  title: 'Atoms/Interactive/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the icon symbol to use.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the icon.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Color variant of the icon.',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'home', // Replace 'home' with an actual icon name
  size: 'medium',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'settings',
  size: 'medium',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  name: 'check',
  size: 'medium',
  color: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  name: 'error',
  size: 'medium',
  color: 'danger',
};

export const Large = Template.bind({});
Large.args = {
  name: 'star',
  size: 'large',
  color: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  name: 'search',
  size: 'small',
  color: 'primary',
};