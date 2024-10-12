import React from 'react';
import { useNavigate } from 'react-router-dom';
import Atoms from './stories/Atoms'; // Import the Atoms object
import Molecules from './stories/Molecules'; // Import the Atoms object
import siteConfig from '../GUI/config/siteConfig.json'; // Import the config

const PageDashboard = () => {
  const navigate = useNavigate();

  return (
    <Atoms.Container
    size='medium'>
      <h1>Pages Dashboard</h1>

      {/* Use this.GUI Button for "Add New Page" */}
      <Atoms.Button
        label="+ Add New Page"
        variant="solid"
        color="primary-color"  // Correct color value
        onClick={() => navigate('/create-page')}
        style={{ marginBottom: '20px' }}
      />

      {siteConfig.pages.length === 0 ? (
        <p>No pages created yet.</p>
      ) : (
        <div className="page-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {siteConfig.pages.map((page, index) => (
            <Molecules.Card
              key={index}
              variant="outlined"
              color="secondary"
              style={{
                width: '200px',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>{page.name}</h3>
              <p>Type: {page.type}</p>
              <Atoms.Button
              label="Edit Page"
              variant="outline"
              color="secondary-color"  // Correct the color value here
              onClick={() => navigate(page.path)}
              />
            </Molecules.Card>
          ))}
        </div>
      )}
    </Atoms.Container>
  );
};

export default PageDashboard;