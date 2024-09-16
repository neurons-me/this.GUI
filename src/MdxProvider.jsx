// src/MdxProvider.jsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Define custom components or wrappers for MDX elements
const components = {
  h1: (props) => <h1 style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '2.5em' }} {...props} />,
  h2: (props) => <h2 style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '2em' }} {...props} />,
  p: (props) => <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '1em' }} {...props} />,
  a: (props) => <a style={{ color: '#0070f3' }} {...props} />,
  code: (props) => <code style={{ fontFamily: 'Courier New', backgroundColor: '#f5f5f5', padding: '0.2em' }} {...props} />,
  pre: (props) => <pre style={{ backgroundColor: '#f5f5f5', padding: '1em', overflowX: 'auto' }} {...props} />,
  // Add more custom components as needed
};

const MdxProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxProvider;