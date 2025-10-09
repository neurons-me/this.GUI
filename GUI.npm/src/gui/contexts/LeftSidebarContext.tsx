// src/gui/contexts/LeftSidebarContext.tsx
import React, { createContext, useState } from 'react';

export type LeftSidebarContextType = {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
};

export const LeftSidebarContext = createContext<LeftSidebarContextType | undefined>(undefined);
export const LeftSidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <LeftSidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </LeftSidebarContext.Provider>
  );
};