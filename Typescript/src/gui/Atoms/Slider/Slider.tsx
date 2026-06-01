import * as React from 'react';
import MuiSlider, { type SliderProps as MuiSliderProps } from '@mui/material/Slider';

/**
 * This.GUI — Slider (atom)
 * Thin wrapper around MUI Slider.
 */
const Slider = React.forwardRef<HTMLSpanElement, MuiSliderProps>(function Slider(props, ref) {
  return <MuiSlider ref={ref} {...props} />;
});

export type SliderProps = MuiSliderProps;
(Slider as any).displayName = 'Gui.Slider';
export default Slider;
