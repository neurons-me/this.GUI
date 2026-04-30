import type { OpenSessionInput, OpenSessionResult } from '../types';
import { readKernelString, writeKernelEntries } from '../internal';
import { resolveSession } from './resolveSession';

export function openCleakerSession(input: OpenSessionInput): OpenSessionResult {
  const namespace = String(input.namespace || '').trim();
  const profileUsername = readKernelString(input, 'profile.username');
  const username = String(input.username || profileUsername).trim();
  const identityHash = String(
    input.identityHash || readKernelString(input, 'identity.session.identityHash'),
  ).trim();
  const openedAtValue = Number(input.openedAt ?? input.now?.() ?? Date.now());
  const openedAt = Number.isFinite(openedAtValue) && openedAtValue > 0 ? openedAtValue : null;
  const authenticated = input.authenticated !== false;
  const viewMode = input.viewMode || (authenticated ? 'profile' : 'login');

  writeKernelEntries(input, [
    { path: 'identity.session.username', value: username },
    { path: 'identity.session.namespace', value: namespace },
    { path: 'identity.session.authenticated', value: authenticated },
    { path: 'identity.session.identityHash', value: identityHash },
    { path: 'identity.session.openedAt', value: openedAt },
    { path: 'ui.cleaker.viewMode', value: viewMode },
  ]);

  return {
    success: true,
    session: resolveSession(input),
  };
}
