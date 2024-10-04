
import React from 'react';
import PropTypes from 'prop-types';
import './HeroSection.css';

/**
 * HeroSection template component
 */
export const HeroSection = ({ children, ...props }) => {
  return (
    <div className="herosection" {...props}>
      {children}
    </div>
  );
};

HeroSection.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default HeroSection;
