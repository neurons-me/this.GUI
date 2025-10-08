// src/gui/contexts/SidebarContext.tsx
import React, { createContext, useContext, useState } from 'react';
type SidebarContextType = {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState(true); // podrías leer de localStorage también
  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarState = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarState must be used within a SidebarProvider');
  }
  return context;
};