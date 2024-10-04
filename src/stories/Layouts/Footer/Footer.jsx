
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

/**
 * Footer layout component
 */
export const Footer = ({ children, primary, ...props }) => {
  const mode = primary ? 'footer--primary' : 'footer--secondary';
  return (
    <div className={['footer', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Footer.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
  primary: false,
};
