import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeProvider'; // Import ThemeProvider

const App = () => {
  const storybookUrl = `http://${process.env.HOSTNAME || 'localhost'}:${process.env.STORYBOOK_PORT || 6006}`;
  
  // Log the storybook URL to ensure the environment variables are loading correctly
  console.log('Storybook URL:', storybookUrl);

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Main App</h1>
              <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
              <a href={storybookUrl} target="_blank" rel="noopener noreferrer">
                Open Storybook
              </a>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;