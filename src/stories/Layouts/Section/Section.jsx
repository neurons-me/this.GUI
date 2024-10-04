
import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

/**
 * Section layout component
 */
export const Section = ({ children, primary, ...props }) => {
  const mode = primary ? 'section--primary' : 'section--secondary';
  return (
    <div className={['section', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  primary: false,
};
