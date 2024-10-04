import React from 'react';

export const SelectTheme = ({ onThemeChange, onModeChange }) => {
  return (
    <div>
      {/* Dropdown to select the theme */}
      <label htmlFor="theme-select">Choose a theme:</label>
      <select id="theme-select" onChange={(e) => onThemeChange(e.target.value)}>
        <option value="neurons">Neurons</option>
        <option value="github">GitHub</option>
        <option value="material">Material</option>
      </select>

      {/* Toggle between light and dark modes */}
      <label htmlFor="mode-toggle">Choose mode:</label>
      <select id="mode-toggle" onChange={(e) => onModeChange(e.target.value)}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  );
};