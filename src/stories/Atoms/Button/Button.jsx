// src/stories/Atoms/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Ensure styles are imported

export const Button = ({
  variant = 'solid', // 'solid' or 'outline'
  color = 'primary-color', // Default to primary color
  size = 'medium',
  label = '',
  noBorder = false,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const variantClass = `button--${variant}`;
  const colorClass = `button--${color}`;
  const sizeClass = `button--${size}`;
  const borderClass = noBorder ? 'button--no-border' : '';

  const combinedClassName = `button ${variantClass} ${colorClass} ${sizeClass} ${borderClass} ${className}`.trim();

  return (
    <button type="button" className={combinedClassName} style={style} {...props}>
      {children || label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'outline']), // Updated variants
  color: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Updated color prop
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};