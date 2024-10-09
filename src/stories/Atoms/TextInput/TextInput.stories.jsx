//this.GUI/src/stories/Atoms/TextInput/TextInput.stories.jsx
import React, { useState } from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Atoms/Interactive/TextInput',
  component: TextInput,
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    placeholder: { control: 'text', defaultValue: 'Enter text...' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ]
      }
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export const DefaultTextInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export const WithClear = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter text..."
      clearable={true}
      onClear={() => setInputValue('')}
    />
  );
};

export const InteractiveTextInput = (args) => {
  return <TextInput {...args} />;
};

InteractiveTextInput.args = {
  placeholder: 'Enter text...',
  size: 'medium',
  color: 'primary',
  disabled: false,
  readOnly: false,
  clearable: true,
  loading: false,
};
