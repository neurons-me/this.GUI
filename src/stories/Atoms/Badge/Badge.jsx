// src/stories/Atoms/Badge/Badge.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

export const Badge = ({
  label,
  variant = 'primary',
  size = 'normal',
  color,
  round = false,
}) => {
  const variantClass = `badge--${variant}`;
  const sizeClass = size !== 'normal' ? `badge--${size}` : '';
  const colorClass = color ? `${color}` : ''; // Ensure color class matches CSS
  const roundClass = round ? 'badge--round' : '';

  return (
    <span className={`badge ${variantClass} ${sizeClass} ${colorClass} ${roundClass}`}>
      {label}
    </span>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
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
  ]), // Updated to oneOf with specific options
  round: PropTypes.bool,
};
