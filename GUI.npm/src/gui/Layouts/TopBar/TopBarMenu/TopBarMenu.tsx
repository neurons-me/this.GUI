import Icon from '@/themes/Icon/Icon';
import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import Link from '@/gui/atoms/Link/Link';
import type { TopBarMenuProps, TopBarMenuItemProps } from './TopBarMenu.types';

const renderMenuItems = (items: TopBarMenuItemProps[], handleClose: () => void): React.ReactElement[]  =>
  items.map(({ label, href, icon, iconColor, external, items: subItems }) => {
    const content = (
      <Link
        to={!external ? href : undefined}
        href={external ? href : undefined}
        target={external ? '_blank' : undefined}
        style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit' }}
      >
        {icon && (
          <Icon
            name={typeof icon === 'string' ? icon : 'info'}
            iconColor={iconColor || 'currentColor'}
            style={{ marginRight: 2, fontSize: 20, position: 'relative', top: -1 }}
          />
        )}
        {label}
      </Link>
    );

    if (subItems && subItems.length > 0) {
      return (
        <MenuItem key={label} onClick={handleClose} sx={{ color: 'inherit' }}>
          {content}
          <Menu open={false} sx={{ color: 'inherit' }}>{renderMenuItems(subItems, handleClose)}</Menu>
        </MenuItem>
      );
    }

    return (
      <MenuItem key={label} onClick={handleClose} sx={{ color: 'inherit' }}>
        {content}
      </MenuItem>
    );
  });

const TopBarMenu: React.FC<TopBarMenuProps> = ({ label, icon, iconColor, items }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        onClick={handleOpen}
        sx={{
          cursor: 'pointer',
          px: 1,
          display: 'inline-flex',
          alignItems: 'center',
          color: 'inherit',
        }}
      >
        {icon && (
          <Icon
            name={typeof icon === 'string' ? icon : 'info'}
            iconColor={iconColor || 'currentColor'}
            style={{ marginRight: 2, fontSize: 20, position: 'relative', top: -1 }}
          />
        )}
        {label}
      </Typography>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ color: 'inherit' }}>
        {items && renderMenuItems(items, handleClose)}
      </Menu>
    </>
  );
};

export default TopBarMenu;