import type { CSSProperties } from 'react';

export type ChartDatumInput =
  | number
  | {
      value: number;
      label?: string | number;
      color?: string;
    };

export type NormalizedChartDatum = {
  index: number;
  value: number;
  label: string;
  color?: string;
  raw: ChartDatumInput;
};

export type ChartPoint = {
  x: number;
  y: number;
  datum: NormalizedChartDatum;
};

export const DEFAULT_CHART_WIDTH = 480;
export const DEFAULT_CHART_HEIGHT = 240;

export function normalizeChartData(data: ChartDatumInput[] = []): NormalizedChartDatum[] {
  return data
    .map((datum, index) => {
      if (typeof datum === 'number') {
        return {
          index,
          value: Number.isFinite(datum) ? datum : 0,
          label: String(index + 1),
          raw: datum,
        };
      }

      return {
        index,
        value: Number.isFinite(datum?.value) ? datum.value : 0,
        label: datum?.label !== undefined ? String(datum.label) : String(index + 1),
        color: datum?.color,
        raw: datum,
      };
    })
    .filter((datum) => Number.isFinite(datum.value));
}

export function getChartDomain(
  data: NormalizedChartDatum[],
  minValue?: number,
  maxValue?: number,
) {
  if (!data.length) {
    return { min: minValue ?? 0, max: maxValue ?? 1 };
  }

  const values = data.map((datum) => datum.value);
  const rawMin = minValue ?? Math.min(...values);
  const rawMax = maxValue ?? Math.max(...values);

  if (rawMin === rawMax) {
    const pad = rawMin === 0 ? 1 : Math.abs(rawMin) * 0.1;
    return { min: rawMin - pad, max: rawMax + pad };
  }

  return { min: rawMin, max: rawMax };
}

export function getChartPoints(
  data: NormalizedChartDatum[],
  width: number,
  height: number,
  padding: { top: number; right: number; bottom: number; left: number },
  minValue?: number,
  maxValue?: number,
): ChartPoint[] {
  const { min, max } = getChartDomain(data, minValue, maxValue);
  const innerWidth = Math.max(width - padding.left - padding.right, 1);
  const innerHeight = Math.max(height - padding.top - padding.bottom, 1);
  const denominator = Math.max(data.length - 1, 1);
  const range = Math.max(max - min, 1e-6);

  return data.map((datum, index) => {
    const x = padding.left + (innerWidth * index) / denominator;
    const y = padding.top + innerHeight - ((datum.value - min) / range) * innerHeight;

    return { x, y, datum };
  });
}

export function buildLinePath(points: ChartPoint[]) {
  if (!points.length) return '';
  return points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');
}

export function buildAreaPath(
  points: ChartPoint[],
  height: number,
  padding: { bottom: number },
) {
  if (!points.length) return '';
  const baseline = height - padding.bottom;
  const line = buildLinePath(points);
  const first = points[0];
  const last = points[points.length - 1];

  return `${line} L ${last.x} ${baseline} L ${first.x} ${baseline} Z`;
}

export function formatChartValue(value: number, unit?: string) {
  const rounded =
    Math.abs(value) >= 1000 ? value.toLocaleString() : Number(value.toFixed(2)).toString();
  return unit ? `${rounded}${unit}` : rounded;
}

export function pickAxisLabels(data: NormalizedChartDatum[], maxLabels = 6) {
  if (data.length <= maxLabels) return data;

  const step = Math.ceil(data.length / maxLabels);
  return data.filter((datum) => datum.index % step === 0 || datum.index === data.length - 1);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function withOpacity(hexOrRgb: string, alpha: number) {
  if (hexOrRgb.startsWith('rgba(') || hexOrRgb.startsWith('hsla(')) return hexOrRgb;
  if (hexOrRgb.startsWith('rgb(')) {
    return hexOrRgb.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  }

  const hex = hexOrRgb.replace('#', '');
  if (hex.length !== 6) return hexOrRgb;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function chartWidthStyle(width: number | string | undefined): CSSProperties['width'] {
  return width ?? '100%';
}
