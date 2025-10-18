import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Card, CardActionArea, CardContent } from "@mui/material";

/**
 * ModuleCard
 * Clickable card for modules/features.
 *
 * Props:
 * - title: string (required)
 * - description: string
 * - image: string (url to image)
 * - href?: string  -> preferred navigation prop (internal route or external URL)
 * - link?: string  -> alias of href for backward compatibility
 * - target?: string -> optional target for external links (e.g., "_blank")
 *
 * Behavior:
 * - If `href` (or `link`) starts with http/https, renders an <a>.
 * - Otherwise, renders a React Router <Link> for client-side routing.
 * - Avoids nested anchors: do NOT wrap ModuleCard with another <Link>.
 */
const ModuleCard = ({ title, description, image, href, link, target }) => {
  const to = href ?? link ?? null;
  const isExternal = typeof to === "string" && /^https?:\/\//i.test(to);

  // Decide which props to pass to CardActionArea to avoid <a> inside <a>.
  const navProps = to
    ? isExternal
      ? { component: "a", href: to, target: target ?? "_self", rel: "noopener noreferrer" }
      : { component: RouterLink, to }
    : {}; // No navigation if no href/link provided

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        "&:hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
          transition: "0.3s ease-in-out",
        },
      }}
    >
      <CardActionArea
        {...navProps}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 2,
            height: "100%",
          }}
        >
          {/* Image */}
          {image && (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "80px",
                height: "80px",
                marginBottom: 1,
                objectFit: "contain",
              }}
            />
          )}

          {/* Title */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              marginBottom: 1,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          {description && (
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.85rem",
                color: "text.secondary",
              }}
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;