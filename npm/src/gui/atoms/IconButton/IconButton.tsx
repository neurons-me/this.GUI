import * as React from 'react';
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export type IconButtonProps = MuiIconButtonProps;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return <MuiIconButton ref={ref} {...props} />;
});

IconButton.displayName = 'IconButton';

export default IconButton;