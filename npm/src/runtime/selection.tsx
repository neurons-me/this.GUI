/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { ResolvedNodeRecord } from './renderer';
import { selectionStore, type SelectionMeta } from './selectionStore';

type SelectionState = {
  inspectorEnabled: boolean;
  setInspectorEnabled: (enabled: boolean) => void;
  selectedNodeId: string | null;
  selected: ResolvedNodeRecord | null;
  selectNode: (id: string | null) => void;
  clearSelection: () => void;
  registerNode: (record: ResolvedNodeRecord) => void;
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
  const selectNode = selectionStore.actions.selectNode;
  const clearSelection = selectionStore.actions.clearSelection;
  const getNode = selectionStore.actions.getNode;
  const getNodeByPath = selectionStore.actions.getNodeByPath;
  const setSelectedMeta = selectionStore.actions.setSelectedMeta;
  const setInspectorEnabled = selectionStore.actions.setInspectorEnabled;
  const selected = state.selectedNodeId ? state.records[state.selectedNodeId] ?? null : null;

  const value = React.useMemo<SelectionState>(
    () => ({
      inspectorEnabled: state.inspectorEnabled,
      setInspectorEnabled,
      selectedNodeId: state.selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      getNode,
      getNodeByPath,
      selectedMeta: state.selectedMeta,
      setSelectedMeta,
    }),
    [
      state.inspectorEnabled,
      state.selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      getNode,
      getNodeByPath,
      state.selectedMeta,
      setSelectedMeta,
      setInspectorEnabled,
    ]
  );

  React.useEffect(() => {
    selectionStore.actions.setInspectorEnabled(Boolean(initialInspectorEnabled));
  }, [initialInspectorEnabled]);

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}
