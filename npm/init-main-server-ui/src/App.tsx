import React from "react";
import ME from "all.this/me";
import { Theme, Box, Button, Typography, ThemeModeToggle } from "all.this/gui";
import { MeRuntimeProvider, useMeAction, useMeValue } from "all.this/gui/react";

const me = new ME();
me.gateway.status("online");
me.gateway.mode("local");

function MainServerHome() {
  const status = useMeValue<string>("gateway.status") || "unknown";
  const mode = useMeValue<string>("gateway.mode") || "local";
  const setMode = useMeAction("gateway.mode");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
        py: 4,
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 960,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          p: { xs: 3, sm: 5 },
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Main Server
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              NetGet gateway UI powered by all.this, .me, and this.GUI.
            </Typography>
          </Box>
          <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 1.5,
            mt: 4,
          }}
        >
          <Metric label="Gateway" value={status} />
          <Metric label="Mode" value={mode} />
          <Metric label="Host" value={window.location.host} />
        </Box>

        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 4 }}>
          <Button variant="contained" onClick={() => setMode("dev")}>
            Dev mode
          </Button>
          <Button variant="outlined" onClick={() => window.location.assign("/healthcheck")}>
            Healthcheck
          </Button>
          <Button variant="outlined" onClick={() => window.location.assign("/domains")}>
            Domains
          </Button>
          <Button variant="outlined" onClick={() => window.location.assign("/logs")}>
            Logs
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1, p: 2 }}>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, wordBreak: "break-word" }}>
        {value}
      </Typography>
    </Box>
  );
}

export default function App() {
  return (
    <Theme initialMode="dark">
      <MeRuntimeProvider me={me}>
        <MainServerHome />
      </MeRuntimeProvider>
    </Theme>
  );
}
