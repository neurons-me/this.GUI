// src/stories/Atoms/Loader/Loader.stories.jsx
import React from 'react';
import { Loader } from './Loader';
import './Loader.css';

export default {
  title: 'Atoms/Feedback/Loader',
  component: Loader,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['spinner', 'dots', 'bars'],
      },
      description: 'Variant of the loader.',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'custom'],
      },
      description: 'Color of the loader.',
    },
    customColor: {
      control: 'color',
      description: 'Custom color when color is set to "custom".',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      description: 'Size of the loader.',
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
 * Spinner - Primary - Medium
 */
export const SpinnerPrimaryMedium = () => (
  <Loader variant="spinner" color="primary" size="md" />
);

/**
 * Spinner - Secondary - Large
 */
export const SpinnerSecondaryLarge = () => (
  <Loader variant="spinner" color="secondary" size="lg" />
);

/**
 * Dots - Primary - Small
 */
export const DotsPrimarySmall = () => (
  <Loader variant="dots" color="primary" size="sm" />
);

/**
 * Dots - Secondary - Medium
 */
export const DotsSecondaryMedium = () => (
  <Loader variant="dots" color="secondary" size="md" />
);

/**
 * Bars - Primary - Medium
 */
export const BarsPrimaryMedium = () => (
  <Loader variant="bars" color="primary" size="md" />
);

/**
 * Bars - Custom Color - Large
 */
export const BarsCustomLarge = () => (
  <Loader variant="bars" color="custom" customColor="#FF5733" size="lg" />
);

/**
 * Interactive Loader
 */
const Template = (args) => <Loader {...args} />;

export const InteractiveLoader = Template.bind({});
InteractiveLoader.args = {
  variant: 'spinner',
  color: 'primary',
  size: 'md',
  customColor: '#FF5733',
};
