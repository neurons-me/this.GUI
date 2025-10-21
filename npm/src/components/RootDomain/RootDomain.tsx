import React, { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  TextField,
  Chip,
  Tooltip,
  Button,
  Divider,
  Avatar,
  Stack,
  LinearProgress,
} from "@mui/material";
import Icon from "@/gui/Theme/Icon/Icon";
import { staticServices } from "./staticServices";
/**
 * Root Domain UI — Generic Launchpad (MUI)
 * -------------------------------------------------------------
 * Purpose
 *  - This sits at the ROOT of a domain (e.g. https://yourdomain.com)
 *  - It discovers and renders attached services/apps (subdomains, paths, ports)
 *  - It surfaces identity (`this.me`) and environment status (`this.env`)
 *  - It is brand-agnostic; theme can be replaced by your this.GUI theme
 *
 * Features
 *  - Service Registry: static + discovery fallback (/.well-known/services.json)
 *  - Quick Actions: search, open, copy, healthcheck
 *  - Identity Stub: shows current user + session state (replace with real this.me)
 *  - Environment Widget: shows local daemon/availability (replace with real this.env)
 *  - Fully MUI, no Tailwind. Works with your theme tokens.
 */

// ---------- THEME (replace with your this.GUI integration) ----------
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111827" }, // near-black
    secondary: { main: "#0ea5e9" }, // sky-500
    background: { default: "#fafafa", paper: "#ffffff" },
  },
  shape: { borderRadius: 16 },
});

// ---------- TYPES ----------
/** @typedef {{
 *  id: string,
 *  title: string,
 *  description?: string,
 *  url: string,
 *  tags?: string[],
 *  status?: "up"|"down"|"unknown",
 *  protected?: boolean,
 *  icon?: React.ReactNode
 * }} Service */

// ---------- DISCOVERY HOOK ----------
function useServiceRegistry() {
  const [services, setServices] = useState(staticServices);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Try window.__services first (injected by server), then /.well-known/services.json
    const win = /** @type {any} */ (window);
    if (Array.isArray(win.__services)) {
      setServices(mergeServices(staticServices, win.__services));
      return;
    }
    setLoading(true);
    fetch("/.well-known/services.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => setServices(mergeServices(staticServices, json)))
      .catch(() => setServices(staticServices))
      .finally(() => setLoading(false));
  }, []);

  // Optional: simple health check by HEAD request
  const ping = async (svc /** @type {Service} */) => {
    try {
      const u = new URL(svc.url);
      const res = await fetch(u.origin + "/", { method: "HEAD", mode: "no-cors" });
      setServices((list) =>
        list.map((s) => (s.id === svc.id ? { ...s, status: "up" } : s))
      );
      return res;
    } catch (e) {
      setServices((list) =>
        list.map((s) => (s.id === svc.id ? { ...s, status: "down" } : s))
      );
    }
  };

  return { services, setServices, loading, ping };
}

function mergeServices(base, incoming) {
  const byId = new Map(base.map((s) => [s.id, s]));
  for (const s of incoming || []) {
    if (!s || !s.id) continue;
    byId.set(s.id, { ...byId.get(s.id), ...s });
  }
  return Array.from(byId.values());
}

// ---------- IDENTITY & ENV STUBS ----------
function useIdentityStub() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Replace with real this.me handshake
    const cached = localStorage.getItem("root.user");
    if (cached) setUser(JSON.parse(cached));
  }, []);
  const login = () => {
    const demo = { name: "Abella", handle: "@sui.gn", avatar: "" };
    setUser(demo);
    localStorage.setItem("root.user", JSON.stringify(demo));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("root.user");
  };
  return { user, login, logout };
}

function useEnvStub() {
  const [status, setStatus] = useState("checking"); // checking | online | offline
  useEffect(() => {
    let t = setTimeout(() => setStatus("online"), 600); // Replace with real daemon ping
    return () => clearTimeout(t);
  }, []);
  return status;
}

