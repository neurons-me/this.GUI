
import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

/**
 * Tabs layout component
 */
export const Tabs = ({ children, primary, ...props }) => {
  const mode = primary ? 'tabs--primary' : 'tabs--secondary';
  return (
    <div className={['tabs', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
  primary: false,
};
