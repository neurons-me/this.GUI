import { useMemo } from 'react';
import {
  deriveChildIdentityHash,
  deriveIdentity,
  deriveIdentityRootHash,
} from '../../me/identity';

export type UseCleakerDerivedIdentityOptions = {
  secret: string;
  normalizedUsername: string;
  namespaceSeedHandle: string;
  activeNamespaceUrl: string;
  rootHostNamespace: string;
  username: string;
  sanitizeRuntimeUsername: (raw: string) => string;
};

export type UseCleakerDerivedIdentityResult = {
  globalNamespaceRootHash: string;
  subjectNamespaceHash: string;
  identityNamespace: string;
  typingNamespace: string;
  subjectHandleNamespace: string;
  identity: ReturnType<typeof deriveIdentity>;
  previewQrValue: string;
};

export function useCleakerDerivedIdentity({
  secret,
  normalizedUsername,
  namespaceSeedHandle,
  activeNamespaceUrl,
  rootHostNamespace,
  username,
  sanitizeRuntimeUsername,
}: UseCleakerDerivedIdentityOptions): UseCleakerDerivedIdentityResult {
  const globalNamespaceRootHash = useMemo(() => {
    return deriveIdentityRootHash(secret, namespaceSeedHandle || rootHostNamespace);
  }, [namespaceSeedHandle, rootHostNamespace, secret]);

  const subjectNamespaceHash = useMemo(() => {
    if (!normalizedUsername) return globalNamespaceRootHash;
    return deriveChildIdentityHash(globalNamespaceRootHash, normalizedUsername);
  }, [globalNamespaceRootHash, normalizedUsername]);

  const identityNamespace = useMemo(() => {
    return normalizedUsername
      ? `${normalizedUsername}.${namespaceSeedHandle}`
      : namespaceSeedHandle;
  }, [normalizedUsername, namespaceSeedHandle]);

  const typingNamespace = useMemo(() => {
    const draft = sanitizeRuntimeUsername(username);
    return draft ? `${draft}.${namespaceSeedHandle}` : namespaceSeedHandle;
  }, [namespaceSeedHandle, sanitizeRuntimeUsername, username]);

  const subjectHandleNamespace = useMemo(() => {
    if (!normalizedUsername) return '';
    return `${normalizedUsername}.${namespaceSeedHandle}`;
  }, [normalizedUsername, namespaceSeedHandle]);

  const identity = useMemo(() => {
    return deriveIdentity({ secret, namespace: identityNamespace });
  }, [identityNamespace, secret]);

  const previewQrValue = useMemo(() => {
    return activeNamespaceUrl || subjectNamespaceHash || globalNamespaceRootHash;
  }, [activeNamespaceUrl, globalNamespaceRootHash, subjectNamespaceHash]);

  return {
    globalNamespaceRootHash,
    subjectNamespaceHash,
    identityNamespace,
    typingNamespace,
    subjectHandleNamespace,
    identity,
    previewQrValue,
  };
}

export default useCleakerDerivedIdentity;