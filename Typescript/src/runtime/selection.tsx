/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { ResolvedNodeRecord } from './renderer';
import { selectionStore, type SelectionMeta } from './selectionStore';

type SelectionState = {
  inspectorEnabled: boolean;
  setInspectorEnabled: (enabled: boolean) => void;
  gridEnabled: boolean;
  setGridEnabled: (enabled: boolean) => void;
  selectedNodeId: string | null;
  selected: ResolvedNodeRecord | null;
  selectNode: (id: string | null) => void;
  clearSelection: () => void;
  registerNode: (record: ResolvedNodeRecord) => void;
  unregisterNode: (id: string | null | undefined) => void;
  getNode: (id: string | null | undefined) => ResolvedNodeRecord | null;
  getNodeByPath: (path: string | null | undefined) => ResolvedNodeRecord | null;
  selectedMeta: SelectionMeta | null;
  setSelectedMeta: (meta: SelectionMeta | null) => void;
};

const SelectionContext = React.createContext<SelectionState | undefined>(undefined);

export function useSelection(): SelectionState {
  const ctx = React.useContext(SelectionContext);
  if (!ctx) throw new Error('useSelection must be used within SelectionProvider');
  return ctx;
}

// Non-throwing variant for components (e.g. ThemeLauncher) that are used
// both inside dev-tooling contexts (SelectionProvider present) and in real
// consumer apps that never mount it — returns undefined instead of
// crashing when there's no provider, so those components can *optionally*
// react to selection/inspector state without requiring it.
export function useOptionalSelection(): SelectionState | undefined {
  return React.useContext(SelectionContext);
}

// Registers a hand-written (non-spec-rendered) element into the same node
// registry the declarative render(spec) pipeline uses (mount.ts collects
// onNodeResolved records and calls this same registerNode/unregisterNode
// pair) — so dev-tooling chrome like ThemeLauncher/DevToolsLauncher can
// participate in the grid overlay and Semantic Inspector without being
// backed by a real spec. `spec`/`provenance` are synthetic: the Inspector's
// "Explain" panel will show them as "Not declared", same as any other
// node with no provenance contract. No-ops outside a SelectionProvider.
// The caller still renders `data-gui-node-id={id}` / `data-gui-component`
// on the element itself — this hook only adds it to the registry so
// `getNode`/`selectNode`/the highlight effect can resolve it by id.
export function useRegisterGuiNode(id: string, type: string, parentId?: string) {
  const ctx = React.useContext(SelectionContext);
  const registerNode = ctx?.registerNode;
  const unregisterNode = ctx?.unregisterNode;
  React.useEffect(() => {
    if (!registerNode || !unregisterNode) return;
    registerNode({ id, type, spec: { type }, path: id, parentId });
    return () => unregisterNode(id);
  }, [registerNode, unregisterNode, id, type, parentId]);
}

export function SelectionProvider({
  children,
  initialInspectorEnabled = false,
}: {
  children: React.ReactNode;
  initialInspectorEnabled?: boolean;
}) {
  const [state, setState] = React.useState(selectionStore.getState());

  React.useEffect(() => {
    const unsub = selectionStore.subscribe(() => {
      setState(selectionStore.getState());
    });
    return unsub;
  }, [initialInspectorEnabled]);

  const registerNode = selectionStore.actions.registerNode;
  const unregisterNode = selectionStore.actions.unregisterNode;
  const selectNode = selectionStore.actions.selectNode;
  const clearSelection = selectionStore.actions.clearSelection;
  const getNode = selectionStore.actions.getNode;
  const getNodeByPath = selectionStore.actions.getNodeByPath;
  const setSelectedMeta = selectionStore.actions.setSelectedMeta;
  const setInspectorEnabled = selectionStore.actions.setInspectorEnabled;
  const setGridEnabled = selectionStore.actions.setGridEnabled;
  const selected = state.selectedNodeId ? state.records[state.selectedNodeId] ?? null : null;

  const value = React.useMemo<SelectionState>(
    () => ({
      inspectorEnabled: state.inspectorEnabled,
      setInspectorEnabled,
      gridEnabled: state.gridEnabled,
      setGridEnabled,
      selectedNodeId: state.selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      unregisterNode,
      getNode,
      getNodeByPath,
      selectedMeta: state.selectedMeta,
      setSelectedMeta,
    }),
    [
      state.inspectorEnabled,
      state.gridEnabled,
      state.selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      unregisterNode,
      getNode,
      getNodeByPath,
      state.selectedMeta,
      setSelectedMeta,
      setInspectorEnabled,
      setGridEnabled,
    ]
  );

  React.useEffect(() => {
    selectionStore.actions.setInspectorEnabled(Boolean(initialInspectorEnabled));
  }, [initialInspectorEnabled]);

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}
