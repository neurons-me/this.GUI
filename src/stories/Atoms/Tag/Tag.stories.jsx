// src/stories/Atoms/Tag/Tag.stories.jsx
import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Atoms/Interactive/Tag',
  component: Tag,
  argTypes: {
    label: { control: 'text', defaultValue: 'Tag Label' },
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
      description: 'Color of the tag.',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the tag.',
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined'] },
      description: 'Variant of the tag.',
    },
    removable: {
      control: 'boolean',
      description: 'Makes the tag removable.',
    },
    onRemove: { action: 'removed', description: 'Called when tag is removed.' },
    onClick: { action: 'clicked', description: 'Called when the tag is clicked.' },
  },
};

/** Primary Tags with all colors */
export const PrimaryTags = () => (
  <>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tag key={color} label={`Tag ${color}`} color={color} variant="filled" style={{ marginRight: '8px' }} />
    ))}
  </>
);

/** Secondary Tags with all colors */
export const SecondaryTags = () => (
  <>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tag key={color} label={`Tag ${color}`} color={color} variant="outlined" style={{ marginRight: '8px' }} />
    ))}
  </>
);

/** Interactive Tag */
const Template = (args) => <Tag {...args} />;

export const InteractiveTag = Template.bind({});
InteractiveTag.args = {
  label: 'Interactive Tag',
  color: 'primary',
  size: 'medium',
  variant: 'filled',
  removable: true,
};
