
import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

/**
 * Toggle component for user interaction
 */
export const Toggle = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'toggle--primary' : 'toggle--secondary';
  return (
    <div
      className={['toggle', `toggle--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Toggle.propTypes = {
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

Toggle.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Toggle;
