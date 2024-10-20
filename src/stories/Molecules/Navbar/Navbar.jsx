import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = ({ fixed, logo, siteName, centerLinks, rightLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${fixed ? 'navbar-fixed' : ''}`}>
      <div className="navbar-logo">
      <a href="/">
       {logo && <img src={logo} alt={siteName} />}
      </a>
      <span className="site-name">{siteName}</span>  {/* Separate container for site name */}
      </div>
        <div className="navbar-center">
          {centerLinks.map((link, index) => (
            <a href={link.href} key={index} className="link">{link.text}</a>
          ))}
        </div>
        <div className="navbar-right">
          {rightLinks.map((link, index) => (
            <a href={link.href} key={index} className="link">{link.text}</a>
          ))}
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isOpen && (
          <div className="navbar-links-mobile">
            {[...centerLinks, ...rightLinks].map((link, index) => (
              <a href={link.href} key={index} className="link-mobile">{link.text}</a>
            ))}
          </div>
        )}
      </nav>
      <div className="navbar-spacer"></div>
    </>
  );
};