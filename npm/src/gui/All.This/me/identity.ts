// identity.ts — derive identityRoot = hash(secret + namespace)
// by suiGn
import { keccak_256 } from "js-sha3";
export interface IdentityInput {
  secret: string;
  namespace: string; // "username@hostname:port"
}

export interface IdentityResult {
  namespace: string;
  identityRoot: string;
}

export function deriveIdentityRootHash(secret: string, namespace: string): string {
  const combined = String(secret || "") + String(namespace || "");
  return "0x" + keccak_256(combined);
}

export function deriveChildIdentityHash(parentHash: string, segment: string): string {
  const combined = String(parentHash || "") + String(segment || "");
  return "0x" + keccak_256(combined);
}

/**
 * Derives identityRoot using keccak256(secret + namespace)
 */
export function deriveIdentity({ secret, namespace }: IdentityInput): IdentityResult {
  const identityRoot = deriveIdentityRootHash(secret, namespace);
  // Log to browser console
  if (typeof window !== "undefined") {
    console.log("ME Identity Derived:");
    console.log("secret:", secret);
    console.log("namespace:", namespace);
    const masked = "••••••••••••••••••••••••••••••••" + identityRoot.slice(-4);
    console.log("identityRoot:", masked);
  }

  return { namespace, identityRoot };
}
