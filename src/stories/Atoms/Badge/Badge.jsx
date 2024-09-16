
import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Badge component for user interaction
 */
export const Badge = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'badge--primary' : 'badge--secondary';
  return (
    <div
      className={['badge', `badge--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
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

Badge.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Badge;
