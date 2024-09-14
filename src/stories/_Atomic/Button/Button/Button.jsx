import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Assuming you're using Tailwind, you can remove this if no longer needed

export const Button = ({ primary, size, label, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const buttonSize = size ? `button--${size}` : '';

  return (
    <button
      type="button"
      className={`button ${mode} ${buttonSize} text-white bg-green-500 rounded px-4 py-2`}
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

export default Button;