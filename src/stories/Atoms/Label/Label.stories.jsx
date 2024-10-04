// src/stories/Atoms/Label/Label.stories.jsx
import React from 'react';
import { Label } from './Label';
import './Label.css';

export default {
  title: 'Atoms/Text/Label',
  component: Label,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the label.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
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
      description: 'Color of the label.',
    },
    background: {
      control: 'boolean',
      description: 'Whether the label has a background.',
    },
    shape: {
      control: {
        type: 'select',
        options: ['rounded', 'square', 'pill'],
      },
      description: 'Shape of the label.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the label.',
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
 * Primary Label with Background
 */
export const PrimaryLabel = () => (
  <Label
    text="Primary Label"
    color="primary"
    background={true}
    shape="pill"
    size="md"
  />
);

/**
 * Secondary Label without Background
 */
export const SecondaryLabel = () => (
  <Label
    text="Secondary Label"
    color="secondary"
    background={false}
    shape="rounded"
    size="md"
  />
);

/**
 * All Color Variations
 */
export const AllColors = () => (
  <div className="label-colors">
    {[
      'primary',
      'secondary',
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
    ].map((color) => (
      <Label
        key={color}
        text={color}
        color={color}
        background={color !== 'secondary'}
        shape="rounded"
        size="sm"
      />
    ))}
  </div>
);

/**
 * Label Shapes
 */
export const LabelShapes = () => (
  <div className="label-shapes">
    <Label text="Rounded" color="info" background={true} shape="rounded" size="md" />
    <Label text="Square" color="warning" background={true} shape="square" size="md" />
    <Label text="Pill" color="success" background={true} shape="pill" size="md" />
  </div>
);

/**
 * Label Sizes
 */
export const LabelSizes = () => (
  <div className="label-sizes">
    <Label text="XS" color="neutral" background={true} shape="rounded" size="xs" />
    <Label text="SM" color="neutral" background={true} shape="rounded" size="sm" />
    <Label text="MD" color="neutral" background={true} shape="rounded" size="md" />
    <Label text="LG" color="neutral" background={true} shape="rounded" size="lg" />
    <Label text="XL" color="neutral" background={true} shape="rounded" size="xl" />
  </div>
);

/**
 * Interactive Label
 */
const Template = (args) => <Label {...args} />;

export const InteractiveLabel = Template.bind({});
InteractiveLabel.args = {
  text: 'Interactive Label',
  color: 'primary',
  background: true,
  shape: 'pill',
  size: 'md',
};
