
import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

/**
 * Spinner component for user interaction
 */
export const Spinner = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'spinner--primary' : 'spinner--secondary';
  return (
    <div
      className={['spinner', `spinner--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Spinner.propTypes = {
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

Spinner.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Spinner;
