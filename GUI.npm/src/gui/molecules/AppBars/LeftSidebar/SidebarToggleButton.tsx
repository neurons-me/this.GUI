import React from 'react';
import { Box, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Icon from '../../../../themes/icons/Icon';

export interface SidebarToggleButtonProps {
  expanded: boolean;
  onToggle: () => void;
  collapsedWidth?: number;
  style?: React.CSSProperties;
  location?: 'topbar' | 'sidebar' | 'none';
  sx?: SxProps<Theme>;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  expanded,
  onToggle,
  collapsedWidth = 72,
  style,
  location,
  sx,
}) => {
  const [locationState, setLocation] = React.useState<'topbar' | 'sidebar' | 'none'>('none');

  React.useLayoutEffect(() => {
    if (location) {
      setLocation(location);
      return;
    }
    const check = () => {
      const value = getComputedStyle(document.body).getPropertyValue('--sidebar-toggle-location').trim();
      console.log('[Toggle Debug] CSS --sidebar-toggle-location:', value);
      if (value === 'topbar' || value === 'sidebar') {
        setLocation(value);
      } else {
        setLocation('none');
      }
    };

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    return () => observer.disconnect();
  }, [location]);

  if (locationState === 'none') return null;

  return (
    <Box
      sx={{
        ...(locationState === 'topbar'
          ? { display: 'flex', alignItems: 'center', justifyContent: 'center', px: 1 }
          : { width: collapsedWidth, display: 'flex', justifyContent: 'center', py: 1 }),
        ...sx,
      }}
      style={style}
    >
      <IconButton size="small" onClick={onToggle} aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}>
        <Icon name={expanded ? 'lucide:panel-left-close' : 'lucide:panel-left-open'} size={20} />
      </IconButton>
    </Box>
  );
};

export default SidebarToggleButton;