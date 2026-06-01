import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@/gui/Atoms/Box/Box';
import Button from '@/gui/Atoms/Button/Button';
import Chip from '@/gui/Atoms/Chip/Chip';
import Paper from '@/gui/Atoms/Paper/Paper';
import TextField from '@/gui/Atoms/TextField/TextField';
import Typography from '@/gui/Atoms/Typography/Typography';
import Icon from '@/gui/Atoms/Icon/Icon';
import Stack from '@/gui/Molecules/Stack/Stack';
import { useGuiTheme } from '@/gui-internals/Hooks';
import { useMe } from '@/react/useMe';
import { useMeValue } from '@/react/useMeValue';
import type { MeshPairingTokenRecord, MeshSurfaceRecord } from './meshPairing';
import {
  detectLocalSurfaceProfile,
  formatPairingExpiry,
  isLikelySameLocalNetwork,
  isProbablyLocalOrigin,
  parseMeshExpression,
  readMeshPairingTokens,
  registerMeshSurface,
  resolveMeshLinkAction,
  slugifySurfaceName,
  writeMeshPairingTokens,
  writeMeshRuntimeValue,
} from './meshPairing';

export type ClaimSurfaceProps = {
  expression: string;
  onCancel?: () => void;
  onClaimed?: (surfaceId: string, record: MeshSurfaceRecord) => void;
};

