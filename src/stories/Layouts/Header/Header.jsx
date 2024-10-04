
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * Header layout component
 */
export const Header = ({ children, primary, ...props }) => {
  const mode = primary ? 'header--primary' : 'header--secondary';
  return (
    <div className={['header', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Header.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  primary: false,
};
