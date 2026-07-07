import { useCallback, useReducer, useRef } from 'react';
import type { CollectionData, CollectionGroup, CollectionInteraction } from './Collection.types';

type State = {
  interaction: CollectionInteraction;
  dragSourceId: string | null;
  dropTargetId: string | null;
  expandedGroupId: string | null;
};

type Action =
  | { type: 'WIGGLE_START' }
  | { type: 'WIGGLE_STOP' }
  | { type: 'DRAG_START'; id: string }
  | { type: 'DRAG_OVER'; id: string }
  | { type: 'DRAG_END' }
  | { type: 'GROUP_EXPAND'; id: string }
  | { type: 'GROUP_COLLAPSE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'WIGGLE_START':
      return { ...state, interaction: 'wiggle' };
    case 'WIGGLE_STOP':
      return { ...state, interaction: 'idle', dragSourceId: null, dropTargetId: null };
    case 'DRAG_START':
      return { ...state, interaction: 'dragging', dragSourceId: action.id };
    case 'DRAG_OVER':
      return { ...state, dropTargetId: action.id };
    case 'DRAG_END':
      return { ...state, interaction: 'wiggle', dragSourceId: null, dropTargetId: null };
    case 'GROUP_EXPAND':
      return { ...state, expandedGroupId: action.id, interaction: 'expanded' };
    case 'GROUP_COLLAPSE':
      return { ...state, expandedGroupId: null, interaction: 'idle' };
    default:
      return state;
  }
}

const LONG_PRESS_MS = 500;

export function useCollection(data: CollectionData, onChange?: (c: CollectionData) => void) {
  const [state, dispatch] = useReducer(reducer, {
    interaction: 'idle',
    dragSourceId: null,
    dropTargetId: null,
    expandedGroupId: null,
  });

  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelLongPress = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const handlePointerDown = useCallback((id: string) => {
    if (state.interaction === 'wiggle') return;
    longPressTimer.current = setTimeout(() => {
      dispatch({ type: 'WIGGLE_START' });
    }, LONG_PRESS_MS);
  }, [state.interaction]);

  const handlePointerUp = useCallback(() => {
    cancelLongPress();
  }, [cancelLongPress]);

  const stopWiggle = useCallback(() => {
    dispatch({ type: 'WIGGLE_STOP' });
  }, []);

  const handleDragStart = useCallback((id: string, e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    dispatch({ type: 'DRAG_START', id });
  }, []);

  const handleDragOver = useCallback((id: string, e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (id !== state.dragSourceId) dispatch({ type: 'DRAG_OVER', id });
  }, [state.dragSourceId]);

  const handleDrop = useCallback((targetId: string) => {
    const sourceId = state.dragSourceId;
    if (!sourceId || sourceId === targetId) {
      dispatch({ type: 'DRAG_END' });
      return;
    }

    const sourceIsItem = data.items.some(i => i.id === sourceId);
    const targetIsItem = data.items.some(i => i.id === targetId);
    const targetGroup = (data.groups ?? []).find(g => g.id === targetId);

    if (targetGroup) {
      // drop onto existing group → add source to it
      const next: CollectionData = {
        ...data,
        items: data.items.filter(i => i.id !== sourceId),
        groups: (data.groups ?? []).map(g =>
          g.id === targetId ? { ...g, itemIds: [...g.itemIds, sourceId] } : g
        ),
      };
      onChange?.(next);
    } else if (sourceIsItem && targetIsItem) {
      // drop item onto item → create new group with both
      const newGroup: CollectionGroup = {
        id: `group-${Date.now()}`,
        label: 'Group',
        itemIds: [sourceId, targetId],
      };
      const next: CollectionData = {
        ...data,
        items: data.items.filter(i => i.id !== sourceId && i.id !== targetId),
        groups: [...(data.groups ?? []), newGroup],
      };
      onChange?.(next);
    }

    dispatch({ type: 'DRAG_END' });
  }, [state.dragSourceId, data, onChange]);

  const expandGroup = useCallback((id: string) => {
    dispatch({ type: 'GROUP_EXPAND', id });
  }, []);

  const collapseGroup = useCallback(() => {
    dispatch({ type: 'GROUP_COLLAPSE' });
  }, []);

  const renameGroup = useCallback((groupId: string, label: string) => {
    onChange?.({
      ...data,
      groups: (data.groups ?? []).map(g => g.id === groupId ? { ...g, label } : g),
    });
  }, [data, onChange]);

  const removeFromGroup = useCallback((groupId: string, itemId: string) => {
    const group = (data.groups ?? []).find(g => g.id === groupId);
    if (!group) return;
    const item = data.items.find(i => i.id === itemId) ??
      data.groups?.flatMap(g => g.itemIds).includes(itemId)
        ? undefined : undefined;

    const restoredItem = data.items.find(i => i.id === itemId);
    const remainingIds = group.itemIds.filter(id => id !== itemId);

    if (remainingIds.length < 2) {
      // dissolve group
      const survivingIds = remainingIds;
      onChange?.({
        ...data,
        items: [
          ...data.items,
          ...(restoredItem ? [restoredItem] : []),
          ...data.items.filter(i => survivingIds.includes(i.id)),
        ],
        groups: (data.groups ?? []).filter(g => g.id !== groupId),
      });
    } else {
      onChange?.({
        ...data,
        groups: (data.groups ?? []).map(g =>
          g.id === groupId ? { ...g, itemIds: remainingIds } : g
        ),
      });
    }
  }, [data, onChange]);

  return {
    interaction: state.interaction,
    dragSourceId: state.dragSourceId,
    dropTargetId: state.dropTargetId,
    expandedGroupId: state.expandedGroupId,
    handlePointerDown,
    handlePointerUp,
    cancelLongPress,
    stopWiggle,
    handleDragStart,
    handleDragOver,
    handleDrop,
    expandGroup,
    collapseGroup,
    renameGroup,
    removeFromGroup,
  };
}
