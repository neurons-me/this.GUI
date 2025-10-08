import React from 'react';
import { Box, Typography } from '@/gui/components/atoms';
import Icon from '@/themes/Icon/Icon';
import type { LeftSidebarItemProps } from './LeftSidebarItem.types';

const LeftSidebarItem: React.FC<LeftSidebarItemProps> = ({
  label,
  icon,
  iconColor,
  href,
  active,
  external,
  onClick,
  children
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: 1,
        backgroundColor: active ? 'primary.main' : 'transparent',
        color: active ? 'white' : 'text.primary',
        cursor: 'pointer',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: 'action.hover'
        }
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {icon && (
          <Icon name={icon} iconColor={iconColor}/>
        )}
        <Typography variant="body2">{label}</Typography>
      </Box>
      {children?.length && (
        <Box sx={{ pl: 2, pt: 0.5 }}>
          {children.map((child, idx) => (
            <LeftSidebarItem key={idx} {...child} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LeftSidebarItem;