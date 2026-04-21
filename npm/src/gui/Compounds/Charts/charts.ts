/*
 * This.GUI — Charts compounds
 * Visual data widgets composed from atoms and light SVG primitives.
 */
import LineChart from '@/gui/Compounds/Charts/LineChart/LineChart';
import type { LineChartProps } from '@/gui/Compounds/Charts/LineChart/LineChart';
import BarChart from '@/gui/Compounds/Charts/BarChart/BarChart';
import type { BarChartProps } from '@/gui/Compounds/Charts/BarChart/BarChart';
import Slider from '@/gui/Compounds/Charts/Slider/Slider';
import type { ChartSliderProps } from '@/gui/Compounds/Charts/Slider/Slider';

type ChartsRegistry = {
  LineChart: typeof LineChart;
  BarChart: typeof BarChart;
  Slider: typeof Slider;
};

const Charts: ChartsRegistry = {
  LineChart,
  BarChart,
  Slider,
};

export { Charts, LineChart, BarChart, Slider };
export type { LineChartProps, BarChartProps, ChartSliderProps };
export default Charts;
