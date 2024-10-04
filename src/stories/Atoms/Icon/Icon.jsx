// src/stories/Atoms/Icon/Icon.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Icon.css';

export const Icon = ({
  icon: IconComponent,
  background = false,
  color = 'neutral',
  shape = 'square',
  size = 'normal',
  align = 'left',
  className = '',
  style = {},
  ...props
}) => {
  const containerClasses = classNames('icon-container', className, {
    'icon-container--background': background,
    [`icon-container--shape-${shape}`]: shape,
    [`icon-container--size-${size}`]: size,
    [`icon-container--align-${align}`]: align,
    [`icon-container--color-${color}`]: background,
  });

  const iconClasses = classNames('icon', {
    [`icon--color-${color}`]: !background,
    [`icon--size-${size}`]: size,
  });

  return background ? (
    <div className={containerClasses} style={style} {...props}>
      <IconComponent className={iconClasses} />
    </div>
  ) : (
    <IconComponent className={iconClasses} style={style} {...props} />
  );
};

Icon.propTypes = {
  /** Icon component from react-icons or similar library */
  icon: PropTypes.elementType.isRequired,
  /** Whether to display a background behind the icon */
  background: PropTypes.bool,
  /** Color of the icon or background */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Shape of the background */
  shape: PropTypes.oneOf(['rounded', 'square']),
  /** Size of the icon */
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  /** Alignment of the icon within its container */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
