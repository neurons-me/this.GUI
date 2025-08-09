import { Box, Typography } from "@mui/material";
/**
 * PageImage Component
 * Displays an image with optional alignment and caption.
 *
 * Props:
 * - src: URL of the image (required).
 * - alt: Alternative text for accessibility (default: "").
 * - align: "left" | "center" | "right" (default: "center").
 * - caption: Optional text displayed below the image.
 * - maxWidth: Maximum width of the image (default: "100%").
 */
export default function PageImage({
  src,
  alt = "",
  align = "center",
  caption,
  maxWidth = "100%",
}) {
  const justifyContent =
    align === "left"
      ? "flex-start"
      : align === "right"
      ? "flex-end"
      : "center";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: align }}>
      <Box
        sx={{
          display: "flex",
          justifyContent,
          width: "100%",
          mb: caption ? 1 : 0,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth,
            height: "auto",
            borderRadius: "4px",
          }}
        />
      </Box>
      {caption && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textAlign: align }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
}