// src/stories/Atoms/RadioButton/RadioButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RadioButton.css';

export const RadioButton = ({
  label,
  checked = false,
  onChange,
  variant = 'primary',
  size = 'normal',
  color = 'info',
  rounded = false,
  disabled = false,
  name = '',
  className = '',
  ...props
}) => {
  const radioButtonClasses = classNames('radio-button', className, {
    [`radio-button--${variant}`]: variant,
    [`radio-button--${size}`]: size !== 'normal',
    [color]: color,
    'radio-button--rounded': rounded,
    'radio-button--disabled': disabled,
  });

  return (
    <label className={radioButtonClasses}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        {...props}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  /** Label text for the radio button */
  label: PropTypes.string.isRequired,
  /** Checked state of the radio button */
  checked: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Radio button variant */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Size of the radio button */
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
  /** Rounded or squared */
  rounded: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Name of the radio button group */
  name: PropTypes.string.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
};
