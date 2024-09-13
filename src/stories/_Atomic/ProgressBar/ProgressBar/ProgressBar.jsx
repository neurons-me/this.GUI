
import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

/**
 * ProgressBar component for user interaction
 */
export const ProgressBar = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'progressbar--primary' : 'progressbar--secondary';
  return (
    <div
      className={['progressbar', `progressbar--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

ProgressBar.propTypes = {
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

ProgressBar.defaultProps = {
  primary: false,
  size: 'medium',
};

export default ProgressBar;
