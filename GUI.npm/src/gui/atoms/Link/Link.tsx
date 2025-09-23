import React, { forwardRef } from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
type GuiLinkProps = MuiLinkProps & { to?: RouterLinkProps['to'] };
/**
 * GUI Link Component
 *
 * This component wraps MUI's Link and integrates with React Router.
 * - If the `to` prop is provided, it uses `RouterLink` to enable client-side navigation.
 * - Otherwise, it falls back to a standard anchor link (`href`).
 *
 * Props:
 * - `to` (optional): The path to navigate to using React Router.
 * - All other MUI Link props are passed through.
 *
 * Example:
 * ```tsx
 * <Link to="/about">About</Link>
 * <Link href="https://external.com" target="_blank">External</Link>
 * ```
 */
const Link = forwardRef<HTMLAnchorElement, GuiLinkProps>(function Link(props, ref) {
  const { to, ...rest } = props;
  if (to) {
    return <MuiLink component={RouterLink} to={to} ref={ref} {...rest} />;
  }
  return <MuiLink ref={ref} {...rest} />;
});

export default Link;
export type { GuiLinkProps as LinkProps };