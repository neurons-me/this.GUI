import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css'; // Ensure styles are imported

export const Grid = ({
  gap = '16px',
  border = false,
  color = 'primary', // Default border color
  rounded = false,
  shadow = 'none',
  hover = false,
  padding = 'md',
  marginTop = 'md',
  marginBottom = 'md',
  marginLeft = 'md',
  marginRight = 'md',
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Class handling for the Grid component
  const borderClass = border ? `grid--border grid--${color}` : '';
  const hoverClass = hover ? 'grid--hover' : '';
  const roundedClass = rounded ? 'grid--rounded' : '';
  const shadowClass = `grid--shadow-${shadow}`;
  const paddingClass = `grid--padding-${padding}`;
  const marginTopClass = `grid--mt-${marginTop}`;
  const marginBottomClass = `grid--mb-${marginBottom}`;
  const marginLeftClass = `grid--ml-${marginLeft}`;
  const marginRightClass = `grid--mr-${marginRight}`;

  const gridClasses = [
    'grid',
    borderClass,
    hoverClass,
    roundedClass,
    shadowClass,
    paddingClass,
    marginTopClass,
    marginBottomClass,
    marginLeftClass,
    marginRightClass,
    className,
  ].join(' ').trim();

  return (
    <div className={gridClasses} style={{ gap, ...style }} {...props}>
      {children} {/* Grid items go here */}
    </div>
  );
};

Grid.propTypes = {
  gap: PropTypes.string,
  border: PropTypes.bool, // Show border or not
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Color for the border, only when `border` is true
  rounded: PropTypes.bool, // Boolean for rounded corners
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']), // Depth of shadow
  hover: PropTypes.bool, // Whether grid items should have a hover effect
  padding: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginTop: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginBottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginLeft: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginRight: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Grid.defaultProps = {
  gap: '16px', // Default gap between items
  border: false, // Default to no border
  color: 'primary', // Default border color
  rounded: false, // Default to no rounded corners
  shadow: 'none', // Default to no shadow
  hover: false, // Default to no hover effect
  padding: 'md',
  marginTop: 'md',
  marginBottom: 'md',
  marginLeft: 'md',
  marginRight: 'md',
};