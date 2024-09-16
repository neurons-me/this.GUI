
import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

/**
 * Loader component for user interaction
 */
export const Loader = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'loader--primary' : 'loader--secondary';
  return (
    <div
      className={['loader', `loader--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Loader.propTypes = {
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

Loader.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Loader;
