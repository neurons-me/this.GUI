import { Divider } from "@mui/material";

/**
 * PageDivider Component
 * A standardized divider to visually separate sections or content blocks.
 *
 * Props:
 * - spacing: Adds vertical spacing above and below the divider (default: 2).
 * - variant: MUI Divider variant, e.g., "fullWidth", "middle" (default: "fullWidth").
 */
export default function PageDivider({ spacing = 2, variant = "fullWidth" }) {
  return (
    <Divider
      variant={variant}
      sx={{
        my: spacing,
      }}
    />
  );
}