import { List, ListItemButton, ListItemText, Typography } from "@mui/material";

/**
 * PageTableOfContents Component
 * Generates a table of contents (TOC) from an array of headings.
 *
 * Props:
 * - headings: Array of objects with { id, text, level }:
 *   - id: The anchor or unique identifier (used for scrolling).
 *   - text: The heading text to display.
 *   - level: Heading level (1, 2, or 3). Used to indent items.
 * - onNavigate: Optional callback when a TOC item is clicked (receives id).
 */
export default function TableOfContents({ headings = [], onNavigate }) {
  if (!headings || headings.length === 0) return null;

  const handleClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Table of Contents
      </Typography>
      <List dense>
        {headings.map((heading, index) => (
          <ListItemButton
            key={index}
            sx={{
              pl: heading.level === 1 ? 1 : heading.level === 2 ? 3 : 5,
            }}
            onClick={() => handleClick(heading.id)}
          >
            <ListItemText
              primaryTypographyProps={{
                variant: heading.level === 1 ? "body1" : "body2",
              }}
              primary={heading.text}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}