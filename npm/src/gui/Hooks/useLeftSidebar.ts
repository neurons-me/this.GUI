import { useContext } from "react";

import { LeftSidebarContext } from "@/gui/Contexts";
export const useLeftSidebar = () => {
  const context = useContext(LeftSidebarContext);
  if (!context) {
    throw new Error('useLeftSidebar must be used within a LeftBarProvider');
  }
  return context;
};
