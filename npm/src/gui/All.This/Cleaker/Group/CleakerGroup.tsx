import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Button, Chip, Link, Typography } from '@/gui/Atoms';
import { Tooltip } from '@/gui/Molecules';
import Icon from '@/gui/Atoms/Icon/Icon';
import { useGuiTheme } from '@/gui/Hooks';
import { buildCleakerNamespaceUrl, parseCleakerNamespaceExpression } from '../namespaceExpression';
import { readCleakerBootstrap, type CleakerBootstrapInfo } from '../runtimeUsername';
import { resolveSemanticRootName } from '../surfaceModel';

export interface CleakerGroupProps {
  endpoint?: string;
  groupKey?: string;
  namespaceExpression?: string;
  namespaceHandle?: string;
  rootHostNamespace?: string;
  resolverHostName?: string;
  namespaceUrl?: string;
}

type RoleSchema = {
  status?: string;
  behavior?: {
    type?: string;
    iterator?: string;
  };
  suggest?: {
    contains?: string[];
  };
};

type GroupValue = {
  id?: string;
  name?: string;
  created_at?: string;
  created_by?: string;
  member?: Record<string, unknown>;
  [key: string]: unknown;
};

type MemberEntry = {
  key: string;
  username: string;
  namespace: string;
};

function normalizeEndpoint(raw: string): string {
  const value = String(raw || '').trim();
  if (!value) return '';
  const withProtocol = /^https?:\/\//i.test(value) ? value : `http://${value}`;
  return withProtocol.replace(/\/+$/, '');
}

function compactNamespaceName(raw: string): string {
  return String(raw || '')
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
    .replace(/:\d+$/, '')
    .replace(/\.local$/i, '')
    .toLowerCase();
}

