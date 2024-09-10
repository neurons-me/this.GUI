import React from 'react';
import styles from '../styles/Header.module.css'; // Import the CSS module

const Header = ({ title, links }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{title}</div>
      <nav className={styles.nav}>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;