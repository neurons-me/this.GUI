import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export const Link = ({
  text,
  href,
  underline = true, // Controls underline
  bold = false,      // Controls bold text
  newWindow = false,
  external = false,
  experimentalPreview = false,
  className = '',
  style = {},
  ...props
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleMouseDown = () => {
    if (experimentalPreview) {
      setShowPreview(true);
    }
  };

  const handleMouseUp = () => {
    if (experimentalPreview) {
      setShowPreview(false);
    }
  };

  // Build dynamic inline styles based on props
  const dynamicStyles = {
    textDecoration: underline ? 'underline' : 'none',
    fontWeight: bold ? 'bold' : 'normal',
    ...style, // Include any additional styles passed via props
  };

  return (
    <>
      <a
        href={href}
        className={`link ${className}`} // Keep the base 'link' class for consistent styling
        style={dynamicStyles} // Apply dynamic styles here
        target={newWindow ? '_blank' : '_self'}
        rel={newWindow ? 'noopener noreferrer' : undefined}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onBlur={() => setShowPreview(false)}
        {...props}
      >
        {text} {external && <span className="link__external-icon">🔗</span>}
      </a>
      {showPreview && (
        <div className="link__preview">
          <iframe src={href} title="Preview" className="link__preview-iframe" />
        </div>
      )}
    </>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  underline: PropTypes.bool,
  bold: PropTypes.bool,
  newWindow: PropTypes.bool,
  external: PropTypes.bool,
  experimentalPreview: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};