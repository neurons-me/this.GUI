// src/stories/Atoms/Slider/Slider.jsx
//NOTSTABLE 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Slider.css';

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = [20, 80], // Default for dual handle
  onChange,
  color = 'primary', // Track color
  thumbColor = 'primary', // Thumb color
  showValue = true, // Show current value above the slider
  label = '',
  dual = false, // Single or dual handle slider
  disabled = false,
  className = '',
  ...props
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  // Sync with external value changes
  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  // Handle thumb value changes
  const handleSliderChange = (e, index) => {
    const newValue = [...sliderValue];
    newValue[index] = Number(e.target.value);

    // Ensure correct ordering for dual sliders (min <= max)
    if (dual && newValue[0] > newValue[1]) return;

    setSliderValue(newValue);
    onChange && onChange(newValue);
  };

  // Calculate thumb position percentages
  const percentage1 = ((sliderValue[0] - min) / (max - min)) * 100;
  const percentage2 = dual ? ((sliderValue[1] - min) / (max - min)) * 100 : percentage1;

  const sliderClasses = classNames('slider', className, {
    [`slider--${color}`]: color,
    'slider--disabled': disabled,
  });

  return (
    <div className={sliderClasses}>
      {label && <label className="slider__label">{label}</label>}
      <div className="slider__wrapper">
        <div className="slider__track" />
        <div
          className="slider__filled"
          style={{
            left: `${percentage1}%`,
            right: `${100 - percentage2}%`,
            background: `var(--${color}-color)`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue[0]}
          onChange={(e) => handleSliderChange(e, 0)}
          disabled={disabled}
          className="slider__thumb"
          style={{ left: `${percentage1}%`, '--thumb-color': `var(--${thumbColor}-color)` }}
          {...props}
        />
        {dual && (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue[1]}
            onChange={(e) => handleSliderChange(e, 1)}
            disabled={disabled}
            className="slider__thumb"
            style={{ left: `${percentage2}%`, '--thumb-color': `var(--${thumbColor}-color)` }}
            {...props}
          />
        )}
      </div>
      {showValue && (
        <div className="slider__values">
          {dual ? (
            <>
              <span>{sliderValue[0]}</span> - <span>{sliderValue[1]}</span>
            </>
          ) : (
            <span>{sliderValue[0]}</span>
          )}
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  thumbColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  showValue: PropTypes.bool,
  label: PropTypes.string,
  dual: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
