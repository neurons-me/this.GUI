import type { Meta, StoryObj } from '@storybook/react';
import ThemesCatalog from './Catalog';

// Optional: Storybook links addon (if installed). We also provide a hash fallback.
import { linkTo } from '@storybook/addon-links';

// ======================= Meta =======================
const meta: Meta<typeof ThemesCatalog> = {
  title: 'GUI/Theme/Catalog',
  component: ThemesCatalog,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const goToPalette = () => {
        try {
          // If addon-links is present, this will navigate within Storybook
          const fn = linkTo('Theme/Palette', 'Default');
          if (typeof fn === 'function') return fn();
        } catch {
          // ignore and fallback
        }

        // Fallback: direct hash navigation (works even without addon-links)
        // Adjust the story id if your Palette story uses a different title.
        window.location.hash = '#/story/theme-palette--default';
      };

      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column', // Use theme variable for background
            background: 'var(--mui-palette-background-default, #0b0f14)',
          }}
        >
          {/* TopBar */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 12px', // Use theme variables
              borderBottom: '1px solid var(--mui-palette-divider, rgba(255,255,255,0.08))',
              backdropFilter: 'blur(10px)',
              background: 'color-mix(in srgb, var(--mui-palette-background-paper, #0a0e14) 72%, transparent)',
              color: 'var(--mui-palette-text-primary, #fff)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontWeight: 700, letterSpacing: -0.2 }}>Themes Catalog</div>
              <div style={{ opacity: 0.7, fontSize: 12 }}>Browse & select GUI themes</div>
            </div>

            <button
              type="button"
              onClick={goToPalette}
              title="Open Palette stories"
              aria-label="Open Palette stories"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: 10,
                border: '1px solid var(--mui-palette-divider, rgba(255,255,255,0.12))',
                background: 'var(--mui-palette-action-hover, rgba(255,255,255,0.04))',
                color: 'var(--mui-palette-text-primary, rgba(255,255,255,0.92))',
                cursor: 'pointer',
              }}
            >
              {/* Palette icon (inline SVG) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3c-4.97 0-9 3.58-9 8c0 2.76 1.66 5.2 4.26 6.67c.58.33.94.95.94 1.61V21c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.18c0-.66.36-1.28.94-1.61C19.34 16.2 21 13.76 21 11c0-4.42-4.03-8-9-8zm2.5 7c.83 0 1.5.67 1.5 1.5S15.33 13 14.5 13S13 12.33 13 11.5S13.67 10 14.5 10zM7.5 13C6.67 13 6 12.33 6 11.5S6.67 10 7.5 10S9 10.67 9 11.5S8.33 13 7.5 13zm2-4.5C8.67 8.5 8 7.83 8 7s.67-1.5 1.5-1.5S11 6.17 11 7s-.67 1.5-1.5 1.5zm5 0C13.67 8.5 13 7.83 13 7s.67-1.5 1.5-1.5S16 6.17 16 7s-.67 1.5-1.5 1.5z"/>
              </svg>
            </button>
          </div>

          {/* Story content */}
          <div style={{ padding: 16, minHeight: 320, flex: 1 }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **ThemesCatalog** is a *state-aware theme selector* that renders available GUI themes as interactive cards.

Think of it as a **visual controller over your ThemeContext**, not just a list.

---
## Mental Model

The component operates across **three layers**:

1. **Data Layer**
   - Sources themes from \`getGuiThemes()\`
   - Each theme is a \`ThemeManifest\`

2. **State Layer**
   - Reads and writes from \`useThemeContext()\`
   - Controls:
     - \`themeId\`
     - \`mode\` (light / dark)

3. **Presentation Layer**
   - Renders themes as cards
   - Supports layout + density variants

---
## Variants (Layout vs Density)

### Layout Variants
- \`grid\` → visual gallery (default)
- \`list\` → vertical stack

### Density Modifiers
These *override layout behavior*:

- \`minimal\`
  - Hides author + description
  - Keeps structure

- \`compact\`
  - Forces grid layout
  - Reduces spacing, typography, and sizing
  - Optimized for dashboards / side panels

👉 **Important:**
\`compact\` is not just visual — it *changes layout rules*.

---
## Behavior

- Selecting a card:
  - Updates global theme (\`themeId\`)
  - Syncs mode (light/dark)
  - Stores history via \`meRef\`

- Active theme:
  - Highlighted
  - Shows mode toggle (unless disabled)

---
## Usage

### Basic
~~~jsx
<ThemesCatalog />
~~~

### List View
~~~jsx
<ThemesCatalog variant="list" />
~~~

### Minimal UI
~~~jsx
<ThemesCatalog minimal />
~~~

### Compact (Dense Grid)
~~~jsx
<ThemesCatalog compact />
~~~

---
## Declarative
~~~json
{
  "type": "ThemesCatalog",
  "props": {
    "compact": true
  }
}
~~~

---
## When to use

- Theme pickers (user settings)
- Design system previews
- Admin / dev tools
- Embedded UI panels

---
## Key Insight

This is not just a component.

It is a **bridge between theme data, global state, and UI representation**.

That’s why it supports both:
- Imperative React usage
- Declarative GUI specs
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['grid', 'list'],
      description: 'Choose layout variant',
    },
    hideDescription: {
      control: { type: 'boolean' },
      description: 'Hide the theme description text inside each card',
    },
    hideAuthor: {
      control: { type: 'boolean' },
      description: 'Hide the theme author text inside each card',
    },
    minimal: {
      control: { type: 'boolean' },
      description: 'Compact view (hides both author and description)',
    },
  },
  args: {
    variant: 'grid',
    hideDescription: false,
    hideAuthor: false,
    minimal: false,
  },
};

export default meta;
type Story = StoryObj<typeof ThemesCatalog>;

// ======================= Stories =======================
export const Playground: Story = {
  args: {
    variant: 'grid',
  },
};

export const ListVariant: Story = {
  name: 'List layout',
  args: {
    variant: 'list',
  },
};

export const NoDescriptions: Story = {
  name: 'No descriptions',
  args: {
    variant: 'grid',
    hideDescription: true,
  },
};

export const Minimal: Story = {
  name: 'Minimal (no author, no description)',
  args: {
    variant: 'grid',
    minimal: true,
  },
};

export const Compact: Story = {
  name: 'Compact (dense grid)',
  args: {
    compact: true,
  },
};

export const CompactMinimal: Story = {
  name: 'Compact + Minimal',
  args: {
    compact: true,
    minimal: true,
  },
};

export const ListMinimal: Story = {
  name: 'List + Minimal',
  args: {
    variant: 'list',
    minimal: true,
  },
};