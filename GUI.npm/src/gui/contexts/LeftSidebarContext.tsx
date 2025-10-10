// src/gui/contexts/LeftSidebarContext.tsx
import React, { createContext, useState } from 'react';
export type LeftSidebarView = 'rail' | 'expanded' | 'mobile';
export type LeftSidebarContextType = {
  view: LeftSidebarView;
  setView: (view: LeftSidebarView) => void;
};

export const LeftSidebarContext = createContext<LeftSidebarContextType | undefined>(undefined);
export const LeftSidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<LeftSidebarView>('expanded');
  return (
    <LeftSidebarContext.Provider value={{ view, setView }}>
      {children}
    </LeftSidebarContext.Provider>
  );
};