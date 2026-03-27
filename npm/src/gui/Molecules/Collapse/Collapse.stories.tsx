import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';
import { Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
const meta: Meta<typeof Collapse> = {
  title: 'Molecules/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ padding: 16, minHeight: 220 }}>
          <Story />
        </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Collapse** atom is a thin wrapper around MUI's \`MuiCollapse\`, staying faithful to its API and polymorphism.

In **declarative** mode (resolver), it forwards MUI props as-is and supports granular styling via \`sx\` on the root.

---
## React usage
~~~jsx
const [open, setOpen] = React.useState(true);

<Collapse in={open}>
  <div style={{ padding: 12, border: '1px solid var(--mui-palette-divider)', borderRadius: 8 }}>
    Collapsible content
  </div>
</Collapse>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "Collapse",
  "props": {
    "in": true,
    "orientation": "vertical",
    "sx": { "border": "1px dashed", "borderColor": "divider", "p": 1 }
  }
}
~~~
        `,
      },
    },
    controls: {
      exclude: ['component', 'children', 'as', 'timeout', 'easing'],
    },
  },
  argTypes: {
    in: { control: 'boolean', description: 'Show/Hide content' },
    orientation: { control: { type: 'radio' }, options: ['vertical', 'horizontal'] },
    collapsedSize: { control: 'text', description: 'number or CSS size' },
    unmountOnExit: { control: 'boolean' },
    mountOnEnter: { control: 'boolean' },
    appear: { control: 'boolean' },
    sx: { control: 'object' },
  },
  args: {
    in: true,
    orientation: 'vertical',
    collapsedSize: 0,
    unmountOnExit: false,
    mountOnEnter: false,
    appear: false,
    sx: {},
    children: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

const DemoBlock: React.FC<{ label?: string }> = ({ label = 'Collapsible content' }) => {
  return (
    <div style={{
      padding: 12,
      border: '1px solid var(--mui-palette-divider)',
      borderRadius: 8,
      background: 'var(--mui-palette-background-paper)',
      width: 200,
    }}>
      {label}
    </div>
  );
};

// ======================= Stories =======================
export const Playground: Story = {
  render: (args) => <Collapse {...args}><DemoBlock /></Collapse>,
};

export const Variants: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <Stack spacing={2}>
        <Typography variant="h6">Basic Collapse</Typography>
        <Collapse in={open} >
          <DemoBlock label="Basic Collapsible Content"/>
        </Collapse>
        <button onClick={() => setOpen(!open)}>
          Toggle Collapse
        </button>

        <Typography variant="h6">Horizontal Collapse</Typography>
        <Collapse orientation="horizontal" in={open}>
          <DemoBlock label="Horizontal Collapsible Content"/>
        </Collapse>
      </Stack>
    );
  }
};
