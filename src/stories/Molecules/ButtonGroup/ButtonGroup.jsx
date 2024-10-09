//this.GUI/src/stories/Molecules/ButtonGroup/ButtonGroup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

export const ButtonGroup = ({ buttons, size, color, variant, onButtonClick }) => {
  return (
    <div className={`button-group button-group--${size} button-group--${color} button-group--${variant}`}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className="button-group__button"
          onClick={() => onButtonClick(button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Label of the button
      value: PropTypes.any.isRequired,    // Value to return on button click
    })
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size of the buttons
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Button color based on theme
  variant: PropTypes.oneOf(['solid', 'outline']), // Solid or outline button styles
  onButtonClick: PropTypes.func, // Callback function when a button is clicked
};

ButtonGroup.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'solid',
  onButtonClick: () => {},
};