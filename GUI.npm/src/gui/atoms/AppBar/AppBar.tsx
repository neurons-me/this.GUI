import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
export type AppBarProps = MuiAppBarProps;
const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
  return <MuiAppBar ref={ref} {...props} />;
});

AppBar.displayName = 'AppBar';

export default AppBar;
