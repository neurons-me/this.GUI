
import React from 'react';
import PropTypes from 'prop-types';
import './SidebarTopNav.css';

/**
 * SidebarTopNav template component
 */
export const SidebarTopNav = ({ children, ...props }) => {
  return (
    <div className="sidebartopnav" {...props}>
      {children}
    </div>
  );
};

SidebarTopNav.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default SidebarTopNav;
