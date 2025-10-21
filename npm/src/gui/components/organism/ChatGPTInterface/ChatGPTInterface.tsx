import React, { useState } from "react";
import { Box, Button, Typography, Paper, Stack } from "@/gui/components/atoms";
import TextField from "@/gui/components/atoms/TextField/TextField";
import Page from "@/gui/components/molecules/Page/Page";
import { useCodeGen } from "@/gui/hooks/useCodeGen";
/**
 * ChatGPTInterface
 * ------------------
 * A code generation interface for interacting with ChatGPT inside this.GUI.
 * Uses existing theme context and GUI atoms.
 */
export default function ChatGPTInterface() {
  const code = useCodeGen();
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const result = await code.generate("CustomRequest", { prompt });
    setOutput(result || "No output generated.");
  };

  return (
    <Page padding={4} background="background.paper">
      <Paper
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          ChatGPT Code Generator
        </Typography>

        <Stack spacing={2}>
          <TextField
            multiline
            fullWidth
            rows={4}
            placeholder="Describe what you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button variant="contained" onClick={handleGenerate}>
            Generate
          </Button>
        </Stack>

        {output && (
          <Box
            sx={{
              bgcolor: "background.default",
              borderRadius: 2,
              p: 2,
              mt: 2,
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              fontSize: "0.9rem",
            }}
          >
            {output}
          </Box>
        )}
      </Paper>
    </Page>
  );
}