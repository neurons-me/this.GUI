import React from 'react';
import ReactDOM from 'react-dom';
import MDXContent from './index.mdx';
import MdxProvider from './MdxProvider';  
import { ThemeProvider } from './themes/ThemeProvider';  // Import ThemeProvider
import './styles/global.css'; // Import the global CSS

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MdxProvider>
        <MDXContent />
      </MdxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);