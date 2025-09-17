import * as React from 'react';
import { Divider, type DividerProps } from '@/gui/atoms';
/**
 * DividerResolver
 *
 * Adapts a declarative JSON config into a live Divider component.
 * All MUI Divider props are accepted and passed through.
 *
 * Example JSON:
 * {
 *   "type": "Divider",
 *   "props": {
 *     "orientation": "vertical",
 *     "flexItem": true,
 *     "sx": { "borderColor": "primary.main" }
 *   }
 * }
 */
export default function DividerResolver(props: DividerProps & { children?: React.ReactNode }) {
  return <Divider {...props}>{props.children}</Divider>;
}