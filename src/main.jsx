import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppProvider } from './AppContext.jsx'; 
import App from './App.jsx';
import BackGroundPage from './components/BackGroundPage.jsx';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import AnimatedLines from './components/AnimatedLines.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <BackGroundPage />
        <AnimatedLines />
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
  </>
);