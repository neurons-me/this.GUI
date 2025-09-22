import * as React from 'react';
import ThemeModeToggle from './ThemeModeToggle';

/**
 * Resolver for ThemeModeToggle
 * ----------------------------
 * Allows you to render the ThemeModeToggle from a plain JSON/config object.
 *
 * Minimal accepted shape:
 * {
 *   "type": "ThemeModeToggle",
 *   "props": {
 *     "variant": "minimal" | "switch",
 *     "show": "icons" | "label" | "both",
 *     "id": "optional-id",
 *     "className": "optional-class",
 *     "data-testid": "test-id",
 *     // Optional granular styling
 *     "sx": {  root styles  },
 *     "iconSx": { icons styles },
 *     "switchSx": { switch styles (variant='switch')  },
 *     "labelSx": { label Typography styles  }
 *   }
 * }
 */

export type ThemeModeToggleSpec = {
  type?: 'ThemeModeToggle';
  /** Render style: compact IconButton ("minimal") or labeled Switch ("switch") */
  variant?: 'minimal' | 'switch';
  /** What to display: icons only, label only, or both */
  show?: 'icons' | 'label' | 'both';
  /** DOM passthroughs */
  id?: string;
  className?: string;
  ['data-testid']?: string;
  /** Granular styling (forwarded to the component) */
  sx?: any;
  iconSx?: any;
  switchSx?: any;
  labelSx?: any;
};

export function resolveThemeModeToggle(p: ThemeModeToggleSpec = {}) {
  const {
    variant = 'minimal',
    show = 'icons',
    id,
    className,
    ['data-testid']: dataTestId,
    sx,
    iconSx,
    switchSx,
    labelSx,
  } = p;

  return (
    <ThemeModeToggle
      variant={variant}
      show={show}
      id={id}
      className={className}
      data-testid={dataTestId}
      sx={sx}
      iconSx={iconSx}
      switchSx={switchSx}
      labelSx={labelSx}
    />
  );
}

export default resolveThemeModeToggle;