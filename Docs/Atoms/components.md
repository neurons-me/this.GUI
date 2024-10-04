/* src/stories/Atoms/Alert/Alert.css */

/* Base Alert Styles */

.alert {

  padding: var(--spacing-sm) var(--spacing-md);

  border-radius: var(--border-radius);

  font-family: var(--font-family);

  font-size: var(--font-size-base);

  display: flex;

  align-items: center;

  box-shadow: var(--box-shadow);

  margin-bottom: var(--spacing-md);

  transition: 

​    background-color var(--transition-speed),

​    border-color var(--transition-speed),

​    color var(--transition-speed);

  

  /* Default Colors (Primary Variant) */

  background-color: var(--alert-bg-color, var(--primary-color));

  color: var(--alert-text-color, var(--text-color-inverse));

  border: 1px solid var(--alert-border-color, var(--primary-color));

  

  /* Entrance Animation */

  animation: fadeIn 0.3s ease-out;

}

/* Primary Variant */

.alert--primary {

  /* Primary Variant Colors */

  --alert-bg-color: var(--primary-color);

  --alert-text-color: var(--text-color-inverse);

  --alert-border-color: var(--primary-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--primary-color-hover);

  --alert-border-hover-color: var(--primary-color-hover);

}

.alert--primary:hover {

  background-color: var(--alert-bg-hover-color);

  border-color: var(--alert-border-hover-color);

}

/* Secondary Variant */

.alert--secondary {

  /* Secondary Variant Colors */

  --alert-bg-color: transparent;

  --alert-text-color: var(--secondary-color);

  --alert-border-color: var(--secondary-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--secondary-color-hover);

  --alert-border-hover-color: var(--secondary-color-hover);

  --alert-text-hover-color: var(--text-color-inverse);

}

.alert--secondary:hover {

  background-color: var(--alert-bg-hover-color);

  color: var(--alert-text-hover-color);

  border-color: var(--alert-border-hover-color);

}

/* Semantic Color Modifiers for Primary Variant */

.alert--primary.alert--info {

  --alert-bg-color: var(--info-color);

  --alert-border-color: var(--info-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--info-color-hover);

  --alert-border-hover-color: var(--info-color-hover);

}

.alert--primary.alert--warning {

  --alert-bg-color: var(--warning-color);

  --alert-border-color: var(--warning-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--warning-color-hover);

  --alert-border-hover-color: var(--warning-color-hover);

}

.alert--primary.alert--alert {

  --alert-bg-color: var(--alert-color);

  --alert-border-color: var(--alert-color);

  --alert-text-color: var(--text-color); /* Dark text for readability */

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--alert-color-hover);

  --alert-border-hover-color: var(--alert-color-hover);

}

.alert--primary.alert--success {

  --alert-bg-color: var(--success-color);

  --alert-border-color: var(--success-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--success-color-hover);

  --alert-border-hover-color: var(--success-color-hover);

}

.alert--primary.alert--neutral {

  --alert-bg-color: var(--neutral-color);

  --alert-border-color: var(--neutral-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--neutral-color-hover);

  --alert-border-hover-color: var(--neutral-color-hover);

}

.alert--primary.alert--dark {

  --alert-bg-color: var(--dark-color);

  --alert-border-color: var(--dark-color);

  --alert-text-color: var(--text-color-inverse); /* White text on dark background */

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--dark-color-hover);

  --alert-border-hover-color: var(--dark-color-hover);

}

/* Semantic Color Modifiers for Secondary Variant */

.alert--secondary.alert--info {

  --alert-text-color: var(--info-color);

  --alert-border-color: var(--info-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--info-color-hover);

  --alert-border-hover-color: var(--info-color-hover);

}

.alert--secondary.alert--warning {

  --alert-text-color: var(--warning-color);

  --alert-border-color: var(--warning-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--warning-color-hover);

  --alert-border-hover-color: var(--warning-color-hover);

}

