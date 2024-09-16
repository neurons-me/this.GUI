
import React from 'react';
import PropTypes from 'prop-types';
import './Spacer.css';

/**
 * Spacer component for user interaction
 */
export const Spacer = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'spacer--primary' : 'spacer--secondary';
  return (
    <div
      className={['spacer', `spacer--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Spacer.propTypes = {
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

Spacer.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Spacer;
