
import React from 'react';
import PropTypes from 'prop-types';
import './AdminDashboard.css';

/**
 * AdminDashboard template component
 */
export const AdminDashboard = ({ children, ...props }) => {
  return (
    <div className="admindashboard" {...props}>
      {children}
    </div>
  );
};

AdminDashboard.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default AdminDashboard;
