import * as React from 'react';
import clsx from 'clsx';
import 'material-symbols';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  name: string; // e.g., 'material:home'
  iconColor?: string; // CSS color value
  fontSize?: number | string; // optional font size
  weight?: number; // font variation setting
  fill?: number; // font variation setting (0 = outlined, 1 = filled)
  grade?: number;
  opticalSize?: number;
};

export default function Icon({
  name,
  iconColor,
  fontSize,
  weight = 400,
  fill = 0,
  grade = 0,
  opticalSize = 24,
  className,
  style,
  ...rest
}: IconProps) {
  const iconName = name;
  const variationSettings = `"FILL" ${fill}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${opticalSize}`;
  return (
    <span
      {...rest}
      className={clsx('material-symbols-rounded', className)}
      style={{
        fontVariationSettings: variationSettings,
        color: iconColor,
        fontSize,
        ...style,
      }}
    >
      {iconName}
    </span>
  );
}
