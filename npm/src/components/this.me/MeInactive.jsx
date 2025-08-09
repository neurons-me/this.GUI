import React from "react";
import { Typography, Button } from "@mui/material";

export default function MeInactive({ onRetry }) {
  return (
    <>
      <Typography color="error" sx={{ mb: 1 }}>
        ❌ No se detectó .me activo. Por favor verifica la conexión o instala .me.
      </Typography>
      <Button
        variant="outlined"
        sx={{ mt: 1 }}
        onClick={() => window.open("https://neurons.me/install-me", "_blank", "noopener,noreferrer")}
      >
        🔽 Instalar .me
      </Button>
      <Button variant="contained" sx={{ mt: 1 }} onClick={onRetry}>
        🔁 Reintentar conexión
      </Button>
    </>
  );
}
