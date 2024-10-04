// src/stories/Atoms/Heading/Heading.stories.jsx
import React from 'react';
import { Heading } from './Heading';
import './Heading.css';

export default {
  title: 'Atoms/Text/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
      description: 'Heading level (1 to 5).',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Text alignment.',
    },
    bold: {
      control: 'boolean',
      description: 'Make the text bold.',
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
      description: 'Color of the heading text.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
    children: {
      control: 'text',
      description: 'Content of the heading.',
    },
  },
};

/**
 * H1 Center Aligned Bold Heading
 */
export const H1CenterBold = () => (
  <Heading level={1} align="center" bold color="success">
    This is a Center Aligned Bold H1 Heading
  </Heading>
);

/**
 * H2 Left Aligned Normal Heading
 */
export const H2LeftNormal = () => (
  <Heading level={2} align="left" color="info">
    This is a Left Aligned Normal H2 Heading
  </Heading>
);

/**
 * H3 Right Aligned Bold Heading
 */
export const H3RightBold = () => (
  <Heading level={3} align="right" bold color="warning">
    This is a Right Aligned Bold H3 Heading
  </Heading>
);

/**
 * H4 Center Aligned Normal Heading
 */
export const H4CenterNormal = () => (
  <Heading level={4} align="center" color="neutral">
    This is a Center Aligned Normal H4 Heading
  </Heading>
);

/**
 * H5 Left Aligned Bold Heading
 */
export const H5LeftBold = () => (
  <Heading level={5} align="left" bold color="dark">
    This is a Left Aligned Bold H5 Heading
  </Heading>
);

/**
 * Interactive Heading
 */
const Template = (args) => <Heading {...args}>This is an interactive heading.</Heading>;

export const InteractiveHeading = Template.bind({});
InteractiveHeading.args = {
  level: 3,
  align: 'center',
  bold: false,
  color: 'info',
};
InteractiveHeading.storyName = 'Interactive Heading';
