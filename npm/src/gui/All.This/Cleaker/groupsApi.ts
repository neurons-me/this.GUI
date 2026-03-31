import { normalizeEndpoint, readSessionUsername, writeRouteHash } from "./cleakerBridge";

export type SemanticCommitEvent = {
  namespace: string;
  path: string;
  operator?: string | null;
  data: unknown;
  signature?: string | null;
  expectedPrevHash?: string | null;
  timestamp?: number;
};

export type GroupCreationInput = {
  endpoint: string;
  rootNamespace: string;
  groupKey: string;
  name: string;
  creatorUsername?: string;
};

export function normalizeGroupKey(input: string): string {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[-_.]+|[-_.]+$/g, "");
}

export function inferGroupKey(name: string): string {
  return normalizeGroupKey(name);
}

export function createGroupId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `group-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export async function commitSemanticEvents(
  endpoint: string,
  events: SemanticCommitEvent[],
): Promise<void> {
  const safeEndpoint = normalizeEndpoint(endpoint);
  if (!safeEndpoint) throw new Error("Missing monad.ai endpoint");
  if (!Array.isArray(events) || events.length === 0) {
    throw new Error("No semantic events to commit");
  }

  const response = await fetch(`${safeEndpoint}/api/v1/commit`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ events }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(
      String((payload as { error?: string } | null)?.error || `HTTP ${response.status}`),
    );
  }

  const results = Array.isArray((payload as { results?: unknown[] } | null)?.results)
    ? ((payload as { results: Array<{ ok?: boolean; error?: string }> }).results || [])
    : [];
  const failed = results.filter((entry) => !entry?.ok);
  if (failed.length > 0) {
    throw new Error(
      failed.map((entry) => String(entry.error || "Semantic commit failed")).join("; "),
    );
  }
}

export async function createGroup({
  endpoint,
  rootNamespace,
  groupKey,
  name,
  creatorUsername,
}: GroupCreationInput): Promise<{ groupKey: string; namespace: string }> {
  const safeRootNamespace = String(rootNamespace || "").trim().toLowerCase();
  const safeGroupKey = normalizeGroupKey(groupKey);
  const safeName = String(name || "").trim();
  const safeCreator = String(creatorUsername || readSessionUsername() || "")
    .trim()
    .toLowerCase();

  if (!safeRootNamespace) throw new Error("Missing root namespace");
  if (!safeGroupKey) throw new Error("Group key is required");
  if (!safeName) throw new Error("Group name is required");

  const timestamp = Date.now();
  const createdAt = new Date(timestamp).toISOString();
  const groupId = createGroupId();
  const creatorNamespace =
    safeCreator && safeRootNamespace ? `${safeCreator}.${safeRootNamespace}` : "";

  const events: SemanticCommitEvent[] = [
    {
      namespace: safeRootNamespace,
      path: `groups.${safeGroupKey}.id`,
      data: groupId,
      timestamp,
    },
    {
      namespace: safeRootNamespace,
      path: `groups.${safeGroupKey}.name`,
      data: safeName,
      timestamp: timestamp + 1,
    },
    {
      namespace: safeRootNamespace,
      path: `groups.${safeGroupKey}.created_at`,
      data: createdAt,
      timestamp: timestamp + 2,
    },
  ];

  if (creatorNamespace) {
    events.push(
      {
        namespace: safeRootNamespace,
        path: `groups.${safeGroupKey}.created_by`,
        data: creatorNamespace,
        timestamp: timestamp + 3,
      },
      {
        namespace: safeRootNamespace,
        path: `groups.${safeGroupKey}.member.${safeCreator}`,
        data: creatorNamespace,
        timestamp: timestamp + 4,
      },
    );
  }

  await commitSemanticEvents(endpoint, events);
  return {
    groupKey: safeGroupKey,
    namespace: safeRootNamespace,
  };
}

export function openCreatedGroup(groupKey: string): void {
  writeRouteHash(`/groups/${normalizeGroupKey(groupKey)}`);
}
