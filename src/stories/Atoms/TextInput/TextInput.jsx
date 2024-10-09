//this.GUI/src/stories/Atoms/TextInput/TextInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

export const TextInput = ({
  value,
  defaultValue,
  onChange,
  placeholder = 'Enter text here...',
  type = 'text',
  size = 'medium',
  color = 'primary',
  fontFamily,
  fontSize,
  backgroundColor,
  borderColor,
  borderRadius,
  disabled = false,
  readOnly = false,
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  isValid,
  error,
  helperText,
  errorMessage,
  clearable = false,
  onClear,
  loading = false,
  ariaLabel,
  ariaDescribedBy,
  tabIndex,
  spellCheck = true,
  autoComplete = 'on',
  inputMode,
  step,
  className = '',
  style = {},
  ...props
}) => {
  const inputClasses = [
    'text-input',
    `text-input--${size}`,
    `text-input--${color}`,
    error ? 'text-input--error' : '',
    loading ? 'text-input--loading' : '',
    className,
  ].join(' ').trim();

  return (
    <div className={inputClasses} style={{ backgroundColor, borderColor, borderRadius, fontFamily, fontSize, ...style }}>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={tabIndex}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
        inputMode={inputMode}
        step={step}
        className="text-input__input"
        autoFocus={autoFocus}
        {...props}
      />
      {clearable && value && (
        <button className="text-input__clear-button" onClick={onClear} aria-label="Clear input">
          &times;
        </button>
      )}
      {loading && <div className="text-input__spinner" />}
      {helperText && <div className="text-input__helper-text">{helperText}</div>}
      {error && errorMessage && <div className="text-input__error-message">{errorMessage}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  isValid: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  clearable: PropTypes.bool,
  onClear: PropTypes.func,
  loading: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  tabIndex: PropTypes.number,
  spellCheck: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputMode: PropTypes.string,
  step: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TextInput;
