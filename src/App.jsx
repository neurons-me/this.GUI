import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProviderWithSwitcher } from './components/Theme/ThemeContext';
import ThemeSelector from './components/Theme/ThemeSelector';
import HomePage from './pages/HomePage';

function App({ environment, host }) {
    return (
        <ThemeProviderWithSwitcher>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage environment={environment} host={host} />} />
                </Routes>
            </Router>
            <ThemeSelector />
        </ThemeProviderWithSwitcher>
    );
}

export default App;