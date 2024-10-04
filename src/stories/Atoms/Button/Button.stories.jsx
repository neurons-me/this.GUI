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
        options: ['primary', 'secondary'],
      },
      description: 'Variant of the button.',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
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
        ],
      },
      description: 'Semantic color accent of the button.',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark'` },
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
 * Shows the default primary and secondary buttons without any semantic color accent.
 */
export const DefaultButtons = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="primary" size="medium">
      Primary Default
    </Button>
    <Button variant="secondary" size="medium">
      Secondary Default
    </Button>
    <Button variant="primary" size="medium" noBorder>
      Primary No Border
    </Button>
    <Button variant="secondary" size="medium" noBorder>
      Secondary No Border
    </Button>
  </div>
);

/**
 * 
 * Demonstrates primary buttons with all semantic colors and sizes.
 */
export const PrimaryButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Primary Buttons</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" color={color} size="small">
          Primary {color} Small
        </Button>
        <Button variant="primary" color={color} size="medium">
          Primary {color} Medium
        </Button>
        <Button variant="primary" color={color} size="large">
          Primary {color} Large
        </Button>
        <Button variant="primary" color={color} size="medium" noBorder>
          Primary {color} No Border
        </Button>
      </div>
    ))}
  </div>
);

/**
 * 
 * Demonstrates secondary buttons with all semantic colors and sizes.
 */
export const SecondaryButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Secondary Buttons</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="secondary" color={color} size="small">
          Secondary {color} Small
        </Button>
        <Button variant="secondary" color={color} size="medium">
          Secondary {color} Medium
        </Button>
        <Button variant="secondary" color={color} size="large">
          Secondary {color} Large
        </Button>
        <Button variant="secondary" color={color} size="medium" noBorder>
          Secondary {color} No Border
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
  variant: 'primary',
  color: 'info',
  size: 'medium',
  label: 'Click Me',
  noBorder: false,
  children: 'Click Me',
};
Playground.storyName = 'Interactive Playground';