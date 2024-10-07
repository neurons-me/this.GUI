import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export const Dropdown = ({
  options,
  placeholder,
  color,
  variant,
  searchable,
  onSelect,
  showArrow,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setFilteredOptions(
      options.filter(option => 
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    setSearchValue('');
    onSelect(option);
  };

  return (
    <div className={`dropdown dropdown--${variant} dropdown--${color}`}>
      <button
        className="dropdown__toggle"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {searchValue || placeholder}
        {showArrow && <span className="dropdown__icon">&#9662;</span>}
      </button>

      {isOpen && (
        <div className="dropdown__menu">
          {searchable && (
            <input
              type="text"
              className="dropdown__search"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search..."
            />
          )}
          <ul className="dropdown__list">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown__item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  searchable: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  showArrow: PropTypes.bool,
};

Dropdown.defaultProps = {
  placeholder: 'Select an option',
  color: 'primary',
  variant: 'primary',
  searchable: false,
  showArrow: true,
};