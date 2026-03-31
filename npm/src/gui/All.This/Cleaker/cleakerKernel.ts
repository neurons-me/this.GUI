import ME from "this.me";
import cleaker, { SemanticResolver } from "cleaker";
import render from "@/runtime/run-me";
import { normalizeEndpoint, readSessionUsername } from "./cleakerBridge";
import { SESSION_SECRET_STORAGE_KEY } from "./runtimeUsername";

export type CleakerKernelContext = {
  me: any;
  node: any;
  runtime: ReturnType<typeof render>;
  endpoint: string;
  rootNamespace: string;
  sessionNamespace: string;
  fetcher: typeof fetch;
};

type CreateCleakerKernelOptions = {
  endpoint: string;
  rootNamespace: string;
};

function readStorageValue(key: string): string {
  if (typeof window === "undefined") return "";
  try {
    return String(localStorage.getItem(key) || "").trim();
  } catch {
    return "";
  }
}

function createBrowserSemanticFetcher(): typeof fetch {
  return async (input, init) => {
    const nextInit = { ...(init || {}) } as RequestInit;
    const headers = new Headers(nextInit.headers || {});
    const requestedHost = headers.get("host") || headers.get("Host");

    if (requestedHost && !headers.has("x-forwarded-host")) {
      headers.set("x-forwarded-host", requestedHost);
    }

    headers.delete("host");
    headers.delete("Host");
    nextInit.headers = headers;
    return fetch(input, nextInit);
  };
}

function parseEndpointDefaults(endpoint: string): {
  protocol: string;
  host: string;
  port: number | null;
} {
  try {
    const url = new URL(endpoint);
    return {
      protocol: url.protocol.replace(/:$/, "") || "http",
      host: url.hostname || "localhost",
      port: url.port ? Number(url.port) : null,
    };
  } catch {
    return {
      protocol: "http",
      host: "localhost",
      port: null,
    };
  }
}

function isPendingToken(value: unknown): value is { promise: Promise<unknown> } {
  if (!value || typeof value !== "object") return false;
  const maybePromise = (value as { promise?: unknown }).promise;
  return !!maybePromise && typeof (maybePromise as Promise<unknown>).then === "function";
}

export function buildSemanticTarget(namespace: string, path: string): string {
  const safeNamespace = String(namespace || "").trim().replace(/^\/+|\/+$/g, "");
  const safePath = String(path || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\./g, "/");

  if (!safeNamespace) return safePath;
  if (!safePath) return safeNamespace;
  return `${safeNamespace}/${safePath}`;
}

export async function createCleakerKernelContext({
  endpoint,
  rootNamespace,
}: CreateCleakerKernelOptions): Promise<CleakerKernelContext> {
  const safeEndpoint = normalizeEndpoint(endpoint);
  const safeRootNamespace = String(rootNamespace || "").trim().toLowerCase();
  const { protocol, host, port } = parseEndpointDefaults(safeEndpoint);
  const sessionUsername = readSessionUsername();
  const sessionSecret = readStorageValue(SESSION_SECRET_STORAGE_KEY);
  const sessionNamespace =
    sessionUsername && safeRootNamespace ? `${sessionUsername}.${safeRootNamespace}` : "";

  const me = new ME() as any;
  const fetcher = createBrowserSemanticFetcher();
  const semanticResolver = new SemanticResolver([], {
    namespaceRoot: safeRootNamespace || undefined,
    protocol,
    host,
    port: port ?? undefined,
  });

  const node = cleaker(me, {
    origin: safeEndpoint,
    fetcher,
    namespace: sessionNamespace || undefined,
    secret: sessionNamespace && sessionSecret ? sessionSecret : undefined,
    semanticResolver,
    semanticDefaults: {
      namespaceRoot: safeRootNamespace || undefined,
      protocol,
      host,
      port: port ?? undefined,
    },
    semanticNamespaceRoot: safeRootNamespace || undefined,
    semanticTransportAllowlist: [protocol],
  }) as any;

  try {
    await node?.ready;
  } catch {
    // Public runtime should still work even if auto-open fails.
  }

  if (typeof node?.bindKernelResolver === "function") {
    node.bindKernelResolver({
      resolveOptions: {
        fetcher,
        headers: {
          accept: "application/json",
        },
      },
    });
  }

  return {
    me,
    node,
    runtime: render(me),
    endpoint: safeEndpoint,
    rootNamespace: safeRootNamespace,
    sessionNamespace,
    fetcher,
  };
}

export async function resolveSemanticBranch(
  context: CleakerKernelContext | null | undefined,
  target: string,
): Promise<unknown> {
  if (typeof context?.node !== "function") return undefined;

  const initial = context.node(target);
  if (isPendingToken(initial)) {
    try {
      await initial.promise;
    } catch {
      // Keep behavior graceful for missing/unpublished branches.
    }
  }
  return context.node(target);
}

export function readKernelBranch(runtime: ReturnType<typeof render> | null | undefined, path: string): unknown {
  if (!runtime?.resolve) return undefined;
  return runtime.resolve(`me/${String(path || "").trim().replace(/^\/+/, "")}`, null, {
    type: "CleakerKernelRead",
    propKey: path,
  });
}
