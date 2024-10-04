// src/stories/Atoms/Divider/Divider.stories.jsx
import React from 'react';
import { Divider } from './Divider';
import './Divider.css';

export default {
  title: 'Atoms/Layout/Divider',
  component: Divider,
  argTypes: {
    thickness: {
      control: {
        type: 'select',
        options: ['thin', 'normal', 'bold'],
      },
      description: 'Thickness of the divider.',
    },
    width: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Width of the divider.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Alignment of the divider.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the divider.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Thin Small Left Aligned Divider
 */
export const ThinSmallLeft = () => (
  <Divider thickness="thin" width="small" align="left" color="info" />
);

/**
 * Normal Medium Center Aligned Divider
 */
export const NormalMediumCenter = () => (
  <Divider thickness="normal" width="medium" align="center" color="warning" />
);

/**
 * Bold Large Right Aligned Divider
 */
export const BoldLargeRight = () => (
  <Divider thickness="bold" width="large" align="right" color="success" />
);

/**
 * Interactive Divider
 */
const Template = (args) => <Divider {...args} />;

export const InteractiveDivider = Template.bind({});
InteractiveDivider.args = {
  thickness: 'normal',
  width: 'medium',
  align: 'center',
  color: 'neutral',
};
InteractiveDivider.storyName = 'Interactive Divider';
