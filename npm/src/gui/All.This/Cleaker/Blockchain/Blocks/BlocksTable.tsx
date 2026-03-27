import React from 'react';
import { 
    Avatar,
    Box, 
    IconButton,
    Typography } from '@/gui/Atoms';
import { Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@/gui/Molecules';
import Icon from '@/gui/Atoms/Icon/Icon';
import { useGuiTheme } from '@/gui/Hooks';
import CleakerQR from '../../QR/CleakerQR';
import { buildCleakerNamespaceUrl } from '../../namespaceExpression';
import QR from '../../../me/QR';

export interface BlocksTableEntry {
  id: number;
  timestamp: number;
  namespace: string;
  path: string;
  operator: string | null;
  data: unknown;
  hash: string;
  prevHash: string;
}

type BlocksTableProps = {
  endpoint: string;
  namespaceRootUrl?: string;
};

type ResolvedValuePresentation = {
  preview: string;
  full: string;
  kind: 'email' | 'phone' | 'timestamp' | 'url' | 'username' | 'pointer' | 'text' | 'empty';
  href?: string;
};

function maskHash(hash: string): string {
  const value = String(hash || '').trim();
  if (!value) return '—';
  if (value.length <= 18) return value;
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

function sanitizeUrlValue(value: unknown): string | null {
  const text = String(value ?? '').trim();
  if (!text) return null;
  if (/^https?:\/\//i.test(text)) return text;
  return null;
}

function stableJson(value: unknown): string {
  if (value === null || typeof value !== 'object') {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => stableJson(item)).join(', ')}]`;
  }

  const entries = Object.entries(value as Record<string, unknown>)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, item]) => `${JSON.stringify(key)}: ${stableJson(item)}`);

  return `{ ${entries.join(', ')} }`;
}

function maskValue(value: string, max = 44): string {
  const text = String(value || '').trim();
  if (!text) return '—';
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function formatTimestampParts(timestamp: number): { date: string; time: string; full: string } {
  const value = new Date(timestamp);
  return {
    date: value.toLocaleDateString(),
    time: value.toLocaleTimeString(),
    full: value.toLocaleString(),
  };
}

function splitNamespace(namespace: string): { subject: string; root: string } {
  const value = String(namespace || '').trim();
  if (!value) return { subject: '—', root: '—' };

  const parts = value.split('.');
  if (parts.length <= 1) return { subject: value, root: value };

  return {
    subject: parts[0] || value,
    root: parts.slice(1).join('.') || value,
  };
}

function isTimeLikePath(path: string): boolean {
  return /(?:^|\.)(claimed_at|opened_at|updated_at|created_at|timestamp|lastSeen)$/i.test(path);
}

function formatResolvedValue(row: BlocksTableEntry): ResolvedValuePresentation {
  const value = row.data;
  const path = String(row.path || '').trim().toLowerCase();

  if (typeof value === 'number' && isTimeLikePath(path)) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      const full = date.toLocaleString();
      return { preview: full, full, kind: 'timestamp' };
    }
  }

  if (typeof value === 'string') {
    const text = value.trim();
    if (!text) return { preview: '(empty)', full: '(empty)', kind: 'empty' };
    if (path.endsWith('profile.email')) {
      return { preview: text, full: text, kind: 'email', href: `mailto:${text}` };
    }
    if (path.endsWith('profile.phone')) {
      return { preview: text, full: text, kind: 'phone', href: `tel:${text.replace(/\s+/g, '')}` };
    }
    if (path.endsWith('profile.username')) {
      const normalized = text.startsWith('@') ? text : `@${text}`;
      return { preview: normalized, full: normalized, kind: 'username' };
    }
    if (/^https?:\/\//i.test(text)) {
      return { preview: text, full: text, kind: 'url', href: text };
    }
    return { preview: text, full: text, kind: 'text' };
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    const text = String(value);
    return { preview: text, full: text, kind: 'text' };
  }

  if (value && typeof value === 'object') {
    const ptr =
      typeof (value as { __ptr?: unknown }).__ptr === 'string'
        ? String((value as { __ptr: string }).__ptr).trim()
        : '';

    if (ptr) {
      return { preview: `→ ${ptr}`, full: ptr, kind: 'pointer' };
    }

    const json = stableJson(value);
    return { preview: maskValue(json, 52), full: json, kind: 'text' };
  }

  return { preview: '(empty)', full: '(empty)', kind: 'empty' };
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

function renderResolvedValueContent(resolved: ResolvedValuePresentation) {
  const valueNode = (
    <Typography
      variant="body2"
      sx={{
        color: resolved.kind === 'empty' ? 'text.secondary' : 'text.primary',
        fontWeight: resolved.kind === 'empty' ? 500 : 700,
        fontFamily: resolved.kind === 'timestamp' ? 'inherit' : 'monospace',
        fontStyle: resolved.kind === 'empty' ? 'italic' : 'normal',
        wordBreak: 'break-word',
        lineHeight: 1.25,
      }}
    >
      {resolved.preview}
    </Typography>
  );

  if (resolved.href) {
    return (
      <Box
        component="a"
        href={resolved.href}
        target={resolved.kind === 'url' ? '_blank' : undefined}
        rel={resolved.kind === 'url' ? 'noreferrer' : undefined}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.6,
          color: 'primary.main',
          textDecoration: 'none',
          minWidth: 0,
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        <Icon
          name={
            resolved.kind === 'email'
              ? 'alternate_email'
              : resolved.kind === 'phone'
                ? 'call'
                : 'link'
          }
          fontSize={16 as any}
        />
        {valueNode}
      </Box>
    );
  }

  if (resolved.kind === 'pointer') {
    return (
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, minWidth: 0, color: 'primary.main' }}>
        <Icon name="share" fontSize={16 as any} />
        {valueNode}
      </Box>
    );
  }

  return valueNode;
}

export function BlocksTable({ endpoint, namespaceRootUrl = '' }: BlocksTableProps) {
  const theme = useGuiTheme();
  const [data, setData] = React.useState<BlocksTableEntry[]>([]);
  const [copiedHash, setCopiedHash] = React.useState<string | null>(null);
  const [focusedHash, setFocusedHash] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function loadBlocks() {
      const base = String(endpoint || '').replace(/\/+$/, '');
      if (!base) {
        setData([]);
        return;
      }

      const tryFetchJson = async (url: string) => {
        const res = await fetch(url, { method: 'GET' });
        const text = await res.text();
        const ct = res.headers.get('content-type') || '';
        const looksJson =
          ct.includes('application/json') ||
          text.trim().startsWith('{') ||
          text.trim().startsWith('[');

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        if (!looksJson) throw new Error('Not JSON');

        return JSON.parse(text);
      };

      try {
        let json: any;
        try {
          json = await tryFetchJson(`${base}/blockchain`);
        } catch {
          json = await tryFetchJson(`${base}/blocks`);
        }

        if (Array.isArray(json)) setData(json as any);
        else if (Array.isArray(json?.memories)) setData(json.memories);
        else if (Array.isArray(json?.data?.memories)) setData(json.data.memories);
        else if (Array.isArray(json?.blocks)) setData(json.blocks);
        else if (Array.isArray(json?.data)) setData(json.data);
        else setData([]);
      } catch (e) {
        console.error('[BlocksTable] Failed to load blockchain entries:', e);
        setData([]);
      }
    }
    loadBlocks();
  }, [endpoint]);

  const namespaceMeta = React.useMemo(() => {
    const meta = new Map<string, { imageUrl: string | null }>();

    for (const row of data) {
      const key = String(row.namespace || '').trim().toLowerCase();
      if (!key) continue;

      const imageCandidate =
        row.path === 'profile.pic' ||
        row.path === 'profile.img' ||
        row.path === 'profile.avatar'
          ? sanitizeUrlValue(row.data)
          : null;

      if (!meta.has(key)) {
        meta.set(key, { imageUrl: imageCandidate });
        continue;
      }

      if (imageCandidate) {
        meta.set(key, { imageUrl: imageCandidate });
      }
    }

    return meta;
  }, [data]);

  const rowByHash = React.useMemo(() => {
    return new Map(data.map((row) => [String(row.hash || '').trim(), row]));
  }, [data]);

  const getRowIdentity = React.useCallback((row: BlocksTableEntry) => {
    const pointerMatch = String(row.path || '').trim().match(/^users\.([a-z0-9_-]+)$/i);
    const rawNamespace = String(row.namespace || '').trim().toLowerCase();

    if (pointerMatch) {
      const username = String(pointerMatch[1] || '').trim().toLowerCase();
      const root = rawNamespace;
      const handle = username && root ? `${username}.${root}` : root;
      return {
        subject: username || root || '—',
        root,
        handle,
        resolvedPath: `${rawNamespace}/${row.path}`,
      };
    }

    const split = splitNamespace(rawNamespace);
    return {
      subject: split.subject,
      root: split.root,
      handle: rawNamespace || split.root,
      resolvedPath: `${rawNamespace}/${row.path}`,
    };
  }, []);

  const getRowNamespaceUrl = React.useCallback((row: BlocksTableEntry) => {
    const identity = getRowIdentity(row);
    const base = String(namespaceRootUrl || endpoint || '').trim();
    if (!base) return '';

    try {
      return buildCleakerNamespaceUrl(base, identity.subject === identity.root ? undefined : identity.subject);
    } catch {
      return '';
    }
  }, [endpoint, getRowIdentity, namespaceRootUrl]);

  const getExpressionLabel = React.useCallback((row: BlocksTableEntry) => {
    const path = String(row.path || '').trim() || '—';
    const operator = String(row.operator || '').trim();
    if (!operator || operator === '=') return path;
    return `${path} ${operator}`;
  }, []);

  const revealHash = React.useCallback((hash: string) => {
    const normalized = String(hash || '').trim();
    if (!normalized) return;
    setFocusedHash(normalized);
    const node = document.querySelector(`[data-block-hash="${CSS.escape(normalized)}"]`);
    if (node instanceof HTMLElement) {
      node.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, []);

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        background: 'background.nav',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <Table size="small" sx={{ minWidth: 720 }}>
        <TableHead>
          <TableRow sx={{ background: 'background.paper' }}>
            <TableCell><Typography fontWeight={700}>.me</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Expression</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Hash</Typography></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={3}>
                <Typography sx={{ opacity: 0.6, py: 3, textAlign: 'center' }}>No blockchain entries yet.</Typography>
              </TableCell>
            </TableRow>
          )}

          {data.map((r) => (
            <TableRow
              key={`${r.hash}-${r.id}`}
              data-block-hash={r.hash}
              hover
              sx={{
                bgcolor: focusedHash === r.hash ? 'action.selected' : 'transparent',
                '&:last-child td': { borderBottom: 'none' },
                '& td': {
                  py: 1.1,
                  verticalAlign: 'top',
                  borderColor: 'divider',
                },
              }}
            >
              <TableCell sx={{ minWidth: 220 }}>
                {(() => {
                  const identity = getRowIdentity(r);
                  const namespaceUrl = getRowNamespaceUrl(r);
                  const profileImg = namespaceMeta.get(String(r.namespace || '').trim().toLowerCase())?.imageUrl || null;
                  const fallback = String(identity.subject || '?').slice(0, 1).toUpperCase();

                  return (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.85 }}>
                      {namespaceUrl ? (
                        <Tooltip
                          placement="right"
                          arrow
                          enterDelay={120}
                          leaveDelay={80}
                          slotProps={{
                            tooltip: {
                              sx: {
                                bgcolor: 'transparent',
                                color: 'text.primary',
                                border: 'none',
                                boxShadow: 'none',
                                p: 0,
                                '& .MuiTooltip-arrow': {
                                  color: 'background.default',
                                },
                              },
                            },
                          }}
                          title={
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                alignItems: 'center',
                                p: 1.25,
                                borderRadius: 2,
                                bgcolor: 'background.default',
                                border: '1px solid',
                                borderColor: 'divider',
                                boxShadow: 8,
                              }}
                            >
                              <Box
                                sx={{
                                  color: 'primary.main',
                                  p: 1,
                                  borderRadius: 2,
                                  bgcolor: 'background.paper',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  boxShadow: 4,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: 0.75,
                                  minWidth: 180,
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 96,
                                    height: 96,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.default',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <QR
                                    value={namespaceUrl}
                                    size={96}
                                    bg={theme.palette.background.paper}
                                    fg={theme.palette.primary.main}
                                    ecc="H"
                                    embedMode="positive-overlay"
                                    embedScale={0.32}
                                  />
                                </Box>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: 'text.primary',
                                    fontWeight: 700,
                                    letterSpacing: 0.2,
                                  }}
                                >
                                  {identity.subject === identity.root ? identity.subject : `@${identity.subject}`}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    maxWidth: 180,
                                    color: 'text.secondary',
                                    fontFamily: 'monospace',
                                    fontSize: '0.62rem',
                                    lineHeight: 1.3,
                                    textAlign: 'center',
                                    wordBreak: 'break-all',
                                  }}
                                >
                                  {namespaceUrl}
                                </Typography>
                              </Box>
                            </Box>
                          }
                        >
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: 2,
                              overflow: 'hidden',
                              border: '1px solid',
                              borderColor: 'divider',
                              bgcolor: 'background.paper',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <CleakerQR
                              value={namespaceUrl}
                              username={identity.subject}
                              endpoint={namespaceRootUrl || endpoint}
                              variant="icon"
                              size={36}
                              bg={theme.palette.background.paper}
                              fg={theme.palette.primary.main}
                            />
                          </Box>
                        </Tooltip>
                      ) : (
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <Avatar
                        src={profileImg || undefined}
                        alt={String(identity.subject || 'user')}
                        sx={{
                          width: 28,
                          height: 28,
                          fontSize: 12,
                          fontWeight: 700,
                          bgcolor: 'background.paper',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: 'divider',
                          flexShrink: 0,
                        }}
                      >
                        {fallback}
                      </Avatar>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.15, minWidth: 0 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontFamily: 'monospace',
                          }}
                          title={identity.handle}
                        >
                          {identity.subject === identity.root ? identity.subject : `@${identity.subject}`}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: 'monospace',
                            wordBreak: 'break-all',
                          }}
                          title={identity.root}
                        >
                          {identity.root}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: 'monospace',
                          }}
                        >
                          #{r.id}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })()}
              </TableCell>
              <TableCell sx={{ minWidth: 260 }}>
                {(() => {
                  const expression = getExpressionLabel(r);
                  const resolved = formatResolvedValue(r);
                  const eventTime = formatTimestampParts(r.timestamp);
                  const showEventTimestamp =
                    !(typeof r.data === 'number' && isTimeLikePath(String(r.path || '')) && eventTime.full === resolved.full);
                  return (
                    <Tooltip
                      placement="top"
                      arrow
                      title={
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, maxWidth: 340 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 700,
                              fontFamily: resolved.kind === 'timestamp' ? 'inherit' : 'monospace',
                              wordBreak: 'break-word',
                            }}
                          >
                            {resolved.full}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                            {expression}
                          </Typography>
                          {showEventTimestamp ? (
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {eventTime.full}
                            </Typography>
                          ) : null}
                        </Box>
                      }
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.3 }}>
                        {renderResolvedValueContent(resolved)}
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: 'monospace',
                            wordBreak: 'break-word',
                          }}
                        >
                          {expression}
                        </Typography>
                        {showEventTimestamp ? (
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                              fontFamily: 'monospace',
                              wordBreak: 'break-word',
                            }}
                          >
                            {eventTime.full}
                          </Typography>
                        ) : null}
                      </Box>
                    </Tooltip>
                  );
                })()}
              </TableCell>
              <TableCell sx={{ minWidth: 184 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.15, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      title={r.hash}
                      sx={{
                        fontFamily: 'monospace',
                        color: 'text.primary',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {maskHash(r.hash)}
                    </Typography>
                    {r.prevHash ? (
                      <Tooltip
                        placement="top"
                        arrow
                        title={
                          rowByHash.get(String(r.prevHash || '').trim()) ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.35 }}>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                Previous
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.primary', fontFamily: 'monospace' }}>
                                {getExpressionLabel(rowByHash.get(String(r.prevHash || '').trim())!)}
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                                {maskHash(r.prevHash)}
                              </Typography>
                            </Box>
                          ) : r.prevHash
                        }
                      >
                        <Typography
                          variant="caption"
                          title={r.prevHash}
                          onClick={() => revealHash(r.prevHash)}
                          sx={{
                            fontFamily: 'monospace',
                            color: 'primary.main',
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textUnderlineOffset: '0.15em',
                          }}
                        >
                          prev {maskHash(r.prevHash)}
                        </Typography>
                      </Tooltip>
                    ) : null}
                  </Box>
                  <Tooltip title={copiedHash === r.hash ? 'Copied!' : 'Copy full hash'} placement="top" arrow>
                    <IconButton
                      size="small"
                      onClick={async () => {
                        const ok = await copyToClipboard(r.hash);
                        if (ok) {
                          setCopiedHash(r.hash);
                          window.setTimeout(() => {
                            setCopiedHash((current) => (current === r.hash ? null : current));
                          }, 900);
                        }
                      }}
                      aria-label="Copy hash"
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        width: 28,
                        height: 28,
                        flexShrink: 0,
                        '& .material-symbols-rounded': { fontSize: 16 },
                      }}
                    >
                      <Icon name="content_copy" fontSize={16 as any} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default BlocksTable;
