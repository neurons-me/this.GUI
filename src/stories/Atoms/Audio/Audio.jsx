// src/stories/Atoms/Audio/Audio.jsx
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './Audio.css';

export const Audio = ({
  src,
  autoPlay = false,
  loop = false,
  muted = false,
  size = 'medium',
  color = 'classy-color-1',
  className = '',
  style = {},
  ...props
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      if (autoPlay) {
        audio.play().catch(() => setIsPlaying(false));
      }
    }
  }, [volume, isMuted, autoPlay]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setVolume(!isMuted ? 0 : 1);
  };

  const handleSeekChange = (e) => {
    const seekTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${paddedSeconds}`;
  };

  // Combined handler to toggle mute and show volume slider
  const handleMuteAndShowSlider = (e) => {
    toggleMute();
    setShowVolumeSlider((prev) => !prev);
    e.stopPropagation();
  };

  // Close volume slider when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.audio__volume-container')) {
      setShowVolumeSlider(false);
    }
  };

  useEffect(() => {
    if (showVolumeSlider) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showVolumeSlider]);

  const variantClass = `audio--${size}`;
  const colorClass = `audio--${color}`;
  const combinedClassName = `audio ${variantClass} ${colorClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={style}
      {...props}
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the audio element.
      </audio>
      <button
        className="audio__play-pause"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="audio__seek">
        <input
          type="range"
          className="audio__seek-slider"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeekChange}
          aria-label="Seek Slider"
        />
        <div className="audio__time">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="audio__volume-container">
        <button
          className="audio__mute"
          onClick={handleMuteAndShowSlider}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          className={`audio__volume-slider ${showVolumeSlider ? 'visible' : ''}`}
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Volume Slider"
        />
      </div>
    </div>
  );
};

Audio.propTypes = {
  /** Source URL of the audio file */
  src: PropTypes.string.isRequired,
  /** Autoplay the audio on load */
  autoPlay: PropTypes.bool,
  /** Loop the audio playback */
  loop: PropTypes.bool,
  /** Mute the audio by default */
  muted: PropTypes.bool,
  /** Size of the audio player */
  size: PropTypes.oneOf(['small', 'medium']),
  /** Color from the global palettes */
  color: PropTypes.oneOf([
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};