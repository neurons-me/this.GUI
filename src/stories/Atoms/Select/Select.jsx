
import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

/**
 * Select component for user interaction
 */
export const Select = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'select--primary' : 'select--secondary';
  return (
    <div
      className={['select', `select--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Select.propTypes = {
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

Select.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Select;
