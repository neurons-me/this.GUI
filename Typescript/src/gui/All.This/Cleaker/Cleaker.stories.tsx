import * as React from "react";
import type { Meta } from "@storybook/react";
import Theme from "@/gui/Theme/Theme";
import { SeedSessionProvider, useOptionalSeedSessionContext } from "@/react/session/SeedSessionProvider";
import CleakerLanding from "@/react/session/CleakerLanding";
import Cleaker from "./Cleaker";

// One title group, two real components: CleakerLanding (the full-page
// identity landing netget's App.jsx renders at local.cleaker) and Cleaker
// (the compact card widget used elsewhere). Kept in one file — rather than
// split across CleakerLanding's own directory — specifically so Storybook's
// within-file declaration order can guarantee Default (CleakerLanding)
// sorts before Card View (Cleaker): the array form of .storybook/preview.tsx's
// storySort only documents group-level ordering, not story-level ordering
// within a merged group across files (confirmed against Storybook's own
// docs) — declaration order in one file is the reliable mechanism instead.
const meta: Meta = {
  title: "All.This/Cleaker/Cleaker",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => (
  <Theme>
    <SeedSessionProvider>
      <CleakerLanding cleakerEndpoint="http://local.cleaker" />
    </SeedSessionProvider>
  </Theme>
);

export const CardView = () => <Cleaker />;

// Exercises SeedSessionProvider's sessionBackend="cleaker" opt-in directly
// (loginWithCredentials(), given an explicit root namespace) rather than
// through CleakerLanding/MeLauncher's UI — those don't pass a namespace to
// loginWithCredentials() today (they rely on resolveSeedFromCredentials to
// supply one, which the cleaker backend deliberately bypasses — see
// SeedSessionProviderProps.sessionBackend's own doc comment). Wiring
// CleakerLanding itself onto this backend is the real login flow's
// eventual cutover, not this story's job — this proves the backend itself
// works, in isolation, against the real running monad.
function CleakerBackendSmokeTestInner() {
  const session = useOptionalSeedSessionContext();
  const [username] = React.useState(() => `storysmoke_${Date.now().toString(36)}`);
  const [log, setLog] = React.useState<string[]>([]);

  if (!session) return null;

  const append = (line: string) => setLog((prev) => [...prev, line]);

  const runClaim = async () => {
    append(`claiming ${username}.local.cleaker via cleaker backend…`);
    try {
      await session.loginWithCredentials({
        username,
        password: 'story-smoke-test-throwaway-password',
        namespace: 'local.cleaker',
      });
      append('ok — see authenticated/semanticNamespace/identityHash below');
    } catch (err) {
      append(`failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: 'monospace', color: '#e6e6e6', background: '#111', minHeight: '100vh' }}>
      <p>sessionBackend=&quot;cleaker&quot; — claims/opens a real THROWAWAY namespace against local.cleaker&apos;s real monad, through cleaker&apos;s own signed-proof path, not monadClient.ts&apos;s REST-only one.</p>
      <button type="button" onClick={runClaim}>Claim &amp; open {username}.local.cleaker</button>
      <p>authenticated: {String(session.authenticated)}</p>
      <p>semanticNamespace: {session.semanticNamespace ?? '(none)'}</p>
      <p>identityHash: {session.identityHash ?? '(none)'}</p>
      <pre>{log.join('\n')}</pre>
    </div>
  );
}

export const CleakerBackendSmokeTest = () => (
  <Theme>
    <SeedSessionProvider transportOrigin="http://local.cleaker/apps/netget" sessionBackend="cleaker">
      <CleakerBackendSmokeTestInner />
    </SeedSessionProvider>
  </Theme>
);
