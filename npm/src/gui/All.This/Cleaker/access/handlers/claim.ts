import type { ClaimHandlerInput, ClaimHandlerResult } from '../types';
import { readKernelString, writeKernelEntries } from '../internal';
import { resolveSession } from './resolveSession';

export function claimCleakerNamespace(input: ClaimHandlerInput): ClaimHandlerResult {
  const username = String(input.username || '').trim();
  const namespace = String(input.namespace || '').trim();
  const claimedAt = Number(input.claimedAt || input.now?.() || Date.now());
  const identityHash = String(
    input.identityHash || readKernelString(input, 'identity.session.identityHash'),
  ).trim();
  const openedAtValue = Number(input.openedAt ?? claimedAt);
  const openedAt = Number.isFinite(openedAtValue) && openedAtValue > 0 ? openedAtValue : null;
  const authenticated = input.authenticated !== false;
  const profile = input.profile || {};

  writeKernelEntries(input, [
    { path: 'profile.username', value: profile.username ?? username },
    { path: 'profile.name', value: profile.name ?? null },
    { path: 'profile.avatar', value: profile.avatar ?? null },
    { path: 'profile.bio', value: profile.bio ?? null },
    { path: 'profile.email', value: profile.email ?? null },
    { path: 'profile.phone', value: profile.phone ?? null },
    { path: 'auth.claimed_at', value: claimedAt },
    { path: 'identity.session.username', value: username },
    { path: 'identity.session.namespace', value: namespace },
    { path: 'identity.session.authenticated', value: authenticated },
    { path: 'identity.session.identityHash', value: identityHash },
    { path: 'identity.session.openedAt', value: openedAt },
    { path: 'ui.cleaker.viewMode', value: authenticated ? 'profile' : 'login' },
  ]);

  return {
    success: true,
    username,
    namespace,
    claimedAt,
    authenticated,
    session: resolveSession(input),
  };
}
