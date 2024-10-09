//this.GUI/src/stories/Atoms/Badge/Badge.stories.jsx
import React from 'react';
import { Badge } from './Badge';
import './Badge.css';

export default {
  title: 'Atoms/Data/Badge',
  component: Badge,
  argTypes: {
    label: { control: 'text', defaultValue: 'Badge' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Badge variant (primary or secondary)',
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
      description: 'Badge size',
    },
    round: {
      control: 'boolean',
      description: 'Make the badge round',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2',
          'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Badge color',
    },
  },
};

// Primary Colored Badges
export const PrimaryColoredBadges = () => (
  <>
    <h3>Primary Colored Badges</h3>
    {[
      'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2',
      'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4',
    ].map((color) => (
      <Badge key={color} label={`${color} Badge`} variant="primary" color={color} />
    ))}
  </>
);

// Secondary Colored Badges
export const SecondaryColoredBadges = () => (
  <>
    <h3>Secondary Colored Badges</h3>
    {[
      'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2',
      'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4',
    ].map((color) => (
      <Badge key={color} label={`${color} Badge`} variant="secondary" color={color} />
    ))}
  </>
);

// Primary Rounded Colored Badges
export const PrimaryRoundedBadges = () => (
  <>
    <h3>Primary Rounded Badges</h3>
    {[
      'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2',
      'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4',
    ].map((color) => (
      <Badge key={color} label={`9`} variant="primary" color={color} round />
    ))}
  </>
);

// Secondary Rounded Colored Badges
export const SecondaryRoundedBadges = () => (
  <>
    <h3>Secondary Rounded Badges</h3>
    {[
      'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
      'small-switch-color-1', 'small-switch-color-2',
      'natural-color-1', 'natural-color-2', 'natural-color-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4',
    ].map((color) => (
      <Badge key={color} label={`8`} variant="secondary" color={color} round />
    ))}
  </>
);

/**
 * Interactive Badge story
 */
const Template = (args) => <Badge {...args} />;

export const InteractiveBadge = Template.bind({});
InteractiveBadge.args = {
  label: 'Interactive Badge',
  variant: 'primary',
  size: 'normal',
  round: false,
  color: 'info',
};
InteractiveBadge.storyName = 'Interactive Badge';