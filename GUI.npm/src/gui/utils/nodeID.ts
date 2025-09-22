// src/gui/utils/nodeID.ts
export function ensureNodeId(type: string, providedId?: string): string {
  if (providedId) return providedId;
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${type}-${crypto.randomUUID()}`;
  }
  return `${type}-${Math.random().toString(36).slice(2)}`;
}