
import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

/**
 * Tooltip component for user interaction
 */
export const Tooltip = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'tooltip--primary' : 'tooltip--secondary';
  return (
    <div
      className={['tooltip', `tooltip--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * Is this the primary style for the component?
   */
  primary: PropTypes.bool,
  /**
   * Size of the component
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content to be rendered inside the component
   */
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Tooltip;
