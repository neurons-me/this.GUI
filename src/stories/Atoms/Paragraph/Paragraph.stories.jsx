// src/stories/Atoms/Paragraph/Paragraph.stories.jsx
import React from 'react';
import { Paragraph } from './Paragraph';
import './Paragraph.css';

export default {
  title: 'Atoms/Text/Paragraph',
  component: Paragraph,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content for the paragraph.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the paragraph text.',
    },
    alignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify'],
      },
      description: 'Text alignment.',
    },
    weight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'bold'],
      },
      description: 'Font weight.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'default',
          'muted',
          'primary',
          'secondary',
          'info',
          'warning',
          'alert',
          'success',
          'dark',
          'neutral',
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
      description: 'Text color.',
    },
    lineHeight: {
      control: {
        type: 'select',
        options: ['normal', 'tight', 'loose'],
      },
      description: 'Line height of the paragraph.',
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
 * Default Paragraph
 */
export const DefaultParagraph = () => (
  <Paragraph text="This is a default paragraph with medium size and left alignment." />
);

/**
 * Large Bold Centered Paragraph
 */
export const LargeBoldCentered = () => (
  <Paragraph
    text="This is a large, bold, and centered paragraph."
    size="lg"
    weight="bold"
    alignment="center"
    color="primary"
  />
);

/**
 * Small Muted Paragraph with Tight Line Height
 */
export const SmallMutedTight = () => (
  <Paragraph
    text="This is a small, muted paragraph with tight line height."
    size="sm"
    color="muted"
    lineHeight="tight"
  />
);

/**
 * Paragraph with Justify Alignment and Secondary Color
 */
export const JustifySecondary = () => (
  <Paragraph
    text="This paragraph is justified and has secondary color."
    alignment="justify"
    color="secondary"
  />
);

/**
 * Interactive Paragraph
 */
const Template = (args) => <Paragraph {...args} />;

export const InteractiveParagraph = Template.bind({});
InteractiveParagraph.args = {
  text: 'This is an interactive paragraph.',
  size: 'md',
  alignment: 'left',
  weight: 'normal',
  color: 'default',
  lineHeight: 'normal',
};
