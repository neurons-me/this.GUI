// src/stories/Molecules/Navigation/Navbar/Navbar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export const Navbar = ({ links, logo, userControls }) => {
  // Define the NavLink component inside Navbar
  const NavLink = ({ url, label, isActive, ...props }) => (
    <a
      href={url}
      className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
      {...props}
    >
      {label}
    </a>
  );

  NavLink.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
  };

  NavLink.defaultProps = {
    isActive: false,
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {logo}
      </div>
      <ul className="navbar__links">
        {links.map((link, index) => (
          <li key={index} className="navbar__item">
            <NavLink
              url={link.url}
              label={link.label}
              isActive={link.isActive}
            />
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
  /**
   * Array of navigation links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isActive: PropTypes.bool, // Optional prop to indicate active link
    })
  ).isRequired,
  /**
   * Logo component or element
   */
  logo: PropTypes.node,
  /**
   * User control elements (e.g., login/logout buttons)
   */
  userControls: PropTypes.node,
};

Navbar.defaultProps = {
  logo: null,
  userControls: null,
};

export default Navbar;