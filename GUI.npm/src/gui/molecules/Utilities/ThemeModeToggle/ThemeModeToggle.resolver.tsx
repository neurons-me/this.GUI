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
 *     "size": "small" | "medium" | "large",
 *     "id": "optional-id",
 *     "className": "optional-class",
 *     "data-testid": "test-id"
 *   }
 * }
 */

export type ThemeModeToggleSpec = {
  type?: 'ThemeModeToggle';
  /** Render style: compact IconButton ("minimal") or labeled Switch ("switch") */
  variant?: 'minimal' | 'switch';
  /** What to display: icons only, label only, or both */
  show?: 'icons' | 'label' | 'both';
  /** Visual size hint (forwarded to underlying control) */
  size?: 'small' | 'medium' | 'large';
  /** DOM passthroughs */
  id?: string;
  className?: string;
  ['data-testid']?: string;
};

export function resolveThemeModeToggle(p: ThemeModeToggleSpec = {}) {
  const {
    variant = 'minimal',
    show = 'icons',
    size = 'medium',
    id,
    className,
    ['data-testid']: dataTestId,
  } = p;

  return (
    <ThemeModeToggle
      variant={variant}
      show={show}
      size={size}
      id={id}
      className={className}
      data-testid={dataTestId}
    />
  );
}

export default resolveThemeModeToggle;