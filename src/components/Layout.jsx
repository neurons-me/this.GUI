import React from 'react';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container>
      {/* You can add a Navbar or any other global component here */}
      {children}
    </Container>
  );
};

export default Layout;