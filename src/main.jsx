// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MDXContent from './index.mdx';
import './styles/global.css'; // Import the global CSS


ReactDOM.render(
  <React.StrictMode>
    <MDXContent />
  </React.StrictMode>,
  document.getElementById('root')
);