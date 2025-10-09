//@/gui/layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar.tsx
import React from 'react';
import clsx from 'clsx';
import type { LeftSidebarProps } from './LeftSidebar.types';
import LeftSidebarHeader from './LeftSidebarHeader/LeftSidebarHeader';
import LeftSidebarContent from './LeftSidebarContent/LeftSidebarContent';
import LeftSidebarFooter from './LeftSidebarFooter/LeftSidebarFooter';
import LeftSidebarToggleButton from './LeftSidebarToggleButton/LeftSidebarToggleButton';
import { useGuiMediaQuery, useSidebar } from '@/gui/hooks';
const LeftSidebar: React.FC<LeftSidebarProps> & {
  Header: typeof LeftSidebarHeader;
  Content: typeof LeftSidebarContent;
  Footer: typeof LeftSidebarFooter;
} = ({
  children,
  collapsedWidth = 72,
  expandedWidth = 264,
  expanded: expandedProp,
  open: openProp,
  onClose,
  id = 'LeftSidebar',
  className,
  shouldShowToggle = false,
  railMode = false,
  toggleLocation = 'sidebar',
}) => {
  const isMobile = useGuiMediaQuery(((theme: any) => theme.breakpoints.down('sm')) as any);
  const { expanded, setExpanded } = useSidebar();
  const isRail = railMode || (isMobile ? false : !expanded);
  const sidebarStyle: React.CSSProperties = {
    width: isRail ? collapsedWidth : expandedWidth,
    top: 0, // fallback without UIInsets
    height: `100vh`,
  };

  const sidebarClass = clsx(
    'LeftSidebar',
    { 'LeftSidebar--rail': isRail },
    className
  );

  return (
    <aside className={sidebarClass} style={sidebarStyle}>
      <LeftSidebarHeader>
        {shouldShowToggle && toggleLocation === 'sidebar' && (
          <LeftSidebarToggleButton expanded={expanded} onToggle={() => setExpanded(!expanded)} />
        )}
      </LeftSidebarHeader>
      <LeftSidebarContent>
        {/* You can render nav items or content here */}
      </LeftSidebarContent>
      <LeftSidebarFooter>
        {/* Optional footer content here */}
      </LeftSidebarFooter>
    </aside>
  );
};

LeftSidebar.Header = LeftSidebarHeader;
LeftSidebar.Content = LeftSidebarContent;
LeftSidebar.Footer = LeftSidebarFooter;
export default LeftSidebar;