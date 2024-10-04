// src/stories/Atoms/Logo/Logo.stories.jsx
import React from 'react';
import { Logo } from './Logo';
import './Logo.css';

export default {
  title: 'Atoms/Media/Logo',
  component: Logo,
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL or path of the logo image.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the logo.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the logo.',
    },
    shape: {
      control: {
        type: 'select',
        options: ['normal', 'rounded', 'squared'],
      },
      description: 'Shape of the logo.',
    },
    background: {
      control: {
        type: 'select',
        options: ['none', 'palette', 'custom'],
      },
      description: 'Background option.',
    },
    customBackgroundColor: {
      control: 'color',
      description: 'Custom background color when background is set to "custom".',
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
 * Original Logo - Medium Size - Normal Shape - No Background
 */
export const OriginalMediumNormalNoBg = () => (
  <Logo
    src="https://via.placeholder.com/150x150?text=Logo"
    alt="Original Logo"
    size="md"
    shape="normal"
    background="none"
  />
);

/**
 * Logo with Palette Background - Large Size - Rounded Shape
 */
export const PaletteBackgroundLargeRounded = () => (
  <Logo
    src="https://via.placeholder.com/150x150?text=Logo"
    alt="Logo with Palette Background"
    size="lg"
    shape="rounded"
    background="palette"
  />
);

/**
 * Logo with Custom Background - Small Size - Squared Shape
 */
export const CustomBackgroundSmallSquared = () => (
  <Logo
    src="https://via.placeholder.com/150x150?text=Logo"
    alt="Logo with Custom Background"
    size="sm"
    shape="squared"
    background="custom"
    customBackgroundColor="#FF5733"
  />
);

/**
 * Original Logo - Extra Large Size - Rounded Shape - No Background
 */
export const OriginalXLRoundedNoBg = () => (
  <Logo
    src="https://via.placeholder.com/150x150?text=Logo"
    alt="Original XL Logo"
    size="xl"
    shape="rounded"
    background="none"
  />
);

/**
 * Interactive Logo
 */
const Template = (args) => <Logo {...args} />;

export const InteractiveLogo = Template.bind({});
InteractiveLogo.args = {
  src: 'https://via.placeholder.com/150x150?text=Logo',
  alt: 'Interactive Logo',
  size: 'md',
  shape: 'normal',
  background: 'none',
  customBackgroundColor: '#00FF00',
};
