// src/stories/Atoms/Container/Container.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

export const Container = ({
  children,
  border = false,
  size = 'medium',
  rounded = false,
  fluid = false,
  align = 'left',
  position = 'static',
  className = '',
  style = {},
  ...props
}) => {
  const containerClasses = classNames('container', className, {
    'container--border': border,
    [`container--${size}`]: size,
    'container--rounded': rounded,
    'container--fluid': fluid,
    [`container--align-${align}`]: align,
    [`container--position-${position}`]: position,
  });

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  /** Content to be wrapped inside the container */
  children: PropTypes.node.isRequired,
  /** Add a border to the container */
  border: PropTypes.bool,
  /** Size of the container */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Rounded corners */
  rounded: PropTypes.bool,
  /** Fluid container (full width) */
  fluid: PropTypes.bool,
  /** Text alignment within the container */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** CSS position property */
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
