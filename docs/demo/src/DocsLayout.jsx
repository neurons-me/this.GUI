import { MinimalLayout } from "this.gui";

export default function DocsLayout() {
  return (
    <MinimalLayout
      config={{
        title: "This.GUI",
        logo: "https://neurons.me/neurons.me.png",
        defaultContext: "Generic Components",
        topNavLinks: [
          { label: "Home", path: "/", external: false },
          {
            label: "NavLinkDrop",
            children: [
              {
                label: "Child 1",
                children: [
                  { label: "Child-Child 1A", path: "/navlinkdrop/child1/a", external: false },
                  { label: "Child-Child 1B", path: "/navlinkdrop/child1/b", external: false }
                ]
              },
              {
                label: "Child 2",
                children: [
                  { label: "Child-Child 2A", path: "/navlinkdrop/child2/a", external: false }
                ]
              }
            ]
          }
        ],
        sideBarLinks: {
          "Generic Components": [
            { label: "Home", path: "/", external: false },
            {
              label: "Text",
              children: [
                { label: "Title", path: "/docs/elements/title", external: false },
                { label: "Paragraph", path: "/docs/elements/paragraph", external: false },
                { label: "List", path: "/docs/elements/list", external: false }
              ]
            },
            {
              label: "Media",
              children: [
                { label: "Image", path: "/docs/elements/image", external: false },
                { label: "Embed", path: "/docs/elements/embed", external: false }
              ]
            },
            {
              label: "Organization",
              children: [
                { label: "Table of Contents", path: "/docs/elements/toc", external: false },
                { label: "Tabs", path: "/docs/elements/tabs", external: false }
              ]
            },
            {
              label: "Layout",
              children: [
                { label: "Containers", path: "/docs/elements/container", external: false },
                { label: "Grid", path: "/docs/elements/grid", external: false },
                { label: "Section", path: "/docs/elements/section", external: false },
                { label: "Divider", path: "/docs/elements/divider", external: false }
              ]
            },
            {
              label: "Code",
              children: [
                { label: "CodeBlock", path: "/docs/elements/codeblock", external: false }
              ]
            },
            {
              label: "Templates",
              children: [
                { label: "Minimal Layout", path: "/docs/layouts/minimal", external: false }
              ]
            },
            {
              label: "AppBars",
              children: [
                { label: "TopBarAndSideBar", path: "/docs/elements/topbarandsidebar", external: false }
              ]
            },
            {
              label: "Level 1",
              children: [
                {
                  label: "Level 2",
                  children: [
                    { label: "Level 3 - A", path: "#" },
                    { label: "Level 3 - B", path: "#" }
                  ]
                },
                {
                  label: "Level 2 - Second",
                  children: [
                    { label: "Level 3 - C", path: "#" }
                  ]
                }
              ]
            },
            { label: "Demo", path: "/docs/demo", external: false }
          ],
          "Cleaker": [
            { label: "Intro", path: "/cleaker/intro", external: false }
          ],
          "This.Me": [
            { label: "Intro", path: "/thisme/intro", external: false },
            {
              label: "Components",
              children: [
                { label: "Floating Monad", path: "/docs/floating", external: false },
                { label: "Status View", path: "/thisme/components/status", external: false }
              ]
            }
          ]
        }
      }}
    >
      {/* The content will be rendered here */}
    </MinimalLayout>
  );
}