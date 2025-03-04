import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeManager from './components/Theme/ThemeManager';
import HomePage from './pages/HomePage';
import './App.css';

function App({ environment, host }) {
  return (
    <ThemeManager>
      <Router>
        <Routes>
          {/* Ruta principal hacia HomePage */}
          <Route path="/" element={<HomePage environment={environment} host={host} />} />
        </Routes>
      </Router>
    </ThemeManager>
  );
}

export default App;