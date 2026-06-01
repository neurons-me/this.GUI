import * as React from 'react';
import { Box, Typography } from '@/gui/Atoms';
import {
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  buildAreaPath,
  buildLinePath,
  chartWidthStyle,
  formatChartValue,
  getChartDomain,
  getChartPoints,
  normalizeChartData,
  pickAxisLabels,
  withOpacity,
  type ChartDatumInput,
} from '@/gui/Compounds/Charts/chart.utils';

export type LineChartProps = {
  data: ChartDatumInput[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  width?: number | string;
  height?: number;
  minValue?: number;
  maxValue?: number;
  strokeColor?: string;
  areaColor?: string;
  pointColor?: string;
  gridColor?: string;
  showArea?: boolean;
  showPoints?: boolean;
  showGrid?: boolean;
  unit?: string;
  sx?: any;
  id?: string;
  className?: string;
  'data-testid'?: string;
};

const PADDING = { top: 16, right: 16, bottom: 30, left: 16 } as const;

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(function LineChart(
  {
    data,
    title,
    subtitle,
    width = '100%',
    height = DEFAULT_CHART_HEIGHT,
    minValue,
    maxValue,
    strokeColor = '#1976d2',
    areaColor,
    pointColor,
    gridColor = 'rgba(25, 118, 210, 0.12)',
    showArea = true,
    showPoints = true,
    showGrid = true,
    unit,
    sx,
    id,
    className,
    'data-testid': dataTestId,
  },
  ref,
) {
  const normalized = React.useMemo(() => normalizeChartData(data), [data]);
  const points = React.useMemo(
    () =>
      getChartPoints(
        normalized,
        DEFAULT_CHART_WIDTH,
        height,
        PADDING,
        minValue,
        maxValue,
      ),
    [height, maxValue, minValue, normalized],
  );
  const linePath = React.useMemo(() => buildLinePath(points), [points]);
  const areaPath = React.useMemo(() => buildAreaPath(points, height, PADDING), [height, points]);
  const { min, max } = React.useMemo(
    () => getChartDomain(normalized, minValue, maxValue),
    [maxValue, minValue, normalized],
  );
  const labels = React.useMemo(() => pickAxisLabels(normalized), [normalized]);

  return (
    <Box
      ref={ref}
      id={id}
      className={className}
      data-testid={dataTestId}
      sx={{
        width: chartWidthStyle(width),
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        ...sx,
      }}
    >
      {(title || subtitle) && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          {title && <Typography variant="h6">{title}</Typography>}
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {!normalized.length ? (
        <Box
          sx={{
            minHeight: height,
            display: 'grid',
            placeItems: 'center',
            borderRadius: 2,
            bgcolor: 'action.hover',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No data
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ width: chartWidthStyle(width), overflow: 'hidden' }}>
            <svg
              role="img"
              aria-label="Line chart"
              viewBox={`0 0 ${DEFAULT_CHART_WIDTH} ${height}`}
              style={{ width: '100%', height }}
            >
              {showGrid &&
                Array.from({ length: 4 }).map((_, index) => {
                  const innerHeight = height - PADDING.top - PADDING.bottom;
                  const y = PADDING.top + (innerHeight * index) / 3;
                  return (
                    <line
                      key={`grid-${index}`}
                      x1={PADDING.left}
                      x2={DEFAULT_CHART_WIDTH - PADDING.right}
                      y1={y}
                      y2={y}
                      stroke={gridColor}
                      strokeDasharray="4 6"
                    />
                  );
                })}

              {showArea && areaPath && (
                <path
                  d={areaPath}
                  fill={withOpacity(areaColor ?? strokeColor, 0.16)}
                  stroke="none"
                />
              )}

              {linePath && (
                <path
                  d={linePath}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {showPoints &&
                points.map((point) => (
                  <circle
                    key={`point-${point.datum.index}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill={pointColor ?? point.datum.color ?? strokeColor}
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                ))}

              {labels.map((datum) => {
                const point = points[datum.index];
                if (!point) return null;

                return (
                  <text
                    key={`label-${datum.index}`}
                    x={point.x}
                    y={height - 8}
                    textAnchor="middle"
                    fontSize="11"
                    fill="currentColor"
                  >
                    {datum.label}
                  </text>
                );
              })}
            </svg>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="caption" color="text.secondary">
              Min: {formatChartValue(min, unit)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Max: {formatChartValue(max, unit)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Points: {normalized.length}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
});

(LineChart as any).displayName = 'Gui.Charts.LineChart';

export default LineChart;
