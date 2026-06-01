import * as React from 'react';
import { Box, Typography } from '@/gui/Atoms';
import {
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  chartWidthStyle,
  clamp,
  formatChartValue,
  getChartDomain,
  normalizeChartData,
  pickAxisLabels,
  withOpacity,
  type ChartDatumInput,
} from '@/gui/Compounds/Charts/chart.utils';

export type BarChartProps = {
  data: ChartDatumInput[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  width?: number | string;
  height?: number;
  minValue?: number;
  maxValue?: number;
  barColor?: string;
  gridColor?: string;
  showGrid?: boolean;
  unit?: string;
  sx?: any;
  id?: string;
  className?: string;
  'data-testid'?: string;
};

const PADDING = { top: 16, right: 16, bottom: 34, left: 16 } as const;

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(function BarChart(
  {
    data,
    title,
    subtitle,
    width = '100%',
    height = DEFAULT_CHART_HEIGHT,
    minValue = 0,
    maxValue,
    barColor = '#2e7d32',
    gridColor = 'rgba(46, 125, 50, 0.12)',
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
  const { min, max } = React.useMemo(
    () => getChartDomain(normalized, minValue, maxValue),
    [maxValue, minValue, normalized],
  );
  const labels = React.useMemo(() => pickAxisLabels(normalized), [normalized]);

  const bars = React.useMemo(() => {
    if (!normalized.length) return [];

    const innerWidth = DEFAULT_CHART_WIDTH - PADDING.left - PADDING.right;
    const innerHeight = height - PADDING.top - PADDING.bottom;
    const gap = 10;
    const totalGap = gap * Math.max(normalized.length - 1, 0);
    const barWidth = Math.max((innerWidth - totalGap) / normalized.length, 6);
    const range = Math.max(max - min, 1e-6);

    return normalized.map((datum, index) => {
      const normalizedValue = clamp((datum.value - min) / range, 0, 1);
      const barHeight = Math.max(normalizedValue * innerHeight, 2);
      const x = PADDING.left + index * (barWidth + gap);
      const y = PADDING.top + innerHeight - barHeight;

      return { x, y, width: barWidth, height: barHeight, datum };
    });
  }, [height, max, min, normalized]);

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
              aria-label="Bar chart"
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

              {bars.map((bar) => (
                <g key={`bar-${bar.datum.index}`}>
                  <rect
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    rx="6"
                    fill={bar.datum.color ?? barColor}
                  />
                  <rect
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    rx="6"
                    fill={withOpacity('#ffffff', 0.08)}
                  />
                </g>
              ))}

              {labels.map((datum) => {
                const bar = bars.find((candidate) => candidate.datum.index === datum.index);
                if (!bar) return null;

                return (
                  <text
                    key={`label-${datum.index}`}
                    x={bar.x + bar.width / 2}
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
              Bars: {normalized.length}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
});

(BarChart as any).displayName = 'Gui.Charts.BarChart';

export default BarChart;
