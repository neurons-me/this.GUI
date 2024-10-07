import React from 'react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Molecules/Menus/Dropdown',
  component: Dropdown,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2',
        'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    searchable: { control: 'boolean' },
    showArrow: { control: 'boolean', defaultValue: true },
  },
};

const options = [
  'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'
];

export const BasicDropdown = (args) => <Dropdown {...args} options={options} />;
BasicDropdown.args = {
  placeholder: 'Select an option',
  searchable: false,
  variant: 'primary',
  color: 'primary',
};

export const SearchableDropdown = (args) => <Dropdown {...args} options={options} />;
SearchableDropdown.args = {
  placeholder: 'Type to search...',
  searchable: true,
  variant: 'primary',
  color: 'info',
};