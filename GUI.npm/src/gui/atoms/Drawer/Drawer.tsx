import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
export type DrawerProps = React.ComponentProps<typeof MuiDrawer>;
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(props, ref) {
  return <MuiDrawer ref={ref} {...props} />;
});

export default Drawer;
