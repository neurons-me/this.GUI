// src/stories/Atoms/Select/Select.stories.jsx
import React, { useState } from 'react';
import { Select } from './Select';
import './Select.css';

export default {
  title: 'Atoms/Interactive/Select',
  component: Select,
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value.',
    },
    options: {
      control: 'array',
      description: 'List of options available for selection.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed before selecting an option.',
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
      description: 'Color variant for the select component.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select input is disabled.',
    },
    label: {
      control: 'text',
      description: 'Label for the select input.',
    },
  },
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  return (
    <Select
      {...args}
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const WithDifferentColors = () => (
  <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option A', value: 'A' },
        { label: 'Option B', value: 'B' },
      ]}
      placeholder="Select an option"
      label="Primary"
      color="primary"
    />
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option C', value: 'C' },
        { label: 'Option D', value: 'D' },
      ]}
      placeholder="Select an option"
      label="Warning"
      color="warning"
    />
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option E', value: 'E' },
        { label: 'Option F', value: 'F' },
      ]}
      placeholder="Select an option"
      label="Success"
      color="success"
    />
  </div>
);

export const InteractiveSelect = Template.bind({});
InteractiveSelect.args = {
  value: '',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option',
  label: 'Interactive Select',
  color: 'primary',
  disabled: false,
};
InteractiveSelect.storyName = 'Interactive Select';

