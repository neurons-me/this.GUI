import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, MenuItem, MenuList, Button, Divider, Switch } from '@mui/material';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useThemeToggle } from '../../context/ThemeContext';

function CleakerCompact({ session, onLogout }) {
  const toggleColorMode = useThemeToggle();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  if (!session) {
    return (
      <Button variant="contained" onClick={() => window.location.href = 'https://cleaker.me/login'}>
        Log in with Cleaker
      </Button>
    );
  }

  const { username } = session;

  return (
    <Box sx={{ width: 280, bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar>{username[0].toUpperCase()}</Avatar>
        <Typography variant="h6">{username}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <MenuList>
        <MenuItem><AccountBalanceWalletRoundedIcon /> My Wallets</MenuItem>
        <MenuItem><SettingsIcon /> Settings</MenuItem>
        <MenuItem>
          Dark Mode
          <Switch checked={isDarkMode} onChange={toggleColorMode} />
        </MenuItem>
      </MenuList>
      <Button startIcon={<LogoutIcon />} fullWidth onClick={onLogout}>Logout</Button>
    </Box>
  );
}

export default CleakerCompact;