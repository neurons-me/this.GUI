import React, { forwardRef } from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
type GuiLinkProps = MuiLinkProps & { to?: RouterLinkProps['to'] };
const Link = forwardRef<HTMLAnchorElement, GuiLinkProps>(function Link(props, ref) {
  const { to, ...rest } = props;
  if (to) {
    return <MuiLink component={RouterLink} to={to} ref={ref} {...rest} />;
  }
  return <MuiLink ref={ref} {...rest} />;
});

export default Link;
export type { GuiLinkProps as LinkProps };