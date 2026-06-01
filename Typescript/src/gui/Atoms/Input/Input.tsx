import * as React from 'react';
import MuiInput, { type InputProps as MuiInputProps } from '@mui/material/Input';

/**
 * This.GUI — Input (atom)
 * Thin wrapper around MUI Input.
 */
const Input = React.forwardRef<any, MuiInputProps>(function Input(props, ref) {
  return <MuiInput ref={ref} {...props} />;
});

export type InputProps = MuiInputProps;
(Input as any).displayName = 'Gui.Input';
export default Input;
