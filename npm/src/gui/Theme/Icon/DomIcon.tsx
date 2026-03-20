import * as React from 'react';

export type DomIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
  cellStrokeOpacity?: number;
};

const LETTER_D = [
  '#####.',
  '##..##',
  '##...#',
  '##...#',
  '##...#',
  '##...#',
  '##...#',
  '##..##',
  '#####.',
] as const;

const LETTER_O = [
  '.####.',
  '##..##',
  '#....#',
  '#....#',
  '#....#',
  '#....#',
  '#....#',
  '##..##',
  '.####.',
] as const;

const LETTER_M = [
  '##..#..##',
  '###.#.###',
  '##.###.##',
  '##..#..##',
  '##.....##',
  '##.....##',
  '##.....##',
  '##.....##',
  '##.....##',
] as const;

const PIXEL_GRID = LETTER_D.map((row, index) => `${row}..${LETTER_O[index]}..${LETTER_M[index]}`);
const FILLED_CELL = '#';
const CELL_SIZE = 12;
const VIEWBOX_WIDTH = PIXEL_GRID[0].length * CELL_SIZE;
const VIEWBOX_HEIGHT = PIXEL_GRID.length * CELL_SIZE;

export default function DomIcon({
  size = 96,
  title = 'DOM',
  width,
  height,
  style,
  cellStrokeOpacity = 0.14,
  ...props
}: DomIconProps) {
  const resolvedWidth = width ?? size;
  const resolvedHeight =
    height ?? (typeof size === 'number' ? (size * VIEWBOX_HEIGHT) / VIEWBOX_WIDTH : undefined);

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      width={resolvedWidth}
      height={resolvedHeight}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: 'block',
        height: resolvedHeight ? undefined : 'auto',
        ...style,
      }}
      {...props}
    >
      <title>{title}</title>
      <g shapeRendering="crispEdges">
        {PIXEL_GRID.flatMap((row, y) =>
          [...row].map((cell, x) =>
            cell === FILLED_CELL ? (
              <rect
                key={`${x}-${y}`}
                x={x * CELL_SIZE}
                y={y * CELL_SIZE}
                width={CELL_SIZE}
                height={CELL_SIZE}
                fill="currentColor"
                stroke="currentColor"
                strokeOpacity={cellStrokeOpacity}
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            ) : null
          )
        )}
      </g>
    </svg>
  );
}
