
import React from 'react';
import PropTypes from 'prop-types';
import './Snackbar.css';

/**
 * Snackbar component for user interaction
 */
export const Snackbar = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'snackbar--primary' : 'snackbar--secondary';
  return (
    <div
      className={['snackbar', `snackbar--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Snackbar.propTypes = {
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

Snackbar.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Snackbar;
