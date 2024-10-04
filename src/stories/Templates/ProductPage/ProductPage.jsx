
import React from 'react';
import PropTypes from 'prop-types';
import './ProductPage.css';

/**
 * ProductPage template component
 */
export const ProductPage = ({ children, ...props }) => {
  return (
    <div className="productpage" {...props}>
      {children}
    </div>
  );
};

ProductPage.propTypes = {
  /**
   * Children components to be rendered inside the template
   */
  children: PropTypes.node.isRequired,
};

export default ProductPage;
