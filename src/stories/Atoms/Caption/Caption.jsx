
import React from 'react';
import PropTypes from 'prop-types';
import './Caption.css';

/**
 * Caption component for user interaction
 */
export const Caption = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'caption--primary' : 'caption--secondary';
  return (
    <div
      className={['caption', `caption--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Caption.propTypes = {
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

Caption.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Caption;
