import { Box } from "@mui/material";

/**
 * Section
 * Minimal container that respects parent width.
 * Controls: width, padding, margins, background color.
 */
export default function Section({
  children,
  width = "100%",           // toma el ancho del padre por defecto
  padding = 1.6,               // padding base (MUI spacing units)
  paddingX,                  // opcional: override horizontal
  paddingY,                  // opcional: override vertical
  marginY = 3,               // separación vertical por defecto
  marginTop,                 // override superior
  marginBottom,              // override inferior
  bgcolor = "background.paper",
  sx = {},
  ...props
}) {
  const px = paddingX ?? padding;
  const py = paddingY ?? padding;
  const mt = marginTop ?? marginY;
  const mb = marginBottom ?? marginY;

  return (
    <Box
      component="section"
      sx={{
        width,
        px,
        py,
        mt,
        mb,
        bgcolor,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}