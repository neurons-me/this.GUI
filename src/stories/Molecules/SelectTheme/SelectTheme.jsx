// src/stories/Molecules/SelectTheme/SelectTheme.jsx

import React, { useState, useEffect } from 'react';
import './SelectTheme.css'; // Import the component styles

const themes = [
  { label: 'GitHub', value: 'github' },
  { label: 'Gothic', value: 'gothic' },
  { label: 'Newsprint', value: 'newsprint' },
  { label: 'Night', value: 'night' },
  { label: 'Pixyll', value: 'pixyll' },
  { label: 'Whitey', value: 'whitey' }
];

export const SelectTheme = () => {  // Named export
  const [selectedTheme, setSelectedTheme] = useState('github'); // Default theme

  useEffect(() => {
    import(`../../themes/typ/${selectedTheme}.css`).then(() => {
      console.log(`${selectedTheme} theme loaded`);
    });
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div className="select-theme-container">
      <span className="select-theme-label">Select Theme:</span>
      <select
        className="select-theme-dropdown"
        value={selectedTheme}
        onChange={handleThemeChange}
      >
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
};