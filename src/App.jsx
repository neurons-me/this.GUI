import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeProvider';
import MdxProvider from './MdxProvider'; // MDX Provider
import SiteBuilder from './SiteBuilder'; // Import the site builder component
import { SelectTheme } from './stories/Molecules/SelectTheme/SelectTheme'; // Import SelectTheme
import { useTheme } from './themes/ThemeProvider'; // Import the hook
import Page from './Page'; // Import the Page component
import example from './example.json'; // Example JSON for Page component

const App = () => {
  return (
    <ThemeProvider>
      <MdxProvider>
        <Router>
          {/* Top navigation */}
          <nav>
            <Link to="/" style={{ marginRight: '20px' }}>Site Builder</Link>
            <Link to="/storybook" style={{ marginRight: '20px' }}>Storybook</Link>
            <Link to="/test-page" style={{ marginRight: '20px' }}>Test Page</Link> {/* New link */}
          </nav>

          {/* Render SelectTheme in the main app */}
          <ThemeSwitcher />

          {/* Route definitions */}
          <Routes>
            <Route path="/" element={<SiteBuilder />} /> {/* Site builder interface */}
            <Route path="/storybook" element={<Storybook />} /> {/* Documentation */}
            <Route path="/test-page" element={<Page config={example} />} /> {/* Test Page Route */}
          </Routes>
        </Router>
      </MdxProvider>
    </ThemeProvider>
  );
};

// Component to handle theme switching using the context
const ThemeSwitcher = () => {
  const { setTheme, setMode } = useTheme();

  return (
    <SelectTheme
      onThemeChange={(newTheme) => {
        setTheme(newTheme);
      }}
      onModeChange={(newMode) => {
        setMode(newMode);
      }}
    />
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