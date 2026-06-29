// MonadClaims — collapsible list of identities that have claimed a namespace.
// Pure display: all data comes in via props.

import * as React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import Avatar from '@/gui/Atoms/Avatar/Avatar';

export interface MonadClaimIdentity {
  hash: string;
  short: string;
  username: string | null;
  role?: 'owner' | 'admin' | 'identity';
  isOwner?: boolean;
  isAdmin?: boolean;
}

export interface MonadClaimsProps {
  /** Whether this namespace has been claimed at all. */
  claimed: boolean;
  /** Flattened claim rows to render — owner first by convention. */
  claimRows: MonadClaimIdentity[];
  /** Starts expanded or collapsed. Defaults to collapsed, matching MonadMesh. */
  defaultOpen?: boolean;
}

export default function MonadClaims({ claimed, claimRows, defaultOpen = false }: MonadClaimsProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Box>
      <Box
        onClick={() => setOpen(v => !v)}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.75, cursor: 'pointer', mb: open ? 0.75 : 0, userSelect: 'none' }}
      >
        <Typography variant="overline" sx={{ opacity: 0.3, fontSize: '9px', letterSpacing: '0.12em', flex: 1 }}>
          claims
        </Typography>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.3, fontSize: '10px' }}>
          {claimed ? claimRows.length : 0} {open ? '▲' : '▼'}
        </Typography>
      </Box>

      {open && (
        !claimed ? (
          <Typography variant="caption" sx={{ fontFamily: 'monospace', opacity: 0.35, display: 'block', mb: 1 }}>
            unclaimed — sign up to claim this gateway
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 1 }}>
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
        )
      )}
    </Box>
  );
}

MonadClaims.displayName = 'All.This.Monad.Claims';
