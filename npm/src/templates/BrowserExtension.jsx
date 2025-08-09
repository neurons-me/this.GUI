import { Box, Toolbar, AppBar, Typography, Container } from "@mui/material";

/**
 * BrowserExtension Layout
 * Un layout optimizado para popups de extensiones de navegador.
 * Tamaño reducido y estilo minimalista, ideal para entornos con espacio limitado.
 */
export default function BrowserExtensionLayout({ children, title = "Cleaker Extension" }) {
  return (
    <Box
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{
          minHeight: 40,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.background.paper
              : theme.palette.background.default,
          borderBottom: (theme) =>
            `1px solid ${
              theme.palette.mode === "light"
                ? "rgba(0,0,0,0.1)"
                : "rgba(255,255,255,0.1)"
            }`,
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 40 }}>
          <Typography variant="subtitle1" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
