//this.GUI/src/stories/Molecules/Breadcrumbs/Breadcrumbs.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.css';

export const Breadcrumbs = ({ items, separator, color, size, onItemClick }) => {
  return (
    <nav className={`breadcrumbs breadcrumbs--${color} breadcrumbs--${size}`}>
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          <button
            className={`breadcrumbs__link ${item.active ? 'breadcrumbs__active' : ''}`}
            onClick={() => onItemClick(item)}
          >
            {item.label}
          </button>
          {index < items.length - 1 && (
            <span className="breadcrumbs__separator">{separator}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      active: PropTypes.bool, // To mark the active breadcrumb
    })
  ).isRequired,
  separator: PropTypes.string,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onItemClick: PropTypes.func,
};

Breadcrumbs.defaultProps = {
  separator: '/',
  color: 'primary',
  size: 'medium',
  onItemClick: () => {}, // Default click handler does nothing
};