import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GUI } from 'all.this';
const { CustomThemeProvider } = GUI;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GuiProvider>
      <App />
    </GuiProvider>
  </React.StrictMode>
);