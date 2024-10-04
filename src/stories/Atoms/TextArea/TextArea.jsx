import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextArea.css';

export const TextArea = ({
  value,
  defaultValue,
  placeholder = "Enter text here...",
  rows = 4,
  cols = 50,
  resize = "vertical",
  bold = false,
  italic = false,
  underline = false,
  fontSize = "16px",
  color = "primary",
  backgroundColor = "transparent",
  collapsible = false,
  collapseAt = 100,
  maxLength,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  onBlur,
  onFocus,
  autoResize = false,
  error = false,
  errorMessage = "",
  helperText = "",
  className = "",
  style = {},
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(collapsible && value?.length > collapseAt);

  const handleChange = (e) => {
    if (collapsible && e.target.value.length > collapseAt) {
      setCollapsed(false);
    }
    if (onChange) onChange(e);
  };

  const textareaClasses = classNames('textarea', className, {
    [`textarea--${color}`]: color,
    'textarea--bold': bold,
    'textarea--italic': italic,
    'textarea--underline': underline,
    'textarea--disabled': disabled,
    'textarea--error': error,
    'textarea--collapsible': collapsible && collapsed,
  });

  const customStyles = {
    ...style,
    fontSize,
    backgroundColor,
    resize,
    display: collapsed ? 'none' : 'block',
  };

  return (
    <div className="textarea-wrapper">
      <textarea
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        className={textareaClasses}
        style={customStyles}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
      {error && errorMessage && <div className="textarea-error">{errorMessage}</div>}
      {helperText && <div className="textarea-helper">{helperText}</div>}
      {collapsed && <button onClick={() => setCollapsed(false)}>Expand</button>}
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  fontSize: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark']),
  backgroundColor: PropTypes.string,
  collapsible: PropTypes.bool,
  collapseAt: PropTypes.number,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  autoResize: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
