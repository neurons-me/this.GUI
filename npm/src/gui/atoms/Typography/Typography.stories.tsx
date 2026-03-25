import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import Link from '../Link/Link';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ padding: 24 }}>
          <Story />
        </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
**Typography** is a thin, polymorphic wrapper around MUI's Typography that keeps the full API
while exposing it through This.GUI. Import it from **@/gui/primitives** instead of @mui/material so
you can swap render engines in the future without breaking consumers.

### Key points
- Preserves MUI's polymorphism (\`component\`, \`as\`, \`variantMapping\`).
- Works with routers and anchors: \`component={Link}\` + \`to\`, or \`component="a"\` + \`href\`.
- Styled by your This.GUI theme (typography, palette, spacing).

### Common variants
MUI variants like \`h1..h6\`, \`subtitle1/2\`, \`body1/2\`, \`caption\`, \`overline\` are supported.

### Declarative JSON example
You can describe text nodes in JSON and hydrate them in a renderer:

~~~json
{
  "type": "Typography",
  "props": {
    "variant": "h4",
    "component": "h2",
    "gutterBottom": true
  },
  "children": "Section Title"
}
~~~

A naive hydration would look like:

~~~tsx
const spec = {
  type: 'Typography',
  props: { variant: 'h4', component: 'h2', gutterBottom: true },
  children: 'Section Title'
};

<Typography {...spec.props}>{spec.children}</Typography>
~~~
        `,
      },
    },
    controls: { exclude: ['component', 'to', 'href', 'variantMapping', 'ref'] },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: {
    variant: 'body1',
    children: 'Hello from Typography',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography variant="h6" gutterBottom>Variants</Typography>
        <div style={{ display: 'grid', gap: 8 }}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="caption">caption</Typography>
          <Typography variant="overline">overline</Typography>
        </div>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>Alignment</Typography>
        <div style={{ display: 'grid', gap: 8 }}>
          <Typography align="left">Left aligned</Typography>
          <Typography align="center">Center aligned</Typography>
          <Typography align="right">Right aligned</Typography>
        </div>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>Colors</Typography>
        <div style={{ display: 'grid', gap: 8 }}>
          <Typography color="text.primary">text.primary</Typography>
          <Typography color="text.secondary">text.secondary</Typography>
          <Typography color="primary">primary</Typography>
          <Typography color="#00aa96">#00aa96 (custom)</Typography>
        </div>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>Usage</Typography>
        <div style={{ display: 'grid', gap: 12 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Section title (rendered as h2)
          </Typography>
          <Typography variant="body1">
            Body text below the title. The gutterBottom adds spacing.
          </Typography>
          <Typography component={Link as any} to="/docs" underline="none">
            Router link
          </Typography>
          <Typography component="a" href="https://neurons.me" target="_blank" rel="noopener noreferrer">
            External link
          </Typography>
        </div>
      </div>
    </div>
  ),
};