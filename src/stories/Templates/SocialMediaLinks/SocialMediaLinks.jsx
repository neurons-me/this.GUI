
import React from 'react';
import PropTypes from 'prop-types';
import './SocialMediaLinks.css';

/**
 * SocialMediaLinks template component
 */
export const SocialMediaLinks = ({ children, ...props }) => {
  return (
    <div className="socialmedialinks" {...props}>
      {children}
    </div>
  );
};

SocialMediaLinks.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default SocialMediaLinks;
