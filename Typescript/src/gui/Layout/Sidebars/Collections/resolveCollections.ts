import type {
  SideBarsCollection,
  SideBarsCollectionInput,
  SideBarsCollectionSlot,
} from './types';

type SlotKey =
  | 'leftSidebar'
  | 'leftSidebarFooter'
  | 'rightSidebar'
  | 'rightSidebarFooter'
  | 'rightBar'
  | 'rightBarFooter'
  | 'topBarCenter'
  | 'topBarRight'
  | 'footerLeft'
  | 'footerCenter'
  | 'footerRight';

function normalizeCollections(collections?: SideBarsCollectionInput[]): SideBarsCollection[] {
  if (!Array.isArray(collections) || collections.length === 0) return [];
  return collections.filter(Boolean) as SideBarsCollection[];
}

function resolveSlot<TElement>(
  collections: SideBarsCollectionInput[] | undefined,
  key: SlotKey,
  slot: SideBarsCollectionSlot
): TElement[] {
  return normalizeCollections(collections).flatMap((collection) => {
    const definition = collection[key];
    if (!definition) return [];
    const resolved =
      typeof definition === 'function'
        ? definition({ slot, collectionId: collection.id })
        : definition;
    return Array.isArray(resolved) ? (resolved.filter(Boolean) as TElement[]) : [];
  });
}

export function mergeLeftSidebarCollections<TElement>(
  elements: TElement[] | undefined,
  collections: SideBarsCollectionInput[] | undefined,
  slot: 'leftSidebar' | 'leftSidebarFooter'
): TElement[] {
  return [...(elements ?? []), ...resolveSlot<TElement>(collections, slot, slot)];
}

export function mergeRightBarCollections<TElement>(
  elements: TElement[] | undefined,
  collections: SideBarsCollectionInput[] | undefined,
  slot: 'rightBar' | 'rightBarFooter'
): TElement[] {
  const legacySlot = slot === 'rightBar' ? 'rightSidebar' : 'rightSidebarFooter';
  return [
    ...(elements ?? []),
    ...resolveSlot<TElement>(collections, slot, slot),
    ...resolveSlot<TElement>(collections, legacySlot, legacySlot),
  ];
}

export const mergeRightSidebarCollections = mergeRightBarCollections;

export function mergeTopBarCollections<TElement>(
  elements: TElement[] | undefined,
  collections: SideBarsCollectionInput[] | undefined,
  slot: 'topBarCenter' | 'topBarRight'
): TElement[] {
  return [...(elements ?? []), ...resolveSlot<TElement>(collections, slot, slot)];
}

export function mergeFooterCollections<TElement>(
  elements: TElement[] | undefined,
  collections: SideBarsCollectionInput[] | undefined,
  slot: 'footerLeft' | 'footerCenter' | 'footerRight'
): TElement[] {
  return [...(elements ?? []), ...resolveSlot<TElement>(collections, slot, slot)];
}
