import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Card, CardActionArea, CardContent } from "@mui/material";

const ModuleCard = ({ title, description, href, image }) => {
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
        component={RouterLink}
        to={href}
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
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;