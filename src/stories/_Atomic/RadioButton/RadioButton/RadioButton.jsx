
import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

/**
 * RadioButton component for user interaction
 */
export const RadioButton = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'radiobutton--primary' : 'radiobutton--secondary';
  return (
    <div
      className={['radiobutton', `radiobutton--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

RadioButton.propTypes = {
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

RadioButton.defaultProps = {
  primary: false,
  size: 'medium',
};

export default RadioButton;
