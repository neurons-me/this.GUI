// src/stories/Atoms/Spacer/Spacer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spacer.css';

export const Spacer = ({
  size = 'md',       // Default size is medium (16px)
  direction = 'vertical', // Can be 'vertical' or 'horizontal'
  className = '',
  responsive = true, // Responsive spacer
}) => {
  const spacerClasses = classNames(
    'spacer',
    `spacer--${size}`,
    `spacer--${direction}`,
    {
      'spacer--responsive': responsive,
    },
    className
  );

  return <div className={spacerClasses} aria-hidden="true" />;
};

Spacer.propTypes = {
  /** Spacer size: 'xs', 'sm', 'md', 'lg', 'xl' */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Direction of the space: 'vertical' or 'horizontal' */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Custom class name for the spacer */
  className: PropTypes.string,
  /** Whether the spacer should adjust responsively */
  responsive: PropTypes.bool,
};
