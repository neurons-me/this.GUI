import { useContext } from 'react';
import { RightSidebarContext } from '@/gui-internals/Contexts';

export const useRightBar = () => {
  const context = useContext(RightSidebarContext);
  if (!context) {
    throw new Error('useRightBar must be used within a RightBarProvider');
  }
  return context;
};

export const useRightSidebar = useRightBar;
export default useRightBar;
