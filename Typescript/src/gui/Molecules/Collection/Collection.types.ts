export type CollectionItem = {
  id: string;
  label: string;
  icon?: string;
  image?: string;
  color?: string;
  data?: unknown;
};

export type CollectionGroup = {
  id: string;
  label: string;
  itemIds: string[];
};

export type CollectionData = {
  id: string;
  label?: string;
  items: CollectionItem[];
  groups?: CollectionGroup[];
  selectedId?: string;
};

export type CollectionSurface = 'grid' | 'rail' | 'sidebar' | 'mobile';

export type CollectionInteraction = 'idle' | 'wiggle' | 'dragging' | 'expanded';

export type CollectionProps = {
  collection: CollectionData;
  surface?: CollectionSurface;
  columns?: number;
  onSelect?: (item: CollectionItem) => void;
  onChange?: (collection: CollectionData) => void;
  renderItem?: (item: CollectionItem) => React.ReactNode;
  sx?: any;
};
