
import React from 'react';
import PropTypes from 'prop-types';
import './RangeInput.css';

/**
 * RangeInput component for user interaction
 */
export const RangeInput = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'rangeinput--primary' : 'rangeinput--secondary';
  return (
    <div
      className={['rangeinput', `rangeinput--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

RangeInput.propTypes = {
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

RangeInput.defaultProps = {
  primary: false,
  size: 'medium',
};

export default RangeInput;
