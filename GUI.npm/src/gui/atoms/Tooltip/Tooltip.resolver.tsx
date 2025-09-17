import * as React from 'react';
import Tooltip from './Tooltip';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';

/**
 * Tooltip — Resolver
 * --------------------------------------------------
 * Declarative spec → live <Tooltip /> with correct props.
 * Supports nested declarative children via ctx.render when available.
 */
export type TooltipSpec = {
  type: 'Tooltip';
  props?: {
    // Content
    title?: React.ReactNode | string; // required by MUI; we default if missing
    children?: React.ReactNode | any; // can be a nested spec object

    // Behavior
    placement?:
      | 'bottom-end' | 'bottom-start' | 'bottom'
      | 'left-end'   | 'left-start'   | 'left'
      | 'right-end'  | 'right-start'  | 'right'
      | 'top-end'    | 'top-start'    | 'top';
    arrow?: boolean;
    followCursor?: boolean;
    enterDelay?: number;
    enterNextDelay?: number;
    enterTouchDelay?: number;
    leaveDelay?: number;
    leaveTouchDelay?: number;
    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableInteractive?: boolean;
    disableTouchListener?: boolean;
    open?: boolean; // controlled mode

    // Styling / test ids
    sx?: any;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

const TooltipResolver: RegistryEntry = {
  type: 'Tooltip',
  resolve(spec: TooltipSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    // Resolve child: if a nested spec is provided and we have a renderer in ctx, use it.
    let childCandidate: any = (spec.props?.children ?? (spec.props as any)?.child) as any;
    if (!React.isValidElement(childCandidate) && childCandidate && typeof childCandidate === 'object' && ctx?.render) {
      childCandidate = ctx.render(childCandidate);
    }

    // Tooltip expects exactly ONE ReactElement child. Coerce anything else into an element.
    let childEl: React.ReactElement;
    if (React.isValidElement(childCandidate)) {
      childEl = childCandidate as React.ReactElement;
    } else if (
      typeof childCandidate === 'string' ||
      typeof childCandidate === 'number' ||
      typeof childCandidate === 'bigint'
    ) {
      childEl = <span>{String(childCandidate)}</span>;
    } else if (childCandidate) {
      // Arrays, iterables, true/false, portals, promises, etc. → wrap safely
      childEl = <span>{childCandidate as any}</span>;
    } else {
      // No child provided → harmless inline element to satisfy MUI contract
      childEl = <span style={{ display: 'inline-block', width: 0, height: 0 }} />;
    }

    const titleNode = typeof p.title === 'string' ? p.title : (p.title ?? '');

    return (
      <Tooltip
        title={titleNode}
        placement={p.placement}
        arrow={p.arrow}
        followCursor={p.followCursor}
        enterDelay={p.enterDelay}
        enterNextDelay={p.enterNextDelay}
        enterTouchDelay={p.enterTouchDelay}
        leaveDelay={p.leaveDelay}
        leaveTouchDelay={p.leaveTouchDelay}
        disableFocusListener={p.disableFocusListener}
        disableHoverListener={p.disableHoverListener}
        disableInteractive={p.disableInteractive}
        disableTouchListener={p.disableTouchListener}
        open={p.open}
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      >
        {childEl}
      </Tooltip>
    );
  },
};

export default TooltipResolver;