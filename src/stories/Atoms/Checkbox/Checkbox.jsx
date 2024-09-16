
import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * Checkbox component for user interaction
 */
export const Checkbox = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'checkbox--primary' : 'checkbox--secondary';
  return (
    <div
      className={['checkbox', `checkbox--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Checkbox;
