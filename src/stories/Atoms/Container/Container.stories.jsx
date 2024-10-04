// src/stories/Atoms/Container/Container.stories.jsx
import React from 'react';
import { Container } from './Container';
import './Container.css';

export default {
  title: 'Atoms/Layout/Container',
  component: Container,
  argTypes: {
    border: {
      control: 'boolean',
      description: 'Add a border to the container.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the container.',
    },
    rounded: {
      control: 'boolean',
      description: 'Apply rounded corners to the container.',
    },
    fluid: {
      control: 'boolean',
      description: 'Make the container full-width.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Alignment of the container.',
    },
    position: {
      control: {
        type: 'select',
        options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      },
      description: 'CSS position property of the container.',
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
 * Small Container with Border and Left Alignment
 */
export const SmallWithBorderLeft = () => (
  <Container border size="small" align="left">
    <p>This is a small container with a border and left alignment.</p>
  </Container>
);

/**
 * Medium Rounded Container with Center Alignment
 */
export const MediumRoundedCenter = () => (
  <Container rounded size="medium" align="center">
    <p>This is a medium-sized container with rounded corners and center alignment.</p>
  </Container>
);

/**
 * Large Fluid Container with Right Alignment
 */
export const LargeFluidRight = () => (
  <Container fluid size="large" align="right">
    <p>This is a large, fluid container without a border and right alignment.</p>
  </Container>
);

/**
 * Container with Absolute Positioning
 */
export const AbsolutePositioned = () => (
  <Container position="absolute" style={{ top: '20px', left: '20px' }}>
    <p>This container is absolutely positioned.</p>
  </Container>
);

/**
 * Interactive Playground
 */
const Template = (args) => <Container {...args}>This is an interactive container.</Container>;

export const InteractiveContainer = Template.bind({});
InteractiveContainer.args = {
  border: false,
  size: 'medium',
  rounded: false,
  fluid: false,
  align: 'left',
  position: 'static',
};
InteractiveContainer.storyName = 'Interactive Container';
