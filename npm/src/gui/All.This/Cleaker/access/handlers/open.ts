import type { OpenSessionInput, OpenSessionResult } from '../types';
import { readKernelString, writeKernelEntries } from '../internal';
import { resolveSession } from './resolveSession';

export function openCleakerSession(input: OpenSessionInput): OpenSessionResult {
  const namespace = String(input.namespace || '').trim();
  const profileUsername = readKernelString(input, 'profile.username');
  const username = String(input.username || profileUsername).trim();
  const authenticated = input.authenticated !== false;
  const viewMode = input.viewMode || (authenticated ? 'profile' : 'login');

  writeKernelEntries(input, [
    { path: 'identity.session.username', value: username },
    { path: 'identity.session.namespace', value: namespace },
    { path: 'identity.session.authenticated', value: authenticated },
    { path: 'runtime.cleaker.authenticated', value: authenticated },
    { path: 'ui.cleaker.viewMode', value: viewMode },
  ]);

  return {
    success: true,
    session: resolveSession(input),
  };
}
