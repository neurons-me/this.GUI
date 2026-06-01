import type { Meta, StoryObj } from '@storybook/react';
import Paper from './Paper';

const meta: Meta<typeof Paper> = {
  title: 'Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 16, minHeight: 240, background: 'var(--mui-palette-background-default)' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Paper** atom is a thin wrapper around MUI's \`MuiPaper\` that preserves **polymorphism** and integrates with **This.GUI** theming.

---
## Features
- Variants: \`elevation\`, \`outlined\`
- Elevation: \`0..24\`
- \`square\` toggle
- Polymorphic via \`component\`
- Fully stylable via \`sx\`

---
## Key Props
- \`variant?: 'elevation' | 'outlined'\`
- \`elevation?: number\`
- \`square?: boolean\`
- \`sx?: object\`

---
## Basic usage (React)
~~~tsx
import { Paper } from '@/gui/atoms';

<Paper elevation={2} sx={{ p: 2 }}>
  Content
</Paper>
~~~

---
## Declarative JSON / Config usage
~~~json
{
  "type": "Paper",
  "props": {
    "variant": "outlined",
    "sx": { "p": 2 },
    "children": "Content"
  }
}
~~~
        `,
      },
    },
    controls: {
      exclude: ['component'],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['elevation', 'outlined'],
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    square: {
      control: 'boolean',
    },
    sx: {
      control: 'object',
    },
  },
  args: {
    variant: 'elevation',
    elevation: 1,
    square: false,
    children: 'Paper content',
    sx: { p: 2 },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

// ======================= Stories =======================
export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <h3>Variants</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Paper {...args} variant="elevation">Elevation</Paper>
            <Paper {...args} variant="outlined">Outlined</Paper>
          </div>
        </div>

        <div>
          <h3>Elevation Levels</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[0, 1, 2, 4, 8, 16, 24].map((e) => (
              <Paper key={e} {...args} elevation={e}>
                elevation {e}
              </Paper>
            ))}
          </div>
        </div>

        <div>
          <h3>States</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Paper {...args}>Default</Paper>
            <Paper {...args} square>Square</Paper>
            <Paper {...args} variant="outlined" square>Outlined Square</Paper>
          </div>
        </div>
      </div>
    );
  },
};