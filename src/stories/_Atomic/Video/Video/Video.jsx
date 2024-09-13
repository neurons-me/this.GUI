
import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

/**
 * Video component for user interaction
 */
export const Video = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'video--primary' : 'video--secondary';
  return (
    <div
      className={['video', `video--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Video.propTypes = {
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

Video.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Video;
