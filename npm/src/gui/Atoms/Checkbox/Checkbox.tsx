import * as React from 'react';
import MuiCheckbox, { type CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

/**
 * This.GUI — Checkbox (atom)
 * Thin wrapper over MUI's Checkbox.
 */
const Checkbox = React.forwardRef<HTMLButtonElement, MuiCheckboxProps>(function Checkbox(props, ref) {
  return <MuiCheckbox ref={ref} {...props} />;
});

export type CheckboxProps = MuiCheckboxProps;
(Checkbox as any).displayName = 'Gui.Checkbox';
export default Checkbox;
