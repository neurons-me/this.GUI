import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeProvider';
import PageDashboard from './PageDashboard'; // Pages dashboard view
import CreatePage from './CreatePage'; // Create page view
import Page from './Page'; // Render dynamic pages
import SiteBuilder from './SiteBuilder'; // JSON Site builder
import MDXEditor from './MDXEditor'; // MDX Site builder

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main Dashboard */}
          <Route path="/" element={<PageDashboard />} />
          {/* Create new page */}
          <Route path="/create-page" element={<CreatePage />} />
          {/* Site builders for JSON and MDX */}
          <Route path="/site-builder/json/:pageName" element={<SiteBuilder />} />
          <Route path="/site-builder/mdx/:pageName" element={<MDXEditor />} />
          {/* Storybook Route */}
          <Route path="/storybook" element={<Storybook />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

// Storybook IFrame for browsing documentation
const Storybook = () => (
  <iframe
    src="http://localhost:6006" // Adjust based on your Storybook setup
    style={{ width: '100%', height: '100vh', border: 'none' }}
    title="Storybook"
  ></iframe>
);

export default App;