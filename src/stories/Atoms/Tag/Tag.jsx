// src/stories/Atoms/Tag/Tag.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tag.css';

export const Tag = ({
  label,
  color = 'primary', // Default color scheme
  variant = 'filled', // 'filled' for primary and 'outlined' for secondary
  size = 'medium', // small, medium, large
  removable = false,
  onRemove,
  onClick,
  icon,
  disabled = false,
  className = '',
  style = {},
  ...props
}) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  const tagClasses = classNames(
    'tag',
    `tag--${variant}`,
    `tag--${color}`,
    `tag--${size}`,
    {
      'tag--removable': removable,
      'tag--disabled': disabled,
    },
    className
  );

  return (
    <div
      className={tagClasses}
      style={style}
      onClick={!disabled ? onClick : null}
      {...props}
    >
      {icon && <span className="tag__icon">{icon}</span>}
      <span className="tag__label">{label}</span>
      {removable && !disabled && (
        <button className="tag__remove" onClick={handleRemove} aria-label="Remove tag">
          &times;
        </button>
      )}
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Tag;
