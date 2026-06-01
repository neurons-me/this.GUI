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
import QR from '../me/QR';
import type { MeshPairingTokenRecord } from './meshPairing';
import {
  DEFAULT_PAIRING_TTL_MS,
  buildClaimQrExpression,
  createPairingToken,
  createTokenRecord,
  detectLocalSurfaceProfile,
  dispatchMeshExpression,
  formatPairingExpiry,
  readMeshPairingTokens,
  slugifySurfaceName,
  writeMeshPairingTokens,
  writeMeshRuntimeValue,
} from './meshPairing';

export type GeneratePairingQRProps = {
  namespace: string;
  origin: string;
  hostSurface?: string;
  rootName?: string | null;
  onExpressionGenerated?: (expression: string) => void;
  onSimulateScan?: (expression: string) => void;
};

export default function GeneratePairingQR({
  namespace,
  origin,
  hostSurface,
  rootName,
  onExpressionGenerated,
  onSimulateScan,
}: GeneratePairingQRProps) {
  const theme = useGuiTheme();
  const { me, runtime } = useMe();
  const currentExpression = useMeValue<string>('runtime.mesh.pairing.currentExpression') || '';
  const currentToken = useMeValue<string>('runtime.mesh.pairing.currentToken') || '';
  const tokenMap = useMeValue<Record<string, MeshPairingTokenRecord>>('runtime.mesh.pairing.tokens') || {};
  const hostProfile = React.useMemo(() => detectLocalSurfaceProfile(), []);
  const [copied, setCopied] = React.useState(false);
  const pairingOrigin = String(origin || '').trim();
  const resolvedNamespace = String(namespace || '').trim();
  const resolvedHostSurface = slugifySurfaceName(hostSurface || hostProfile.surfaceId, hostProfile.surfaceId);

  const tokenRecord = currentToken ? tokenMap[currentToken] || readMeshPairingTokens(me)[currentToken] || null : null;
  const activeExpression = tokenRecord?.expression || currentExpression;

  const handleGenerate = React.useCallback(() => {
    if (!resolvedNamespace || !pairingOrigin) return;

    const issuedAt = Date.now();
    const expiresAt = issuedAt + DEFAULT_PAIRING_TTL_MS;
    const token = createPairingToken();
    const expression = buildClaimQrExpression({
      namespace: resolvedNamespace,
      token,
      origin: pairingOrigin,
      hostSurface: resolvedHostSurface,
      expiresAt,
      rootName: rootName || null,
      localOnly: true,
    });

    const existing = readMeshPairingTokens(me);
    const nextTokens = Object.fromEntries(
      Object.entries(existing).filter(([, record]) => Number(record.expiresAt || 0) > issuedAt || Boolean(record.usedAt))
    ) as Record<string, MeshPairingTokenRecord>;

    nextTokens[token] = createTokenRecord({
      namespace: resolvedNamespace,
      token,
      expression,
      origin: pairingOrigin,
      hostSurface: resolvedHostSurface,
      issuedAt,
      expiresAt,
      rootName: rootName || null,
    });

    writeMeshPairingTokens(me, runtime, nextTokens);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.currentToken', token);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.currentExpression', expression);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.lastGeneratedAt', issuedAt);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.generator', {
      namespace: resolvedNamespace,
      origin: pairingOrigin,
      hostSurface: resolvedHostSurface,
      rootName: rootName || null,
    });

    setCopied(false);
    onExpressionGenerated?.(expression);
  }, [
    me,
    onExpressionGenerated,
    pairingOrigin,
    resolvedHostSurface,
    resolvedNamespace,
    rootName,
    runtime,
  ]);

  const handleCopy = React.useCallback(async () => {
    if (!activeExpression || typeof navigator === 'undefined' || !navigator.clipboard?.writeText) return;
    await navigator.clipboard.writeText(activeExpression);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }, [activeExpression]);

  const handleSimulateScan = React.useCallback(() => {
    if (!activeExpression) return;
    if (typeof onSimulateScan === 'function') {
      onSimulateScan(activeExpression);
      return;
    }
    dispatchMeshExpression(activeExpression);
  }, [activeExpression, onSimulateScan]);

  return (
    <Paper
      variant="outlined"
      sx={{
        mt: 1.25,
        p: 1.5,
        borderRadius: 2.5,
        borderColor: alpha(theme.palette.primary.main, 0.14),
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.04)} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Stack spacing={1.2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
              Pair A New Surface
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Generate a one-time sovereign QR for the local mesh.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            onClick={handleGenerate}
            disabled={!resolvedNamespace || !pairingOrigin}
          >
            {tokenRecord && Number(tokenRecord.expiresAt || 0) > Date.now() ? 'Regenerate' : 'Generate QR'}
          </Button>
        </Stack>

        <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap>
          <Chip
            size="small"
            icon={<Icon name="verified" fontSize={16 as any} />}
            label="Single use"
            color="success"
            variant="outlined"
          />
          <Chip
            size="small"
            icon={<Icon name="timer" fontSize={16 as any} />}
            label={tokenRecord ? `Expires in ${formatPairingExpiry(tokenRecord.expiresAt)}` : '10 minute TTL'}
            variant="outlined"
          />
          <Chip
            size="small"
            icon={<Icon name="wifi" fontSize={16 as any} />}
            label={`${resolvedHostSurface} · local route`}
            variant="outlined"
          />
        </Stack>

        {activeExpression ? (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.25}
            sx={{
              p: 1.2,
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              bgcolor: alpha(theme.palette.background.default, 0.28),
            }}
          >
            <Box
              sx={{
                width: 132,
                height: 132,
                borderRadius: 2,
                overflow: 'hidden',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
                bgcolor: theme.palette.background.paper,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <QR
                value={activeExpression}
                size={132}
                fg={theme.palette.primary.main}
                ecc="H"
                embedMode="positive-overlay"
                embedScale={0.26}
              />
            </Box>

            <Stack spacing={1} sx={{ minWidth: 0, flex: 1 }}>
              <TextField
                label="me:// expression"
                value={activeExpression}
                InputProps={{ readOnly: true }}
                fullWidth
                multiline
                minRows={3}
              />
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}>
                Namespace: {resolvedNamespace}
                {' · '}
                Host origin: {pairingOrigin}
                {' · '}
                Route: <Box component="span" sx={{ fontFamily: 'monospace' }}>/new-surface</Box>
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="text" size="small" onClick={() => void handleCopy()}>
                  {copied ? 'Copied' : 'Copy Expression'}
                </Button>
                <Button variant="contained" size="small" onClick={handleSimulateScan}>
                  Simulate Scan
                </Button>
              </Stack>
            </Stack>
          </Stack>
        ) : null}
      </Stack>
    </Paper>
  );
}
