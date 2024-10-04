
import React from 'react';
import PropTypes from 'prop-types';
import './HeroImageVideo.css';

/**
 * HeroImageVideo layout component
 */
export const HeroImageVideo = ({ children, primary, ...props }) => {
  const mode = primary ? 'heroimagevideo--primary' : 'heroimagevideo--secondary';
  return (
    <div className={['heroimagevideo', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};

HeroImageVideo.propTypes = {
  /**
   * Primary style for the layout
   */
  primary: PropTypes.bool,
  /**
   * Children components to be rendered inside the layout
   */
  children: PropTypes.node.isRequired,
};

HeroImageVideo.defaultProps = {
  primary: false,
};
