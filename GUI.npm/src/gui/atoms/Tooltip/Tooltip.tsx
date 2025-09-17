/**
 * This.GUI — Tooltip (atom)
 * Thin wrapper around MUI's Tooltip that keeps a stable import path:
 *   import { Tooltip } from '@/gui/atoms'
 *
 * Notes:
 * - Tooltip is NOT polymorphic (no `component` prop).
 * - Styling is typically done via `slotProps.tooltip.sx` and `slotProps.arrow.sx`.
 * - Works seamlessly with This.GUI theme through GuiProvider.
 *
 * Examples:
 *   <Tooltip title="Hello"><Button>Hover me</Button></Tooltip>
 *   <Tooltip title="Info" arrow placement="right" slotProps={{ tooltip: { sx: { bgcolor: 'primary.main' } } }}>
 *     <IconButton><Icon name="mui:Info" /></IconButton>
 *   </Tooltip>
 */
import * as React from 'react';
import MuiTooltip, { type TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type TooltipProps = MuiTooltipProps;

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
  // We simply forward all props to MUI's Tooltip to preserve full behavior.
  return <MuiTooltip ref={ref} {...props} />;
});

Tooltip.displayName = 'Gui.Tooltip';

export default Tooltip;
export type { TooltipProps as GuiTooltipProps };