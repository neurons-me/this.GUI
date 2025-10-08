import React from 'react';
import clsx from 'clsx';

export type LeftSidebarHeaderProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const LeftSidebarHeader: React.FC<LeftSidebarHeaderProps> = ({ children, className, style }) => {
  return (
    <div className={clsx('LeftSidebarHeader', className)} style={style}>
      {children}
    </div>
  );
};
  
export default LeftSidebarHeader;