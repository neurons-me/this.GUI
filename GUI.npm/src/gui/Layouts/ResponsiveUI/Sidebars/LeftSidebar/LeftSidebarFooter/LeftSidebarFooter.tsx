import React from 'react';
import clsx from 'clsx';

export type LeftSidebarFooterProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const LeftSidebarFooter: React.FC<LeftSidebarFooterProps> = ({ children, className, style }) => {
  return (
    <div className={clsx('LeftSidebarFooter', className)} style={style}>
      {children}
    </div>
  );
};

export default LeftSidebarFooter;