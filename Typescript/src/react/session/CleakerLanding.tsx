// CleakerLanding.tsx — full-page ".me" landing, for a host whose entire job
// is identity (e.g. local.cleaker) rather than an app dashboard. Same
// session as MeLauncher.tsx (shares useMeLauncherView() — one source of
// truth for "how do I get a seed"), different chrome: MeLauncher is a
// compact sidebar bubble behind a popover; this is the bubble made the
// centerpiece of its own page, form always visible, no popover to open.
// Design reference: this.gui's own ".me / Default" storybook story
// ("Hello, I am .me" — username in, identity derives out) — that story is
// a demo with a fake local hash; this wires the same shape to the real
// session (useMeLauncherView(), the same claim/open flow MeLauncher uses).
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useInRouterContext } from 'react-router-dom';
import Box from '@/gui/Atoms/Box/Box';
import Icon from '@/gui/Atoms/Icon/Icon';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Typography from '@/gui/Atoms/Typography/Typography';
import TextField from '@mui/material/TextField';
import QRme from '@/gui/All.This/me/QR/QR.me';
import SearchField from '@/gui/Molecules/SearchField/SearchField';
import type { SearchFieldResult } from '@/gui/Molecules/SearchField/SearchField.types';
import UsersTable from '@/gui/All.This/Cleaker/Namespace/Usernames/Usernames';
import { buildCleakerNamespaceUrl } from '@/gui/All.This/Cleaker/namespaceExpression';
import { setActiveNamespaceRoot } from '@/gui/All.This/Cleaker/signedRequest';
import { useMeLauncherView } from './MeLauncher';

interface DirectoryUser {
  username: string;
  profileImg?: string | null;
}

export interface CleakerLandingProps {
  sx?: any;
  /** Same meaning as MeLauncher's — e.g. "http://local.cleaker". */
  cleakerEndpoint?: string;
}

const DEFAULT_CLEAKER_ENDPOINT = 'https://cleaker.me';
const LOCAL_CLEAKER_ENDPOINT = 'http://local.cleaker';
// local.host is the general local host surface (same role as local.netget),
// not a cleaker root itself — App.jsx only ever renders this component when
// the page was actually served from local.cleaker specifically. Recognized
// here too, defensively, in case a caller ever passes it as the endpoint
// prop directly — still correctly reads as "local," not the public root.
const LOCAL_CLEAKER_ALIAS_LABELS = new Set(['local.cleaker', 'local.host']);

// netget's own monad, reached the same way any other app reaches its own —
// through netget's generic /apps/:name mesh proxy, not a dedicated port.
// Identical computation to netgetMonadTransportOrigin() in netget's own
// App.jsx/resolveNetgetSeed.js — this is the one monad backing the whole
// gateway, so it's also where the live claims directory (/users below,
// and the search bar's own directory fetch) reads from.
function getNetgetMonadOrigin(): string {
  return typeof window !== 'undefined' ? `${window.location.origin}/apps/netget` : '';
}

// This project's IconButton wrapper isn't typed as MUI's polymorphic
// OverridableComponent (see @/gui/Atoms/IconButton/IconButton — a plain
// forwardRef over MuiIconButtonProps), so it doesn't know about `component`
// + `to` even though MUI's underlying IconButton renders them correctly.
// Cast once here rather than sprinkling `as any` at each call site.
const LinkIconButton = IconButton as React.ComponentType<any>;

