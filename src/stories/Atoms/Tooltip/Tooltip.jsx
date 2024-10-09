//this.GUI/src/stories/Atoms/Tooltip/Tooltip.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

export const Tooltip = ({
  content,
  position = 'top',
  variant = 'primary',
  color = 'primary',  // Ensure default color is "primary"
  showArrow = true,
  children,
  ...props
}) => {
  const tooltipClasses = `
    tooltip
    tooltip--${position}
    tooltip--${variant}
    tooltip--primary-${color}
    ${variant === 'secondary' ? `tooltip--secondary-${color}` : ''}
  `.trim(); // Ensuring the correct color class is applied

  return (
    <div className="tooltip-wrapper" {...props}>
      {children}
      <div className={tooltipClasses}>
        {content}
        {showArrow && <div className="tooltip__arrow"></div>}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'north', 'south', 'east', 'west']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  showArrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
