import React, { createContext, useState } from 'react';
export type RightBarView = 'rail' | 'expanded' | 'mobile';
export type RightBarContextType = {
  view: RightBarView;
  setView: (view: RightBarView) => void;
};

export type RightSidebarView = RightBarView;
export type RightSidebarContextType = RightBarContextType;
export const RightSidebarContext = createContext<RightBarContextType | undefined>(undefined);
export const RightBarProvider: React.FC<{ children: React.ReactNode; initialView?: RightBarView }> = ({
  children,
  initialView = 'rail',
}) => {
  const [view, setView] = useState<RightBarView>(initialView);

  return (
    <RightSidebarContext.Provider value={{ view, setView }}>
      {children}
    </RightSidebarContext.Provider>
  );
};
