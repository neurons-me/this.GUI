// src/themes/contexts/InsetsContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';
type Insets = { top: number; right: number; bottom: number; left: number };
type InsetsContextType = {
  insets: Insets;
  updateInsets: (next: Partial<Insets>) => void;
};

const InsetsContext = createContext<InsetsContextType | undefined>(undefined);
export const InsetsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [insets, setInsets] = useState<Insets>({ top: 0, right: 0, bottom: 0, left: 0 });
  const updateInsets = useCallback((next: Partial<Insets>) => {
    setInsets((prev) => ({ ...prev, ...next }));
  }, []);
  return (
    <InsetsContext.Provider value={{ insets, updateInsets }}>
      {children}
    </InsetsContext.Provider>
  );
};

export const useInsets = (): InsetsContextType => {
  const context = useContext(InsetsContext);
  if (!context) {
    throw new Error('useInsets must be used within an InsetsProvider');
  }
  return context;
};