/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { ResolvedNodeRecord } from './renderer';

type SelectionState = {
  inspectorEnabled: boolean;
  setInspectorEnabled: (enabled: boolean) => void;
  selectedNodeId: string | null;
  selected: ResolvedNodeRecord | null;
  selectNode: (id: string | null) => void;
  clearSelection: () => void;
  registerNode: (record: ResolvedNodeRecord) => void;
  getNode: (id: string | null | undefined) => ResolvedNodeRecord | null;
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
  const [inspectorEnabled, setInspectorEnabled] = React.useState(Boolean(initialInspectorEnabled));
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null);
  const [records, setRecords] = React.useState<Record<string, ResolvedNodeRecord>>({});

  const registerNode = React.useCallback((record: ResolvedNodeRecord) => {
    setRecords((prev) => {
      const curr = prev[record.id];
      if (
        curr &&
        curr.path === record.path &&
        curr.type === record.type &&
        curr.spec === record.spec &&
        curr.resolvedProps === record.resolvedProps
      ) {
        return prev;
      }
      return { ...prev, [record.id]: record };
    });
  }, []);

  const selectNode = React.useCallback((id: string | null) => {
    setSelectedNodeId(id);
  }, []);

  const clearSelection = React.useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  const getNode = React.useCallback(
    (id: string | null | undefined) => {
      if (!id) return null;
      return records[id] ?? null;
    },
    [records]
  );

  const selected = selectedNodeId ? records[selectedNodeId] ?? null : null;

  const value = React.useMemo<SelectionState>(
    () => ({
      inspectorEnabled,
      setInspectorEnabled,
      selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      getNode,
    }),
    [
      inspectorEnabled,
      selectedNodeId,
      selected,
      selectNode,
      clearSelection,
      registerNode,
      getNode,
    ]
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

