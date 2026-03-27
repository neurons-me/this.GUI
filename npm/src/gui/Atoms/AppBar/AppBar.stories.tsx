import type { Meta, StoryObj } from '@storybook/react';
import { Bar, Typography, Box, Button } from '@/gui/Atoms';
import { Toolbar, Stack } from '@/gui/Molecules';

// ======================= Meta =======================
const meta: Meta<typeof Bar> = {
  title: 'Atoms/Bars',
  component: Bar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 0, width: '100%', minHeight: 240 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Bar** atom is a thin wrapper around MUI's \`Bar\` that keeps the original API while letting you style it with \`sx\` and use it declaratively through the **resolver**.

---
## Features
- Positions: \`fixed\`, \`absolute\`, \`sticky\`, \`static\`, \`relative\`.
- Colors: \`default\`, \`inherit\`, \`primary\`, \`secondary\`, \`transparent\`. Bar **only supports** these colors for the \`color\` prop.
- Note: \`success\`, \`info\`, \`warning\`, and \`error\` are **not supported** by the \`color\` prop. Use \`sx={{ bgcolor: '...' }}\` for these colors.
- Additional theme colors can be applied via \`sx={{ bgcolor: 'success.main' }}\` etc.
- Elevation & dark-mode override with \`enableColorOnDark\`.
- Accepts any children (e.g., \`<Toolbar/>\`, actions, brand, etc.).
- Fully themeable via **This.GUI** tokens and \`sx\`.
- Variant semantic presets: \`mui\` (default) behaves like MUI Bar, \`glass\` for floating blurred panel style.

---
## Key Props
- \`variant?: 'mui' | 'glass'\` — semantic preset.
- \`position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'\`.
- \`color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'\` — Bar **only supports** these values.
- \`success\`, \`info\`, \`warning\`, and \`error\` are **not supported** by \`color\`; use \`sx={{ bgcolor: '...' }}\` instead.
- \`elevation?: number\`.
- \`enableColorOnDark?: boolean\`.
- \`sx?: object\` — granular styling via the system.

---
## Basic usage (React)
~~~tsx
import { Bar, Toolbar, Typography, Button, Box } from '@/gui/atoms';

<Bar position="fixed" color="default" sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
  <Toolbar variant="dense">
    <Typography variant="h6" sx={{ flexGrow: 1 }}>My App</Typography>
    <Button variant="text">Login</Button>
  </Toolbar>
</Bar>
~~~

---
## Declarative JSON / Config usage
This GUI's **resolver** lets you describe an app bar via a config object. Example payload for the \`BarResolver\`:

~~~json
{
  "type": "Bar",
  "props": {
    "position": "fixed",
    "color": "default",
    "sx": { "borderBottom": "1px solid", "borderColor": "divider" },
    "children": {
      "type": "Toolbar",
      "props": {
        "variant": "dense",
        "children": [
          { "type": "Typography", "props": { "variant": "h6", "sx": { "flexGrow": 1 }, "children": "My App" } },
          { "type": "Button", "props": { "variant": "text", "children": "Login" } }
        ]
      }
    }
  }
}
~~~

> The resolver maps this spec to real React elements, preserving polymorphism and \`sx\` styling.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['mui', 'glass'],
      description: 'Semantic preset. mui (default): behaves like MUI Bar. glass: floating blurred panel style.',
    },
    position: {
      control: { type: 'select' },
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
    },
    elevation: { control: { type: 'number' } },
    enableColorOnDark: { control: { type: 'boolean' } },
    // component polymorphism is supported but not exposed as a control in SB
    component: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Bar>;

// ======================= Stories =======================
export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Typography variant="h6">Default Bar</Typography>
      <Bar position="static" color="default" sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Default</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{ mt: 2 }}>Primary Color</Typography>
      <Bar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Primary</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{ mt: 2 }}>Glass Variant</Typography>
      <Bar position="static" variant={'glass' as any}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Glass</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>

      <Typography variant="h6" sx={{ mt: 2 }}>With Elevation</Typography>
      <Bar position="static" color="default" elevation={4}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Elevation</Typography>
          <Button color="inherit">Action</Button>
        </Toolbar>
      </Bar>
    </Stack>
  ),
};
