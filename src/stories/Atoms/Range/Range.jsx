// src/stories/Atoms/Range/Range.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Range.css';

export const Range = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  color = 'primary', // Color of the filled range
  thumbColor = 'primary', // Color of the thumb (controller)
  showValue = true,
  label = '',
  disabled = false,
  className = '',
  ...props
}) => {
  const rangeClasses = classNames('range', className, {
    [`range--${color}`]: color,
    'range--disabled': disabled,
  });

  // Calculate the percentage of the range that has been covered
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={rangeClasses}>
      {label && <label className="range__label">{label}</label>}
      <div className="range__wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="range__input"
          {...props}
          style={{
            background: `linear-gradient(to right, var(--${color}-color) ${percentage}%, var(--neutral-color) ${percentage}%)`,
            '--thumb-color': `var(--${thumbColor}-color)`, // Setting the thumb color dynamically
          }} // Set the background gradient dynamically and thumb color
        />
      </div>
      {showValue && <span className="range__value">{value}</span>}
    </div>
  );
};

Range.propTypes = {
  /** Minimum value for the range */
  min: PropTypes.number,
  /** Maximum value for the range */
  max: PropTypes.number,
  /** Step value */
  step: PropTypes.number,
  /** Current value of the range */
  value: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func.isRequired,
  /** Color for the filled portion of the range */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Color for the thumb (controller) */
  thumbColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Whether to display the current value next to the slider */
  showValue: PropTypes.bool,
  /** Label for the range input */
  label: PropTypes.string,
  /** Whether the range input is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};
