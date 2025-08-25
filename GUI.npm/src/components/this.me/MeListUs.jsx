import { Typography, Button, Paper } from "@mui/material";

export default function MeListUs({ list = [], onBack }) {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 90,
        right: 20,
        width: 320,
        maxWidth: "90vw",
        background: "#222",
        color: "#eee",
        borderRadius: 2,
        boxShadow: 4,
        p: 2,
        zIndex: 2147483646,
      }}
    >
      <Typography variant="h6">⊙ Mis identidades</Typography>

      {list.length > 0 ? (
        list.map((item) => (
          <Typography key={item.alias}>⊙ {item.alias}</Typography>
        ))
      ) : (
        <Typography>No hay identidades registradas.</Typography>
      )}

      <Button
        variant="text"
        sx={{ mt: 2, color: "#aaa" }}
        onClick={onBack}
      >
        ← Volver
      </Button>
    </Paper>
  );
}
