
import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

/**
 * Container component for user interaction
 */
export const Container = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'container--primary' : 'container--secondary';
  return (
    <div
      className={['container', `container--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
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

Container.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Container;
