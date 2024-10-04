
import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

/**
 * Accordion layout component
 */
export const Accordion = ({ children, primary, ...props }) => {
  const mode = primary ? 'accordion--primary' : 'accordion--secondary';
  return (
    <div className={['accordion', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  primary: false,
};
