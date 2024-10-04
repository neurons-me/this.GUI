// src/stories/Atoms/Alert/Alert.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css'; // Import the CSS styles

export const Alert = ({
  variant = 'primary', // 'primary', 'secondary'
  color, // 'info', 'warning', 'alert', 'success', 'neutral', 'dark'
  children,
  className = '',
  style = {},
  onClose, // Function to handle close action
  dismissible = false, // If true, show close button
  icon, // Optional icon element
  ...props
}) => {
  const variantClass = `alert--${variant}`;
  const colorClass = color ? `alert--${color}` : '';
  const dismissibleClass = dismissible ? 'alert--dismissible' : '';

  const combinedClassName = `alert ${variantClass} ${colorClass} ${dismissibleClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={style}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      {icon && <span className="alert__icon">{icon}</span>}
      <span className="alert__content">{children}</span>
      {dismissible && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label="Close Alert"
          tabIndex="0"
        >
          &times;
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  dismissible: PropTypes.bool,
  icon: PropTypes.node,
};