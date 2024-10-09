//this.GUI/src/stories/Molecules/AudioPlayer/AudioPlayer.jsx
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaStepForward, FaStepBackward } from 'react-icons/fa';
import './AudioPlayer.css';

export const AudioPlayer = ({
  playlist,
  autoPlay = false,
  loop = false,
  muted = false,
  size = 'medium',
  color = 'classy-color-1',
  className = '',
  style = {},
  showMedia = true,
  ...props
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      if (autoPlay) {
        audio.play().catch(() => setIsPlaying(false));
      }
    }
  }, [volume, isMuted, autoPlay, currentTrack]);

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

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrack(playlist[nextIndex]);
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setCurrentTrack(playlist[prevIndex]);
  };

  const handleTrackClick = (track, index) => {
    setCurrentTrack(track);
    setCurrentTrackIndex(index);
    setIsPlaying(false); // Reset play state to allow clicking a new track.
  };

  const variantClass = `audio-player--${size}`;
  const colorClass = `audio-player--${color}`;
  const combinedClassName = `audio-player ${variantClass} ${colorClass} ${className}`.trim();

  return (
    <div className={combinedClassName} style={style} {...props}>
      {showMedia && currentTrack.image && (
        <div className="audio-player__media">
          <img src={currentTrack.image} alt={currentTrack.title} />
        </div>
      )}

      {/* Display Track Name Above Timeline */}
      <div className="audio-player__track-name">{currentTrack.title}</div>

      <div className="audio-player__controls">
        <audio
          ref={audioRef}
          src={currentTrack.src}
          loop={loop}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={nextTrack}
        >
          Your browser does not support the audio element.
        </audio>
        <button
          className="audio-player__prev"
          onClick={prevTrack}
          aria-label="Previous Track"
        >
          <FaStepBackward />
        </button>
        <button
          className="audio-player__play-pause"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="audio-player__next"
          onClick={nextTrack}
          aria-label="Next Track"
        >
          <FaStepForward />
        </button>
      </div>

      {/* Timeline with Seek and Time */}
      <div className="audio-player__seek">
        <input
          type="range"
          className="audio-player__seek-slider"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeekChange}
          aria-label="Seek Slider"
        />
        <div className="audio-player__time">{formatTime(currentTime)} / {formatTime(duration)}</div>
      </div>

      <div className="audio-player__volume-container">
        <button
          className="audio-player__mute"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          className="audio-player__volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Volume Slider"
        />
      </div>

      {/* Playlist with Border */}
      <div className="audio-player__playlist">
        <ul>
          {playlist.map((track, index) => (
            <li
              key={index}
              className={`audio-player__track ${index === currentTrackIndex ? 'active' : ''}`}
              onClick={() => handleTrackClick(track, index)}
            >
              {track.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string, // Optional album cover or media
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf([
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  showMedia: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  autoPlay: false,
  loop: false,
  muted: false,
  size: 'medium',
  color: 'classy-color-1',
  showMedia: true,
};