.alert--secondary.alert--alert {

  --alert-text-color: var(--alert-color);

  --alert-border-color: var(--alert-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--alert-color-hover);

  --alert-border-hover-color: var(--alert-color-hover);

}

.alert--secondary.alert--success {

  --alert-text-color: var(--success-color);

  --alert-border-color: var(--success-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--success-color-hover);

  --alert-border-hover-color: var(--success-color-hover);

}

.alert--secondary.alert--neutral {

  --alert-text-color: var(--neutral-color);

  --alert-border-color: var(--neutral-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--neutral-color-hover);

  --alert-border-hover-color: var(--neutral-color-hover);

}

.alert--secondary.alert--dark {

  --alert-text-color: var(--dark-color);

  --alert-border-color: var(--dark-color);

  

  /* Hover Colors */

  --alert-bg-hover-color: var(--dark-color-hover);

  --alert-border-hover-color: var(--dark-color-hover);

}

/* Optional: Icon Styles */

.alert__icon {

  margin-right: var(--spacing-sm);

  font-size: 1.2em;

}

/* Optional: Close Button Styles */

.alert__close {

  margin-left: auto;

  background: none;

  border: none;

  color: inherit;

  cursor: pointer;

  font-size: 1.2em;

}

/* Dismissible Modifier */

.alert--dismissible {

  padding-right: var(--spacing-md);

}

/* Keyframes for fade-in */

@keyframes fadeIn {

  from {

​    opacity: 0;

​    transform: translateY(-10px);

  }

  to {

​    opacity: 1;

​    transform: translateY(0);

  }

}

/* Apply animation to alert */

.alert {

  animation: fadeIn 0.3s ease-out;

}



---

// src/stories/Atoms/Alert/Alert.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css'; // Import the CSS styles

export const Alert = ({
  variant = 'primary', // 'primary', 'secondary'
  color, // 'info', 'warning', 'alert', 'success', 'neutral', 'dark'
  children,
  className = '',
  style = {},
  onClose, // Function to handle close action
  dismissible = false, // If true, show close button
  icon, // Optional icon element
  ...props
}) => {
  const variantClass = `alert--${variant}`;
  const colorClass = color ? `alert--${color}` : '';
  const dismissibleClass = dismissible ? 'alert--dismissible' : '';

  const combinedClassName = `alert ${variantClass} ${colorClass} ${dismissibleClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={style}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      {icon && <span className="alert__icon">{icon}</span>}
      <span className="alert__content">{children}</span>
      {dismissible && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label="Close Alert"
          tabIndex="0"
        >
          &times;
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  dismissible: PropTypes.bool,
  icon: PropTypes.node,
};



----



// src/stories/Atoms/Alert/Alert.stories.jsx

import React from 'react';

import { Alert } from './Alert';

import './Alert.css'; // Import the CSS styles

export default {

  title: 'Atoms/Feedback/Alert',

  component: Alert,

  argTypes: {

​    variant: {

​      control: {

​        type: 'select',

​        options: ['primary', 'secondary'],

​      },

​      description: 'Variant of the alert.',

​      table: {

​        type: { summary: 'primary | secondary' },

​        defaultValue: { summary: 'primary' },

​      },

​    },

​    color: {

​      control: {

​        type: 'select',

​        options: ['info', 'warning', 'alert', 'success', 'neutral', 'dark'],

​      },

​      description: 'Semantic color of the alert.',

​      table: {

​        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark'` },

​      },

​    },

​    children: {

​      control: 'text',

​      description: 'Content of the alert.',

​      table: {

​        type: { summary: 'node' },

​      },

​    },

​    dismissible: {

​      control: 'boolean',

​      description: 'If true, shows a close button to dismiss the alert.',

​      table: {

​        type: { summary: 'boolean' },

​        defaultValue: { summary: false },

​      },

​    },

​    onClose: {

​      action: 'closed',

​      description: 'Function called when the alert is dismissed.',

​      table: {

​        type: { summary: 'function' },

​      },

​    },

