// src/gui/atoms/Box/Box.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Link, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
// ======================= Meta =======================
const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ padding: 16, minHeight: 240, width: '100%' }}>
          <Story />
        </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
**Box** is a thin wrapper around MUI's \`Box\` that preserves **polymorphism** and integrates with **This.GUI** theming.
Use it as your default layout primitive: spacing, flex/grid, backgrounds, borders, etc.

---
## Features
- **Polymorphic**: \`component\` (or \`as\`) can be an element tag (e.g. \`'section'\`, \`'img'\`, \`'a'\`) or a component (e.g. This.GUI \`Link\`).
- **Routing-friendly**: when using \`component={Link}\` you can pass \`to\`; anchors use \`href\`.
- **System props** & **sx**: use MUI system (p, m, display, gap, flex, grid, etc.) and the \`sx\` prop for deep styling.
- **Image mode**: if \`component="img"\`, you can pass \`src\`, \`alt\`, \`width\`, \`height\`, \`loading\`, \`decoding\`, \`referrerPolicy\`, \`sizes\`, \`srcSet\`.

---
## Key Props
- \`component?: ElementType | string\` / \`as?: ElementType | string\`
- \`to?: string\` (when \`component={Link}\`)
- \`href?: string\` (when \`component="a"\`)
- \`sx?: SxProps\` + all MUI system props (e.g. \`p\`, \`m\`, \`display\`, \`gap\`)
- **Image-only extras** (when \`component="img"\`): \`src\`, \`alt\`, \`width\`, \`height\`, \`loading\`, \`decoding\`, \`referrerPolicy\`, \`sizes\`, \`srcSet\`.

> We don't expose \`component\`, \`to\`, \`href\` as Storybook controls—see the dedicated stories below.

---
## Basic usage
~~~jsx
import { Box } from '@/gui/atoms';

<Box p={2} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
  Content
</Box>
~~~

## Polymorphic (as a section)
~~~jsx
<Box component="section" p={2}>Section content</Box>
~~~

## Router link target
~~~jsx
import { Box, Link } from '@/gui/atoms';

<Box component={Link} to="/docs" p={1} sx={{ display: 'inline-block' }}>
  Go to docs
</Box>
~~~

## Image mode
~~~jsx
<Box component="img" src="/logo.png" alt="Logo" sx={{ width: 120, height: 'auto' }} />
~~~

## Declarative JSON / Config usage
~~~json
{
  "type": "Box",
  "props": {
    "component": "section",
    "p": 2,
    "sx": { "border": "1px solid", "borderColor": "divider", "borderRadius": 8 },
    "children": "Section content"
  }
}
~~~
        `,
      },
    },
    controls: {
      exclude: ['component', 'as', 'to', 'href', 'sx'],
    },
  },
  argTypes: {
    // System props examples (you can add more if useful)
    p: { control: { type: 'number' }, description: 'Padding (system prop)' },
    m: { control: { type: 'number' }, description: 'Margin (system prop)' },
    display: {
      control: { type: 'select' },
      options: ['block', 'inline-block', 'flex', 'grid', 'inline-flex', 'inline', 'none'],
    },
    gap: { control: { type: 'number' } },
  },
  args: {
    // Default args can be set here for the Playground
  },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Typography variant="h6">Basic Box</Typography>
      <Box p={2} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        A simple box with padding and a border.
      </Box>

      <Typography variant="h6">Flex Layout</Typography>
      <Box display="flex" gap={2}>
        <Box p={2} sx={{ border: '1px dashed', borderColor: 'divider' }}>Flex Item 1</Box>
        <Box p={2} sx={{ border: '1px dashed', borderColor: 'divider' }}>Flex Item 2</Box>
        <Box p={2} sx={{ border: '1px dashed', borderColor: 'divider' }}>Flex Item 3</Box>
      </Box>

      <Typography variant="h6">Polymorphic (as a section)</Typography>
      <Box component="section" p={2} sx={{ borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: 'action.hover' }}>
        <Typography variant="h6" gutterBottom>Section Title</Typography>
        <Typography>This is a Box rendered as a &lt;section&gt; element.</Typography>
      </Box>

      <Typography variant="h6">Polymorphic (as a link)</Typography>
      <Box
        component={Link}
        to="/docs"
        p={1}
        sx={{
          display: 'inline-block',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          '&:hover': { textDecoration: 'none', bgcolor: 'action.hover' },
        }}
      >
        Go to docs
      </Box>

      <Typography variant="h6">Image Mode</Typography>
      <Box
        component="img"
        src="https://placekitten.com/320/160"
        alt="Kitten"
        sx={{ width: 320, height: 'auto', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}
        loading="lazy"
      />
    </Stack>
  )
};
