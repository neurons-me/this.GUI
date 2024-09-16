
import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

/**
 * Alert component for user interaction
 */
export const Alert = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'alert--primary' : 'alert--secondary';
  return (
    <div
      className={['alert', `alert--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
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

Alert.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Alert;
