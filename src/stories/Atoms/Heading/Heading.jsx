
import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

/**
 * Heading component for user interaction
 */
export const Heading = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'heading--primary' : 'heading--secondary';
  return (
    <div
      className={['heading', `heading--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Heading.propTypes = {
  /**
   * Is this the primary style for the component?
   */
  primary: PropTypes.bool,
  /**
   * Size of the component
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content to be rendered inside the component
   */
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Heading;
