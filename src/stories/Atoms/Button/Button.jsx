// src/stories/Atoms/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Ensure styles are imported

export const Button = ({
  variant = 'primary', // 'primary', 'secondary'
  color, // 'info', 'warning', 'alert', 'success', 'neutral', 'dark'
  size = 'medium',
  label = '',
  noBorder = false,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const variantClass = `button--${variant}`;
  const colorClass = color ? `button--${color}` : '';
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
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};