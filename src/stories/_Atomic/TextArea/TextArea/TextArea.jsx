
import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

/**
 * TextArea component for user interaction
 */
export const TextArea = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'textarea--primary' : 'textarea--secondary';
  return (
    <div
      className={['textarea', `textarea--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

TextArea.propTypes = {
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

TextArea.defaultProps = {
  primary: false,
  size: 'medium',
};

export default TextArea;
