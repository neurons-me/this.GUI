/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ResolvedNodeRecord } from './renderer';

export type SelectionMeta = {
  elementTag?: string;
  resolvedTag?: string;
  resolvedPath?: string[];
};

export type SelectionStateCore = {
  inspectorEnabled: boolean;
  selectedNodeId: string | null;
  records: Record<string, ResolvedNodeRecord>;
  recordsByPath: Record<string, ResolvedNodeRecord>;
  selectedMeta: SelectionMeta | null;
};

type Listener = () => void;

export type SelectionStore = {
  getState: () => SelectionStateCore;
  setState: (next: Partial<SelectionStateCore>) => void;
  subscribe: (listener: Listener) => () => void;
  actions: {
    setInspectorEnabled: (enabled: boolean) => void;
    selectNode: (id: string | null) => void;
    clearSelection: () => void;
    registerNode: (record: ResolvedNodeRecord) => void;
    getNode: (id: string | null | undefined) => ResolvedNodeRecord | null;
    getNodeByPath: (path: string | null | undefined) => ResolvedNodeRecord | null;
    setSelectedMeta: (meta: SelectionMeta | null) => void;
  };
};

const STORE_KEY = 'GUI-NODES-STORE';

function createSelectionStore(): SelectionStore {
  let state: SelectionStateCore = {
    inspectorEnabled: false,
    selectedNodeId: null,
    records: {},
    recordsByPath: {},
    selectedMeta: null,
  };
  const listeners = new Set<Listener>();

  const notify = () => {
    listeners.forEach((fn) => fn());
  };

  const setState = (next: Partial<SelectionStateCore>) => {
    state = { ...state, ...next };
    notify();
  };

  const store: SelectionStore = {
    getState: () => state,
    setState,
    subscribe: (listener: Listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    actions: {
      setInspectorEnabled: (enabled: boolean) => {
        setState({
          inspectorEnabled: Boolean(enabled),
          selectedNodeId: enabled ? state.selectedNodeId : null,
          selectedMeta: enabled ? state.selectedMeta : null,
        });
      },
      selectNode: (id: string | null) => {
        setState({ selectedNodeId: id });
      },
      clearSelection: () => {
        setState({ selectedNodeId: null, selectedMeta: null });
      },
      registerNode: (record: ResolvedNodeRecord) => {
        const curr = state.records[record.id];
        if (
          curr &&
          curr.path === record.path &&
          curr.type === record.type &&
          curr.spec === record.spec &&
          curr.resolvedProps === record.resolvedProps
        ) {
          return;
        }
        state = {
          ...state,
          records: { ...state.records, [record.id]: record },
          recordsByPath: { ...state.recordsByPath, [record.path]: record },
        };
        notify();
      },
      getNode: (id: string | null | undefined) => {
        if (!id) return null;
        return state.records[id] ?? null;
      },
      getNodeByPath: (path: string | null | undefined) => {
        if (!path) return null;
        return state.recordsByPath[path] ?? null;
      },
      setSelectedMeta: (meta: SelectionMeta | null) => {
        setState({ selectedMeta: meta });
      },
    },
  };

  return store;
}

function getGlobalStore(): SelectionStore {
  const g = globalThis as any;
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = createSelectionStore();
  }
  return g[STORE_KEY] as SelectionStore;
}

export const selectionStore = getGlobalStore();

