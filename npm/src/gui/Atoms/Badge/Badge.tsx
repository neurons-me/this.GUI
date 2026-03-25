import * as React from 'react';
import MuiBadge, { type BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

/**
 * This.GUI — Badge (atom)
 * Thin wrapper around MUI Badge.
 */
const Badge = React.forwardRef<HTMLSpanElement, MuiBadgeProps>(function Badge(props, ref) {
  return <MuiBadge ref={ref} {...props} />;
});

export type BadgeProps = MuiBadgeProps;
(Badge as any).displayName = 'Gui.Badge';
export default Badge;
