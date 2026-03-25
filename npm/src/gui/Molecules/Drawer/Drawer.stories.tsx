import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, Box, Button, Typography, Stack } from '@/gui/Atoms';
// ======================= Meta =======================
const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ padding: 16, minHeight: 320 }}>
          <Story />
        </div>
    )],
  parameters: {
    docs: {
      description: {
        component: `
The **Drawer** primitive is a thin wrapper over MUI's \`MuiDrawer\`. It preserves all of MUI's props and behavior, while keeping the import surface stable via \`@/gui/primitives\`.

---
## Features
- Variants: \`temporary\`, \`persistent\`, \`permanent\`.
- Anchors: \`left\`, \`right\`, \`top\`, \`bottom\`.
- Works with This.GUI theme (via the \`Theme\` provider).
- Accepts \`sx\` and \`PaperProps\` for styling the surface.

> Note: For \`temporary\` drawers, you control visibility with the \`open\` prop and \`onClose\`.  
> For \`permanent\` drawers, \`open\` is ignored by MUI; the drawer is always visible.

---
## Basic usage
~~~tsx
import { Drawer } from '@/gui/primitives';

<Drawer anchor="left" variant="temporary" open={open} onClose={() => setOpen(false)}>
  <div style={{ width: 260, padding: 16 }}>Content</div>
</Drawer>
~~~

## Permanent sidebar
~~~tsx
<Drawer anchor="left" variant="permanent" PaperProps={{ sx: { width: 260 } }}>
  <div style={{ width: 260, padding: 16 }}>Navigation</div>
</Drawer>
~~~

## Declarative JSON / Config
~~~json
{
  "type": "Drawer",
  "props": {
    "variant": "temporary",
    "anchor": "right",
    "PaperProps": { "sx": { "width": 300 } },
    "children": "<YourMenu />"
  }
}
~~~

When used via your registry/resolver, the object above is resolved into a live Drawer with the provided props.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['temporary', 'persistent', 'permanent'],
    },
    anchor: {
      control: { type: 'radio' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    open: {
      control: { type: 'boolean' },
      description: 'Only relevant for temporary/persistent variants.',
    },
    // Not useful as a control in SB; better shown in examples
    container: { table: { disable: true } },
  },
  args: {
    variant: 'temporary',
    anchor: 'left',
    open: false,
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

// ======================= Helpers =======================
const DemoList = ({ label = 'Menu' }: { label?: string }) => (
  <Box sx={{ width: 260, p: 2 }}>
    <Typography variant="subtitle1" sx={{ mb: 1.5 }}>{label}</Typography>
    <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.9 }}>
      <li><a href="#">Item one</a></li>
      <li><a href="#">Item two</a></li>
      <li><a href="#">Item three</a></li>
    </ul>
  </Box>
);

// ======================= Stories =======================

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Use controls to test props. Note: `open` only affects `temporary` or `persistent` variants.
      </Typography>
      <Drawer {...args}>
        <DemoList />
      </Drawer>
    </>
  ),
  args: {
    children: <DemoList />,
  },
};

export const Variants: Story = {
  name: 'Variants Showcase',
  render: () => {
    const [openLeft, setOpenLeft] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [openTop, setOpenTop] = React.useState(false);
    const [openBottom, setOpenBottom] = React.useState(false);
    return (
      <Stack spacing={4} sx={{ width: '100%' }}>
        <Typography variant="h6">Temporary Drawers</Typography>
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary" onClick={() => setOpenLeft(true)}>
            Open Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenRight(true)}>
            Open Right
          </Button>
          <Button variant="outlined" onClick={() => setOpenTop(true)}>Open top</Button>
          <Button variant="outlined" onClick={() => setOpenBottom(true)}>Open bottom</Button>
        </Stack>

        <Typography variant="h6">Permanent Drawer</Typography>
        <Box sx={{ display: 'flex', height: 240, border: '1px solid', borderColor: 'divider', borderRadius: 1, overflow: 'hidden' }}>
          <Drawer
            anchor="left"
            variant="permanent"
            PaperProps={{ sx: { width: 240, position: 'relative', borderRight: '1px solid', borderColor: 'divider' } }}
          >
            <DemoList label="Permanent" />
          </Drawer>
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Content Area</Typography>
            <Typography variant="body2">
              A permanent drawer remains visible within its container.
            </Typography>
          </Box>
        </Box>

        {/* Drawer instances for temporary examples */}
        <Drawer
          anchor="left"
          variant="temporary"
          open={openLeft}
          onClose={() => setOpenLeft(false)}
          ModalProps={{ keepMounted: true }}
        >
          <DemoList label="Left Drawer" />
        </Drawer>
        <Drawer
          anchor="right"
          variant="temporary"
          open={openRight}
          onClose={() => setOpenRight(false)}
          PaperProps={{ sx: { width: 300 } }}
        >
          <DemoList label="Right Drawer" />
        </Drawer>
        <Drawer
          anchor="top"
          variant="temporary"
          open={openTop}
          onClose={() => setOpenTop(false)}
          PaperProps={{ sx: { height: 'auto' } }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1">Top drawer</Typography>
          </Box>
        </Drawer>
        <Drawer
          anchor="bottom"
          variant="temporary"
          open={openBottom}
          onClose={() => setOpenBottom(false)}
          PaperProps={{ sx: { height: 'auto' } }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1">Bottom drawer</Typography>
          </Box>
        </Drawer>
      </Stack>
    );
  },
};
