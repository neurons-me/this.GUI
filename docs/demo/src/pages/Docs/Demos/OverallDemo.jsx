//this.GUI/npm/demo/src/pages/Docs/Demos/OverallDemo.jsx
import { PageTitle, PageParagraph, PageImage, PageDivider, PageList, PageEmbed, TableOfContents, Tabs, Section, Gridx, Container } from "this.gui";

export default function OverallDemo() {
  const headings = [
    { id: "intro", text: "Introduction", level: 1 },
    { id: "features", text: "Key Features", level: 1 },
    { id: "media", text: "Media Example", level: 1 },
    { id: "tabs", text: "Tabbed Content", level: 1 },
  ];

  const tabsData = [
    {
      label: "Overview",
      content: <PageParagraph>This is an overview tab with introductory text.</PageParagraph>,
    },
    {
      label: "Details",
      content: (
        <PageList
          type="ordered"
          items={[
            { primary: "Step One", secondary: "Do this first." },
            { primary: "Step Two", secondary: "Then proceed here." },
          ]}
        />
      ),
    },
    {
      label: "Extra",
      content: <PageParagraph>This tab can hold any custom content or components.</PageParagraph>,
    },
  ];

  const gridItems = [
    {
      title: "Title + Paragraph",
      content: (
        <>
          <PageTitle title="Subsection Title" subtitle="A subtitle for this subsection" level={2} />
          <PageParagraph align="justify">
            This is a justified paragraph demonstrating how textual content can look when placed inside a grid.
          </PageParagraph>
        </>
      ),
      xs: 12,
      md: 6,
    },
    {
      title: "List Example",
      content: <PageList items={["Bullet One", "Bullet Two", "Bullet Three"]} />,
      xs: 12,
      md: 6,
    },
  ];

  return (
    <Container>
      <PageTitle
        id="intro"
        title="Overall Demo"
        subtitle="A showcase combining all core components."
      />

      <TableOfContents headings={headings} />

      <Section id="features" title="Key Features">
        <PageParagraph>
          Below you can see a combination of multiple components laid out together.
        </PageParagraph>
        <Gridx items={gridItems} />
      </Section>

      <PageDivider spacing={4} />

      <Section id="media" title="Media Example">
        <PageImage
          src="https://via.placeholder.com/400"
          alt="Example Image"
          caption="This is a sample image with caption."
        />
        <PageEmbed
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sample Video"
        />
      </Section>

      <PageDivider spacing={4} />

      <Section id="tabs" title="Tabbed Content">
        <Tabs tabs={tabsData} />
      </Section>
    </Container>
  );
}