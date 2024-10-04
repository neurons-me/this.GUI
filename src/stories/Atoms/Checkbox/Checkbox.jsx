// src/stories/Atoms/Checkbox/Checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.css';

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  variant = 'primary',
  size = 'normal',
  color = 'info',
  rounded = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const checkboxClasses = classNames('checkbox', className, {
    [`checkbox--${variant}`]: variant,
    [`checkbox--${size}`]: size !== 'normal',
    [color]: color,
    'checkbox--rounded': rounded,
    'checkbox--disabled': disabled,
  });

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /** Label text for the checkbox */
  label: PropTypes.string.isRequired,
  /** Checked state of the checkbox */
  checked: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Variant of the checkbox */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Size of the checkbox */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Color from the global palette */
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
  /** Rounded or Squared */
  rounded: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};
