// src/stories/Atoms/Image/Image.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Image.css';

export const Image = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  title,
  caption,
  variant = 'thumbnail', // 'thumbnail', 'avatar', 'expanded', 'flat'
  aspectRatio,
  crop = 'center', // 'center', 'top', 'left'
  fallbackSrc = '/fallback.jpg',
  srcSet,
  sizes,
  lazyLoad = true,
  onClickExpand,
  hoverIcons = [],
  hoverCaption,
  hoverIconPosition = 'center', // 'center', 'top-right'
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  className = '',
  style = {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsError(true);
  };

  const handleExpand = () => {
    if (variant !== 'expanded' && variant !== 'flat') {
      setIsExpanded(true);
    }
    if (onClickExpand) {
      onClickExpand();
    }
  };

  const handleCloseExpand = () => {
    setIsExpanded(false);
  };

  const imageClasses = classNames('image', className, {
    [`image--${variant}`]: variant,
    [`image--${aspectRatio}`]: aspectRatio,
    [`image--${crop}`]: crop,
    [`image--size-${size}`]: size,
    'image--loaded': isLoaded,
    'image--error': isError,
  });

  const showOverlay = variant !== 'flat' && (hoverIcons.length > 0 || hoverCaption);

  return (
    <>
      <figure className="image-figure" style={style} {...props}>
        {!isLoaded && !isError && <div className="image__placeholder">Loading...</div>}
        <img
          src={isError ? fallbackSrc : src}
          alt={alt}
          width={width}
          height={height}
          loading={lazyLoad ? loading : 'eager'}
          title={title}
          className={imageClasses}
          srcSet={srcSet}
          sizes={sizes}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onClick={variant !== 'flat' ? handleExpand : undefined}
          role={variant === 'expanded' ? 'img' : 'button'}
          tabIndex={variant !== 'flat' ? '0' : undefined}
          onKeyPress={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && variant !== 'flat') {
              handleExpand();
            }
          }}
        />
        {caption && <figcaption className="image__caption">{caption}</figcaption>}

        {showOverlay && (
          <div className="image__overlay">
            {hoverCaption && (
              <div className="image__overlay-caption">
                {hoverCaption}
              </div>
            )}
            {hoverIcons.length > 0 && (
              <div
                className={classNames('image__overlay-icons', {
                  'image__overlay-icons--center': hoverIconPosition === 'center',
                  'image__overlay-icons--top-right': hoverIconPosition === 'top-right',
                })}
              >
                {hoverIcons.map((IconComponent, index) => (
                  <IconComponent key={index} className="image__overlay-icon" />
                ))}
              </div>
            )}
          </div>
        )}
      </figure>

      {isExpanded && (
        <div className="image__modal" onClick={handleCloseExpand} role="dialog" aria-modal="true">
          <div className="image__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image__modal-close" onClick={handleCloseExpand} aria-label="Close">
              &times;
            </button>
            <img src={src} alt={alt} className="image__modal-img" />
            {caption && <div className="image__modal-caption">{caption}</div>}
          </div>
        </div>
      )}
    </>
  );
};

Image.propTypes = {
  /** Source URL of the image */
  src: PropTypes.string.isRequired,
  /** Alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** Width of the image */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Height of the image */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Loading behavior */
  loading: PropTypes.oneOf(['lazy', 'eager']),
  /** Tooltip text */
  title: PropTypes.string,
  /** Caption for the image */
  caption: PropTypes.string,
  /** Variant of the image */
  variant: PropTypes.oneOf(['thumbnail', 'avatar', 'expanded', 'flat']),
  /** Aspect ratio of the image */
  aspectRatio: PropTypes.oneOf(['16by9', '4by3', '1by1']),
  /** Crop position */
  crop: PropTypes.oneOf(['center', 'top', 'left']),
  /** Fallback image source */
  fallbackSrc: PropTypes.string,
  /** srcSet for responsive images */
  srcSet: PropTypes.string,
  /** sizes attribute for responsive images */
  sizes: PropTypes.string,
  /** Enable lazy loading */
  lazyLoad: PropTypes.bool,
  /** Function to handle expand action */
  onClickExpand: PropTypes.func,
  /** Icons to display on hover */
  hoverIcons: PropTypes.arrayOf(PropTypes.elementType),
  /** Caption to display on hover */
  hoverCaption: PropTypes.string,
  /** Position of hover icons */
  hoverIconPosition: PropTypes.oneOf(['center', 'top-right']),
  /** Size of the image */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
