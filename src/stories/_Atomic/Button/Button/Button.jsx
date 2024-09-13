
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component for user interaction
 */
export const Button = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <div
      className={['button', `button--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
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

Button.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Button;
