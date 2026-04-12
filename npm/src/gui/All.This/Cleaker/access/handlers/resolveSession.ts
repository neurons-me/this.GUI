import type { ResolveSessionInput, ResolvedCleakerSession } from '../types';
import { readKernelBoolean, readKernelNumber, readKernelString } from '../internal';

export function resolveSession(input: ResolveSessionInput): ResolvedCleakerSession {
  const profileUsername = readKernelString(input, 'profile.username');
  const sessionUsername = readKernelString(input, 'identity.session.username');
  const namespace = readKernelString(input, 'identity.session.namespace');
  const claimedAt = readKernelNumber(input, 'auth.claimed_at');
  const authenticated = readKernelBoolean(input, 'runtime.cleaker.authenticated');
  const viewMode = readKernelString(input, 'ui.cleaker.viewMode') || 'login';
  const username = sessionUsername || profileUsername;
  const hasSession = Boolean(namespace && authenticated);
  const isClaimed = Boolean(profileUsername && claimedAt && namespace);

  return {
    username,
    profileUsername,
    namespace,
    claimedAt,
    authenticated,
    hasSession,
    isClaimed,
    viewMode,
  };
}
