import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

export const Sidebar = ({
  links,
  logo,
  userControls,
  styleOverrides = {},
}) => {
  // Build the style object for CSS variable overrides
  const style = {};

  // Map of styleOverrides keys to CSS variable names
  const cssVariableMap = {
    sidebarBackgroundColor: '--sidebar-background-color',
    sidebarBorderColor: '--sidebar-border-color',
    sidebarPadding: '--sidebar-padding',
    sidebarWidth: '--sidebar-width',
    logoMarginBottom: '--sidebar-logo-margin-bottom',
    itemMargin: '--sidebar-item-margin',
    linkColor: '--sidebar-link-color',
    linkPadding: '--sidebar-link-padding',
    linkHoverBackgroundColor: '--sidebar-link-hover-background-color',
    linkHoverBorderRadius: '--sidebar-link-hover-border-radius',
    controlsMarginTop: '--sidebar-controls-margin-top',
  };

  // Set CSS variables based on styleOverrides
  Object.keys(styleOverrides).forEach((key) => {
    const cssVar = cssVariableMap[key];
    if (cssVar) {
      style[cssVar] = styleOverrides[key];
    }
  });

  return (
    <aside className="sidebar" style={style}>
      <div className="sidebar__logo">
        {logo}
      </div>
      <ul className="sidebar__links">
        {links.map((link, index) => (
          <li key={index} className="sidebar__item">
            <a
              href={link.url}
              className={`sidebar__link ${link.isActive ? 'sidebar__link--active' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar__controls">
        {userControls}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ).isRequired,
  logo: PropTypes.node,
  userControls: PropTypes.node,
  styleOverrides: PropTypes.object,
};

Sidebar.defaultProps = {
  logo: null,
  userControls: null,
  styleOverrides: {},
};

export default Sidebar;