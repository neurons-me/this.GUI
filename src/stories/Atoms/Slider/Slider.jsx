
import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

/**
 * Slider component for user interaction
 */
export const Slider = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'slider--primary' : 'slider--secondary';
  return (
    <div
      className={['slider', `slider--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Slider.propTypes = {
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

Slider.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Slider;
