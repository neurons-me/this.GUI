// src/stories/Atoms/Icon/Icon.stories.jsx
import React from 'react';
import { Icon } from './Icon';
import { FaBeer, FaCoffee, FaApple, FaAndroid, FaReact, FaCheck, FaTimes, FaInfoCircle, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';
import './Icon.css';

export default {
  title: 'Atoms/Media/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'object',
      description: 'Icon component from react-icons or similar library.',
    },
    background: {
      control: 'boolean',
      description: 'Whether to display a background behind the icon.',
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
      description: 'Color of the icon or background.',
    },
    shape: {
      control: {
        type: 'select',
        options: ['rounded', 'square'],
      },
      description: 'Shape of the icon background.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'big'],
      },
      description: 'Size of the icon.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Alignment of the icon within its container.',
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

const icons = {
  FaBeer: FaBeer,
  FaCoffee: FaCoffee,
  FaApple: FaApple,
  FaAndroid: FaAndroid,
  FaReact: FaReact,
  FaCheck: FaCheck,
  FaTimes: FaTimes,
  FaInfoCircle: FaInfoCircle,
  FaExclamationTriangle: FaExclamationTriangle,
  FaQuestionCircle: FaQuestionCircle,
};

/**
 * All Icons Collection
 */
export const AllIcons = () => (
  <div className="icon-collection">
    {Object.entries(icons).map(([name, IconComponent]) => (
      <div key={name} className="icon-item">
        <Icon
          icon={IconComponent}
          background={false}
          color="neutral"
          shape="square"
          size="normal"
        />
        <p>{name}</p>
      </div>
    ))}
  </div>
);

/**
 * Icon with Background
 */
export const IconWithBackground = () => (
  <Icon
    icon={FaBeer}
    background
    color="success"
    shape="rounded"
    size="big"
    align="center"
  />
);

/**
 * Icon without Background
 */
export const IconWithoutBackground = () => (
  <Icon
    icon={FaCoffee}
    background={false}
    color="warning"
    size="normal"
    align="left"
  />
);

/**
 * Rounded Icon with Different Colors
 */
export const RoundedIcons = () => (
  <div className="icon-story">
    <Icon icon={FaApple} background color="info" shape="rounded" size="small" />
    <Icon icon={FaAndroid} background color="alert" shape="rounded" size="normal" />
    <Icon icon={FaReact} background color="shade-3" shape="rounded" size="big" />
  </div>
);

/**
 * Square Icon with Different Colors
 */
export const SquareIcons = () => (
  <div className="icon-story">
    <Icon icon={FaBeer} background color="neutral" shape="square" size="small" />
    <Icon icon={FaCoffee} background color="dark" shape="square" size="normal" />
    <Icon icon={FaApple} background color="classy-color-2" shape="square" size="big" />
  </div>
);

/**
 * Interactive Icon
 */
const Template = (args) => <Icon {...args} />;

export const InteractiveIcon = Template.bind({});
InteractiveIcon.args = {
  icon: FaReact,
  background: false,
  color: 'info',
  shape: 'rounded',
  size: 'normal',
  align: 'center',
};
InteractiveIcon.storyName = 'Interactive Icon';
