// MonadNamespaceCard — the monad.ai orb + claims + monad mesh, as one card.
// Pure display compound: all data comes in via props. No fetching here —
// the host app (netget, or anyone else) owns the hooks and polling.

import * as React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import Avatar from '@/gui/Atoms/Avatar/Avatar';
import Monad from '../monad.ai';

export interface MonadNamespaceClaimIdentity {
  hash: string;
  short: string;
  username: string | null;
  role?: 'owner' | 'admin' | 'identity';
  isOwner?: boolean;
  isAdmin?: boolean;
}

export interface MonadNamespaceAppEntry {
  name: string;
  port: number;
  healthy: boolean;
}

export interface MonadNamespaceSleepingEntry {
  name: string;
}

export type MonadNamespaceRestartStatus = 'idle' | 'restarting' | 'ok' | 'error';

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
  const [meshOpen, setMeshOpen] = React.useState(false);

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

        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', px: 2, py: 1.5, display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* ── Claims ── */}
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="overline" sx={{ opacity: 0.3, fontSize: '9px', letterSpacing: '0.12em', display: 'block', mb: 0.75 }}>
              claims
            </Typography>
            {!claimed ? (
              <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.35 }}>
                unclaimed — sign up to claim this gateway
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {claimRows.map(claim => {
                  const role = claim.role ?? (claim.isOwner ? 'owner' : claim.isAdmin ? 'admin' : 'identity');
                  const isOwner = role === 'owner';
                  const isAdmin = role === 'admin';
                  return (
                    <Box key={claim.hash} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar
                        sx={{
                          width: 28,
                          height: 28,
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          letterSpacing: '-0.02em',
                          bgcolor: isOwner ? 'success.main' : isAdmin ? 'divider' : 'primary.main',
                          color: isOwner ? 'success.contrastText' : 'primary.contrastText',
                          flexShrink: 0,
                          border: '1px solid',
                          borderColor: isOwner ? 'success.main' : 'divider',
                        }}
                      >
                        {(claim.username ?? '??').slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Typography
                        variant="caption"
                        sx={{ fontFamily: 'monospace', fontWeight: isOwner ? 700 : 400, opacity: isOwner ? 0.9 : 0.75, flex: 1 }}
                      >
                        {claim.username ?? claim.short + '…'}
                      </Typography>
                      <Box
                        sx={{
                          fontSize: '9px',
                          fontFamily: 'monospace',
                          px: 0.6,
                          py: 0.15,
                          border: '1px solid',
                          borderColor: isOwner ? 'success.main' : isAdmin ? 'divider' : 'info.main',
                          borderRadius: 0.75,
                          color: isOwner ? 'success.main' : isAdmin ? 'inherit' : 'info.main',
                          opacity: isOwner ? 0.8 : isAdmin ? 0.45 : 0.7,
                          lineHeight: 1.6,
                        }}
                      >
                        {role}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>

          {/* ── Monad mesh (collapsible) — restart lives here ── */}
          <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 1.25 }}>
            <Box
              onClick={() => setMeshOpen(v => !v)}
              sx={{ display: 'flex', alignItems: 'center', gap: 0.75, cursor: 'pointer', mb: meshOpen ? 0.75 : 0, userSelect: 'none' }}
            >
              <Typography variant="overline" sx={{ opacity: 0.3, fontSize: '9px', letterSpacing: '0.12em', flex: 1 }}>
                monad mesh
              </Typography>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.3, fontSize: '10px' }}>
                {apps.length + sleepingEntries.length > 0 ? `${apps.length + sleepingEntries.length}` : '0'} {meshOpen ? '▲' : '▼'}
              </Typography>
            </Box>

            {meshOpen && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {apps.length === 0 && sleepingEntries.length === 0 ? (
                  <Typography variant="caption" sx={{ opacity: 0.25, fontFamily: 'monospace', display: 'block', mb: 1 }}>
                    no monads registered
                  </Typography>
                ) : (
                  <>
                    {apps.map(app => (
                      <Box key={app.name} sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.4 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, background: app.healthy ? '#22c55e' : 'rgba(255,255,255,0.18)' }} />
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.7, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {app.name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.35, flexShrink: 0 }}>
                          :{app.port}
                        </Typography>
                      </Box>
                    ))}
                    {sleepingEntries.map(entry => (
                      <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.4 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, background: 'rgba(255,255,255,0.08)', border: '1px dashed rgba(255,255,255,0.2)' }} />
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.35, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {entry.name}
                        </Typography>
                        <Box
                          component="button"
                          onClick={() => onWake?.(entry.name)}
                          disabled={waking[entry.name]}
                          sx={{
                            cursor: waking[entry.name] ? 'default' : 'pointer',
                            background: 'none', border: '1px solid', borderColor: 'divider',
                            borderRadius: 1, px: 0.75, py: 0.1,
                            fontSize: '9px', fontFamily: 'monospace', color: 'text.secondary',
                            opacity: waking[entry.name] ? 0.35 : 0.55, lineHeight: 1.6,
                            '&:hover': { opacity: waking[entry.name] ? 0.35 : 0.9, borderColor: 'text.secondary' },
                          }}
                        >
                          {waking[entry.name] ? 'waking…' : 'wake'}
                        </Box>
                      </Box>
                    ))}
                  </>
                )}

                {/* Restart all — inside mesh section */}
                <Box sx={{ mt: 1, pt: 0.75, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    component="button"
                    onClick={() => (restartStatus === 'idle' || restartStatus === 'error') ? onRestartAll?.() : undefined}
                    disabled={restartStatus === 'restarting'}
                    sx={{
                      cursor: restartStatus === 'restarting' ? 'default' : 'pointer',
                      background: 'none', border: '1px solid',
                      borderColor: restartStatus === 'error' ? 'error.main' : 'divider',
                      borderRadius: 1, px: 1, py: 0.3,
                      fontSize: '10px', fontFamily: 'monospace',
                      color: restartStatus === 'error' ? 'error.main' : 'text.secondary',
                      opacity: restartStatus === 'restarting' ? 0.45 : 0.6,
                      lineHeight: 1.6,
                      '&:hover': { opacity: restartStatus === 'restarting' ? 0.45 : 1, borderColor: 'text.secondary' },
                    }}
                  >
                    {restartStatus === 'restarting' ? 'restarting…' : restartStatus === 'ok' ? 'restarted ✓' : 'restart all'}
                  </Box>
                  {restartStatus === 'error' && restartError ? (
                    <Typography variant="caption" sx={{ color: 'error.main', opacity: 0.8, fontSize: '10px' }}>{restartError}</Typography>
                  ) : null}
                </Box>
              </Box>
            )}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

MonadNamespaceCard.displayName = 'All.This.Monad.NamespaceCard';
