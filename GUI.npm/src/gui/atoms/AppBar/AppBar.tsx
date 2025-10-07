import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps } from './AppBar.types.ts';
const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
  return <MuiAppBar ref={ref} {...props} />;
});
AppBar.displayName = 'AppBar';
export default AppBar;
