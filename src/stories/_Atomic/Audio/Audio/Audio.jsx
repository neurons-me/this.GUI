
import React from 'react';
import PropTypes from 'prop-types';
import './Audio.css';

/**
 * Audio component for user interaction
 */
export const Audio = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'audio--primary' : 'audio--secondary';
  return (
    <div
      className={['audio', `audio--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Audio.propTypes = {
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

Audio.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Audio;
