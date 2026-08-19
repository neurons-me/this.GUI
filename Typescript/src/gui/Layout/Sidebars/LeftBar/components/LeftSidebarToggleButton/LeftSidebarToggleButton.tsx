//@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/components/LeftSidebarToggleButton/LeftSidebarToggleButton.tsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@/gui/Atoms/Icon/Icon';

type LeftSidebarToggleButtonProps = {
  expanded: boolean;
  onToggle: () => void;
  ['data-gui-node-id']?: string;
  ['data-gui-component']?: string;
};

const LeftSidebarToggleButton: React.FC<LeftSidebarToggleButtonProps> = ({
  expanded,
  onToggle,
  ['data-gui-node-id']: dataGuiNodeId,
  ['data-gui-component']: dataGuiComponent,
}) => {
  return (
    <IconButton
      aria-label="Toggle Sidebar"
      onClick={onToggle}
      data-gui-node-id={dataGuiNodeId}
      data-gui-component={dataGuiComponent}
      sx={{ margin: 1 }}
    >
      <Icon name={expanded ? 'chevron_left' : 'chevron_right'} />
    </IconButton>
  );
};

export default LeftSidebarToggleButton;