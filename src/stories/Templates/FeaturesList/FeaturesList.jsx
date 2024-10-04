
import React from 'react';
import PropTypes from 'prop-types';
import './FeaturesList.css';

/**
 * FeaturesList template component
 */
export const FeaturesList = ({ children, ...props }) => {
  return (
    <div className="featureslist" {...props}>
      {children}
    </div>
  );
};

FeaturesList.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default FeaturesList;
