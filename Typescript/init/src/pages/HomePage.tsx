import { Box, Button, Typography, version as guiVersion } from "this.gui";
import { Page, Stack } from "this.gui/molecules";
import { useMeAction, useMeValue } from "this.gui/react";
import { appConfig } from "../app/config";

export default function HomePage() {
  const status = useMeValue<string>("profile.status") || "ready";
  const setStatus = useMeAction("profile.status", { allowCanonicalWrite: true });

  return (
    <Page
      padding={4}
      head={{
        title: appConfig.title,
        description: `${appConfig.title} powered by this.gui`,
      }}
      sx={{
        border: 0,
        borderRadius: 0,
        filter: "none",
        minHeight: "100%",
        justifyContent: "center",
      }}
    >
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 760 }}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            this.gui {guiVersion}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.05 }}>
            {appConfig.title}
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
          <Button
            component="a"
            href={appConfig.guiStorybookUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
          >
            GUI Storybook
          </Button>
          <Button
            variant="outlined"
            onClick={() => setStatus(status === "ready" ? "building" : "ready")}
          >
            .me: {status}
          </Button>
        </Stack>
      </Stack>
    </Page>
  );
}

