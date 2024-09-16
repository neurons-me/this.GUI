
import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

/**
 * Paragraph component for user interaction
 */
export const Paragraph = ({ primary, size, children, ...props }) => {
  const mode = primary ? 'paragraph--primary' : 'paragraph--secondary';
  return (
    <div
      className={['paragraph', `paragraph--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  /**
   * Is this the primary style for the component?
   */
  primary: PropTypes.bool,
  /**
   * Size of the component
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content to be rendered inside the component
   */
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  primary: false,
  size: 'medium',
};

export default Paragraph;
