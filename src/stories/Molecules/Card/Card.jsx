import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  children,
  variant = 'solid', // Default to solid
  color = 'neutral-color', // Default background/border color
  textColor = 'dark-color', // Default text color
  isExpandable = false, // Whether the card is expandable
  isRemovable = false, // Whether the card can be removed
  hoverable = false, // Whether the card has hover effects
  width = '100%', // Default card width
  padding = 'md', // Default padding
  marginTop = 'md', // Default margin-top
  marginBottom = 'md', // Default margin-bottom
  marginLeft = 'md', // Default margin-left
  marginRight = 'md', // Default margin-right
  className = '',
  style = {},
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleExpandToggle = () => setIsExpanded(!isExpanded);
  const handleRemove = () => setIsVisible(false);

  if (!isVisible) return null;

  // Class handling
  const variantClass = `card--${variant}`;
  const hoverableClass = hoverable ? 'card--hoverable' : '';
  const paddingClass = `card--padding-${padding}`;
  const marginTopClass = `card--mt-${marginTop}`;
  const marginBottomClass = `card--mb-${marginBottom}`;
  const marginLeftClass = `card--ml-${marginLeft}`;
  const marginRightClass = `card--mr-${marginRight}`;

  const combinedClassName = `card ${variantClass} ${hoverableClass} ${paddingClass} ${marginTopClass} ${marginBottomClass} ${marginLeftClass} ${marginRightClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={{
        backgroundColor: variant === 'solid' ? `var(--${color})` : 'transparent',
        border: variant === 'outline' ? `1px solid var(--${color})` : 'none', // Add border for outline variant
        width: width,
        color: `var(--${textColor})`, // Apply the text color using CSS variables
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow and border-radius
        ...style,
      }}
      {...props}
    >
      {isExpandable && (
        <button className="card__expand" onClick={handleExpandToggle}>
          {isExpanded ? 'Close' : 'Expand'}
        </button>
      )}

      {isRemovable && (
        <button className="card__remove" onClick={handleRemove}>
          &times;
        </button>
      )}

      <div className="card__content">
        {children}
      </div>

      {isExpanded && (
        <div className="card__expanded-content">
          {children}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline']),
  color: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]).isRequired,
  textColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Separate text color prop
  isExpandable: PropTypes.bool,
  isRemovable: PropTypes.bool,
  hoverable: PropTypes.bool,
  width: PropTypes.string, // Width of the card
  padding: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginTop: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginBottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginLeft: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  marginRight: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  style: PropTypes.object,
};