import { useEffect, useMemo, useRef } from 'react';
import type { MeLike } from '@/react/types';
import { writeMeValue } from '@/runtime/run-me';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type KernelSyncEntry = {
  path: string;
  value: unknown;
};

export type KernelSyncBlock = {
  /** The root path to write under, e.g. "identity.session" */
  path: string;
  /** The state object whose keys become sub-paths */
  value: Record<string, unknown>;
};

export type UseCleakerKernelSyncOptions = {
  me: MeLike;
  runtime: unknown;
  /**
   * A list of {path, value} blocks to sync.
   * Each block's value is recursively flattened into leaf writes.
   * Blocks are processed in order; later entries win on key collision.
   */
  blocks: KernelSyncBlock[];
  /**
   * Optional flat entries appended after blocks.
   * Useful for one-off paths like "identity.session.authenticated".
   */
  entries?: KernelSyncEntry[];
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Normalize a value before writing or comparing.
 * undefined → null so the kernel receives an explicit clear signal.
 * Arrays and objects are recursively normalized.
 */
function normalizeSemanticValue(value: unknown): unknown {
  if (value === undefined) return null;
  if (Array.isArray(value)) return value.map(normalizeSemanticValue);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        normalizeSemanticValue(v),
      ])
    );
  }
  return value;
}

/**
 * Recursively flatten a nested object into leaf {path, value} entries.
 * Non-objects (including arrays) are written as-is at their path.
 *
 * Example:
 *   collectLeafWrites("a", { b: { c: 1 } })
 *   → [{ path: "a", value: { b: { c: 1 } } }, { path: "a.b", value: { c: 1 } }, { path: "a.b.c", value: 1 }]
 *
 * Writing the intermediate nodes as well as the leaves lets the kernel
 * resolve both "a.b.c" and "a.b" correctly.
 */
function collectLeafWrites(
  rootPath: string,
  rawValue: unknown
): KernelSyncEntry[] {
  const targetPath = String(rootPath || '').trim();
  if (!targetPath) return [];

  const value = normalizeSemanticValue(rawValue);
  const writes: KernelSyncEntry[] = [{ path: targetPath, value }];

  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return writes;
  }

  for (const [key, childValue] of Object.entries(
    value as Record<string, unknown>
  )) {
    writes.push(...collectLeafWrites(`${targetPath}.${key}`, childValue));
  }

  return writes;
}

/**
 * Write a single path to the kernel safely.
 * Swallows errors — a failed kernel write should never crash the UI.
 */
function safeWriteKernelPath(
  me: MeLike,
  runtime: unknown,
  path: string,
  value: unknown
): void {
  try {
    writeMeValue(me, path, value);
    (runtime as { notify?: (path: string) => void } | null)?.notify?.(path);
  } catch {
    // Intentionally swallowed.
  }
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * useCleakerKernelSync
 *
 * Keeps the .me kernel in sync with Cleaker's runtime state.
 *
 * Responsibilities:
 *   1. Flatten all state blocks into {path, value} leaf writes.
 *   2. Deduplicate (last-write-wins within a single render cycle).
 *   3. Cache the last-written value per path using JSON snapshot comparison.
 *   4. Write only the paths whose values have actually changed.
 *   5. Reset the cache when the kernel instance changes (e.g. after rehydrate).
 *
 * What this hook does NOT do:
 *   - It does not read from the kernel.
 *   - It does not decide what to write — that is the caller's responsibility.
 *   - It does not perform imperative mesh writes (use writeMeshRuntimeValue directly).
 *
 * Usage:
 *
 *   useCleakerKernelSync({
 *     me: runtimeMe,
 *     runtime,
 *     blocks: [
 *       { path: 'identity.session', value: identitySemanticState },
 *       { path: 'runtime.cleaker.namespace', value: namespaceSemanticState },
 *       { path: 'ui.cleaker', value: uiSemanticState },
 *       { path: 'runtime.cleaker.auth', value: authSemanticState },
 *       { path: 'auth', value: canonicalAuthSemanticState },
 *       { path: 'profile', value: profileSemanticState },
 *       { path: 'ui.cleaker.register', value: registerSemanticState },
 *     ],
 *     entries: [
 *       { path: 'identity.session.authenticated', value: runtimeAuthenticated },
 *     ],
 *   });
 */
export function useCleakerKernelSync({
  me,
  runtime,
  blocks,
  entries = [],
}: UseCleakerKernelSyncOptions): void {
  // Tracks which kernel instance we last wrote to.
  // When the instance changes, we must invalidate the cache.
  const kernelRef = useRef<MeLike | null>(null);

  // Cache: path → JSON snapshot of last written value.
  // We only call safeWriteKernelPath when the snapshot changes.
  const cacheRef = useRef<Map<string, string>>(new Map());

  // Build the full deduplicated write list from blocks + entries.
  // useMemo ensures this only recomputes when the inputs change.
  const allWrites = useMemo<KernelSyncEntry[]>(() => {
    const raw: KernelSyncEntry[] = [];

    for (const block of blocks) {
      raw.push(...collectLeafWrites(block.path, block.value));
    }

    for (const entry of entries) {
      raw.push(entry);
    }

    // Deduplicate: last-write-wins per path.
    const deduped = new Map<string, unknown>();
    for (const { path, value } of raw) {
      deduped.set(path, value);
    }

    return Array.from(deduped, ([path, value]) => ({ path, value }));
  }, [blocks, entries]);

  useEffect(() => {
    if (!me) return;

    // If the kernel instance changed, reset the cache so everything
    // is re-written to the new instance unconditionally.
    if (kernelRef.current !== me) {
      kernelRef.current = me;
      cacheRef.current = new Map();
    }

    const nextCache = new Map<string, string>();

    for (const { path, value } of allWrites) {
      const snapshot = JSON.stringify(normalizeSemanticValue(value));
      nextCache.set(path, snapshot);

      // Skip the write if the value hasn't changed since we last wrote it.
      if (cacheRef.current.get(path) === snapshot) continue;

      safeWriteKernelPath(me, runtime, path, value);
    }

    cacheRef.current = nextCache;
  }, [me, runtime, allWrites]);
}

export default useCleakerKernelSync;
