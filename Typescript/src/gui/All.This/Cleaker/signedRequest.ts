// signedRequest — the X-Me-Proof signing protocol, extracted from useCleakerAuth.ts
// so it can be called outside that hook's full login/registration state machine.
// Framework-free on purpose: no React, no refs, no hidden state. Callers own the
// node/hostname and pass them explicitly.
//
// This is the one production implementation of the protocol netget's gateway
// verifies in lua/middleware/me_sig.lua (see modules/netget/Typescript/docs/
// GatewayCapabilityModel.md) — useCleakerAuth.ts's signedFetch is a thin
// React-ref-backed wrapper around the same functions exported here.

import MeKernel from 'this.me';
import cleaker from 'cleaker';

// Canonical JSON (sorted keys) for tamper-proof request fingerprinting.
export function canonicalJson(obj: Record<string, unknown>): string {
  return JSON.stringify(
    Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))),
  );
}

// Random hex nonce — client-generated, marks each request uniquely.
export function genNonce(): string {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
}

// SHA-256 of the exact request body, hex-encoded. Binds the signature to the
// payload, not just method+path — without this, a signed request proves "this
// identity authorized a call to this endpoint right now", not "authorized this
// value". Hashed even for empty bodies (GETs) so the challenge shape is uniform.
export async function sha256Hex(data: string): Promise<string> {
  const bytes = new TextEncoder().encode(data);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Step 1 of the gateway-first flow: the physical hostname IS the namespace —
// not the virtual alias (e.g. "local.netget") a browser might be pointed at.
// Throws with a distinct message per failure mode — "unreachable" and
// "reachable but no hostname" are different operator-facing problems (nginx
// down vs. gateway misconfigured), and collapsing them into one generic
// message sends whoever's debugging it to the wrong place.
export async function fetchGatewayHostname(): Promise<string> {
  const res = await fetch('/me/gateway').catch(() => null);
  if (!res?.ok) throw new Error('Could not reach gateway. Is nginx running?');
  const data = await res.json().catch(() => ({}));
  const hostname = typeof data?.hostname === 'string' ? data.hostname.trim() : '';
  if (!hostname) throw new Error('Gateway did not return a hostname.');
  return hostname;
}

// Step 2: seed a .me kernel from username+secret, then bind it to this
// physical gateway via cleaker(me, hostname) — "who am I HERE". Cleaker does
// not add a second cryptographic identity system; it composes the namespace
// this gateway's proof verification is scoped to, then calls .me's own
// prove() with it (see modules/cleaker/Typescript/src/binder.ts,
// proveKernelNamespace). The secret is consumed here and never stored —
// only the derived node (holding the Ed25519 key, not the secret) is returned.
export function deriveCleakerNode(username: string, secret: string, hostname: string): unknown {
  const ME_RESEED = Symbol.for('me.internal.reseed');
  const me = new (MeKernel as any)();
  (me as any)[ME_RESEED](username, secret);
  return cleaker(me as any, hostname);
}

// signedFetch's protocol, as a plain function: sign { method, path, bodyHash,
// nonce, timestamp } with the given node's Ed25519 key, attach it as
// X-Me-Proof, send the request. Falls back to plain fetch only if signing
// itself throws (e.g. a stale/invalid node) — never silently proceeds
// unsigned when a node was supplied.
export async function signedRequest(
  node: unknown,
  hostname: string,
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  if (!node || !hostname) return fetch(input, init);

  const method    = (init?.method ?? 'GET').toUpperCase();
  const url       = typeof input === 'string' ? input
                  : input instanceof URL       ? input.pathname
                  : (input as Request).url;
  const path      = new URL(url, window.location.origin).pathname;
  const nonce     = genNonce();
  const timestamp = Date.now();
  const bodyStr   = typeof init?.body === 'string' ? init.body : '';
  const bodyHash  = await sha256Hex(bodyStr);

  const challenge = canonicalJson({ method, path, bodyHash, nonce, timestamp });

  try {
    const proof    = await (node as any).prove({ rootNamespace: hostname, challenge });
    const proofB64 = btoa(JSON.stringify(proof))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    return fetch(input, {
      ...init,
      headers: {
        ...(init?.headers ?? {}),
        'X-Me-Proof': proofB64,
      },
    });
  } catch {
    // prove() failed (key gone / session ended) → plain fetch, will get 401.
    return fetch(input, init);
  }
}
