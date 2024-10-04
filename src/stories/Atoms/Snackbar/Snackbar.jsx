// src/stories/Atoms/Snackbar/Snackbar.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Snackbar.css';

export const Snackbar = ({
  message,
  duration = 3000,
  actionLabel = '',
  onActionClick = null,
  onClose,
  variant = 'primary', // 'primary' (with background) or 'secondary' (border only)
  color = 'primary', // Global theme color for background/border/text
  className = '',
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const snackbarClasses = classNames('snackbar', className, {
    [`snackbar--${variant}`]: variant,
    [`snackbar--${color}`]: color,
    'snackbar--visible': visible,
    'snackbar--hidden': !visible,
  });

  return (
    <div className={snackbarClasses}>
      <span className="snackbar__message">{message}</span>
      {actionLabel && (
        <button className="snackbar__action" onClick={onActionClick}>
          {actionLabel}
        </button>
      )}
      <button className="snackbar__close" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

Snackbar.propTypes = {
  /** Message to be displayed in the snackbar */
  message: PropTypes.string.isRequired,
  /** Duration before the snackbar disappears */
  duration: PropTypes.number,
  /** Label for the action button */
  actionLabel: PropTypes.string,
  /** Function to be called when action button is clicked */
  onActionClick: PropTypes.func,
  /** Function to be called when the snackbar is closed */
  onClose: PropTypes.func,
  /** Variant of the snackbar: 'primary' (background) or 'secondary' (border only) */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Color for background, border, and text */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
};
