
import React from 'react';
import PropTypes from 'prop-types';
import './Testimonials.css';

/**
 * Testimonials template component
 */
export const Testimonials = ({ children, ...props }) => {
  return (
    <div className="testimonials" {...props}>
      {children}
    </div>
  );
};

Testimonials.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default Testimonials;
