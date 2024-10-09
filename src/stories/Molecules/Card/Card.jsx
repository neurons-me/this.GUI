//this.GUI/src/stories/Molecules/Card/Card.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  children,
  variant,
  color,
  textColor,
  isExpandable,
  isRemovable,
  hoverable,
  width,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleExpandToggle = () => setIsExpanded(!isExpanded);
  const handleRemove = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''}`}
      style={{
        backgroundColor: variant === 'solid' ? `var(--${color})` : 'transparent',
        border: variant === 'outline' ? `1px solid var(--${color})` : 'none',
        width: width,
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

      <div
        className="card__content"
        style={{
          color: `var(--${textColor})`, // Apply the text color using CSS variables
        }}
      >
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
  variant: PropTypes.oneOf(['solid', 'outline']), // Variant can be 'solid' or 'outline'
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
};

Card.defaultProps = {
  variant: 'solid',
  color: 'neutral-color', // Default background/border color
  textColor: 'dark-color', // Default text color
  isExpandable: false,
  isRemovable: false,
  hoverable: false,
  width: '100%', // Default width
};