import * as React from 'react';
import { Suspense } from 'react';
import { resolveIcon } from './IconRegistry';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  name: string; // 'home', 'lucide:Menu', 'mui:Favorite'
  fontSize?: number | string;
  iconColor?: string;
  weight?: number;
  fill?: number;
  grade?: number;
  opticalSize?: number;
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
  const IconComponent = resolveIcon(name);
  if (!IconComponent) return null;
  // Fallback for lazy loaded components
  const fallback = <span style={{ width: fontSize, height: fontSize, display: 'inline-block' }} />;
  return (
    <Suspense fallback={fallback}>
      <IconComponent {...{ name, fontSize, iconColor, weight, fill, grade, opticalSize, className, style, ...rest }} />
    </Suspense>
  );
}
