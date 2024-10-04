
import React from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.css';

/**
 * HeroBanner layout component
 */
export const HeroBanner = ({ children, primary, ...props }) => {
  const mode = primary ? 'herobanner--primary' : 'herobanner--secondary';
  return (
    <div className={['herobanner', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

HeroBanner.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

HeroBanner.defaultProps = {
  primary: false,
};
