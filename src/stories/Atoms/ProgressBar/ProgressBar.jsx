// this.GUI/src/stories/Atoms/ProgressBar/ProgressBar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'; // Import the CSS styles

export const ProgressBar = ({
  progress = 0, // Default to 0% progress
  color = 'primary', // Can be 'primary', 'secondary', 'info', 'warning', etc.
  label = '', // Optional label text
  showLabel = true, // Show or hide the label
  className = '',
  style = {},
  ...props
}) => {
  const colorClass = `progress-bar--${color}`;

  return (
    <div className={`progress-bar-container ${className}`} style={style} {...props}>
      <div className={`progress-bar ${colorClass}`} style={{ width: `${progress}%` }}>
        {showLabel && <span className="progress-label">{label}</span>}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
    'small-switch-1', 'small-switch-2',
    'natural-1', 'natural-2', 'natural-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};