// Same idea as netget resolving which app you're addressing — this landing
// page is the entry point for a namespace *root*, and until now gave no
// sign of which one. Derived straight from cleakerEndpoint (the same value
// that already drives the QR), so it's never a second source of truth: the
// prop netget's App.jsx passes ("http://local.cleaker") or the component's
// own absolute default ("https://cleaker.me") both reduce to just the host
// — "local.cleaker" or "cleaker.me" — matching <handle>.<root> exactly.
function deriveNamespaceRootLabel(endpoint: string): string {
  try {
    return new URL(endpoint).hostname;
  } catch {
    return endpoint.replace(/^https?:\/\//, '').replace(/\/+$/, '');
  }
}

// QRme itself now always draws a crisp, legible ".me" (PixelWordmark,
// rendered independent of QR module resolution — see QR.me.tsx / meMark.ts),
// so expanding on click is purely about physical scan size, not legibility.
// Small by default (a badge, not something meant to be scanned from across
// a room); click grows it to a size worth holding a camera up to — its own
// "view mode," the dominant thing on the page instead of one element among
// several. Kept modest rather than huge — a QR this clean scans fine well
// below full-viewport size.
const QR_DIAMETER_DEFAULT = 125;
const QR_DIAMETER_EXPANDED = 214;

const CleakerLandingHome: React.FC<CleakerLandingProps> = ({ sx, cleakerEndpoint }) => {
  const view = useMeLauncherView();
  const username = view?.credentialsForm?.username.trim() || '';
  const [expanded, setExpanded] = useState(false);
  // Root switch — local.cleaker and cleaker.me are the same identity root
  // reached two ways (dev-local vs public), not two different roots. Starts
  // at whichever one netget actually served this page from (cleakerEndpoint);
  // once a person clicks the badge, that explicit choice wins over the prop
  // for the rest of this session.
  const [rootOverride, setRootOverride] = useState<string | null>(null);
  const resolvedEndpoint = rootOverride || cleakerEndpoint || DEFAULT_CLEAKER_ENDPOINT;
  const namespaceRootLabel = useMemo(
    () => deriveNamespaceRootLabel(resolvedEndpoint),
    [resolvedEndpoint],
  );
  const isOnLocalRoot = LOCAL_CLEAKER_ALIAS_LABELS.has(namespaceRootLabel);

  const toggleNamespaceRoot = () => {
    setRootOverride(isOnLocalRoot ? DEFAULT_CLEAKER_ENDPOINT : LOCAL_CLEAKER_ENDPOINT);
  };

  // The switch isn't just cosmetic — whatever root the badge shows is the
  // root that actually gets claimed. resolveNetgetSeedFromCredentials
  // (netget's App.jsx) reads this at submit time via getActiveNamespaceRoot()
  // instead of always resolving the physical gateway hostname, so a person
  // who picks "cleaker.me" here claims <username>.cleaker.me, not
  // <username>.local.cleaker. Synced on every change (not just on click) so
  // the very first submit — before anyone has touched the badge — already
  // matches whatever's on screen.
  useEffect(() => {
    setActiveNamespaceRoot(namespaceRootLabel);
    return () => setActiveNamespaceRoot(null);
  }, [namespaceRootLabel]);

  // Reachability of whichever root is currently shown — a quiet, discrete
  // signal ("is this actually there before you try to claim into it"), not
  // a loud status widget. `no-cors` deliberately: this only needs to know
  // whether the host resolves and answers at all, not read its response —
  // an opaque 200 from no-cors and a real 404 both count as "up" here, only
  // a network-level failure (DNS, connection refused, timeout) is "down".
  // That sidesteps needing any CORS grant from cleaker.me specifically for
  // a check this shallow. Re-runs whenever the shown root changes (toggle
  // or prop), not on a timer — a one-shot check per root, not polling.
  const [rootReachable, setRootReachable] = useState<'checking' | 'up' | 'down'>('checking');
  useEffect(() => {
    let cancelled = false;
    setRootReachable('checking');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    // When the root being checked is the same host this page is already
    // loaded from, check window.location.origin instead of resolvedEndpoint
    // verbatim — LOCAL_CLEAKER_ENDPOINT is hardcoded to http://, and if the
    // browser actually loaded this page over https (seen live: Chrome
    // auto-upgrading local.cleaker to https, "Not Secure" cert warning and
    // all), fetching the http:// version from an https:// page is mixed
    // content and gets silently blocked — read as "down" even though the
    // page obviously loaded fine. Using the exact origin already proven to
    // work sidesteps the protocol mismatch entirely for the common case
    // (checking the root you're actually standing on); checking the OTHER
    // root (cleaker.me from local.cleaker, or vice versa) still uses the
    // configured endpoint as before, since that direction isn't blocked.
    const checkUrl = (typeof window !== 'undefined' && window.location.hostname === namespaceRootLabel)
      ? window.location.origin
      : resolvedEndpoint;
    fetch(checkUrl, { method: 'HEAD', mode: 'no-cors', signal: controller.signal })
      .then(() => { if (!cancelled) setRootReachable('up'); })
      .catch(() => { if (!cancelled) setRootReachable('down'); })
      .finally(() => clearTimeout(timeoutId));
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [resolvedEndpoint]);

  // Directory search — "look up an existing .me identity" before doing
  // anything with your own. Same live claims directory UsersTable already
  // reads (GET {origin}/apps/netget/ → { users: [...] }), fetched once on
  // mount: this is the one monad backing the whole gateway (see
  // netgetMonadTransportOrigin() in netget's own App.jsx — same computation,
  // window.location.origin + '/apps/netget'), so it holds every claim made
  // through here regardless of which root (local.cleaker/cleaker.me) a
  // given claim was made under. Filtered client-side — this list is small
  // enough that a real search endpoint would be overbuilding it.
  const [directoryUsers, setDirectoryUsers] = useState<DirectoryUser[]>([]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let cancelled = false;
    fetch(`${getNetgetMonadOrigin()}/`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data) => { if (!cancelled) setDirectoryUsers(Array.isArray(data?.users) ? data.users : []); })
      .catch(() => { if (!cancelled) setDirectoryUsers([]); });
    return () => { cancelled = true; };
  }, []);

  // Filtering is the only piece that's this page's own concern — collapse,
  // expand, focus, and the results dropdown all live in SearchField
  // (gui/Molecules/SearchField) now, a generic reusable Molecule extracted
  // out of this file. This just turns the live directory into
  // SearchFieldResult objects and opens whichever one gets picked.
  const [searchQuery, setSearchQuery] = useState('');
  const searchMatches = useMemo<SearchFieldResult[]>(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return directoryUsers
      .filter((u) => u.username.toLowerCase().includes(query))
      .slice(0, 6)
      .map((u) => ({
        id: u.username,
        label: `@${u.username}`,
        avatarSrc: u.profileImg,
        avatarFallback: u.username,
      }));
  }, [directoryUsers, searchQuery]);

  const visitUser = (result: SearchFieldResult) => {
    try {
      const href = buildCleakerNamespaceUrl(resolvedEndpoint, result.id);
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch {
      // Malformed handle — nothing to navigate to, just leave the field as-is.
    }
  };

  // The bubble IS the QR (QRme — flips to an avatar on hover/click) rather
  // than a separate icon with a QR shown below it. Same address CleakerQR
  // would compute (buildCleakerNamespaceUrl is the shared utility both
  // wrap), just resolved directly here since QRme takes a raw value, not a
  // username+endpoint pair to derive one from itself.
  const qrValue = useMemo(() => {
    try {
      return buildCleakerNamespaceUrl(resolvedEndpoint, username || undefined);
    } catch {
      return resolvedEndpoint;
    }
  }, [resolvedEndpoint, username]);

  if (!view) return null;

  const { authenticated, label, pending, error, onEnter, onLogout, credentialsForm, semanticNamespace } = view;

  // The authenticated identity line links to its own real .me surface —
  // strip the root suffix off semanticNamespace to get just the handle
  // (same derivation SessionSurface.tsx already uses for its own `handle`),
  // then build the same kind of URL UsersTable's rows already link to.
  const authenticatedHandle = useMemo(() => {
    if (!semanticNamespace) return '';
    const suffix = `.${namespaceRootLabel}`;
    return semanticNamespace.endsWith(suffix) ? semanticNamespace.slice(0, -suffix.length) : semanticNamespace;
  }, [semanticNamespace, namespaceRootLabel]);
  const authenticatedHref = useMemo(() => {
    try {
      return buildCleakerNamespaceUrl(resolvedEndpoint, authenticatedHandle || undefined);
    } catch {
      return resolvedEndpoint;
    }
  }, [resolvedEndpoint, authenticatedHandle]);

  const handleEnter = async () => {
    if (credentialsForm && (!credentialsForm.username.trim() || !credentialsForm.password)) return;
    await onEnter();
  };

  return (
    <Box
      data-gui-node-id="CleakerLanding"
      data-gui-component="CleakerLanding"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        px: 3,
        py: 6,
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      {/* Users directory — mirrors the search icon's top-right placement on
          the opposite corner. A real route (/users, client-side — see the
          <Routes> wrapper below), not a modal or state toggle: it's an
          NRP-addressable subtree (local.cleaker/users, cleaker.me/users),
          so it needs its own URL. No sidebars/Layout shell here on
          purpose — this stays the same minimal, centered chrome as the
          landing page, just different center content. */}
      <Box sx={{ position: 'fixed', top: { xs: 12, sm: 20 }, left: { xs: 12, sm: 20 }, zIndex: 20 }}>
        <LinkIconButton
          component={Link}
          to="/users"
          aria-label="Browse .me users"
          data-gui-node-id="CleakerLanding.usersLink"
          sx={{
            width: 40,
            height: 40,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '50%',
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '&:hover': { color: 'text.primary', borderColor: 'primary.main', bgcolor: 'action.hover' },
          }}
        >
          <Icon name="group" fontSize={18 as any} />
        </LinkIconButton>
      </Box>

      {/* Directory search — fixed to the top-right corner, out of the
          centered identity flow entirely (looking someone else up is a
          different concern from becoming someone yourself, below). The
          collapse/expand/dropdown chrome itself lives in SearchField (a
          generic reusable Molecule); this only supplies what's real to
          this page — the live directory matches and where a pick goes. */}
      <Box sx={{ position: 'fixed', top: { xs: 12, sm: 20 }, right: { xs: 12, sm: 20 }, zIndex: 20 }}>
        <SearchField
          query={searchQuery}
          onQueryChange={setSearchQuery}
          results={searchMatches}
          onSelectResult={visitUser}
          placeholder="Search .me"
          ariaLabel="Search .me"
          data-gui-node-id="CleakerLanding.search"
        />
      </Box>

      {/* Bubble — QRme: the QR itself is the bubble, not a plain icon with
          a separate QR shown below. Click toggles size, not the
          avatar-flip QRme normally offers (hoverFlip/clickFlip off here —
          this bubble has no avatar image to flip to on a page nobody's
          signed into yet, and the click gesture is worth more spent on
          "make it scannable" than a flip animation). */}
      <Box
        role="button"
        tabIndex={0}
        aria-label={expanded ? 'Shrink .me QR' : 'Expand .me QR to scan'}
        onClick={() => setExpanded((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setExpanded((value) => !value);
          }
        }}
        sx={{ cursor: 'pointer', display: 'inline-flex' }}
      >
        <QRme
          value={qrValue}
          username={username || undefined}
          diameter={expanded ? QR_DIAMETER_EXPANDED : QR_DIAMETER_DEFAULT}
          hoverFlip={false}
          clickFlip={false}
          data-gui-node-id="CleakerLanding.bubble"
          style={{ transition: 'width 320ms cubic-bezier(0.22, 1, 0.36, 1), height 320ms cubic-bezier(0.22, 1, 0.36, 1)' }}
        />
      </Box>

      {authenticated ? (
        /* Authenticated — "Hello, I am…" and the root-switch badge were
           both about deciding WHO/WHERE to claim into before you had an
           identity yet; once you have one, they're just noise. Replaces
           both with the one thing worth showing: the real claimed
           namespace, whole (e.g. "jabellae.local.cleaker"), not split
           across a greeting and a separate pill. The identityHash-derived
           label stays underneath it — a human likes seeing that public,
           checkable fingerprint next to their name, not just the name
           alone. */
        <Box sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Typography
            component="a"
            href={authenticatedHref}
            data-gui-node-id="CleakerLanding.identity"
            variant="body1"
            sx={{
              fontWeight: 700,
              fontFamily: 'monospace',
              wordBreak: 'break-all',
              textAlign: 'center',
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main', textDecoration: 'underline' },
            }}
          >
            {semanticNamespace || `${authenticatedHandle || '…'}.${namespaceRootLabel}`}
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
            {label}
          </Typography>
          <Box
            component="button"
            type="button"
            onClick={onLogout}
            data-gui-node-id="CleakerLanding.logout"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1,
              px: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Icon name="logout" fontSize="1rem" />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Salir</Typography>
          </Box>
        </Box>
      ) : (
        <>
          {/* Heading — the namespace-root badge sits where a generic "it
              anchors to this host" sentence used to: which root this is IS
              the answer to "anchors to WHAT host", so naming it concretely
              replaces the sentence rather than sitting alongside it. Same
              thing netget answers for an app ("which app am I
              addressing"), this answers for an identity root ("which root
              am I claiming into"). Pre-auth only now — see the
              authenticated branch above for why. */}
          <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: -2 }}>
            {/* No trailing ".me" here — the .me submit button below is now
                the answer to this sentence, not a repeat of it. The page
                reads as one continuous line: "Hello, I am…" [namespace]
                [username] [secret] ".me". */}
            <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: '-0.03em' }}>
              Hello, I am…
            </Typography>
            <Box
              component="button"
              type="button"
              onClick={toggleNamespaceRoot}
              data-gui-node-id="CleakerLanding.namespaceRoot"
              aria-label={`Switch to ${isOnLocalRoot ? deriveNamespaceRootLabel(DEFAULT_CLEAKER_ENDPOINT) : deriveNamespaceRootLabel(LOCAL_CLEAKER_ENDPOINT)}`}
              title={`${namespaceRootLabel} — ${rootReachable === 'up' ? 'reachable' : rootReachable === 'down' ? 'unreachable' : 'checking…'}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'text.secondary',
                px: 1.25,
                py: 0.4,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 999,
                background: 'transparent',
                cursor: 'pointer',
                '&:hover': { color: 'text.primary', borderColor: 'primary.main', bgcolor: 'action.hover' },
              }}
            >
              {/* Discrete reachability dot — same tenue opacity as the swap
                  icon beside it, not a loud status widget. Neutral while
                  checking so it never flashes red before the first answer. */}
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  flexShrink: 0,
                  opacity: 0.6,
                  bgcolor: rootReachable === 'up' ? 'success.main' : rootReachable === 'down' ? 'error.main' : 'text.secondary',
                }}
              />
              {namespaceRootLabel}
              <Icon name="swap_horiz" fontSize={13 as any} style={{ opacity: 0.6 }} />
            </Box>
          </Box>

        <Box sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {credentialsForm && (
            <>
              <TextField
                label="Username"
                value={credentialsForm.username}
                onChange={(e) => credentialsForm.setUsername(e.target.value)}
                disabled={pending}
                autoFocus
                fullWidth
              />
              <TextField
                label="Secret"
                type="password"
                value={credentialsForm.password}
                onChange={(e) => credentialsForm.setPassword(e.target.value)}
                disabled={pending}
                onKeyDown={(e) => { if (e.key === 'Enter') handleEnter(); }}
                fullWidth
              />
            </>
          )}
          {error && (
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              {error.message}
            </Typography>
          )}
          <Box
            component="button"
            type="button"
            onClick={handleEnter}
            disabled={pending || (!!credentialsForm && (!credentialsForm.username.trim() || !credentialsForm.password))}
            data-gui-node-id="CleakerLanding.submit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              p: 1.25,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 1,
              background: 'transparent',
              color: 'primary.main',
              cursor: pending ? 'wait' : 'pointer',
              fontWeight: 600,
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {pending ? '…' : '.me'}
            </Typography>
          </Box>
        </Box>
        </>
      )}
    </Box>
  );
};

// The other half of the /users route — same minimal chrome as the home
// view (centered column, no Layout sidebars), reusing UsersTable (already
// the real public-claims-directory component, see its own doc comment)
// rather than building a second directory view. namespaceRootUrl is
// deliberately separate from endpoint (the API to fetch FROM, netget's own
// monad) — reusing endpoint as the display root was exactly the bug this
// session already found and fixed in UsersTable's own Storybook story.
const CleakerUsersView: React.FC<CleakerLandingProps> = ({ sx, cleakerEndpoint }) => {
  const resolvedEndpoint = cleakerEndpoint || DEFAULT_CLEAKER_ENDPOINT;
  const namespaceRootLabel = useMemo(
    () => deriveNamespaceRootLabel(resolvedEndpoint),
    [resolvedEndpoint],
  );

  return (
    <Box
      data-gui-node-id="CleakerUsersView"
      data-gui-component="CleakerUsersView"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 3,
        py: 6,
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 720 }}>
        <LinkIconButton
          component={Link}
          to="/"
          aria-label="Back to .me"
          data-gui-node-id="CleakerUsersView.back"
          sx={{ mb: 1, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
        >
          <Icon name="arrow_back" fontSize={18 as any} />
        </LinkIconButton>
        <UsersTable
          endpoint={getNetgetMonadOrigin()}
          namespaceRootUrl={resolvedEndpoint}
          namespaceLabel={namespaceRootLabel}
          data-gui-node-id="CleakerUsersView.table"
        />
      </Box>
    </Box>
  );
};

const CleakerRoutes: React.FC<CleakerLandingProps> = (props) => (
  <Routes>
    <Route path="/" element={<CleakerLandingHome {...props} />} />
    <Route path="/users" element={<CleakerUsersView {...props} />} />
  </Routes>
);

// CleakerLanding is meant to be dropped in as an entire page (see the file
// header), so it owns its own routing rather than depending on a host app
// to already have one — but it can't just always wrap itself in a fresh
// <BrowserRouter>: react-router v6 throws if a <Router> renders inside
// another Router's context, and this component IS rendered inside one
// already in at least one real place — Storybook's own global decorator
// wraps every story in <MemoryRouter> (.storybook/preview.tsx), and
// CleakerLanding is no exception. useInRouterContext() detects that case
// and reuses the ambient router (MemoryRouter in Storybook, or whatever a
// future host provides) instead of nesting a second one; only a truly
// standalone render (netget's real App.jsx today — CleakerLanding renders
// as a SIBLING of netget's own <Router>, not nested inside it) gets its
// own <BrowserRouter>.
const CleakerLanding: React.FC<CleakerLandingProps> = (props) => {
  const inRouterContext = useInRouterContext();
  if (inRouterContext) return <CleakerRoutes {...props} />;
  return (
    <BrowserRouter>
      <CleakerRoutes {...props} />
    </BrowserRouter>
  );
};

export default CleakerLanding;
