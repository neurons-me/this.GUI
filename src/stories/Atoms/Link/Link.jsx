// src/stories/Atoms/Link/Link.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Link.css';

export const Link = ({
  text,
  href,
  underline = true,
  bold = false,
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

  const linkClasses = classNames('link', className, {
    'link--underline': underline,
    'link--no-underline': !underline,
    'link--bold': bold,
    'link--external': external,
  });

  return (
    <>
      <a
        href={href}
        className={linkClasses}
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
  /** Text content of the link */
  text: PropTypes.string.isRequired,
  /** URL the link points to */
  href: PropTypes.string.isRequired,
  /** Whether the link is underlined */
  underline: PropTypes.bool,
  /** Whether the link text is bold */
  bold: PropTypes.bool,
  /** Whether the link opens in a new window */
  newWindow: PropTypes.bool,
  /** Whether the link is external */
  external: PropTypes.bool,
  /** Enable experimental preview on press */
  experimentalPreview: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
