import { List, ListItem, ListItemText } from "@mui/material";

/**
 * TextList Component
 * Standardized list component for ordered or unordered lists.
 *
 * Props:
 * - items: Array of strings or objects with { primary, secondary } (required).
 * - type: "unordered" | "ordered" (default: "unordered").
 * - dense: Reduces vertical spacing (default: false).
 */
export default function PageList({ items = [], type = "unordered", dense = false }) {
  const isOrdered = type === "ordered";

  if (!items || items.length === 0) return null;

  return (
    <List
      dense={dense}
      sx={{
        listStyleType: isOrdered ? "decimal" : "disc",
        pl: 3,
        "& .MuiListItem-root": {
          display: "list-item",
          py: dense ? 0.25 : 0.5,
        },
      }}
    >
      {items.map((item, index) => {
        const primary = typeof item === "string" ? item : item.primary;
        const secondary = typeof item === "string" ? null : item.secondary;

        return (
          <ListItem key={index}>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        );
      })}
    </List>
  );
}