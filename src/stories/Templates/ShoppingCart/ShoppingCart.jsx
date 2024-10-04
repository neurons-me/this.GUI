
import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css';

/**
 * ShoppingCart template component
 */
export const ShoppingCart = ({ children, ...props }) => {
  return (
    <div className="shoppingcart" {...props}>
      {children}
    </div>
  );
};

ShoppingCart.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default ShoppingCart;
