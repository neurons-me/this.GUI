// src/stories/Atoms/Divider/Divider.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Divider.css';

export const Divider = ({
  thickness = 'normal',
  width = 'medium',
  align = 'center',
  color = 'neutral',
  className = '',
  style = {},
  ...props
}) => {
  const dividerClasses = classNames('divider', className, {
    [`divider--${thickness}`]: thickness,
    [`divider--${width}`]: width,
    [`divider--align-${align}`]: align,
    [color]: color,
  });

  return <hr className={dividerClasses} style={style} {...props} />;
};

Divider.propTypes = {
  /** Thickness of the divider */
  thickness: PropTypes.oneOf(['thin', 'normal', 'bold']),
  /** Width of the divider */
  width: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Alignment of the divider */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Color of the divider */
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
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
