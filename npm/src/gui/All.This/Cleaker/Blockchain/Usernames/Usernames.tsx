// UsersTable.tsx — Cleaker / Blockchain Viewer
import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Avatar } from "@/gui/Atoms";
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@/gui/Molecules";
import Icon from "@/gui/Atoms/Icon/Icon";
import { useGuiTheme } from "@/gui/Hooks";
import QR from "../../../me/QR";
import { buildCleakerNamespaceUrl } from "../../namespaceExpression";

export interface UsersTableProps {
  endpoint: string; // e.g. "http://localhost:8161"
  namespaceLabel?: string;
  namespaceRootUrl?: string;
}

interface UserEntry {
  username: string;
  identityHash: string;
  publicKey: string;
  createdAt: number;
  updatedAt: number;
  // Optional profile fields if the backend starts returning them later
  profileImg?: string | null;
  profile?: { img?: string | null } | null;
}


function lastN(s: string, n: number) {
  const t = s.trim();
  if (t.length <= n) return t;
  return t.slice(-n);
}

function shortKeyLabel(pk: string) {
  // show only last 6 chars to keep it human-checkable, never show full key by default
  const tail = lastN(pk, 6);
  return `…${tail}`;
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback
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

export default function UsersTable({
  endpoint,
  namespaceLabel = '',
  namespaceRootUrl = '',
}: UsersTableProps) {
  const theme = useGuiTheme();
  const [rows, setRows] = useState<UserEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTech, setShowTech] = useState(false);
  // QR modal state removed. Only 'copied' remains.
  const [copied, setCopied] = useState(false);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${endpoint}/`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setRows(json.users ?? []);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, [endpoint]);

  const getUserHostUrl = (username: string) => {
    const u = String(username || '').trim().toLowerCase();
    if (!u) return '';
    const base = String(namespaceRootUrl || endpoint || '').trim();
    if (!base) return '';
    try {
      return buildCleakerNamespaceUrl(base, u);
    } catch {
      return '';
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, minWidth: 0 }}>
          <Typography variant="h6">
            Users
          </Typography>
          {namespaceLabel ? (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Viewing node users for <Box component="span" sx={{ fontFamily: 'monospace', color: 'text.primary' }}>{namespaceLabel}</Box>
            </Typography>
          ) : null}
        </Box>
        <Tooltip title={showTech ? 'Hide advanced columns' : 'Show advanced columns'}>
          <IconButton
            size="small"
            onClick={() => setShowTech((v) => !v)}
            aria-label={showTech ? 'Hide advanced columns' : 'Show advanced columns'}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
              width: 32,
              height: 32,
              '& .material-symbols-rounded': { fontSize: 18 },
            }}
          >
            <Icon name="settings" fontSize={18 as any} />
          </IconButton>
        </Tooltip>
      </Box>

      {loading && (
        <Box sx={{ borderRadius: 2, p: 3, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Loading users…
          </Typography>
        </Box>
      )}

      {error && (
        <Box sx={{ mb: 2, borderRadius: 2, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'error.main' }}>
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            {error}
          </Typography>
        </Box>
      )}

      {!loading && !error && rows.length === 0 && (
        <Box sx={{ borderRadius: 2, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            No users registered in this blockchain.
          </Typography>
        </Box>
      )}

      {rows.length > 0 && (
        <Box
          sx={{
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            background: 'background.nav',
            overflow: 'hidden',
          }}
        >
          <Table
            size="small"
            sx={{
              '& th, & td': { borderColor: 'divider' },
              '& tbody tr:hover': { bgcolor: 'action.hover' },
            }}
          >


            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.username} hover>
                  {/* Mini QR cell */}
                                   {/* Scan / QR tooltip trigger (low-noise) */}
                  <TableCell sx={{ width: 34, px: 0.5 }}>
                    {(() => {
                      const userUrl = getUserHostUrl(r.username);
                      const hasUserUrl = userUrl.length > 0;

                      const trigger = (
                        <IconButton
                          size="small"
                          disabled={!hasUserUrl}
                          aria-label={hasUserUrl ? 'Show .me QR' : 'No namespace link'}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 2,
                            bgcolor: 'transparent',
                            border: 'none',
                            color: 'primary.main',
                            opacity: hasUserUrl ? 1 : 0.35,
                            '&:hover': { bgcolor: 'transparent' },
                            '& .material-symbols-rounded': { fontSize: 22 },
                          }}
                        >
                          <Icon name="fingerprint" fontSize={22 as any} />
                        </IconButton>
                      );

                      if (!hasUserUrl) return trigger;

                      return (
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
                              {(() => {
                                return (
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
                                        value={userUrl}
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
                                      {`@${r.username}`}
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
                                      {userUrl}
                                    </Typography>
                                  </Box>
                                );
                              })()}
                            </Box>
                          }
                        >
                          {trigger}
                        </Tooltip>
                      );
                    })()}
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, color: 'text.primary', pl: 0.25 }}>
                    {(() => {
                      const img =
                        (r as any)?.profileImg ??
                        (r as any)?.profile?.img ??
                        (r as any)?.profile?.pic ??
                        (r as any)?.profilePic ??
                        null;

                      const fallback = String(r.username || '?').slice(0, 1).toUpperCase();
                      const href = getUserHostUrl(r.username);

                      return (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                          <Avatar
                            src={img ? String(img) : undefined}
                            alt={String(r.username || 'user')}
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

                          {href ? (
                            <Box
                              component="a"
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              sx={{
                                color: 'text.primary',
                                textDecoration: 'none',
                                '&:visited': { color: 'text.primary', textDecoration: 'none' },
                                '&:active': { color: 'text.primary', textDecoration: 'none' },
                                '&:focus': { outline: 'none', textDecoration: 'none' },
                                '&:focus-visible': {
                                  outline: '2px solid',
                                  outlineColor: 'divider',
                                  outlineOffset: 2,
                                  borderRadius: 6,
                                  textDecoration: 'none',
                                },
                                fontWeight: 600,
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'none' },
                              }}
                              title={href}
                            >
                              {`@${r.username}`}
                            </Box>
                          ) : (
                            <Typography sx={{ fontWeight: 600 }}>{`@${r.username}`}</Typography>
                          )}
                        </Box>
                      );
                    })()}
                  </TableCell>
                  {showTech && (
                    <TableCell
                      sx={{
                        fontSize: 12,
                        color: 'text.secondary',
                        fontFamily: 'monospace',
                        maxWidth: 120,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      title={r.identityHash}
                    >
                      {r.identityHash}
                    </TableCell>
                  )}
                  {showTech && (
  <TableCell sx={{ fontSize: 12, color: 'text.secondary' }}>
    {(() => {
      const pk = String(r.publicKey || '').trim();
      const hasPk = pk.length > 0;
      const label = hasPk ? shortKeyLabel(pk) : '—';

      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: 12,
              color: 'text.secondary',
              fontFamily: 'monospace',
              userSelect: 'none',
            }}
            title={hasPk ? 'Public key (hidden). Use copy/QR.' : 'No public key'}
          >
            {label}
          </Typography>

          {hasPk ? (
            <Tooltip title={copied ? 'Copied!' : 'Copy full public key'}>
              <IconButton
                size="small"
                onClick={async () => {
                  const ok = await copyToClipboard(pk);
                  if (ok) {
                    setCopied(true);
                    window.setTimeout(() => setCopied(false), 900);
                  }
                }}
                aria-label="Copy public key"
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  width: 28,
                  height: 28,
                  '& .material-symbols-rounded': { fontSize: 18 },
                }}
              >
                <Icon name="content_copy" fontSize={18 as any} />
              </IconButton>
            </Tooltip>
          ) : null}
        </Box>
      );
    })()}
  </TableCell>
)}
                  {showTech && (
                    <TableCell sx={{ fontSize: 12, color: 'text.secondary' }}>
                      {new Date(r.createdAt).toLocaleString()}
                    </TableCell>
                  )}
                  {showTech && (
                    <TableCell sx={{ fontSize: 12, color: 'text.secondary' }}>
                      {new Date(r.updatedAt).toLocaleString()}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

    </Box>
  );
}
