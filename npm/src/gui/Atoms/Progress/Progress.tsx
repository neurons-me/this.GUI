import * as React from 'react';
import MuiCircularProgress, {
  type CircularProgressProps,
} from '@mui/material/CircularProgress';
import MuiLinearProgress, {
  type LinearProgressProps,
} from '@mui/material/LinearProgress';

export type ProgressKind = 'linear' | 'circular';

export type ProgressProps = {
  kind?: ProgressKind;
  id?: string;
  className?: string;
  'data-testid'?: string;
  [key: string]: any;
} & {
  color?: CircularProgressProps['color'] | LinearProgressProps['color'];
  value?: number;
  valueBuffer?: number;
  variant?: CircularProgressProps['variant'] | LinearProgressProps['variant'];
  size?: CircularProgressProps['size'];
  thickness?: CircularProgressProps['thickness'];
  sx?: CircularProgressProps['sx'] | LinearProgressProps['sx'];
};

/**
 * This.GUI — Progress (atom)
 * Abstracts a linear or circular progress indicator behind one component.
 */
const Progress = React.forwardRef<any, ProgressProps>(function Progress(props, ref) {
  const { kind = 'linear', ...rest } = props;

  if (kind === 'circular') {
    return <MuiCircularProgress ref={ref} {...rest} />;
  }

  return <MuiLinearProgress ref={ref} {...rest} />;
});

(Progress as any).displayName = 'Gui.Progress';
export default Progress;
