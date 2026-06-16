import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Typography } from "this.gui";
import { Stack } from "this.gui/molecules";
import { appConfig } from "../app/config";

function GUIReference() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 720 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          GUI Reference
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {appConfig.title} documents local app surfaces here. GUI components live in the upstream Storybook.
        </Typography>
        <Box>
          <Button
            component="a"
            href={appConfig.guiStorybookUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
          >
            Open GUI Storybook
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

const meta = {
  title: "References/GUI Storybook",
  component: GUIReference,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GUIReference>;

export default meta;

export const Link: StoryObj<typeof meta> = {
  render: () => <GUIReference />,
};