​    icon: {

​      control: 'none', // Typically, icons are not controlled via Storybook controls

​      description: 'Optional icon to display in the alert.',

​      table: {

​        type: { summary: 'node' },

​      },

​    },

​    className: {

​      control: 'text',

​      description: 'Additional CSS classes.',

​      table: {

​        type: { summary: 'string' },

​      },

​    },

​    style: {

​      control: 'object',

​      description: 'Inline styles.',

​      table: {

​        type: { summary: 'object' },

​      },

​    },

  },

};

/**

 \* 

 \* Shows default primary and secondary alerts without any semantic color.

 */

export const DefaultAlerts = () => (

  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

​    <Alert variant="primary">Primary Default Alert</Alert>

​    <Alert variant="secondary">Secondary Default Alert</Alert>

  </div>

);

/**

 \* 

 \* Demonstrates primary alerts with all semantic colors.

 */

export const PrimaryAlerts = () => (

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

​    <h3>Primary Alerts</h3>

​    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (

​      <Alert key={color} variant="primary" color={color}>

​        This is a {color} primary alert.

​      </Alert>

​    ))}

  </div>

);

/**

 \* 

 \* Demonstrates secondary alerts with all semantic colors.

 */

export const SecondaryAlerts = () => (

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

​    <h3>Secondary Alerts</h3>

​    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (

​      <Alert key={color} variant="secondary" color={color}>

​        This is a {color} secondary alert.

​      </Alert>

​    ))}

  </div>

);

/**

 \* 

 \* Demonstrates primary and secondary alerts that can be dismissed.

 */

export const DismissibleAlerts = () => (

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

​    <h3>Dismissible Primary Alerts</h3>

​    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (

​      <Alert

​        key={color}

​        variant="primary"

​        color={color}

​        dismissible

​        onClose={() => alert(`Closed ${color} primary alert`)}

​      \>

​        This is a {color} primary alert that can be dismissed.

​      </Alert>

​    ))}

​    <h3>Dismissible Secondary Alerts</h3>

​    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (

​      <Alert

​        key={color}

​        variant="secondary"

​        color={color}

​        dismissible

​        onClose={() => alert(`Closed ${color} secondary alert`)}

​      \>

​        This is a {color} secondary alert that can be dismissed.

​      </Alert>

​    ))}

  </div>

);

/**

 \* ### Interactive Playground

 \* 

 \* Allows dynamic interaction with the alert props via Storybook controls.

 */

const Template = (args) => <Alert {...args} />;

export const Playground = Template.bind({});

Playground.args = {

  variant: 'primary',

  color: 'info',

  children: 'This is an interactive alert.',

  dismissible: false,

};

Playground.storyName = 'Interactive Playground';



----



/* src/stories/Atoms/Audio/Audio.css */

/* Base Audio Player Styles */

