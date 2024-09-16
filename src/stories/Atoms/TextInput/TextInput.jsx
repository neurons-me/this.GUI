
import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

/**
 * TextInput component for user interaction
 */
export const TextInput = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'textinput--primary' : 'textinput--secondary';
  return (
    <div
      className={['textinput', `textinput--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

TextInput.propTypes = {
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

TextInput.defaultProps = {
  primary: false,
  size: 'medium',
};

export default TextInput;
