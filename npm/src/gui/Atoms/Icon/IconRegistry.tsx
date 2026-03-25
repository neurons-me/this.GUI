import * as React from 'react';
import clsx from 'clsx';
import 'material-symbols';

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

// Helper to convert kebab-case to PascalCase for icon names
function kebabToPascal(kebab: string): string {
  return kebab.replace(/(^\w|-\w)/g, (g) => g.replace('-', '').toUpperCase());
}

function createLazyResolver(prefix: 'lucide' | 'mui', iconKey: string): React.LazyExoticComponent<React.ComponentType<any>> {
  const registryKey = `${prefix}:${iconKey}`;
  if (!iconRegistry[registryKey]) {
    iconRegistry[registryKey] = React.lazy(async () => {
      try {
        if (prefix === 'lucide') {
          // lucide-react uses kebab-case for file names
          const { default: LucideIcon } = await import(/* @vite-ignore */ `lucide-react/dist/esm/icons/${iconKey.toLowerCase()}`);
          return { default: LucideIcon as React.ComponentType<any> };
        }
        if (prefix === 'mui') {
          // @mui/icons-material uses PascalCase for file names
          const pascalName = kebabToPascal(iconKey);
          const { default: MuiIcon } = await import(/* @vite-ignore */ `@mui/icons-material/${pascalName}`);
          return { default: MuiIcon as React.ComponentType<any> };
        }
      } catch (error) {
        console.error(`Failed to load icon: ${registryKey}`, error);
        // Return a component that renders nothing on error
        return { default: () => null };
      }
      // Should not be reached, but as a fallback
      return { default: () => null };
    });
  }
  return iconRegistry[registryKey];
}

export function resolveIcon(name: string): React.ComponentType<any> {
  const [prefix, iconKey] = name.includes(':') ? name.split(':') as ['lucide' | 'mui' | 'material', string] : ['material', name];

  if (prefix === 'lucide' || prefix === 'mui') {
    return createLazyResolver(prefix, iconKey);
  }

  // Default to Material Icons if no prefix or 'material' prefix
  return MaterialIconResolver;
}