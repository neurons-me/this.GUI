// src/stories/Atoms/Select/Select.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Select.css';

export const Select = ({
  options,
  value,
  onChange,
  disabled = false,
  label = '',
  placeholder = 'Select an option',
  color = 'primary', // Default to primary color
  className = '',
  ...props
}) => {
  const selectClasses = classNames('select', className, {
    [`select--${color}`]: color, // Dynamically apply color class
    'select--disabled': disabled,
  });

  return (
    <div className={selectClasses}>
      {label && <label className="select__label">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="select__input"
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  /** List of options to choose from */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Selected value */
  value: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func.isRequired,
  /** Whether the select is disabled */
  disabled: PropTypes.bool,
  /** Label for the select component */
  label: PropTypes.string,
  /** Placeholder for the select dropdown */
  placeholder: PropTypes.string,
  /** Color of the select component */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
};
