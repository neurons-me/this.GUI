// src/stories/Atoms/Button/Button.stories.jsx
import React from 'react';
import { Button } from './Button';
import './Button.css'; // Ensure styles are imported

export default {
  title: 'Atoms/Interactive/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
      description: 'Variant of the button.',
      table: {
        type: { summary: 'solid | outline' },
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary-color',
          'secondary-color',
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
          'shade-4'
        ],
      },
      description: 'Semantic color accent of the button.',
      table: {
        type: { summary: 'color variants from theme' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the button.',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label of the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    noBorder: {
      control: 'boolean',
      description: 'Removes the border if set to true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler.',
      table: {
        type: { summary: 'function' },
      },
    },
    children: {
      control: 'text',
      description: 'Button children elements.',
      table: {
        type: { summary: 'node' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * 
 * Shows the default solid and outline buttons without any semantic color accent.
 */
export const DefaultButtons = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="solid" size="medium">
      Solid Default
    </Button>
    <Button variant="outline" size="medium">
      Outline Default
    </Button>
    <Button variant="solid" size="medium" noBorder>
      Solid No Border
    </Button>
    <Button variant="outline" size="medium" noBorder>
      Outline No Border
    </Button>
  </div>
);

/**
 * 
 * Demonstrates solid buttons with all color options and sizes.
 */
export const SolidButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Solid Buttons</h3>
    {[
      'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
    ].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="solid" color={color} size="small">
          Solid {color} Small
        </Button>
        <Button variant="solid" color={color} size="medium">
          Solid {color} Medium
        </Button>
        <Button variant="solid" color={color} size="large">
          Solid {color} Large
        </Button>
      </div>
    ))}
  </div>
);

/**
 * 
 * Demonstrates outline buttons with all color options and sizes.
 */
export const OutlineButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Outline Buttons</h3>
    {[
      'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
    ].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="outline" color={color} size="small">
          Outline {color} Small
        </Button>
        <Button variant="outline" color={color} size="medium">
          Outline {color} Medium
        </Button>
        <Button variant="outline" color={color} size="large">
          Outline {color} Large
        </Button>
        <Button variant="outline" color={color} size="medium" noBorder>
          Outline {color} No Border
        </Button>
      </div>
    ))}
  </div>
);

/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the button props via Storybook controls.
 */
const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  color: 'primary-color', // Default color
  size: 'medium',
  label: 'Click Me',
  noBorder: false,
  children: 'Click Me',
};
Playground.storyName = 'Interactive Playground';