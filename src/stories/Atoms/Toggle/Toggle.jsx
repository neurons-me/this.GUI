import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  color = 'primary', // Color variant from the theme
  label = '',
  labelPosition = 'right', // 'left', 'right', 'top', 'bottom'
  className = '',
  ...props
}) => {
  const toggleClasses = `
    toggle 
    toggle--${size} 
    toggle--${color} 
    ${checked ? 'toggle--checked' : ''} 
    ${disabled ? 'toggle--disabled' : ''} 
    ${className}
  `.trim();

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`toggle__label toggle__label--${labelPosition}`}>
      {label && labelPosition === 'left' && <span>{label}</span>}
      <div className={toggleClasses} onClick={handleChange} {...props}>
        <div className="toggle__switch">
          <div className="toggle__knob" />
        </div>
      </div>
      {label && labelPosition !== 'left' && <span>{label}</span>}
    </label>
  );
};

Toggle.propTypes = {
  /** Whether the toggle is checked (on/off state) */
  checked: PropTypes.bool,
  /** Callback when the toggle changes */
  onChange: PropTypes.func.isRequired,
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Size of the toggle */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color variant for the toggle */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Label for the toggle */
  label: PropTypes.string,
  /** Position of the label relative to the toggle */
  labelPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  /** Additional custom CSS classes */
  className: PropTypes.string,
};

export default Toggle;
