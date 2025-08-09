import React from "react";
import { Typography, Link } from "@mui/material";

export function MeActive({ status, endpoint }) {
  return (
    <>
      <Typography variant="subtitle1">
        <strong>Identidades Disponibles:</strong>
      </Typography>
      {status.data.listUs && status.data.listUs.length > 0 ? (
        status.data.listUs.map((u) => <Typography key={u.alias}>⊙ {u.alias}</Typography>)
      ) : (
        <Typography>No hay identidades registradas.</Typography>
      )}
      <Link href={`${endpoint}/graphql`} target="_blank" sx={{ mr: 1 }}>
        GraphQL
      </Link>
      <Link href={`${endpoint}/playground`} target="_blank">
        Playground
      </Link>
    </>
  );
}

export default MeActive;
