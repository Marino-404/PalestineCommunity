import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppProvider } from './AppContext'; 
import App from './App';
import BackGroundPage from './assets/BackGroundPage';
import './index.css'; 
import AnimatedLines from './assets/animatedLines';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppProvider>
      <BackGroundPage />
      <AnimatedLines />
      <App />
    </AppProvider>
  </StrictMode>
);
