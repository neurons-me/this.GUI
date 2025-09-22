import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Box, Stack, Typography, Paper } from "@/gui/atoms";
import GuiProvider from '@/context/GuiProvider';
import ThemeModeToggle from './ThemeModeToggle';

// ======================= Meta =======================
const meta: Meta<typeof ThemeModeToggle> = {
  title: 'Molecules/Utilities/ThemeModeToggle',
  component: ThemeModeToggle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <GuiProvider>
          <Box sx={{ p: 2 }}>
            <Story />
          </Box>
        </GuiProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A compact **theme mode switcher** that plugs into \`GuiProvider\`.

- **Variants**
  - \`minimal\`: icon-only button (sun/moon).
  - \`switch\`: MUI-like switch with state.
- Sizing follows the component's internal defaults for each variant.

The component reads and updates the active mode via **GuiProvider**
(\`useThemeContext()\`). No extra state wiring needed.

**Design guidance**
- Put it near the global theme selector, app bar, or user menu.
- If you need a fully custom look, wrap it and style via \`sx\` on the parent.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['minimal', 'switch'],
      description: 'Visual style of the toggle.',
    },
    show: {
      control: { type: 'radio' },
      options: ['icons', 'label', 'both'],
      description: 'What to render: icons, label, or both.',
    },
    id: { control: 'text', table: { category: 'DOM' } },
    className: { control: 'text', table: { category: 'DOM' } },
    'data-testid': { control: 'text', table: { category: 'Testing' } },
  },
  args: {
    variant: 'switch',
    show: 'both',
  },
};
export default meta;

type Story = StoryObj<typeof ThemeModeToggle>;

// ======================= Stories =======================
export const Playground: Story = {
  render: (args) => (
    <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        Try switching mode
      </Typography>
      <ThemeModeToggle {...args} />
    </Paper>
  ),
};

export const MinimalIconsOnly: Story = {
  name: 'Minimal / Icons only',
  args: { variant: 'minimal', show: 'icons' },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2">Icon button that toggles light/dark</Typography>
      <ThemeModeToggle {...args} />
    </Stack>
  ),
};

export const MinimalWithLabel: Story = {
  name: 'Minimal / Icon + Label',
  args: { variant: 'minimal', show: 'both' },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2">Icon + label</Typography>
      <ThemeModeToggle {...args} />
    </Stack>
  ),
};

export const SwitchIconsOnly: Story = {
  name: 'Switch / Icons only',
  args: { variant: 'switch', show: 'icons' },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2">Compact switch</Typography>
      <ThemeModeToggle {...args} />
    </Stack>
  ),
};

export const SwitchWithLabel: Story = {
  name: 'Switch / With label',
  args: { variant: 'switch', show: 'both' },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2">Accessible labeled switch</Typography>
      <ThemeModeToggle {...args} />
    </Stack>
  ),
};

// ======================= Docs-only snippets =======================
export const UsageSnippets: Story = {
  name: 'Docs: Usage snippets',
  parameters: {
    docs: {
      description: {
        story: `
### Minimal (icon button)
~~~tsx
<ThemeModeToggle variant="minimal" show="icons" />
~~~

### Switch (with label)
~~~tsx
<ThemeModeToggle variant="switch" show="both" />
~~~

This component reads and updates the active mode from **GuiProvider**.
It does not require props for state; just render it once in your layout.
        `,
      },
    },
  },
  render: () => (
    <Stack direction="column" spacing={1}>
      <ThemeModeToggle variant="minimal" show="icons" />
      <ThemeModeToggle variant="switch" show="both" />
    </Stack>
  ),
};