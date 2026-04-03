export const guiExportsSpec = {
  type: "Page",
  props: {
    title: "Exports",
    subtitle: "Shapes and Forms",
  },
  children: [
    {
      type: "Box",
      props: {
        sx: {
          mt: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(0, 1.1fr) minmax(0, 1fr)",
          },
          gap: 2,
          alignItems: "start",
        },
      },
      children: [
        {
          type: "Paper",
          props: {
            sx: {
              p: 3,
              borderRadius: 2,
              border: "1px dashed",
              borderColor: "divider",
              backgroundColor: "background.paper",
            },
          },
          children: [
            {
              type: "Typography",
              props: {
                variant: "overline",
                sx: {
                  color: "text.secondary",
                  letterSpacing: "0.16em",
                },
              },
              children: ["Experiment"],
            },
            {
              type: "Typography",
              props: {
                variant: "h5",
                sx: {
                  fontWeight: 800,
                  mt: 0.5,
                },
              },
              children: ["ProfileCard without file"],
            },
            {
              type: "Typography",
              props: {
                variant: "body1",
                sx: {
                  color: "text.secondary",
                  mt: 1.25,
                  lineHeight: 1.7,
                },
              },
              children: [
                "This screen mounts a virtual registry entry named ProfileCard. The resolver does not return React directly; it returns a GuiNode composed from atoms like Paper, Avatar, Typography, Chip, Box, and Button.",
              ],
            },
            {
              type: "Box",
              props: {
                sx: {
                  mt: 2,
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: "action.hover",
                  border: "1px solid",
                  borderColor: "divider",
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: "0.8rem",
                  lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                },
              },
              children: [
                'Registry["ProfileCard"] -> resolve(spec) -> GuiNode -> renderer re-enters',
              ],
            },
          ],
        },
        {
          type: "Box",
          props: {
            sx: {
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 2,
            },
          },
          children: [
            {
              type: "ProfileCard",
              props: {
                name: "Monad Pattern",
                handle: "@monad.ai",
                status: "experimental",
                bio: "A named law in the registry. No ProfileCard.tsx exists here; this surface is assembled on the fly from atoms.",
                badges: ["virtual", "registry-born", "resolve->GuiNode"],
                notes: [
                  "Installed from data/virtual-patterns.js",
                  "Rendered through the same deterministic runtime",
                ],
                actions: [
                  { label: "Primary Action", variant: "contained", color: "primary" },
                  { label: "Secondary", variant: "outlined" },
                ],
              },
            },
            {
              type: "ProfileCard",
              props: {
                name: "Semantic Shell",
                handle: "@this.GUI",
                status: "active",
                bio: "The same pattern, different props. Consistency comes from the named law, not from re-prompting a model each time.",
                badges: ["consistent", "spec-driven", "molecule-pattern"],
                notes: [
                  "Same type, same law",
                  "Different instance data only",
                ],
                actions: [
                  { label: "Contained", variant: "contained", color: "secondary" },
                  { label: "Ghost", variant: "text" },
                ],
              },
            },
          ],
        },
        {
          type: "Paper",
          props: {
            sx: {
              p: 3,
              minHeight: "24vh",
              borderRadius: 2,
              border: "1px dashed",
              borderColor: "divider",
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              gridColumn: {
                xs: "auto",
                lg: "1 / -1",
              },
            },
          },
          children: [
            {
              type: "Typography",
              props: {
                variant: "subtitle1",
                sx: {
                  fontWeight: 700,
                },
              },
              children: ["Why this matters"],
            },
            {
              type: "Typography",
              props: {
                variant: "body2",
                sx: {
                  color: "text.secondary",
                },
              },
              children: [
                "If this works, molecules no longer need to be precompiled React files. They can exist as addressable registry laws that emit spec, while atoms stay as the stable physical layer.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "Paper",
      props: {
        sx: {
          p: 3,
          mt: 2,
          minHeight: "18vh",
          borderRadius: 2,
          border: "1px dashed",
          borderColor: "divider",
          backgroundColor: "background.paper",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.75,
        },
      },
      children: [
        {
          type: "Typography",
          props: {
            variant: "body2",
            sx: {
              color: "text.secondary",
            },
          },
          children: ["Hero now resolves as a registry pattern. Next move: migrate Page into a real pattern resolver too."],
        },
      ],
    },
  ],
};