export default function ClaimSurface({
  expression,
  onCancel,
  onClaimed,
}: ClaimSurfaceProps) {
  const theme = useGuiTheme();
  const { me, runtime } = useMe();
  const tokenMap = useMeValue<Record<string, MeshPairingTokenRecord>>('runtime.mesh.pairing.tokens') || {};

  const parsed = React.useMemo(() => parseMeshExpression(expression), [expression]);
  const linkAction = React.useMemo(() => resolveMeshLinkAction(parsed), [parsed]);
  const deviceProfile = React.useMemo(() => detectLocalSurfaceProfile(), []);
  const claimToken = linkAction.kind === 'claim-surface' ? linkAction.token : '';
  const tokenRecord = claimToken ? tokenMap[claimToken] || readMeshPairingTokens(me)[claimToken] || null : null;

  const [surfaceName, setSurfaceName] = React.useState(deviceProfile.suggestedName);
  const [surfaceNote, setSurfaceNote] = React.useState(deviceProfile.note);
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    setSurfaceName(deviceProfile.suggestedName);
    setSurfaceNote(deviceProfile.note);
  }, [deviceProfile.note, deviceProfile.suggestedName]);

  const namespace = parsed.namespace || tokenRecord?.namespace || '';
  const claimOrigin = parsed.query.origin || tokenRecord?.origin || '';
  const hostSurface = parsed.query.surface || tokenRecord?.hostSurface || 'host';
  const expiresAt = Number(parsed.query.expiresAt || tokenRecord?.expiresAt || 0);
  const now = Date.now();
  const sameNetworkLikely = Boolean(claimOrigin) && isLikelySameLocalNetwork(claimOrigin);
  const localOriginHint = Boolean(claimOrigin) && isProbablyLocalOrigin(claimOrigin);
  const localConnectionLabel = sameNetworkLikely
    ? 'Local mesh route confirmed'
    : localOriginHint
      ? 'Local route hinted in QR'
      : 'Remote validation pending';

  const canClaim = Boolean(
    linkAction.kind === 'claim-surface'
    && tokenRecord
    && !tokenRecord.usedAt
    && (!expiresAt || expiresAt > now)
  );

  const handleClaim = React.useCallback(() => {
    if (linkAction.kind !== 'claim-surface') {
      setError('This QR does not represent a surface claim.');
      return;
    }

    const currentTokens = readMeshPairingTokens(me);
    const currentToken = currentTokens[linkAction.token];
    if (!currentToken) {
      setError('This claim token is not available on the active runtime yet.');
      return;
    }

    const claimedNow = Date.now();
    if (currentToken.usedAt) {
      setError('This pairing token was already used.');
      return;
    }

    if (currentToken.expiresAt <= claimedNow) {
      setError('This pairing token already expired.');
      return;
    }

    if (currentToken.localOnly && !sameNetworkLikely && !localOriginHint) {
      setError('This pairing token is restricted to a local mesh route.');
      return;
    }

    const normalizedSurfaceName = String(surfaceName || '').trim() || deviceProfile.suggestedName;
    const surfaceId = slugifySurfaceName(normalizedSurfaceName, deviceProfile.surfaceId);

    setSubmitting(true);
    setError(null);

    const nextTokens = {
      ...currentTokens,
      [linkAction.token]: {
        ...currentToken,
        usedAt: claimedNow,
        usedBy: surfaceId,
      },
    };

    const record: MeshSurfaceRecord = {
      hostId: surfaceId,
      displayName: normalizedSurfaceName,
      type: deviceProfile.type,
      platform: deviceProfile.platform,
      note: String(surfaceNote || '').trim() || null,
      namespace,
      status: 'online',
      confidence: sameNetworkLikely ? 95 : 84,
      lastSeen: claimedNow,
      pairedAt: claimedNow,
      origin: claimOrigin || null,
      localNetwork: sameNetworkLikely || localOriginHint,
      claimToken: linkAction.token,
      transport: currentToken.transport || 'unknown',
      trust: 'owner',
      metadata: {
        userAgent: typeof navigator === 'undefined' ? 'unknown' : String(navigator.userAgent || 'unknown'),
        hostSurface: hostSurface || null,
      },
    };

    writeMeshPairingTokens(me, runtime, nextTokens);
    registerMeshSurface(me, runtime, surfaceId, record);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.lastClaim', {
      surfaceId,
      namespace,
      claimToken: linkAction.token,
      localNetwork: record.localNetwork,
      claimedAt: claimedNow,
      origin: claimOrigin || null,
      hostSurface: hostSurface || null,
    });
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.currentExpression', expression);

    setSubmitting(false);
    onClaimed?.(surfaceId, record);
  }, [
    claimOrigin,
    deviceProfile.platform,
    deviceProfile.suggestedName,
    deviceProfile.surfaceId,
    deviceProfile.type,
    expression,
    hostSurface,
    linkAction,
    localOriginHint,
    me,
    namespace,
    onClaimed,
    runtime,
    sameNetworkLikely,
    surfaceName,
    surfaceNote,
  ]);

  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        borderColor: alpha(theme.palette.primary.main, 0.18),
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${theme.palette.background.paper} 42%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Box sx={{ px: 2, py: 2.25, borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.12)}` }}>
        <Stack spacing={0.9}>
          <Typography variant="overline" sx={{ letterSpacing: '0.16em', color: theme.palette.text.secondary }}>
            Mesh Claim
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: '-0.04em' }}>
            Add This Surface
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
            This QR is asking Cleaker to register a new sovereign surface under{' '}
            <Box component="span" sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>
              {namespace || 'unknown namespace'}
            </Box>
            .
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ p: 2, display: 'grid', gap: 1.5 }}>
        <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap>
          <Chip
            size="small"
            icon={<Icon name="wifi" fontSize={16 as any} />}
            label={localConnectionLabel}
            color={sameNetworkLikely ? 'success' : localOriginHint ? 'warning' : 'default'}
            variant="outlined"
          />
          <Chip
            size="small"
            icon={<Icon name="devices" fontSize={16 as any} />}
            label={`${deviceProfile.type} · ${deviceProfile.platform}`}
            variant="outlined"
          />
          <Chip
            size="small"
            icon={<Icon name="timer" fontSize={16 as any} />}
            label={expiresAt ? `Expires in ${formatPairingExpiry(expiresAt, now)}` : 'Expiry unavailable'}
            variant="outlined"
          />
        </Stack>

        <Paper
          variant="outlined"
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.background.default, 0.32),
            borderColor: alpha(theme.palette.primary.main, 0.12),
          }}
        >
          <Stack spacing={0.6}>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Host Surface
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {hostSurface || 'unknown-host'}
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary, overflowWrap: 'anywhere' }}>
              {claimOrigin || 'No explicit local endpoint was embedded in this QR.'}
            </Typography>
          </Stack>
        </Paper>

        <TextField
          label="Surface Name"
          value={surfaceName}
          onChange={(event) => {
            setSurfaceName(event.target.value);
            setError(null);
          }}
          fullWidth
          helperText="This is the human label Cleaker will show in your mesh inventory."
        />

        <TextField
          label="Note"
          value={surfaceNote}
          onChange={(event) => {
            setSurfaceNote(event.target.value);
            setError(null);
          }}
          fullWidth
          multiline
          minRows={2}
          helperText="Optional description, like location, owner, or what this device is trusted for."
        />

        {error ? (
          <Box
            sx={{
              px: 1.1,
              py: 0.9,
              borderRadius: 1.5,
              fontSize: '0.82rem',
              lineHeight: 1.5,
              color: theme.palette.error.main,
              bgcolor: alpha(theme.palette.error.main, 0.08),
              border: `1px solid ${alpha(theme.palette.error.main, 0.18)}`,
            }}
          >
            {error}
          </Box>
        ) : null}

        {!canClaim && !error ? (
          <Box
            sx={{
              px: 1.1,
              py: 0.9,
              borderRadius: 1.5,
              fontSize: '0.82rem',
              lineHeight: 1.5,
              color: theme.palette.text.secondary,
              bgcolor: alpha(theme.palette.warning.main, 0.06),
              border: `1px solid ${alpha(theme.palette.warning.main, 0.14)}`,
            }}
          >
            {tokenRecord?.usedAt
              ? 'This QR already claimed a surface.'
              : tokenRecord
                ? 'This QR is no longer claimable.'
                : 'Waiting for the host runtime to expose this pairing token.'}
          </Box>
        ) : null}

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClaim}
            disabled={!canClaim || submitting}
          >
            {submitting ? 'Claiming…' : 'Claim As New Surface'}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
