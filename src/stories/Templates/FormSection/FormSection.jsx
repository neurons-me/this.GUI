
import React from 'react';
import PropTypes from 'prop-types';
import './FormSection.css';

/**
 * FormSection template component
 */
export const FormSection = ({ children, ...props }) => {
  return (
    <div className="formsection" {...props}>
      {children}
    </div>
  );
};

FormSection.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default FormSection;
