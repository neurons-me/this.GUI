
import React from 'react';
import PropTypes from 'prop-types';
import './LocationInfo.css';

/**
 * LocationInfo template component
 */
export const LocationInfo = ({ children, ...props }) => {
  return (
    <div className="locationinfo" {...props}>
      {children}
    </div>
  );
};

LocationInfo.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default LocationInfo;