// ---------- ROOT COMPONENT ----------
export default function RootDomainUI() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Scaffold />
    </ThemeProvider>
  );
}

function Scaffold() {
  const theme = useTheme();
  const { services, loading, ping, setServices } = useServiceRegistry();
  const { user, login, logout } = useIdentityStub();
  const envStatus = useEnvStub();

  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter((s) =>
      [s.title, s.description, s.url, ...(s.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query, services]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>root://</Typography>
          <TextField
            size="small"
            placeholder="Search services…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ minWidth: 280 }}
          />
          <Box sx={{ flex: 1 }} />

          {/* Environment indicator */}
          <Tooltip title={`Environment: ${envStatus}`}>
            <Chip label={envStatus === "online" ? "env: online" : envStatus} color={envStatus === "online" ? "success" : "default"} variant="outlined" />
          </Tooltip>

          {/* Identity stub */}
          {user ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={user.avatar} sx={{ width: 28, height: 28 }} />
              <Typography variant="body2">{user.name} <Box component="span" sx={{ color: "text.secondary" }}>{user.handle}</Box></Typography>
              <Button size="small" onClick={logout}>Logout</Button>
            </Stack>
          ) : (
            <Button size="small" variant="contained" onClick={login}>Connect</Button>
          )}

          <IconButton aria-label="settings">
            <Icon name="settings" fontSize={20} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <HeaderRow services={services} setServices={setServices} loading={loading} />
        <Grid container spacing={2} sx={{ mt: 0 }}>
          {filtered.map((svc) => (
            <Grid item key={svc.id} xs={12} sm={6} md={4}>
              <ServiceCard svc={svc} onPing={() => ping(svc)} />
            </Grid>
          ))}
          {filtered.length === 0 && (
            <Box sx={{ width: "100%", py: 8, textAlign: "center", color: "text.secondary" }}>
              <Typography>No services found for “{query}”.</Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

function HeaderRow({ services, setServices, loading }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>Root Domain Launchpad</Typography>
        <Box sx={{ flex: 1 }} />
        <Button variant="outlined" startIcon={<Icon name="refresh" fontSize={18} />} onClick={() => setServices([...services])}>Refresh</Button>
      </Stack>
      {loading && <LinearProgress sx={{ mt: 1 }} />}
      <Divider sx={{ mt: 2, mb: 2 }} />
    </Box>
  );
}

function ServiceCard({ svc, onPing }) {
  const chipColor = svc.status === "up" ? "success" : svc.status === "down" ? "error" : "default";
  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex" }}>
      <CardActionArea onClick={() => window.open(svc.url, "_blank", "noopener")}
        sx={{ display: "flex", alignItems: "stretch" }}>
        <CardContent sx={{ width: "100%" }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
            {svc.icon}
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{svc.title}</Typography>
            {svc.protected && <Chip size="small" icon={<Icon name="shield" fontSize={18} />} label="protected" variant="outlined" />}
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {svc.description}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
            {svc.tags?.map((t) => <Chip key={t} size="small" label={t} />)}
            <Box sx={{ flex: 1 }} />
            <Chip size="small" label={svc.status || "unknown"} color={chipColor} variant="outlined" />
            <IconButton size="small" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onPing?.(); }}>
              <Icon name="refresh" fontSize={18} />
            </IconButton>
            <IconButton size="small" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(svc.url, "_blank", "noopener"); }}>
              <Icon name="open_in_new" fontSize={18} />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// ---------- HOW TO WIRE ----------
// 1) Drop this file into your React app and export default RootDomainUI.
// 2) Provide your real theme replacing baseTheme with your this.GUI theme provider.
// 3) Serve a JSON at /.well-known/services.json like:
//    [{"id":"api","title":"API","url":"https://api.yourdomain.com","tags":["api"],"protected":true}]
//    or inject window.__services = [...] from your server template.
// 4) Replace useIdentityStub/useEnvStub with real this.me / this.env hooks.
// 5) (Optional) Add route-based pages for service details or admin tools.
