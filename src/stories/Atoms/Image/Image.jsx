
import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

/**
 * Image component for user interaction
 */
export const Image = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'image--primary' : 'image--secondary';
  return (
    <div
      className={['image', `image--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Image.propTypes = {
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

Image.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Image;
