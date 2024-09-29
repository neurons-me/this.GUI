// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeProvider'; // Import ThemeProvider

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Main App</h1>
              <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
              <Link to="/storybook" style={{ marginRight: '20px' }}>Storybook</Link>
            </div>
          </Route>
          <Route path="/storybook">
            <iframe
              src="http://localhost:6006" // Adjust the URL based on your setup
              style={{ width: '100%', height: '100vh', border: 'none' }}
              title="Storybook"
            ></iframe>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;