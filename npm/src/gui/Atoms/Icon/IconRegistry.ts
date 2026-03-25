import * as React from 'react';
import clsx from 'clsx';
import type { LucideProps } from 'lucide-react';
import 'material-symbols';

type IconResolver = (props: any) => React.ReactNode;

const iconRegistry: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {};

function MaterialIconResolver(props: any) {
  const { name, fill, weight, grade, opticalSize, className, style, iconColor, fontSize, ...rest } = props;
  const iconKey = name.includes(':') ? name.split(':')[1] : name;
  const variationSettings = `"FILL" ${fill ?? 0}, "wght" ${weight ?? 400}, "GRAD" ${grade ?? 0}, "opsz" ${opticalSize ?? 24}`;
  return (
    <span
      {...rest}
      className={clsx('material-symbols-rounded', className)}
      style={{ fontVariationSettings: variationSettings, fontSize, color: iconColor, ...style }}
    >
      {iconKey}
    </span>
  );
}

function createLazyResolver(prefix: 'lucide' | 'mui', iconKey: string): React.LazyExoticComponent<React.ComponentType<any>> {
  const registryKey = `${prefix}:${iconKey}`;
  if (!iconRegistry[registryKey]) {
    iconRegistry[registryKey] = React.lazy(async () => {
      try {
        if (prefix === 'lucide') {
          const icons = await import('lucide-react');
          const LucideIcon = (icons as any)[iconKey];
          return {
            default: (props: LucideProps) => <LucideIcon color={props.color} size={props.size} strokeWidth={props.strokeWidth} />,
          };
        }
        if (prefix === 'mui') {
          const MuiIconModule = await import(`@mui/icons-material/${iconKey}`);
          const MuiIcon = MuiIconModule.default;
          return {
            default: (props: any) => {
              const { sx, fontSize, iconColor, style } = props;
              const muiSx = { fontSize, color: iconColor, ...style, ...sx };
              return <MuiIcon sx={muiSx} />;
            },
          };
        }
      } catch (error) {
        console.error(`Failed to load icon: ${registryKey}`, error);
        return { default: () => null };
      }
      return { default: () => null };
    });
  }
  return iconRegistry[registryKey];
}

export function resolveIcon(name: string): React.ComponentType<any> | null {
  const [prefix, iconKey] = name.includes(':') ? name.split(':') as ['lucide' | 'mui' | 'material', string] : ['material', name];

  if (prefix === 'lucide' || prefix === 'mui') {
    return createLazyResolver(prefix, iconKey);
  }

  return MaterialIconResolver;
}