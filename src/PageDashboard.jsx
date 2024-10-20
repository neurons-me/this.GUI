import React from 'react';
import { useNavigate } from 'react-router-dom';
import Atoms from './stories/Atoms/';
const { Button, Container, Grid } = Atoms;
import Molecules from './stories/Molecules';
const { Card, Navbar } = Molecules;
import siteConfig from '../GUI/config/siteConfig.json'; 
import logoImage from './stories/assets/thisGUI-logo.png';  // Adjust path accordingly

const PageDashboard = () => {
  const navigate = useNavigate();

  const centerLinks = [
    { href: '/home', text: 'Home' },
    { href: '/about', text: 'About' }
  ];

  const rightLinks = [
    { href: '/login', text: 'Login' },
    { href: '/profile', text: 'Profile' }
  ];


  return (
    <>
      <Navbar 
        fixed={true} 
        logo={logoImage}
        siteName="this.GUI" 
        centerLinks={centerLinks} 
        rightLinks={rightLinks} 
      />
    <Container
    size='medium'>
      <h1>Pages Dashboard</h1>
      {/* Use this.GUI Button for "Add New Page" */}
      <Button
        label="+ Add New Page"
        onClick={() => navigate('/create-page')}
      />

      {siteConfig.pages.length === 0 ? (
        <p>No pages created yet.</p>
      ) : (
        <Grid>
            {siteConfig.pages.map((page, index) => (
              <div>
            <Card
              key={index}
              variant="outlined"
              hoverable            
            >
              <h3>{page.name}</h3>
              <p>Type: {page.type}</p>
              <Button
              label="Edit Page"
              variant="outline"
              color="secondary-color"  // Correct the color value here
              onClick={() => navigate(page.path)}
              />
            </Card>
            </div>
          ))}
        </Grid>
      )}
    </Container>
    </>
  );
};

export default PageDashboard;