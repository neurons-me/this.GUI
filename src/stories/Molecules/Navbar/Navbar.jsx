//this.GUI/src/stories/Molecules/Navbar/Navbar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export const Navbar = ({
  leftItems = [],
  centerItems = [],
  rightItems = [],
  logo = null,
  searchComponent = null,
  styleOverrides = {},
}) => {
  const style = {};

  // Map of styleOverrides keys to CSS variable names
  const cssVariableMap = {
    navbarBackgroundColor: '--navbar-background-color',
    navbarBorderColor: '--navbar-border-color',
    navbarHeight: '--navbar-height',
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
      <div className="navbar__group navbar__group--left">
        {logo && <div className="navbar__logo">{logo}</div>}
        {searchComponent && <div className="navbar__search">{searchComponent}</div>}
        {leftItems.map((item, index) => (
          <a key={index} href={item.url} className="navbar__link">
            {item.label}
          </a>
        ))}
      </div>
      <div className="navbar__group navbar__group--center">
        {centerItems.map((item, index) => (
          <a key={index} href={item.url} className="navbar__link">
            {item.label}
          </a>
        ))}
      </div>
      <div className="navbar__group navbar__group--right">
        {rightItems.map((item, index) => (
          <a key={index} href={item.url} className="navbar__link">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  leftItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  centerItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rightItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  logo: PropTypes.node,
  searchComponent: PropTypes.node,
  styleOverrides: PropTypes.object,
};