// src/stories/Layout/Grid/Grid.jsx
import React from 'react';
import './Grid.css'; // Import the component-specific styles

const Grid = ({ children, columns = 3, gap = '10px' }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  };

  return <div style={gridStyle} className="grid-container">{children}</div>;
};

export default Grid;