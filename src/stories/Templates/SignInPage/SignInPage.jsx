
import React from 'react';
import PropTypes from 'prop-types';
import './SignInPage.css';

/**
 * SignInPage template component
 */
export const SignInPage = ({ children, ...props }) => {
  return (
    <div className="signinpage" {...props}>
      {children}
    </div>
  );
};

SignInPage.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default SignInPage;
