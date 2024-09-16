// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MDXContent from './index.mdx';
import MdxProvider from './MdxProvider';  // Import MdxProvider
import './styles/global.css'; // Import the global CSS


ReactDOM.render(
  <React.StrictMode>
    <MdxProvider>
      <MDXContent />
    </MdxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);