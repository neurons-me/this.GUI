// src/stories/Atoms/Paragraph/Paragraph.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Paragraph.css';

export const Paragraph = ({
  text,
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  alignment = 'left', // 'left', 'center', 'right', 'justify'
  weight = 'normal', // 'light', 'normal', 'bold'
  color = 'default', // All color options, including the new semantic and palette options
  lineHeight = 'normal', // 'normal', 'tight', 'loose'
  className = '',
  style = {},
  ...props
}) => {
  const paragraphClasses = classNames('paragraph', className, {
    [`paragraph--size-${size}`]: size,
    [`paragraph--align-${alignment}`]: alignment,
    [`paragraph--weight-${weight}`]: weight,
    [`paragraph--color-${color}`]: color,
    [`paragraph--lineHeight-${lineHeight}`]: lineHeight,
  });

  return (
    <p className={paragraphClasses} style={style} {...props}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  /** Text content for the paragraph */
  text: PropTypes.string.isRequired,
  /** Size of the paragraph text */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Text alignment */
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Font weight */
  weight: PropTypes.oneOf(['light', 'normal', 'bold']),
  /** Text color */
  color: PropTypes.oneOf([
    'default',
    'muted',
    'primary',
    'secondary',
    'info',
    'warning',
    'alert',
    'success',
    'dark',
    'neutral',
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
  /** Line height */
  lineHeight: PropTypes.oneOf(['normal', 'tight', 'loose']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
