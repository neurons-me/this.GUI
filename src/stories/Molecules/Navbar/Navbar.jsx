// src/stories/Molecules/Navigation/Navbar/Navbar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export const Navbar = ({
  links,
  logo,
  userControls,
  styleOverrides = {},
}) => {
  // Build the style object for CSS variable overrides
  const style = {};

  // Map of styleOverrides keys to CSS variable names
  const cssVariableMap = {
    navbarBackgroundColor: '--navbar-background-color',
    navbarBorderColor: '--navbar-border-color',
    navbarPadding: '--navbar-padding',
    navbarMargin: '--navbar-margin',
    navbarBorderRadius: '--navbar-border-radius',
    logoMarginRight: '--navbar-logo-margin-right',
    itemMargin: '--navbar-item-margin',
    linkColor: '--navbar-link-color',
    linkPadding: '--navbar-link-padding',
    linkHoverBackgroundColor: '--navbar-link-hover-background-color',
    linkHoverBorderRadius: '--navbar-link-hover-border-radius',
    controlsMarginLeft: '--navbar-controls-margin-left',
    controlItemMarginLeft: '--navbar-control-item-margin-left',
    buttonBackgroundColor: '--button-background-color',
    buttonTextColor: '--button-text-color',
    buttonHoverBackgroundColor: '--button-hover-background-color',
  };

  // Set CSS variables based on styleOverrides
  Object.keys(styleOverrides).forEach((key) => {
    const cssVar = cssVariableMap[key];
    if (cssVar) {
      style[cssVar] = styleOverrides[key];
    }
  });

  return (
    <nav className="navbar" style={style}>
      <div className="navbar__logo">
        {logo}
      </div>
      <ul className="navbar__links">
        {links.map((link, index) => (
          <li key={index} className="navbar__item">
            <a
              href={link.url}
              className={`navbar__link ${link.isActive ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar__controls">
        {userControls}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
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

Navbar.defaultProps = {
  logo: null,
  userControls: null,
  styleOverrides: {},
};

export default Navbar;