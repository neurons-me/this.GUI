// this.GUI/npm/src/pages/Docs/PageElements/PageElementsOverview.jsx
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { PageTitle, Section, Gridx } from "this.gui";

export default function PageElementsOverview() {
  const gridItems = [
    {
      title: "Title",
      content: (
        <Typography variant="body2">
          Use <strong>PageTitle</strong> to display a consistent title and subtitle for any page.
        </Typography>
      ),
      xs: 12,
      md: 6,
    },
    {
      title: "Container",
      content: (
        <Typography variant="body2">
          <strong>PageContainer</strong> wraps page content, providing consistent spacing, alignment, and background.
        </Typography>
      ),
      xs: 12,
      md: 6,
    },
    {
      title: "Section",
      content: (
        <Typography variant="body2">
          Use <strong>Section</strong> to organize content into visually separated blocks with optional titles.
        </Typography>
      ),
      xs: 12,
      md: 6,
    },
    {
      title: "Grid",
      content: (
        <Typography variant="body2">
          <strong>Gridx</strong> lays out content in a responsive grid, ideal for feature highlights or cards.
        </Typography>
      ),
      xs: 12,
      md: 6,
    },
    {
      title: "CodeBlock",
      content: (
        <Typography variant="body2">
          Use <strong>CodeBlock</strong> for syntax-highlighted code snippets or examples.
        </Typography>
      ),
      xs: 12,
      md: 6,
    },
  ];

  return (
    <>
      <PageTitle
        title="Page Elements Overview"
        subtitle="Reusable components for building consistent pages."
      />
      <Section title="Elements">
        <Typography variant="body1" sx={{ mb: 2 }}>
          These are the core building blocks for creating pages in <strong>this.gui</strong>. 
          Combine them to rapidly design layouts with consistent style and spacing.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}