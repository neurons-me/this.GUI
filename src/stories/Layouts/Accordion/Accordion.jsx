import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

export const Accordion = ({ allowMultipleOpen, items, color, variant, showArrow, border }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes(allowMultipleOpen ? [...openIndexes, index] : [index]);
    }
  };

  const accordionClass = `accordion accordion--${variant} accordion--${color} ${border ? 'accordion--border' : ''}`;

  return (
    <div className={accordionClass}>
      {items.map((item, index) => (
        <div key={index} className="accordion__item">
          <button
            className={`accordion__header`}
            onClick={() => handleToggle(index)}
            aria-expanded={openIndexes.includes(index)}
            aria-controls={`accordion__content-${index}`}
          >
            {item.title}
            {showArrow && (
              <span className={`accordion__icon ${openIndexes.includes(index) ? 'accordion__icon--open' : ''}`}>
                &#9662;
              </span>
            )}
          </button>
          <div
            id={`accordion__content-${index}`}
            className={`accordion__content ${openIndexes.includes(index) ? 'accordion__content--open' : ''}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  showArrow: PropTypes.bool,
  border: PropTypes.bool,
};

Accordion.defaultProps = {
  allowMultipleOpen: false,
  color: 'primary',
  variant: 'primary',
  showArrow: true,
  border: false,
};