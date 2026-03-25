import { Box } from '@/gui/Atoms';
import type { ModulesGridProps } from '../../All.This.types';

export default function ModulesGrid({
  'data-gui-node-id': rootNodeId,
  'data-gui-component': rootNodeType = 'ModulesGrid',
  children,
  minColumnWidth = 240,
}: ModulesGridProps) {
  const columnWidth =
    typeof minColumnWidth === 'number' ? `${minColumnWidth}px` : minColumnWidth;

  return (
    <Box
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: `repeat(auto-fit, minmax(${columnWidth}, 1fr))`,
      }}
    >
      {children}
    </Box>
  );
}
