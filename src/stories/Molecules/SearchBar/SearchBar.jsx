// src/stories/Molecules/SearchBar/SearchBar.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export const SearchBar = ({ placeholder, onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      className={`searchbar ${isExpanded ? 'searchbar--expanded' : ''}`}
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        className="searchbar__toggle"
        onClick={handleToggle}
        aria-label="Search"
      >
        {/* Magnifying glass icon */}
        <svg
          className="searchbar__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5
            6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5
            5 1.5-1.5-5-5zM9.5 14C7.01 14 5 11.99 5
            9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </button>
      <input
        type="text"
        className="searchbar__input"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        aria-label="Search input"
      />
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  onSearch: () => {},
};

export default SearchBar;