.audio {

  display: flex;

  align-items: center;

  background-color: rgba(245, 245, 245, 0.3); /* Subtle grey with low opacity */

  padding: var(--spacing-sm, 8px);

  border-radius: var(--border-radius, 6px);

  gap: var(--spacing-sm, 8px);

  max-width: 300px; /* Default for medium size */

  border: 1px solid var(--border-color, #dddddd); /* Added border */

  position: relative;

  transition: background-color var(--transition-speed, 0.3s);

}

.audio:hover {

  background-color: rgba(245, 245, 245, 0.5);

}

/* Size Variants */

.audio--small {

  max-width: 200px;

}

.audio--medium {

  max-width: 300px;

}

/* Color Classes */

.audio--classy-color-1 {

  --icon-color: var(--classy-color-1);

}

.audio--classy-color-2 {

  --icon-color: var(--classy-color-2);

}

.audio--classy-color-3 {

  --icon-color: var(--classy-color-3);

}

.audio--classy-color-4 {

  --icon-color: var(--classy-color-4);

}

.audio--classy-color-5 {

  --icon-color: var(--classy-color-5);

}

.audio--small-switch-color-1 {

  --icon-color: var(--small-switch-color-1);

}

.audio--small-switch-color-2 {

  --icon-color: var(--small-switch-color-2);

}

.audio--natural-color-1 {

  --icon-color: var(--natural-color-1);

}

.audio--natural-color-2 {

  --icon-color: var(--natural-color-2);

}

.audio--natural-color-3 {

  --icon-color: var(--natural-color-3);

}

.audio--grey-friend-1 {

  --icon-color: var(--grey-friend-1);

}

.audio--grey-friend-2 {

  --icon-color: var(--grey-friend-2);

}

.audio--shade-1 {

  --icon-color: var(--shade-1);

}

.audio--shade-2 {

  --icon-color: var(--shade-2);

}

.audio--shade-3 {

  --icon-color: var(--shade-3);

}

.audio--shade-4 {

  --icon-color: var(--shade-4);

}

/* Play/Pause and Mute Buttons */

.audio__play-pause,

.audio__mute {

  background-color: rgba(128, 128, 128, 0.2); /* Slightly darker grey */

  border: none;

  border-radius: 50%;

  padding: var(--spacing-xs, 6px);

  cursor: pointer;

  transition: background-color var(--transition-speed, 0.3s);

  display: flex;

  align-items: center;

  justify-content: center;

  color: var(--icon-color, #344b47); /* Default icon color */

}

.audio__play-pause:hover,

.audio__mute:hover {

  background-color: rgba(128, 128, 128, 0.4); /* Darker on hover */

}

/* Time Display and Seek Slider */

.audio__seek {

  display: flex;

  align-items: center;

  gap: var(--spacing-xs, 4px);

  flex: 1;

}

.audio__seek-slider {

  width: 100%;

  cursor: pointer;

  appearance: none;

  height: 4px;

  background: var(--grey-friend-2, #96b1ac);

  border-radius: 2px;

  outline: none;

  transition: background var(--transition-speed, 0.3s);

}

.audio__seek-slider::-webkit-slider-thumb {

  appearance: none;

  width: 12px;

  height: 12px;

  background: var(--icon-color, #344b47);

  border-radius: 50%;

  cursor: pointer;

  margin-top: -4px; /* Center the thumb */

  transition: background var(--transition-speed, 0.3s);

}

.audio__seek-slider::-moz-range-thumb {

  width: 12px;

  height: 12px;

  background: var(--icon-color, #344b47);

  border-radius: 50%;

  cursor: pointer;

  transition: background var(--transition-speed, 0.3s);

}

.audio__seek-slider:hover {

  background: var(--grey-friend-1, #344b47);

}

.audio__seek-slider:hover::-webkit-slider-thumb,

.audio__seek-slider:hover::-moz-range-thumb {

  background: var(--icon-color, #344b47);

}

.audio__time {

  font-size: var(--font-size-small, 0.9em);

  color: var(--icon-color, #344b47); /* Inherit icon color */

  white-space: nowrap;

}

/* Volume Container */

.audio__volume-container {

  position: relative;

  display: flex;

  align-items: center;

}

/* Volume Slider */

.audio__volume-slider {

  position: absolute;

  bottom: -30px;

  left: 50%;

  transform: translateX(-50%);

  width: 100px;

  cursor: pointer;

  appearance: none;

  height: 4px;

  background: var(--grey-friend-2, #96b1ac);

  border-radius: 2px;

  outline: none;

  transition: opacity var(--transition-speed, 0.3s);

  opacity: 0;

  pointer-events: none;

  z-index: 10;

}

.audio__volume-slider.visible {

  opacity: 1;

  pointer-events: auto;

}

.audio__volume-slider::-webkit-slider-thumb {

  appearance: none;

  width: 12px;

  height: 12px;

  background: var(--icon-color, #344b47);

  border-radius: 50%;

  cursor: pointer;

  transition: background var(--transition-speed, 0.3s);

}

.audio__volume-slider::-moz-range-thumb {

  width: 12px;

  height: 12px;

  background: var(--icon-color, #344b47);

  border-radius: 50%;

  cursor: pointer;

  transition: background var(--transition-speed, 0.3s);

}

.audio__volume-slider:hover {

  background: var(--grey-friend-1, #344b47);

}

.audio__volume-slider:hover::-webkit-slider-thumb,

.audio__volume-slider:hover::-moz-range-thumb {

  background: var(--icon-color, #344b47);

}

/* Show Volume Slider on Hover or When Toggled */

.audio:hover .audio__volume-slider,

.audio__volume-slider.visible {

  opacity: 1;

  pointer-events: auto;

}

/* Responsive Adjustments */

@media (max-width: 768px) {

  .audio--small {

​    max-width: 150px;

  }

  .audio--medium {

​    max-width: 250px;

  }

  .audio {

​    flex-direction: column;

​    align-items: flex-start;

​    gap: var(--spacing-xs, 4px);

  }

  .audio__seek {

​    width: 100%;

  }

  .audio__volume-slider {

​    bottom: -35px;

​    width: 80px;

  }

}

-----

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

​    const audio = audioRef.current;

​    if (audio) {

​      audio.volume = volume;

​      audio.muted = isMuted;

​      if (autoPlay) {

​        audio.play().catch(() => setIsPlaying(false));

​      }

​    }

  }, [volume, isMuted, autoPlay]);

  const togglePlayPause = () => {

​    const audio = audioRef.current;

​    if (!audio) return;

​    if (isPlaying) {

​      audio.pause();

​    } else {

​      audio.play().catch(() => setIsPlaying(false));

​    }

​    setIsPlaying(!isPlaying);

  };

  const handleTimeUpdate = () => {

​    const audio = audioRef.current;

​    if (audio) {

​      setCurrentTime(audio.currentTime);

​    }

  };

  const handleLoadedMetadata = () => {

​    const audio = audioRef.current;

​    if (audio) {

​      setDuration(audio.duration);

​    }

  };

  const handleVolumeChange = (e) => {

​    const newVolume = parseFloat(e.target.value);

​    setVolume(newVolume);

​    setIsMuted(newVolume === 0);

  };

  const toggleMute = () => {

​    setIsMuted(!isMuted);

​    setVolume(!isMuted ? 0 : 1);

  };

  const handleSeekChange = (e) => {

​    const seekTime = parseFloat(e.target.value);

​    const audio = audioRef.current;

​    if (audio) {

​      audio.currentTime = seekTime;

​      setCurrentTime(seekTime);

​    }

  };

  const formatTime = (time) => {

​    if (isNaN(time)) return '00:00';

​    const minutes = Math.floor(time / 60);

​    const seconds = Math.floor(time % 60);

​    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

​    return `${minutes}:${paddedSeconds}`;

  };

  // Combined handler to toggle mute and show volume slider

  const handleMuteAndShowSlider = (e) => {

​    toggleMute();

​    setShowVolumeSlider((prev) => !prev);

​    e.stopPropagation();

  };

  // Close volume slider when clicking outside

  const handleClickOutside = (e) => {

​    if (!e.target.closest('.audio__volume-container')) {

​      setShowVolumeSlider(false);

​    }

  };

  useEffect(() => {

​    if (showVolumeSlider) {

​      document.addEventListener('click', handleClickOutside);

​    } else {

​      document.removeEventListener('click', handleClickOutside);

​    }

​    return () => {

​      document.removeEventListener('click', handleClickOutside);

​    };

  }, [showVolumeSlider]);

  const variantClass = `audio--${size}`;

  const colorClass = `audio--${color}`;

  const combinedClassName = `audio ${variantClass} ${colorClass} ${className}`.trim();

  return (

​    <div

​      className={combinedClassName}

​      style={style}

​      {...props}

​    \>

​      <audio

​        ref={audioRef}

​        src={src}

​        loop={loop}

​        onTimeUpdate={handleTimeUpdate}

​        onLoadedMetadata={handleLoadedMetadata}

​        onEnded={() => setIsPlaying(false)}

​      \>

​        Your browser does not support the audio element.

​      </audio>

​      <button

​        className="audio__play-pause"

​        onClick={togglePlayPause}

​        aria-label={isPlaying ? 'Pause' : 'Play'}

​      \>

​        {isPlaying ? <FaPause /> : <FaPlay />}

​      </button>

      <div className="audio__seek">

​        <input

​          type="range"

​          className="audio__seek-slider"

​          min="0"

​          max={duration}

​          step="0.1"

​          value={currentTime}

​          onChange={handleSeekChange}

​          aria-label="Seek Slider"

​        />

        <div className="audio__time">

​          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>

​        </div>

​      </div>

      <div className="audio__volume-container">

​        <button

​          className="audio__mute"

​          onClick={handleMuteAndShowSlider}

​          aria-label={isMuted ? 'Unmute' : 'Mute'}

​        \>

​          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}

​        </button>

​        <input

​          type="range"

​          className={`audio__volume-slider ${showVolumeSlider ? 'visible' : ''}`}

​          min="0"

​          max="1"

​          step="0.01"

​          value={isMuted ? 0 : volume}

​          onChange={handleVolumeChange}

​          aria-label="Volume Slider"

​        />

​      </div>

​    </div>

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

​    'classy-color-1',

​    'classy-color-2',

​    'classy-color-3',

​    'classy-color-4',

​    'classy-color-5',

​    'small-switch-color-1',

​    'small-switch-color-2',

​    'natural-color-1',

​    'natural-color-2',

​    'natural-color-3',

​    'grey-friend-1',

​    'grey-friend-2',

​    'shade-1',

​    'shade-2',

​    'shade-3',

​    'shade-4',

  ]),

  /** Additional CSS classes */

  className: PropTypes.string,

  /** Inline styles */

  style: PropTypes.object,

};



----



// src/stories/Atoms/Audio/Audio.stories.jsx

import React from 'react';

import { Audio } from './Audio';

import './Audio.css';

export default {

  title: 'Atoms/Media/Audio',

  component: Audio,

  argTypes: {

​    src: {

​      control: 'text',

​      description: 'Source URL of the audio file.',

​      table: {

​        type: { summary: 'string' },

​        defaultValue: { summary: 'required' },

​      },

​    },

​    autoPlay: {

​      control: 'boolean',

​      description: 'Autoplay the audio on load.',

​      table: {

​        type: { summary: 'boolean' },

​        defaultValue: { summary: 'false' },

​      },

​    },

​    loop: {

​      control: 'boolean',

​      description: 'Loop the audio playback.',

​      table: {

​        type: { summary: 'boolean' },

​        defaultValue: { summary: 'false' },

​      },

​    },

​    muted: {

​      control: 'boolean',

​      description: 'Mute the audio by default.',

​      table: {

​        type: { summary: 'boolean' },

​        defaultValue: { summary: 'false' },

​      },

​    },

​    size: {

​      control: {

​        type: 'select',

​        options: ['small', 'medium'],

​      },

​      description: 'Size of the audio player.',

​      table: {

​        type: { summary: 'small | medium' },

​        defaultValue: { summary: 'medium' },

​      },

​    },

​    color: {

​      control: {

​        type: 'select',

​        options: [

​          'classy-color-1',

​          'classy-color-2',

​          'classy-color-3',

​          'classy-color-4',

​          'classy-color-5',

​          'small-switch-color-1',

​          'small-switch-color-2',

​          'natural-color-1',

​          'natural-color-2',

​          'natural-color-3',

​          'grey-friend-1',

​          'grey-friend-2',

​          'shade-1',

​          'shade-2',

​          'shade-3',

​          'shade-4',

​        ],

​      },

​      description: 'Color from the global palettes for control icons.',

​      table: {

​        type: { summary: 'classy-color-1 | classy-color-2 | classy-color-3 | classy-color-4 | classy-color-5 | small-switch-color-1 | small-switch-color-2 | natural-color-1 | natural-color-2 | natural-color-3 | grey-friend-1 | grey-friend-2 | shade-1 | shade-2 | shade-3 | shade-4' },

​        defaultValue: { summary: 'classy-color-1' },

​      },

​    },

​    className: {

​      control: 'text',

​      description: 'Additional CSS classes.',

​      table: {

​        type: { summary: 'string' },

​      },

​    },

​    style: {

​      control: 'object',

​      description: 'Inline styles.',

​      table: {

​        type: { summary: 'object' },

​      },

​    },

  },

};

/**

 \* 

 \* Medium size with Classy Palette Color 1.

 */

export const DefaultAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

​    size="medium"

​    color="classy-color-1"

  />

);

/**

 \* 

 \* Medium size, autoplay enabled with Classy Palette Color 3.

 */

export const AutoplayAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"

​    autoPlay

​    size="medium"

​    color="classy-color-3"

  />

);

/**

 \* 

 \* Small size with Classy Palette Color 2.

 */

export const SmallAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"

​    size="small"

​    color="classy-color-2"

  />

);

/**

 \* 

 \* Medium size, looping enabled with Classy Palette Color 4.

 */

export const LoopingAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"

​    loop

​    size="medium"

​    color="classy-color-4"

  />

);

/**

 \* 

 \* Medium size, muted by default with Classy Palette Color 5.

 */

export const MutedAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"

​    muted

​    size="medium"

​    color="classy-color-5"

  />

);

/**

 \* 

 \* Medium size with custom styles and Classy Palette Color 1.

 */

export const CustomStyledAudio = () => (

  <Audio

​    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"

​    size="medium"

​    color="classy-color-1"

​    style={{ border: '2px solid var(--classy-color-1)', borderRadius: '8px' }}

  />

);

/**

 \* ### Interactive Playground

 \* 

 \* Allows dynamic interaction with the audio props via Storybook controls.

 */

const Template = (args) => <Audio {...args} />;

export const Playground = Template.bind({});

Playground.args = {

  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',

  autoPlay: false,

  loop: false,

  muted: false,

  size: 'medium',

  color: 'classy-color-1',

};

Playground.storyName = 'Interactive Playground';



----



.badge {

  display: inline-block;

  padding: 4px 8px;

  border-radius: 4px;

  font-size: 14px;

  font-weight: 600;

  text-align: center;

  white-space: nowrap;

  vertical-align: baseline;

  margin-right: 6px;

  margin-bottom: 6px;

  border: 1px solid transparent;

}

/* Size Variants */

.badge--small {

  padding: 2px 6px;

  font-size: 12px;

}

.badge--large {

  padding: 6px 12px;

  font-size: 16px;

}

/* Rounded Badge */

.badge--round {

  padding: 0 12px;

  border-radius: 50px; /* Pill shape */

  display: inline-flex;

  align-items: center;

  justify-content: center;

  font-size: 14px;

  white-space: nowrap;

}

/* Primary Badge Variants */

.badge--primary {

  background-color: var(--primary-color);

  color: var(--text-color-inverse);

}

/* Primary Color Variants */

.badge--primary.info {

  background-color: var(--info-color);

}

.badge--primary.warning {

  background-color: var(--warning-color);

}

.badge--primary.alert {

  background-color: var(--alert-color);

}

.badge--primary.success {

  background-color: var(--success-color);

}

.badge--primary.neutral {

  background-color: var(--neutral-color);

}

.badge--primary.dark {

  background-color: var(--dark-color);

}

.badge--primary.classy-color-1 {

  background-color: var(--classy-color-1);

}

.badge--primary.classy-color-2 {

  background-color: var(--classy-color-2);

}

.badge--primary.classy-color-3 {

  background-color: var(--classy-color-3);

}

.badge--primary.classy-color-4 {

  background-color: var(--classy-color-4);

}

.badge--primary.classy-color-5 {

  background-color: var(--classy-color-5);

}

.badge--primary.small-switch-color-1 {

  background-color: var(--small-switch-color-1);

}

.badge--primary.small-switch-color-2 {

  background-color: var(--small-switch-color-2);

}

.badge--primary.natural-color-1 {

  background-color: var(--natural-color-1);

}

.badge--primary.natural-color-2 {

  background-color: var(--natural-color-2);

}

.badge--primary.natural-color-3 {

  background-color: var(--natural-color-3);

}

.badge--primary.grey-friend-1 {

  background-color: var(--grey-friend-1);

}

.badge--primary.grey-friend-2 {

  background-color: var(--grey-friend-2);

}

.badge--primary.shade-1 {

  background-color: var(--shade-1);

}

.badge--primary.shade-2 {

  background-color: var(--shade-2);

}

.badge--primary.shade-3 {

  background-color: var(--shade-3);

}

.badge--primary.shade-4 {

  background-color: var(--shade-4);

}

/* Secondary Badge Variants */

.badge--secondary {

  background-color: transparent;

  border-color: var(--primary-color);

  color: var(--primary-color);

}

/* Secondary Color Variants */

.badge--secondary.info {

  border-color: var(--info-color);

  color: var(--info-color);

}

.badge--secondary.warning {

  border-color: var(--warning-color);

  color: var(--warning-color);

}

.badge--secondary.alert {

  border-color: var(--alert-color);

  color: var(--alert-color);

}

.badge--secondary.success {

  border-color: var(--success-color);

  color: var(--success-color);

}

.badge--secondary.neutral {

  border-color: var(--neutral-color);

  color: var(--neutral-color);

}

.badge--secondary.dark {

  border-color: var(--dark-color);

  color: var(--dark-color);

}

.badge--secondary.classy-color-1 {

  border-color: var(--classy-color-1);

  color: var(--classy-color-1);

}

.badge--secondary.classy-color-2 {

  border-color: var(--classy-color-2);

  color: var(--classy-color-2);

}

.badge--secondary.classy-color-3 {

  border-color: var(--classy-color-3);

  color: var(--classy-color-3);

}

.badge--secondary.classy-color-4 {

  border-color: var(--classy-color-4);

  color: var(--classy-color-4);

}

.badge--secondary.classy-color-5 {

  border-color: var(--classy-color-5);

  color: var(--classy-color-5);

}

.badge--secondary.small-switch-color-1 {

  border-color: var(--small-switch-color-1);

  color: var(--small-switch-color-1);

}

.badge--secondary.small-switch-color-2 {

  border-color: var(--small-switch-color-2);

  color: var(--small-switch-color-2);

}

.badge--secondary.natural-color-1 {

  border-color: var(--natural-color-1);

  color: var(--natural-color-1);

}

.badge--secondary.natural-color-2 {

  border-color: var(--natural-color-2);

  color: var(--natural-color-2);

}

.badge--secondary.natural-color-3 {

  border-color: var(--natural-color-3);

  color: var(--natural-color-3);

}

.badge--secondary.grey-friend-1 {

  border-color: var(--grey-friend-1);

  color: var(--grey-friend-1);

}

.badge--secondary.grey-friend-2 {

  border-color: var(--grey-friend-2);

  color: var(--grey-friend-2);

}

.badge--secondary.shade-1 {

  border-color: var(--shade-1);

  color: var(--shade-1);

}

.badge--secondary.shade-2 {

  border-color: var(--shade-2);

  color: var(--shade-2);

}

.badge--secondary.shade-3 {

  border-color: var(--shade-3);

  color: var(--shade-3);

}

.badge--secondary.shade-4 {

  border-color: var(--shade-4);

  color: var(--shade-4);

}



------



