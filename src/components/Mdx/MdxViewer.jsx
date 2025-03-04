import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props) => <h1 style={{ color: '#0c343d' }} {...props} />,
  p: (props) => <p style={{ fontSize: '1.1rem' }} {...props} />,
};

function MdxViewer({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}

export default MdxViewer;