// MonadNamespaceCard — composes the 3 pieces of a namespace surface:
// the monad.ai orb, MonadClaims, and MonadMesh. Pure display: all data
// comes in via props, passed straight through to each sub-component.

import * as React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import Monad from '../monad.ai';
import MonadClaims, { MonadClaimIdentity } from './MonadClaims';
import MonadMesh, { MonadMeshAppEntry, MonadMeshSleepingEntry, MonadMeshRestartStatus } from './MonadMesh';

export type MonadNamespaceClaimIdentity = MonadClaimIdentity;
export type MonadNamespaceAppEntry = MonadMeshAppEntry;
export type MonadNamespaceSleepingEntry = MonadMeshSleepingEntry;
export type MonadNamespaceRestartStatus = MonadMeshRestartStatus;

export interface MonadNamespaceCardProps {
  /** The hostname/namespace this card represents, e.g. "suis-macbook-air.local" */
  namespace: string;
  /** Drives the orb glow: true = green/online, false = red/offline, null/undefined = default blue. */
  healthy?: boolean | null;
  /** Whether this namespace has been claimed at all. */
  claimed: boolean;
  /** Flattened claim rows to render — owner first by convention. */
  claimRows: MonadNamespaceClaimIdentity[];
  /** Currently live/registered monads. */
  apps: MonadNamespaceAppEntry[];
  /** Known-but-not-running monads (from the catalog) that can be woken. */
  sleepingEntries?: MonadNamespaceSleepingEntry[];
  /** Per-name "waking…" state, keyed by monad name. */
  waking?: Record<string, boolean>;
  /** Called when the user clicks "wake" on a sleeping monad. */
  onWake?: (name: string) => void;
  /** Restart-all-monads control, rendered at the bottom of the mesh section. */
  restartStatus?: MonadNamespaceRestartStatus;
  restartError?: string | null;
  onRestartAll?: () => void;
}

const cardSx = {
  position: 'relative' as const,
  width: '100%',
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'divider',
  background: 'background.paper',
  overflow: 'hidden',
};

export default function MonadNamespaceCard({
  namespace,
  healthy = null,
  claimed,
  claimRows,
  apps,
  sleepingEntries = [],
  waking = {},
  onWake,
  restartStatus = 'idle',
  restartError = null,
  onRestartAll,
}: MonadNamespaceCardProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="overline" sx={{ opacity: 0.4, letterSpacing: '0.1em' }}>
        {namespace}
      </Typography>

      <Box sx={cardSx}>
        {/* monad.ai orb */}
        <Box sx={{ height: 130 }}>
          <Monad mode="contained" kind="monad" label="monad.ai" healthy={healthy} />
        </Box>

        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', px: 2, py: 1.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          <MonadClaims claimed={claimed} claimRows={claimRows} />

          <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 1.25 }}>
            <MonadMesh
              apps={apps}
              sleepingEntries={sleepingEntries}
              waking={waking}
              onWake={onWake}
              restartStatus={restartStatus}
              restartError={restartError}
              onRestartAll={onRestartAll}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MonadNamespaceCard.displayName = 'All.This.Monad.NamespaceCard';
