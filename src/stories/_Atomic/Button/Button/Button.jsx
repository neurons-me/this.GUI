import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component for user interaction
 */
export const Button = ({ primary, size, label, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      {...props}
    >
      {children || label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  label: '',  // Default label to an empty string
};