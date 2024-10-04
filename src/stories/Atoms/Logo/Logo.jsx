// src/stories/Atoms/Logo/Logo.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Logo.css';

export const Logo = ({
  src,
  alt = 'Logo',
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  shape = 'normal', // 'normal', 'rounded', 'squared'
  background = 'none', // 'none', 'palette', 'custom'
  customBackgroundColor,
  className = '',
  style = {},
  ...props
}) => {
  const logoClasses = classNames('logo', className, {
    [`logo--size-${size}`]: size,
    [`logo--shape-${shape}`]: shape,
    [`logo--background-${background}`]: background,
  });

  const logoStyle =
    background === 'custom' && customBackgroundColor
      ? { ...style, '--logo-background-color': customBackgroundColor }
      : style;

  return (
    <div className={logoClasses} style={logoStyle} {...props}>
      <img src={src} alt={alt} className="logo__image" />
    </div>
  );
};

Logo.propTypes = {
  /** Source URL or path of the logo image */
  src: PropTypes.string.isRequired,
  /** Alternative text for the logo */
  alt: PropTypes.string,
  /** Size of the logo */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Shape of the logo */
  shape: PropTypes.oneOf(['normal', 'rounded', 'squared']),
  /** Background option */
  background: PropTypes.oneOf(['none', 'palette', 'custom']),
  /** Custom background color when background is set to 'custom' */
  customBackgroundColor: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
