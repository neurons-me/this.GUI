// src/stories/Atoms/Loader/Loader.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Loader.css';

export const Loader = ({
  variant = 'spinner', // 'spinner', 'dots', 'bars'
  color = 'primary', // 'primary', 'secondary', 'custom'
  size = 'md', // 'sm', 'md', 'lg'
  customColor,
  className = '',
  style = {},
  ...props
}) => {
  const loaderClasses = classNames('loader', className, {
    [`loader--${variant}`]: variant,
    [`loader--${color}`]: color && color !== 'custom',
    [`loader--size-${size}`]: size,
  });

  const loaderStyle = color === 'custom' && customColor ? { ...style, '--loader-color': customColor } : style;

  return (
    <div className={loaderClasses} style={loaderStyle} {...props}>
      {variant === 'spinner' && <div className="loader__spinner"></div>}
      {variant === 'dots' && (
        <div className="loader__dots">
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
        </div>
      )}
      {variant === 'bars' && (
        <div className="loader__bars">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
        </div>
      )}
    </div>
  );
};

Loader.propTypes = {
  /** Variant of the loader */
  variant: PropTypes.oneOf(['spinner', 'dots', 'bars']),
  /** Color of the loader */
  color: PropTypes.oneOf(['primary', 'secondary', 'custom']),
  /** Custom color when color is set to 'custom' */
  customColor: PropTypes.string,
  /** Size of the loader */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
