import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(false); // false para claro (light)

  const toggleMode = () => {
    setMode(prev => !prev);
  };

  return (
    <AppContext.Provider value={{ mode, toggleMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};


