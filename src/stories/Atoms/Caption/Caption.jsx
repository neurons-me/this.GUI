// src/stories/Atoms/Caption/Caption.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Caption.css';

export const Caption = ({
  text,
  variant = 'image', // 'image', 'table', 'form', 'chart', 'transcription', 'description', 'interactive'
  size = 'normal', // 'small', 'normal', 'large'
  color,
  className = '',
  style = {},
}) => {
  const captionClasses = classNames('caption', {
    [`caption--${variant}`]: variant,
    [`caption--${size}`]: size !== 'normal',
    [`caption--${color}`]: color, // Apply color class if provided
  }, className);

  return (
    <span className={captionClasses} style={style}>
      {text}
    </span>
  );
};

Caption.propTypes = {
  /** Text content of the caption */
  text: PropTypes.string.isRequired,
  /** Variant/type of the caption */
  variant: PropTypes.oneOf([
    'image',
    'table',
    'form',
    'chart',
    'transcription',
    'description',
    'interactive',
  ]),
  /** Size of the caption */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Color of the caption (matches global theme colors) */
  color: PropTypes.oneOf([
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
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
