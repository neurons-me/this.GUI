
import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

/**
 * Tag component for user interaction
 */
export const Tag = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'tag--primary' : 'tag--secondary';
  return (
    <div
      className={['tag', `tag--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Tag.propTypes = {
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

Tag.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Tag;
