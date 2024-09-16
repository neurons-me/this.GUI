
import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

/**
 * Divider component for user interaction
 */
export const Divider = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'divider--primary' : 'divider--secondary';
  return (
    <div
      className={['divider', `divider--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Divider.propTypes = {
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

Divider.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Divider;
