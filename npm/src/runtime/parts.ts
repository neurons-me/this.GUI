import * as React from 'react';
import type {
  GuiPartSpec,
  GuiPartsSpec,
  GuiNodeProps,
  GuiNodeProvenance,
} from '@/types/gui.types';
import type { ResolvedNodeRecord } from './renderer';
import { selectionStore, type SelectionStore } from './selectionStore';

export type {
  GuiPartSpec,
  GuiPartsSpec,
  GuiNodeProps,
  GuiNodeProvenance,
} from '@/types/gui.types';

export type GuiPartRecordBuildOptions = {
  includeRoot?: boolean;
  pathBase?: string;
};

function normalizeRootId(value: string): string {
  const normalized = String(value || '').trim();
  return normalized || 'GuiNode';
}

function normalizeSegment(part: Pick<GuiPartSpec, 'part' | 'segment'>): string {
  const normalized = String(part.segment || part.part || '').trim();
  return normalized;
}

export function createGuiPartId(rootId: string, segment?: string): string {
  const normalizedRootId = normalizeRootId(rootId);
  const normalizedSegment = String(segment || '').trim();
  if (!normalizedSegment) return normalizedRootId;
  return `${normalizedRootId}/${normalizedSegment}`;
}

export function createGuiPartPath(rootId: string, segment?: string): string {
  const normalizedRootId = normalizeRootId(rootId);
  const normalizedSegment = String(segment || '').trim();
  if (!normalizedSegment) return normalizedRootId;
  return `${normalizedRootId}.${normalizedSegment}`;
}

export function createGuiPartAttrs(rootId: string, segment: string, component: string) {
  return {
    'data-gui-node-id': createGuiPartId(rootId, segment),
    'data-gui-component': component,
  };
}

export function createGuiPartHelpers(rootId: string) {
  return {
    nodeId: (segment: string) => createGuiPartId(rootId, segment),
    nodePath: (segment: string) => createGuiPartPath(rootId, segment),
    nodeAttrs: (segment: string, component: string) =>
      createGuiPartAttrs(rootId, segment, component),
  };
}

function toResolvedNodeRecord(
  rootId: string,
  type: string,
  props?: GuiNodeProps,
  segment?: string,
  options?: {
    pathBase?: string;
    provenance?: GuiNodeProvenance;
    part?: string;
    parentId?: string;
  }
): ResolvedNodeRecord {
  const id = createGuiPartId(rootId, segment);
  const path = createGuiPartPath(options?.pathBase || rootId, segment);
  return {
    id,
    path,
    type,
    part: options?.part,
    parentId: options?.parentId,
    provenance: options?.provenance,
    spec: {
      type,
      props,
      provenance: options?.provenance,
    },
    resolvedProps: props,
  };
}

function collectPartRecords(
  rootId: string,
  pathBase: string,
  parts: GuiPartSpec[],
  records: ResolvedNodeRecord[],
  parentId?: string
) {
  parts.forEach((part) => {
    const segment = normalizeSegment(part);
    if (!segment) return;
    const id = createGuiPartId(rootId, segment);

    records.push(
      toResolvedNodeRecord(rootId, part.type, part.props, segment, {
        pathBase,
        provenance: part.provenance,
        part: part.part,
        parentId,
      })
    );

    if (Array.isArray(part.children) && part.children.length) {
      collectPartRecords(rootId, pathBase, part.children, records, id);
    }
  });
}

export function buildGuiPartRecords<TPart extends string = string>(
  spec: GuiPartsSpec<TPart>,
  options: GuiPartRecordBuildOptions = {}
): ResolvedNodeRecord[] {
  const rootId = normalizeRootId(spec.root.id);
  const includeRoot = options.includeRoot !== false;
  const pathBase = String(options.pathBase || rootId).trim() || rootId;
  const records = includeRoot
    ? [
        toResolvedNodeRecord(rootId, spec.root.type, spec.root.props, undefined, {
          pathBase,
          provenance: spec.root.provenance,
        }),
      ]
    : [];

  if (Array.isArray(spec.parts) && spec.parts.length) {
    collectPartRecords(rootId, pathBase, spec.parts as GuiPartSpec[], records, rootId);
  }

  return records;
}

export function registerGuiParts<TPart extends string = string>(
  spec: GuiPartsSpec<TPart>,
  store: SelectionStore = selectionStore
) {
  const records = buildGuiPartRecords(spec);
  records.forEach((record) => store.actions.registerNode(record));

  return () => {
    records.forEach((record) => store.actions.unregisterNode(record.id));
  };
}

export function useGuiParts<TPart extends string = string>(
  spec: GuiPartsSpec<TPart>,
  store: SelectionStore = selectionStore
) {
  const helpers = React.useMemo(
    () => createGuiPartHelpers(spec.root.id),
    [spec.root.id]
  );

  React.useEffect(() => registerGuiParts(spec, store), [spec, store]);

  return helpers;
}
