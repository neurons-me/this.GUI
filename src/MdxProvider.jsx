//this.GUI/src/MdxProvider.jsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Define custom components without inline styles
const components = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,  // Let the theme handle the styles
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  p: (props) => <p className="mdx-p" {...props} />,
  a: (props) => <a className="mdx-link" {...props} />,
  code: (props) => <code className="mdx-code" {...props} />,
  pre: (props) => <pre className="mdx-pre" {...props} />,
  // Add more custom components as needed, without inline styles
};

const MdxProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxProvider;