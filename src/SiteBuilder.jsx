import React, { useState } from 'react';
import GUI from '../index';

const SiteBuilder = () => {
  const [pageContent, setPageContent] = useState([]); // Store the page components

  // Example links for the sidebar
  const sidebarLinks = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Settings', url: '/settings' },
    { label: 'Profile', url: '/profile' },
  ];

  // Function to handle adding components
  const addComponent = (component) => {
    setPageContent([...pageContent, component]);
  };

  return (
    <div className="site-builder">
      {/* Fixed Navbar at the top */}
      <GUI.Molecules.Navbar links={sidebarLinks} /> {/* Using the same links for simplicity */}
      
      <div style={{ display: 'flex' }}>
        {/* Sidebar with components to drag and drop */}
        <GUI.Molecules.Sidebar links={sidebarLinks} addComponent={addComponent} />

        {/* Main content area where components are dropped */}
        <main className="builder-content" style={{ flex: 1, padding: '20px' }}>
          {pageContent.map((Component, idx) => (
            <div key={idx}>{Component}</div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SiteBuilder;