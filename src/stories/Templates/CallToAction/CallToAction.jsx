
import React from 'react';
import PropTypes from 'prop-types';
import './CallToAction.css';

/**
 * CallToAction template component
 */
export const CallToAction = ({ children, ...props }) => {
  return (
    <div className="calltoaction" {...props}>
      {children}
    </div>
  );
};

CallToAction.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default CallToAction;
