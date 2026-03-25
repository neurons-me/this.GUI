import * as React from 'react';
import clsx from 'clsx';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import * as MuiIcons from '@mui/icons-material';
import 'material-symbols';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  name: string; // 'home', 'lucide:Menu', 'mui:Favorite'
  fontSize?: number | string;
  iconColor?: string;
  weight?: number;
  fill?: number;
  grade?: number;
  opticalSize?: number;
};

type IconRegistry = Record<string, (name: string, props: any) => React.ReactNode>;

const DEFAULT_ICON_REGISTRY: IconRegistry = {
  lucide: (name, props) => {
    const LucideIcon = (LucideIcons as any)[name];
    // Forward lucide-specific props, filter others.
    const { size, color, strokeWidth } = props;
    const lucideProps: LucideProps = { size, color, strokeWidth };
    return LucideIcon ? <LucideIcon {...lucideProps} /> : null;
  },
  mui: (name, props) => {
    const MuiIcon = (MuiIcons as any)[name];
    // Forward MUI-specific props like sx, filter others.
    const { sx, fontSize, iconColor, style, ...rest } = props;
    const muiSx = { fontSize, color: iconColor, ...style, ...sx };
    return MuiIcon ? <MuiIcon sx={muiSx} {...rest} /> : null;
  },
  material: (name, props) => {
    const { fill, weight, grade, opticalSize, className, style, iconColor, fontSize, ...rest } = props;
    const variationSettings = `"FILL" ${fill ?? 0}, "wght" ${weight ?? 400}, "GRAD" ${grade ?? 0}, "opsz" ${opticalSize ?? 24}`;
    return (
      <span
        {...rest}
        className={clsx('material-symbols-rounded', className)}
        style={{ fontVariationSettings: variationSettings, fontSize, color: iconColor, ...style }}
      >
        {name}
      </span>
    );
  },
};

export default function Icon({
  name,
  fontSize,
  iconColor,
  weight = 400,
  fill = 0,
  grade = 0,
  opticalSize = 24,
  className,
  style,
  ...rest
}: IconProps) {
  const [prefix, iconKey] = name.includes(':') ? name.split(':') : ['material', name];

  const resolver = DEFAULT_ICON_REGISTRY[prefix];

  if (!resolver) return null;

  // Pass all original props down to the specific resolver.
  // The resolver is responsible for picking the props it cares about.
  return resolver(iconKey, { name, fontSize, iconColor, weight, fill, grade, opticalSize, className, style, ...rest });
}
