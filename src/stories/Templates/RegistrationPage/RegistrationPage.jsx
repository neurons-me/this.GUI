
import React from 'react';
import PropTypes from 'prop-types';
import './RegistrationPage.css';

/**
 * RegistrationPage template component
 */
export const RegistrationPage = ({ children, ...props }) => {
  return (
    <div className="registrationpage" {...props}>
      {children}
    </div>
  );
};

RegistrationPage.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default RegistrationPage;