function formatGroupLabel(groupKey: string): string {
  return String(groupKey || '')
    .trim()
    .split(/[-_.]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function shortHash(raw: string): string {
  const value = String(raw || '').trim();
  if (!value) return '—';
  if (value.length <= 18) return value;
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

function readEnvelopeValue(payload: unknown): unknown {
  if (!payload || typeof payload !== 'object') return undefined;
  const record = payload as Record<string, unknown>;
  if (record.target && typeof record.target === 'object') {
    const target = record.target as Record<string, unknown>;
    if ('value' in target) return target.value;
  }
  if ('value' in record) return record.value;
  return undefined;
}

async function fetchSemanticValue(endpoint: string, path: string): Promise<unknown> {
  const safeEndpoint = normalizeEndpoint(endpoint);
  if (!safeEndpoint || !path) return undefined;

  const url = `${safeEndpoint}/${String(path).split('.').filter(Boolean).join('/')}`;
  const response = await fetch(url, { method: 'GET' });
  if (!response.ok) {
    if (response.status === 404) return undefined;
    throw new Error(`HTTP ${response.status}`);
  }
  const payload = await response.json().catch(() => null);
  return readEnvelopeValue(payload);
}

function extractPointerNamespace(value: unknown): string {
  if (typeof value === 'string') return String(value).trim();
  if (!value || typeof value !== 'object') return '';

  const record = value as Record<string, unknown>;
  const pointer =
    record.__ptr ||
    record.pointer ||
    record.namespace ||
    record.href ||
    '';
  return String(pointer || '').trim();
}

function buildMemberEntries(groupValue: GroupValue | null): MemberEntry[] {
  const collection = groupValue?.member;
  if (!collection || typeof collection !== 'object') return [];

  return Object.entries(collection)
    .map(([key, value]) => {
      const namespace = extractPointerNamespace(value);
      return {
        key,
        username: String(key || '').trim().toLowerCase(),
        namespace,
      };
    })
    .filter((entry) => entry.username);
}

function getMemberAvatarLabel(username: string): string {
  const clean = String(username || '').trim().replace(/^@+/, '');
  if (!clean) return '?';
  return clean.slice(0, 2).toUpperCase();
}

export default function CleakerGroup({
  endpoint = 'http://localhost:8161',
  groupKey = 'dev-team',
  namespaceExpression = '',
  namespaceHandle = '',
  rootHostNamespace = '',
  resolverHostName = '',
  namespaceUrl = '',
}: CleakerGroupProps) {
  const theme = useGuiTheme();
  const safeEndpoint = useMemo(() => normalizeEndpoint(endpoint), [endpoint]);
  const [groupValue, setGroupValue] = useState<GroupValue | null>(null);
  const [groupSchema, setGroupSchema] = useState<RoleSchema | null>(null);
  const [memberSchema, setMemberSchema] = useState<RoleSchema | null>(null);
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  const previewNamespace = useMemo(() => {
    const candidate = String(namespaceUrl || namespaceExpression || endpoint || '').trim();
    if (!candidate) return null;
    try {
      return parseCleakerNamespaceExpression(candidate);
    } catch {
      return null;
    }
  }, [endpoint, namespaceExpression, namespaceUrl]);

  const semanticRootName = useMemo(() => {
    return resolveSemanticRootName({
      namespaceHandle,
      resolverHostName: bootstrapInfo?.resolverHostName || resolverHostName,
      rootHostNamespace,
    });
  }, [
    bootstrapInfo?.resolverHostName,
    namespaceHandle,
    resolverHostName,
    rootHostNamespace,
  ]);

  const namespaceLabel = useMemo(() => {
    return compactNamespaceName(semanticRootName || namespaceHandle || rootHostNamespace || 'cleaker.me') || 'cleaker.me';
  }, [namespaceHandle, rootHostNamespace, semanticRootName]);

  const rootNamespaceUrl = useMemo(() => {
    if (namespaceUrl) {
      try {
        return buildCleakerNamespaceUrl(namespaceUrl, '');
      } catch {
      }
    }

    if (previewNamespace) {
      try {
        return buildCleakerNamespaceUrl(previewNamespace, '');
      } catch {
      }
    }

    const host = String(bootstrapInfo?.resolverHostName || resolverHostName || '').trim();
    const protocol = previewNamespace?.transport.protocol || 'http';
    const port = previewNamespace?.transport.port;
    if (!host) return safeEndpoint;
    return `${protocol}://${port == null ? host : `${host}:${port}`}`;
  }, [
    bootstrapInfo?.resolverHostName,
    namespaceUrl,
    previewNamespace,
    resolverHostName,
    safeEndpoint,
  ]);

  const members = useMemo(() => buildMemberEntries(groupValue), [groupValue]);

  const groupRoleType = String(groupSchema?.behavior?.type || '').trim().toLowerCase();
  const memberRoleType = String(memberSchema?.behavior?.type || '').trim().toLowerCase();
  const memberContains = Array.isArray(memberSchema?.suggest?.contains)
    ? memberSchema?.suggest?.contains || []
    : [];

  const groupTitle = String(groupValue?.name || '').trim() || formatGroupLabel(groupKey) || 'Group';
  const createdAtLabel = groupValue?.created_at
    ? new Date(String(groupValue.created_at)).toLocaleString()
    : '';

  useEffect(() => {
    if (!safeEndpoint) {
      setError('Missing monad.ai endpoint');
      return;
    }

    let cancelled = false;

    async function load(): Promise<void> {
      setLoading(true);
      setError(null);

      try {
        const [group, groupRole, memberRole, bootstrap] = await Promise.all([
          fetchSemanticValue(safeEndpoint, `groups.${groupKey}`),
          fetchSemanticValue(safeEndpoint, 'schema.role.group'),
          fetchSemanticValue(safeEndpoint, 'schema.role.member'),
          readCleakerBootstrap(safeEndpoint),
        ]);

        if (cancelled) return;

        setGroupValue(group && typeof group === 'object' ? (group as GroupValue) : null);
        setGroupSchema(groupRole && typeof groupRole === 'object' ? (groupRole as RoleSchema) : null);
        setMemberSchema(memberRole && typeof memberRole === 'object' ? (memberRole as RoleSchema) : null);
        setBootstrapInfo(bootstrap);

        if (!group || typeof group !== 'object') {
          setError(`Group "${groupKey}" not found`);
        }
      } catch (loadError: unknown) {
        if (cancelled) return;
        const message = loadError instanceof Error ? loadError.message : 'Failed to load group';
        setError(message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [groupKey, reloadToken, safeEndpoint]);

  const renderMemberLink = (entry: MemberEntry) => {
    const pointerNamespace = entry.namespace;
    let href = '';

    try {
      if (rootNamespaceUrl) {
        href = buildCleakerNamespaceUrl(rootNamespaceUrl, entry.username);
      } else if (pointerNamespace) {
        href = buildCleakerNamespaceUrl(pointerNamespace);
      }
    } catch {
      href = '';
    }

    return href;
  };

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        padding: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        background: 'background.paper',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 1.5,
          flexDirection: { xs: 'column', sm: 'row' },
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.35, minWidth: 0 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {groupTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
            {`groups.${groupKey}`}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Namespace: <Box component="span" sx={{ fontFamily: 'monospace', color: 'text.primary' }}>{namespaceLabel}</Box>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
          {groupSchema?.status ? <Chip size="small" label={groupSchema.status} color="primary" /> : null}
          {groupRoleType ? <Chip size="small" label={groupRoleType} variant="outlined" /> : null}
          {memberRoleType ? <Chip size="small" label={`member:${memberRoleType}`} variant="outlined" /> : null}
          <Button
            size="small"
            variant="outlined"
            startIcon={<Icon name="refresh" fontSize={16} />}
            onClick={() => {
              setReloadToken((value) => value + 1);
            }}
          >
            Refresh
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Loading group…
          </Typography>
        </Box>
      ) : null}

      {error ? (
        <Box
          sx={{
            mb: 2,
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'error.main',
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            {error}
          </Typography>
        </Box>
      ) : null}

      {!loading && groupValue ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
              gap: 1,
            }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Group ID
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, fontFamily: 'monospace', color: 'text.primary' }}>
                {shortHash(String(groupValue.id || ''))}
              </Typography>
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Created
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: 'text.primary' }}>
                {createdAtLabel || '—'}
              </Typography>
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Suggested Branches
              </Typography>
              <Box sx={{ mt: 0.75, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {(groupSchema?.suggest?.contains || []).map((branch) => (
                  <Chip key={branch} size="small" label={branch} variant="outlined" />
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.default',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1.25 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                <Typography variant="h6">Members</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {memberRoleType === 'collection'
                    ? 'Rendered from the adopted member collection.'
                    : 'Rendered from the group member branch.'}
                </Typography>
              </Box>
              {memberContains.length > 0 ? (
                <Tooltip title={`member contains: ${memberContains.join(', ')}`} placement="left" arrow>
                  <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', color: 'text.secondary' }}>
                    <Icon name="info" fontSize={18} />
                  </Box>
                </Tooltip>
              ) : null}
            </Box>

            {members.length === 0 ? (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                No members in this group yet.
              </Typography>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                  gap: 1,
                }}
              >
                {members.map((member) => {
                  const href = renderMemberLink(member);
                  const avatarBg = theme.palette.primary.main;
                  const avatarFg = theme.palette.getContrastText(avatarBg);

                  return (
                    <Box
                      key={member.key}
                      component={href ? 'a' : 'div'}
                      href={href || undefined}
                      target={href ? '_blank' : undefined}
                      rel={href ? 'noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.1,
                        p: 1.1,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'border-color 180ms ease, background-color 180ms ease, transform 180ms ease',
                        '&:hover': href
                          ? {
                              borderColor: 'primary.main',
                              bgcolor: 'background.nav',
                              transform: 'translateY(-1px)',
                            }
                          : undefined,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: avatarBg,
                          color: avatarFg,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {getMemberAvatarLabel(member.username)}
                      </Avatar>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, minWidth: 0, flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                          @{member.username}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontFamily: 'monospace',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                          title={member.namespace || href || ''}
                        >
                          {member.namespace || href || 'member pointer'}
                        </Typography>
                      </Box>

                      {href ? (
                        <Tooltip title="Open member namespace" placement="top" arrow>
                          <Box component="span" sx={{ display: 'inline-flex', color: 'primary.main' }}>
                            <Icon name="open_in_new" fontSize={18} />
                          </Box>
                        </Tooltip>
                      ) : null}
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>

          <Box
            sx={{
              p: 1.25,
              borderRadius: 2,
              border: '1px dashed',
              borderColor: 'divider',
              bgcolor: 'background.default',
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
              Root Namespace
            </Typography>
            {rootNamespaceUrl ? (
              <Link href={rootNamespaceUrl} target="_blank" rel="noreferrer" underline="hover">
                {rootNamespaceUrl}
              </Link>
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {namespaceLabel}
              </Typography>
            )}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
