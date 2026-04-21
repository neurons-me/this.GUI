import * as React from 'react';
import { Box, Slider as AtomSlider, Typography } from '@/gui/Atoms';
import type { SliderProps as AtomSliderProps } from '@/gui/Atoms/Slider/Slider';

export type ChartSliderProps = Omit<AtomSliderProps, 'ref'> & {
  label?: React.ReactNode;
  caption?: React.ReactNode;
  showValue?: boolean;
  unit?: string;
  sx?: any;
};

function formatSliderValue(value: number | number[], unit?: string) {
  if (Array.isArray(value)) {
    return `${value[0]} - ${value[value.length - 1]}${unit ?? ''}`;
  }

  return `${value}${unit ?? ''}`;
}

const Slider = React.forwardRef<HTMLDivElement, ChartSliderProps>(function Slider(
  {
    label,
    caption,
    showValue = true,
    unit,
    sx,
    value,
    defaultValue,
    valueLabelDisplay = 'auto',
    ...props
  },
  ref,
) {
    const previewValue = value ?? defaultValue;

    return (
      <Box
        ref={ref}
        sx={{
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
        {(label || (showValue && previewValue !== undefined)) && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
            {label ? <Typography variant="subtitle2">{label}</Typography> : <span />}
            {showValue && previewValue !== undefined && (
              <Typography variant="body2" color="text.secondary">
                {formatSliderValue(previewValue as number | number[], unit)}
              </Typography>
            )}
          </Box>
        )}

        <AtomSlider
          value={value}
          defaultValue={defaultValue}
          valueLabelDisplay={valueLabelDisplay}
          {...props}
        />

        {caption && (
          <Typography variant="caption" color="text.secondary">
            {caption}
          </Typography>
        )}
      </Box>
    );
  },
);

(Slider as any).displayName = 'Gui.Charts.Slider';

export default Slider;
