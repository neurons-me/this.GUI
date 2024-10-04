// src/stories/Atoms/Label/Label.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Label.css';

export const Label = ({
  text,
  color = 'neutral',
  background = true,
  shape = 'rounded', // 'rounded', 'square', 'pill'
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  className = '',
  style = {},
  ...props
}) => {
  const labelClasses = classNames('label', className, {
    [`label--color-${color}`]: color,
    [`label--background`]: background && color !== 'secondary',
    [`label--shape-${shape}`]: shape,
    [`label--size-${size}`]: size,
  });

  return (
    <span className={labelClasses} style={style} {...props}>
      {text}
    </span>
  );
};

Label.propTypes = {
  /** Text content of the label */
  text: PropTypes.string.isRequired,
  /** Color of the label */
  color: PropTypes.oneOf([
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
  ]),
  /** Whether the label has a background */
  background: PropTypes.bool,
  /** Shape of the label */
  shape: PropTypes.oneOf(['rounded', 'square', 'pill']),
  /** Size of the label */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
