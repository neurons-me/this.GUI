import React from 'react';
import clsx from 'clsx';
export type LeftSidebarContentProps = React.HTMLAttributes<HTMLDivElement>;
const LeftSidebarContent: React.FC<LeftSidebarContentProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('LeftSidebarContent', className)} {...rest}>
      {children}
    </div>
  );
};

export default LeftSidebarContent;