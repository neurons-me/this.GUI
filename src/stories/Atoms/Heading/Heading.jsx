// src/stories/Atoms/Heading/Heading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Heading.css';

export const Heading = ({
  level = 1, // 1 to 5
  align = 'left', // 'left', 'center', 'right'
  bold = false,
  color = 'neutral',
  children,
  className = '',
  style = {},
  ...props
}) => {
  const Tag = `h${level}`;
  const headingClasses = classNames('heading', className, {
    [`heading--align-${align}`]: align,
    'heading--bold': bold,
    [`heading--${color}`]: color,
  });

  return (
    <Tag className={headingClasses} style={style} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  /** Heading level (1 to 5) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /** Text alignment */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Bold text */
  bold: PropTypes.bool,
  /** Color of the heading text */
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
  /** Content of the heading */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
