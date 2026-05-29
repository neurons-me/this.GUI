

import { useCallback, useEffect, useState } from 'react';
import type { MeLike } from '@/react/types';
import { readMeValue } from '@/runtime/run-me';

const KERNEL_CLEAKER_IDENTITY_PATH = 'identity.session';
const KERNEL_CLEAKER_CANONICAL_AUTH_PATH = 'auth';
const LS_KEY = 'cleaker:profile:v1';

function loadPersistedProfile(): Partial<ActiveProfile> {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as Partial<ActiveProfile>) : {};
  } catch { return {}; }
}

function persistProfile(profile: Partial<ActiveProfile>): void {
  try { localStorage.setItem(LS_KEY, JSON.stringify(profile)); } catch { /* ignore */ }
}

function clearPersistedProfile(): void {
  try { localStorage.removeItem(LS_KEY); } catch { /* ignore */ }
}

type ActiveProfile = {
  username: string;
  name: string;
  email: string;
  phone: string;
  namespace: string;
  claimedAt: number | null;
};

type UseCleakerProfileRuntimeOptions = {
  me: MeLike;
  runtime: any;
  sanitizeRuntimeUsername: (raw: string) => string;
};

export type UseCleakerProfileRuntimeResult = {
  activeProfileUsername: string;
  activeProfileName: string;
  activeProfileEmail: string;
  activeProfilePhone: string;
  activeIdentityNamespace: string;
  claimedAt: number | null;
  sessionAuthenticated: boolean;
  updateProfileFromAuth: (profile: ActiveProfile) => void;
  clearProfileState: () => void;
};

export function useCleakerProfileRuntime({
  me,
  runtime,
  sanitizeRuntimeUsername,
}: UseCleakerProfileRuntimeOptions): UseCleakerProfileRuntimeResult {
  // Read new root path first; fall back to legacy profile.* for existing kernels.
  // Writes always go to root, so after one write cycle the legacy path is abandoned.
  // localStorage is the fallback so name/email/phone survive page reloads.
  const persisted = loadPersistedProfile();

  const [activeProfileUsername, setActiveProfileUsername] = useState(() =>
    sanitizeRuntimeUsername(
      String(readMeValue(me, 'username') || readMeValue(me, 'profile.username') || persisted.username || ''),
    ),
  );

  const [activeProfileName, setActiveProfileName] = useState(() =>
    String(readMeValue(me, 'name') || readMeValue(me, 'profile.name') || persisted.name || '').trim(),
  );

  const [activeProfileEmail, setActiveProfileEmail] = useState(() =>
    String(readMeValue(me, 'email') || readMeValue(me, 'profile.email') || persisted.email || '').trim(),
  );

  const [activeProfilePhone, setActiveProfilePhone] = useState(() =>
    String(readMeValue(me, 'phone') || readMeValue(me, 'profile.phone') || persisted.phone || '').trim(),
  );

  const [activeIdentityNamespace, setActiveIdentityNamespace] = useState(() =>
    String(readMeValue(me, `${KERNEL_CLEAKER_IDENTITY_PATH}.namespace`) || '').trim(),
  );

  const [claimedAt, setClaimedAt] = useState<number | null>(() => {
    const value = Number(readMeValue(me, `${KERNEL_CLEAKER_CANONICAL_AUTH_PATH}.claimed_at`));
    return Number.isFinite(value) && value > 0 ? value : null;
  });

  const [sessionAuthenticated, setSessionAuthenticated] = useState(() =>
    Boolean(readMeValue(me, 'identity.session.authenticated')),
  );

  const updateProfileFromAuth = useCallback((profile: ActiveProfile) => {
    setActiveProfileUsername(profile.username);
    setActiveProfileName(profile.name);
    setActiveProfileEmail(profile.email);
    setActiveProfilePhone(profile.phone);
    setActiveIdentityNamespace(profile.namespace);
    setClaimedAt(profile.claimedAt);
    setSessionAuthenticated(true);
    // Persist so name/email/phone survive page reloads
    persistProfile({
      username: profile.username,
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      namespace: profile.namespace,
      claimedAt: profile.claimedAt,
    });
  }, []);

  const clearProfileState = useCallback(() => {
    setActiveProfileUsername('');
    setActiveProfileName('');
    setActiveProfileEmail('');
    setActiveProfilePhone('');
    setActiveIdentityNamespace('');
    setClaimedAt(null);
    setSessionAuthenticated(false);
    clearPersistedProfile();
  }, []);

  useEffect(() => {
    void runtime;
  }, [me, runtime]);

  return {
    activeProfileUsername,
    activeProfileName,
    activeProfileEmail,
    activeProfilePhone,
    activeIdentityNamespace,
    claimedAt,
    sessionAuthenticated,
    updateProfileFromAuth,
    clearProfileState,
  };
}

export default useCleakerProfileRuntime;
