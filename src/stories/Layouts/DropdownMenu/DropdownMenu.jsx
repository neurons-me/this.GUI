
import React from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';

/**
 * DropdownMenu layout component
 */
export const DropdownMenu = ({ children, primary, ...props }) => {
  const mode = primary ? 'dropdownmenu--primary' : 'dropdownmenu--secondary';
  return (
    <div className={['dropdownmenu', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

DropdownMenu.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

DropdownMenu.defaultProps = {
  primary: false,
};
