
import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

/**
 * Label component for user interaction
 */
export const Label = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'label--primary' : 'label--secondary';
  return (
    <div
      className={['label', `label--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Label.propTypes = {
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

Label.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Label;
