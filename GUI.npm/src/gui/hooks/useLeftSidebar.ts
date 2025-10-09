import { useContext } from "react";
import { LeftSidebarContext } from "@/gui/contexts";
export const useSidebar = () => {
  const context = useContext(LeftSidebarContext);
  if (!context) {
    throw new Error('useLeftSidebar must be used within a SidebarProvider');
  }
  return context;
};