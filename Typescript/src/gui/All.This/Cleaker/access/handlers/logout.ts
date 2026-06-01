import type { LogoutSessionInput, LogoutSessionResult } from '../types';
import { CLEAKER_LOGOUT_CLEAR_FIELDS, writeKernelEntries } from '../internal';
import { resolveSession } from './resolveSession';

export function logoutCleakerSession(input: LogoutSessionInput): LogoutSessionResult {
  writeKernelEntries(input, CLEAKER_LOGOUT_CLEAR_FIELDS);

  return {
    success: true,
    clearedPaths: CLEAKER_LOGOUT_CLEAR_FIELDS.map((entry) => entry.path),
    session: resolveSession(input),
  };
}
