import { Box } from "@mui/material";

/**
 * PageEmbed Component
 * Embeds external content such as videos, maps, or other iframes with a responsive aspect ratio.
 *
 * Props:
 * - src: The URL of the content to embed (required).
 * - title: Accessible title for the iframe (required for accessibility).
 * - ratio: Aspect ratio of the embed. Accepts "16:9", "4:3", or custom (default: "16:9").
 * - allowFullScreen: Allows fullscreen mode (default: true).
 */
export default function VideoEmbed({
  src,
  title,
  ratio = "16:9",
  allowFullScreen = true,
}) {
  if (!src) return null;

  const [w, h] = ratio.split(":").map(Number);
  const paddingTop = (h / w) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: `${paddingTop}%`,
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: 1,
        my: 2,
      }}
    >
      <iframe
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </Box>
  );
}