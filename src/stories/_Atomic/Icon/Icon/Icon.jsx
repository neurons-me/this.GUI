
import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

/**
 * Icon component for user interaction
 */
export const Icon = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'icon--primary' : 'icon--secondary';
  return (
    <div
      className={['icon', `icon--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Icon.propTypes = {
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

Icon.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Icon;
