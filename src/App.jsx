import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainApp from './MainApp'; // Your main app components

const App = () => {
  // Get the Storybook URL from environment variables or fallback to default
  const storybookUrl = `http://${process.env.HOSTNAME || 'localhost'}:${process.env.STORYBOOK_PORT || 6006}`;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainApp />
          <div>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <a href={storybookUrl} target="_blank" rel="noopener noreferrer">
              Open Storybook
            </a>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;