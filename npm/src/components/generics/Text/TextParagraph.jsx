import { Typography } from "@mui/material";

/**
 * TextParagraph Component
 * Standardized paragraph text for pages with consistent spacing and alignment.
 *
 * Props:
 * - children: Text or elements to display as paragraph content.
 * - align: "left" | "center" | "right" | "justify" (default: "left").
 * - variant: MUI Typography variant, e.g., "body1" | "body2" | "caption" (default: "body1").
 * - gutterBottom: Adds bottom spacing (default: true).
 */
export default function PageParagraph({
  children,
  align = "left",
  variant = "body1",
  gutterBottom = true,
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      sx={{ mb: gutterBottom ? 2 : 0 }}
    >
      {children}
    </Typography>
  );
}