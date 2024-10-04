// src/stories/Atoms/Alert/Alert.stories.jsx
import React from 'react';
import { Alert } from './Alert';
import './Alert.css'; // Import the CSS styles

export default {
  title: 'Atoms/Feedback/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      description: 'Variant of the alert.',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'alert', 'success', 'neutral', 'dark'],
      },
      description: 'Semantic color of the alert.',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark'` },
      },
    },
    children: {
      control: 'text',
      description: 'Content of the alert.',
      table: {
        type: { summary: 'node' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'If true, shows a close button to dismiss the alert.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the alert is dismissed.',
      table: {
        type: { summary: 'function' },
      },
    },
    icon: {
      control: 'none', // Typically, icons are not controlled via Storybook controls
      description: 'Optional icon to display in the alert.',
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
 * Shows default primary and secondary alerts without any semantic color.
 */
export const DefaultAlerts = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Alert variant="primary">Primary Default Alert</Alert>
    <Alert variant="secondary">Secondary Default Alert</Alert>
  </div>
);

/**
 * 
 * Demonstrates primary alerts with all semantic colors.
 */
export const PrimaryAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Primary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert key={color} variant="primary" color={color}>
        This is a {color} primary alert.
      </Alert>
    ))}
  </div>
);

/**
 * 
 * Demonstrates secondary alerts with all semantic colors.
 */
export const SecondaryAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Secondary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert key={color} variant="secondary" color={color}>
        This is a {color} secondary alert.
      </Alert>
    ))}
  </div>
);

/**
 * 
 * Demonstrates primary and secondary alerts that can be dismissed.
 */
export const DismissibleAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Dismissible Primary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert
        key={color}
        variant="primary"
        color={color}
        dismissible
        onClose={() => alert(`Closed ${color} primary alert`)}
      >
        This is a {color} primary alert that can be dismissed.
      </Alert>
    ))}

    <h3>Dismissible Secondary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert
        key={color}
        variant="secondary"
        color={color}
        dismissible
        onClose={() => alert(`Closed ${color} secondary alert`)}
      >
        This is a {color} secondary alert that can be dismissed.
      </Alert>
    ))}
  </div>
);


/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the alert props via Storybook controls.
 */
const Template = (args) => <Alert {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  color: 'info',
  children: 'This is an interactive alert.',
  dismissible: false,
};
Playground.storyName = 'Interactive Playground';