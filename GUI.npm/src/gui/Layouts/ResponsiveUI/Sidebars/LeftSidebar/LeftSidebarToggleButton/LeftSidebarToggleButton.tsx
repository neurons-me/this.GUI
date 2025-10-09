import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@/gui/Theme/Icon/Icon';

type LeftSidebarToggleButtonProps = {
  expanded: boolean;
  onToggle: () => void;
};

const LeftSidebarToggleButton: React.FC<LeftSidebarToggleButtonProps> = ({ expanded, onToggle }) => {
  return (
    <IconButton
      aria-label="Toggle Sidebar"
      onClick={onToggle}
      sx={{ margin: 1 }}
    >
      <Icon name={expanded ? 'ChevronLeft' : 'ChevronRight'} />
    </IconButton>
  );
};

export default LeftSidebarToggleButton;