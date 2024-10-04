// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import App component

// Grab the container element
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app using createRoot
root.render(
  <React.StrictMode>
    <App /> {/* Render the entire App component */}
  </React.StrictMode>
);