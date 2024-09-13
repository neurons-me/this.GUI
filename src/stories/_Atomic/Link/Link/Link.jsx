
import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

/**
 * Link component for user interaction
 */
export const Link = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'link--primary' : 'link--secondary';
  return (
    <div
      className={['link', `link--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Link.propTypes = {
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

Link.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Link;
