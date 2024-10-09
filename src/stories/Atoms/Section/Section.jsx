//this.GUI/src/stories/Atoms/Section/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({
  title,
  margin,
  padding,
  backgroundColor,
  border,
  borderColor,
  fullWidth,
  shadow,
  id,
  ariaLabel,
  children,
}) => {
  const sectionClasses = [
    'section',
    border ? `section--border section--border-${borderColor}` : '',
    fullWidth ? 'section--full-width' : '',
    shadow ? `section--shadow-${shadow}` : '',
  ].join(' ').trim();

  return (
    <section id={id} className={sectionClasses} style={{ margin, padding, backgroundColor }} aria-label={ariaLabel}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  fullWidth: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  margin: '20px 0',
  padding: '20px',
  backgroundColor: 'transparent',
  border: false,
  borderColor: 'neutral',
  fullWidth: false,
  shadow: 'none',
};