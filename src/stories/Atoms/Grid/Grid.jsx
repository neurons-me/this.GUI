//this.GUI/src/stories/Atoms/Grid/Grid.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css'; // Import the revised grid styles

export const Grid = ({ gap, border, color, rounded, shadow, children }) => {
  const gridClasses = [
    'grid', // Base grid class
    border ? `grid--border grid--${color}` : '', // Conditionally apply border and color
    rounded ? 'grid--rounded' : '', // Conditionally apply rounded corners
    shadow ? `grid--shadow-${shadow}` : '', // Conditionally apply shadow depth
  ].join(' ').trim();

  return (
    <div className={gridClasses} style={{ gap }}>
      {children} {/* Grid items go here */}
    </div>
  );
};

Grid.propTypes = {
  gap: PropTypes.string,
  border: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  rounded: PropTypes.bool, // Boolean for rounded corners
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']), // Depth of shadow
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  gap: '16px', // Default gap between items
  border: false, // Default to no border
  color: 'primary', // Default border color
  rounded: false, // Default to no rounded corners
  shadow: 'none', // Default to no shadow
};