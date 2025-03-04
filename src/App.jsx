import React from 'react';
import { CustomThemeProvider } from './themes/ThemeContext';
import Home from './pages/Home';

function App() {
  return (
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  );
}

export default App;