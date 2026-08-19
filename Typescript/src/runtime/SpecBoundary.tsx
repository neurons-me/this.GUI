import * as React from 'react';
import { renderNode } from './renderer';
import type { GuiRegistryLike, GuiSpecNode, ResolvedNodeRecord } from './renderer';
import type { RuntimeAdapter } from './adapter';
import { useOptionalSelection } from './selection';

export interface SpecBoundaryProps {
  spec: GuiSpecNode;
  registry?: GuiRegistryLike;
  runtime?: RuntimeAdapter;
}

// Module-level, not a `registry = {}` default in the destructure below: a
// default parameter object is a fresh reference on every render call where
// the caller omits `registry` (the common case), which is a `useMemo` dep
// (below) — a fresh reference every render defeats that memo entirely,
// re-running renderNode() on the whole spec tree (rebuilding every element
// and re-scheduling an onNodeResolved microtask per node) on every render,
// even when `spec` itself hasn't changed. One shared empty object fixes it.
const EMPTY_REGISTRY: GuiRegistryLike = {};

// Renders a spec tree through the declarative pipeline and bridges every
// resolved node into the ambient SelectionProvider, if one is present
// (useOptionalSelection no-ops otherwise, so this is safe to use in apps
// that never mount devtools). renderNode() defers onNodeResolved via
// queueMicrotask (see scheduleResolvedRecord in renderer.ts), which fires
// *after* React's synchronous mount + layout-effect pass completes — so
// registration can't be batched through a same-pass useLayoutEffect (its
// stable [registerNode, unregisterNode] deps would never re-fire to flush
// a later microtask). Registering directly inside the resolved callback
// sidesteps that: by the time any microtask runs, we're safely outside
// React's render/commit phase.
export function SpecBoundary({ spec, registry = EMPTY_REGISTRY, runtime }: SpecBoundaryProps) {
  // Depend on the registerNode/unregisterNode functions themselves, not the
  // whole useOptionalSelection() object: those functions are stable direct
  // references to the selectionStore singleton's actions, but the context
  // *value* SelectionProvider hands out is a new object on every
  // selectionStore mutation anywhere in the app (its own useMemo deps
  // include volatile state like selectedNodeId). Depending on the whole
  // object here would recompute `rendered` — and thus re-register, and thus
  // re-trigger a mutation — on every unrelated node registering anywhere,
  // an infinite loop. Matches the stable-reference pattern already used in
  // mount.ts's RuntimeSelectionRoot.
  const selection = useOptionalSelection();
  const registerNode = selection?.registerNode;
  const unregisterNode = selection?.unregisterNode;
  // ids registered as of the end of the PREVIOUS pass.
  const registeredIds = React.useRef<Set<string>>(new Set());
  // ids resolved so far in the pass currently in flight.
  const currentPassIds = React.useRef<Set<string>>(new Set());

  const collectResolved = React.useCallback(
    (record: ResolvedNodeRecord) => {
      if (!registerNode) return;
      currentPassIds.current.add(record.id);
      registerNode(record);
    },
    [registerNode]
  );

  const rendered = React.useMemo(
    () => renderNode(spec, { React, registry, runtime, onNodeResolved: collectResolved }),
    [spec, registry, runtime, collectResolved]
  );

  // Prunes nodes that stopped resolving on a spec update without a full
  // unmount (matches mount.ts's RuntimeSelectionRoot — see its comment for
  // why this can read currentPassIds directly instead of deferring through
  // another queueMicrotask: by the time this effect runs, the pass that
  // triggered it has already finished resolving).
  React.useEffect(() => {
    if (!unregisterNode) return;
    const thisPassIds = currentPassIds.current;
    registeredIds.current.forEach((id) => {
      if (!thisPassIds.has(id)) unregisterNode(id);
    });
    registeredIds.current = thisPassIds;
    currentPassIds.current = new Set();
  }, [spec, unregisterNode]);

  React.useEffect(() => {
    return () => {
      if (unregisterNode) {
        registeredIds.current.forEach((id) => unregisterNode(id));
      }
      registeredIds.current = new Set();
    };
  }, [unregisterNode]);

  return <>{rendered}</>;
}

export default SpecBoundary;
