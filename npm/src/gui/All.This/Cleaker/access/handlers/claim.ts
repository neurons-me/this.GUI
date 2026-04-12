import type { ClaimHandlerInput, ClaimHandlerResult } from '../types';
import { writeKernelEntries } from '../internal';
import { resolveSession } from './resolveSession';

export function claimCleakerNamespace(input: ClaimHandlerInput): ClaimHandlerResult {
  const username = String(input.username || '').trim();
  const namespace = String(input.namespace || '').trim();
  const claimedAt = Number(input.claimedAt || input.now?.() || Date.now());
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
    { path: 'runtime.cleaker.authenticated', value: authenticated },
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
