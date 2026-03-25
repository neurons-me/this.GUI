import * as React from 'react';
import MuiChip, { type ChipProps as MuiChipProps } from '@mui/material/Chip';

/**
 * This.GUI — Chip (atom)
 * Thin wrapper around MUI Chip.
 */
const Chip = React.forwardRef<HTMLDivElement, MuiChipProps>(function Chip(props, ref) {
  return <MuiChip ref={ref} {...props} />;
});

export type ChipProps = MuiChipProps;
(Chip as any).displayName = 'Gui.Chip';
export default Chip;
