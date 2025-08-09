//components/Pages/PageContainer.jsx
import { Box, useTheme, useMediaQuery } from "@mui/material";
/**
 * PageContainer
 * Generic content wrapper for page layouts.
 * Provides consistent padding and background only.
 */
export default function PageContainer({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240; // same width as in NavBar
  return (
    <Box
      sx={{
        px: isMobile ? 2 : 3,
        pt: 3,
        maxWidth: "808px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        margin: "0 auto"
      }}
    >
      {children}
    </Box>
  );
}