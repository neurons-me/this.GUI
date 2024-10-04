// src/stories/Atoms/Spinner/Spinner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spinner.css';

export const Spinner = ({
  size = 'medium',
  color = 'primary', // Ensure this prop is passed correctly
  loading = true,
  label = 'Loading...',
  speed = '1s',
  thickness = '4px',
  variant = 'circle',
  fullScreen = false,
  text = '',
  className = '',
  style = {},
  ...props
}) => {
  if (!loading) return null;

  const spinnerClasses = classNames(
    'spinner',
    `spinner--${variant}`,
    `spinner--${color}`, // This maps the color prop to the correct CSS class
    {
      'spinner--full-screen': fullScreen,
      [`spinner--${size}`]: size,
    },
    className
  );

  return (
    <div
      className={spinnerClasses}
      style={{ animationDuration: speed, borderWidth: thickness, ...style }}
      role="status"
      aria-label={label}
      {...props}
    >
      <div className="spinner__icon"></div>
      {text && <span className="spinner__text">{text}</span>}
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  loading: PropTypes.bool,
  label: PropTypes.string,
  speed: PropTypes.string,
  thickness: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'dots', 'bars']),
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
