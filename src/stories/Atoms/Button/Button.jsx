import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Keep custom styles

export const Button = ({ primary, size, label, noBorder, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const buttonSize = size === 'small' ? 'button--small' : size === 'large' ? 'button--large' : 'button--medium';
  const borderClass = noBorder ? 'button--no-border' : '';

  return (
    <button
      type="button"
      className={`button ${mode} ${buttonSize} ${borderClass} rounded px-4 py-2`}
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
  noBorder: PropTypes.bool, // New prop for no border button
  children: PropTypes.node,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  label: '',
  noBorder: false, // Default no border to false
};

export default Button;