
import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

/**
 * Pagination layout component
 */
export const Pagination = ({ children, primary, ...props }) => {
  const mode = primary ? 'pagination--primary' : 'pagination--secondary';
  return (
    <div className={['pagination', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Pagination.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Pagination.defaultProps = {
  primary: false,
};
