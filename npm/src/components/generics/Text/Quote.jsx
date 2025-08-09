import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Quote({ children }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="blockquote"
      sx={{
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        backgroundColor: isDark ? "#1c1c1c" : "#f9f9f9",
        padding: "1rem 1.5rem",
        margin: "1.5rem 0",
        fontStyle: "italic",
        color: theme.palette.text.secondary,
        "& p": { margin: 0 },
      }}
    >
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}