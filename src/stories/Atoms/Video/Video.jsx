//this.GUI/src/stories/Atoms/Video/Video.jsx
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

export const Video = ({
  src,
  poster,
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  width = '100%',
  height = 'auto',
  onPlay,
  onPause,
  onEnd,
  showControlsOnHover = true,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoHover = () => setIsHovering(true);
  const handleVideoLeave = () => setIsHovering(false);

  return (
    <div
      className={`video-container ${showControlsOnHover && isHovering ? 'show-controls' : ''}`}
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoLeave}
      style={{ width, height }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnd}
        style={{ width: '100%', height: '100%' }}
      />
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  showControlsOnHover: PropTypes.bool,
};
