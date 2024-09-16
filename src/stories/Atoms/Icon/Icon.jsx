// src/stories/atoms/Interactive/Icon/Icon.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

/**
 * Icon component for displaying SVG icons
 */
export const Icon = ({ name, size, color, ...props }) => {
  const sizeClass = size ? `icon--${size}` : '';
  const colorClass = color ? `icon--${color}` : '';

  return (
    <svg
      className={['icon', sizeClass, colorClass].join(' ').trim()}
      {...props}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  /**
   * Name of the icon (should correspond to an existing SVG symbol)
   */
  name: PropTypes.string.isRequired,
  /**
   * Size of the icon
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Color variant of the icon
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ]),
};

Icon.defaultProps = {
  size: 'medium',
  color: 'primary',
};

export default Icon;