import React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Paper from '@/gui/Atoms/Paper/Paper';
import Typography from '@/gui/Atoms/Typography/Typography';
import StickyOptionsTop from './StickyOptionsTop'; 
import NavBar from '../Sidebars/TopBar/TopBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StickyOptionsTop> = {
  title: 'GUI/Layout/StickyOptionsTop',
  component: StickyOptionsTop,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### StickyOptionsTop — Quick actions bar

**StickyOptionsTop** renders a compact, theme-aware quick-actions bar that sits just **under the NavBar** and automatically respects permanent drawer insets (left/right) as well as the runtime **nav height** provided by your \`CustomThemeProvider\`.

In this.GUI, the standard path is to pass **GUI icon tokens** through the shared registry, the same way \`Layout\`, \`TopBar\`, \`Footer\`, and the sidebar configs already do.

---

#### ✨ What it does

- **Positions itself** relative to your layout:
  - Uses \`theme.layout.insets.nav\` (kept in sync by your \`NavBar\`) to sit below the app bar.
  - Uses \`theme.layout.insets.left/right\` (kept in sync by permanent drawers) to center within the remaining space.
- **Layout modes**:
  - \`"sticky"\` (default): scrolls with content and sticks below the NavBar.
  - \`"fixed"\`: pinned to the viewport; also honors insets and the nav height.
- **Mobile behavior**:
  - Can render a slim pill with labels or an icon-only compact layout.
- **Theme aware**:
  - Uses MUI palette and custom tokens; icons can inherit color or use palette keys (e.g. \`primary\`, \`info\`) or raw CSS colors.

> **Default spacing:** the bar keeps a small gap below the NavBar via \`topOffset: "0.55rem"\`.  
> Override with \`positioning.topOffset\`.

---

## Props

All props are optional unless noted.

### \`items: Array<Item>\`
Use **GUI icon token strings** here for the recommended declarative path. The component still accepts an explicit this.GUI \`<Icon />\` element for low-level composition, but the official stories use the same shell-friendly tokens used across \`Layout\`, \`TopBar\`, and \`Footer\`.

\`\`\`ts
type Item = {
  icon: string;                   // e.g. "settings" | "help" | "menu_book"
  label?: string;                 // button text (omit to render icon-only)
  href?: string;                  // if present, renders an anchor
  iconColor?: string;             // palette key ("primary", "info") or CSS color ("#ff9800")
  variant?: 'primary' | 'neutral' // styling accent (default: 'neutral')
  trackId?: string;               // optional analytics id
  ariaLabel?: string;             // accessibility label when label is omitted
}
\`\`\`

### \`mobileVersion: 'pill' | 'icons'\`
- **pill** (default): inline pills with icon + label.
- **icons**: compact icon-only layout, useful for tighter mobile presentations.

### \`positioning: { ... }\`
Controls how and where the bar is placed.

\`\`\`ts
type Positioning = {
  mode?: 'sticky' | 'fixed';   // default: 'sticky'
  topOffset?: number | string; // gap below the navbar; default: "0.55rem"
  maxWidth?: number | string;  // max width of the pill; default: 800
  reserveSpace?: boolean;     // if true, inserts a spacer to push content by bar height+offset
}
\`\`\`

**How placement works**
- Reads \`theme.layout.insets.nav\` to compute \`top\`.
- If a navbar is present (\`nav > 0\`), bar sits at \`nav + topOffset\`.  
  Without a navbar, it uses page top (no extra gap).
- In \`"fixed"\` mode, the bar is pinned and uses \`theme.layout.insets.left/right\` as **viewport paddings**.
- In \`"sticky"\` mode, the bar participates in normal layout flow and sticks when reaching the computed \`top\`.

### \`behavior: { ... }\`
Optional scroll/visibility tuning.

\`\`\`ts
type Behavior = {
  hideOnScrollDown?: boolean;     // default: false
  collapseToFabOnMobile?: boolean; // legacy alias kept for backwards compatibility
  iconOnlyOnMobile?: boolean;     // render icons-only on small screens
  mobileBreakpoint?: number;      // default: 768
  hideThreshold?: number;         // px scrolled down before hiding; default: 36
  showThreshold?: number;         // px scrolled up before showing again; default: 12
  topGuard?: number;              // do not hide when near top; default: 20
}
\`\`\`

### \`theme: { ... }\`
Visual tuning with sensible defaults.

\`\`\`ts
type ThemeOpts = {
  elevation?: number;          // shadow depth; default: 28
  blur?: number;               // backdrop blur in px; default: 9
  contrastMode?: 'auto'|'light'|'dark'; // (reserved for future)
}
\`\`\`

### \`visibility: { ... }\`
Route‑aware gating (simple client‑side checks).

\`\`\`ts
type Visibility = {
  enabled?: boolean;           // default: true
  includeRoutes?: string[] | null; // only show on these prefixes
  excludeRoutes?: string[] | null; // hide on these prefixes
}
\`\`\`

### \`i18n: { ... }\`
Optional translation hook.

\`\`\`ts
type I18n = {
  useI18n?: boolean;           // default: false
  t?: (s: string) => string;   // translate labels if provided
}
\`\`\`

---

## Theming & Insets

- The component **does not** manage insets itself. It reads them from \`theme.layout.insets\` which is kept in sync by your layout:
  - \`NavBar\` reports its real height through \`theme.updateInsets({ nav })\`.
  - \`LeftDrawer\` / \`RightDrawer\` report their widths through \`theme.updateInsets({ left/right })\`.
- For non‑MUI consumers, \`CustomThemeProvider\` also mirrors the values into CSS variables:
  - \`--gui-inset-left\`, \`--gui-inset-right\`, and \`--gui-nav-height\`.

---

## Accessibility

- When rendering icon‑only actions, provide \`ariaLabel\` so the intent is announced by screen readers.
- Links include proper \`rel\` attributes when \`target="_blank"\`.

---

## Analytics

- When items have \`trackId\`, the component dispatches a DOM event:  
  \`window.dispatchEvent(new CustomEvent('stickyoptions:click', { detail: { trackId, label } }))\`.

---

## Defaults (quick reference)

- \`mobileVersion\`: \`"pill"\`
- \`positioning.mode\`: \`"sticky"\`
- \`positioning.topOffset\`: \`"0.55rem"\`
- \`positioning.maxWidth\`: \`800\`
- \`positioning.reserveSpace\`: \`false\`
- \`behavior.hideOnScrollDown\`: \`false\`
- \`behavior.iconOnlyOnMobile\`: \`false\`
- \`behavior.mobileBreakpoint\`: \`768\`
- \`theme.elevation\`: \`28\`
- \`theme.blur\`: \`9\`
- \`visibility.enabled\`: \`true\`

---

## Usage

**Declarative icons**
\`\`\`jsx
<StickyOptionsTop
  items={[
    { icon: 'dashboard',    label: 'Stats', href: '/stats', iconColor: 'primary' },
    { icon: 'bolt',         label: 'Power', href: '/power', iconColor: '#ff9800' },
    { icon: 'menu_book',    label: 'Docs',  href: '/docs' },
  ]}
/>
\`\`\`

**With NavBar (sticky mode)**
\`\`\`jsx
<NavBar title="Demo" />
<Box sx={(theme) => ({ pt: \`\${theme?.layout?.insets?.nav ?? 0}px\` })}>
  <StickyOptionsTop items={items} />
  {/* page content */}
</Box>
\`\`\`

**Pinned to viewport (fixed mode)**
\`\`\`jsx
<StickyOptionsTop
  items={items}
  positioning={{ mode: 'fixed', topOffset: '0.55rem' }}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'List of actions. Each item: { icon, label, href, iconColor?, variant? }',
    },
    mobileVersion: {
      control: { type: 'inline-radio' },
      options: ['pill', 'icons'],
      description:
        'Mobile layout. "pill" shows a pill bar with text; "icons" shows a compact icon-only bar.',
    },
    positioning: {
      control: { type: 'object' },
      description: 'Positioning config. Accepts `{ mode: "sticky" | "fixed" }`. Default is `{ mode: "sticky" }`.'
    },
  },
};

export default meta;

// Helpers ------------------------------------------------------------

type ItemType = {
  icon: React.ReactNode | string;
  label?: string;
  href?: string;
  iconColor?: string;
};

const ITEMS_BASE: ItemType[] = [
  { icon: 'settings', label: 'Settings', href: '/settings' },
  { icon: 'photo_camera', label: 'Capture', href: '/capture' },
  { icon: 'help', label: 'Help', href: 'https://help.neurons.me' },
];

const ITEMS_BASE_MOBILE: ItemType[] = [
  { icon: 'settings', href: '/settings' },
  { icon: 'photo_camera', href: '/capture' },
  { icon: 'help', href: 'https://help.neurons.me' },
];

const ITEMS_WITH_COLORS: ItemType[] = [
  { icon: 'dashboard', label: 'Stats', href: '/stats', iconColor: 'primary' },
  { icon: 'bolt', label: 'Power', href: '/power', iconColor: '#ff9800' },
  { icon: 'insights', label: 'Insights', href: '/insights', iconColor: 'info' },
  { icon: 'settings', label: 'Config', href: '/config' },
];

const ITEMS_WITH_COLORS_MOBILE: ItemType[] = [
  { icon: 'dashboard', href: '/stats', iconColor: 'primary' },
  { icon: 'bolt', href: '/power', iconColor: '#ff9800' },
  { icon: 'insights', href: '/insights', iconColor: 'info' },
  { icon: 'settings', href: '/config' },
];

// Example container to simulate page content
const PageScaffold: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
    {children}
    <Box sx={{ px: 3, py: 2 }}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Demo content
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This card is just to simulate page content.  
          The *sticky* bar is center aligned and respects the insets of permanent drawers.
        </Typography>
      </Paper>
    </Box>
  </Box>
);

// Stories ------------------------------------------------------------

export const Default: StoryObj<typeof StickyOptionsTop> = {
  args: {
    items: ITEMS_BASE,
    mobileVersion: 'pill',
  },
  render: (args) => (
    <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage with **GUI icon tokens**. Without `iconColor`, icons react automatically to the theme (light/dark).',
      },
    },
  },
};

export const WithIconColors: StoryObj<typeof StickyOptionsTop> = {
  args: {
    items: ITEMS_WITH_COLORS,
    mobileVersion: 'pill',
  },
  render: (args) => (
    <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Declarative icons with `iconColor`. Accepts palette keys (`primary`, `info`, etc.) or any CSS color (`#ff9800`).',
      },
    },
  },
};

export const DenseCompact: StoryObj<typeof StickyOptionsTop> = {
  args: {
    items: ITEMS_BASE_MOBILE,
    mobileVersion: 'icons',
  },
  render: (args) => (
    <PageScaffold>
      <StickyOptionsTop {...args} />
    </PageScaffold>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Compact icon-only setup using the same declarative GUI tokens, useful when the sticky bar needs a denser footprint.',
      },
    },
  },
};

export const MobileFAB: StoryObj<typeof StickyOptionsTop> = {
  name: 'Mobile — Icons',
  args: {
    items: ITEMS_WITH_COLORS_MOBILE,
    mobileVersion: 'icons',
  },
  render: (args) => (
    // Simple simulation of mobile viewport (max width) to avoid dependency on viewport addon
    <Box sx={{ width: 390, mx: 'auto', border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
      <PageScaffold>
        <StickyOptionsTop {...args} />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Simulated **mobile** view (~390px). With \`mobileVersion="icons"\`, the component
            switches to a tighter icon-only presentation.
          </Typography>
        </Box>
      </PageScaffold>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Simulated narrow viewport using \`mobileVersion="icons"\` to show the compact mobile presentation without requiring viewport addons.',
      },
    },
  },
};

export const MobileInline: StoryObj<typeof StickyOptionsTop> = {
  name: 'Mobile — Inline',
  args: {
    items: ITEMS_BASE_MOBILE,
    mobileVersion: 'pill',
  },
  render: (args) => (
    <Box sx={{ width: 390, mx: 'auto', border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
      <PageScaffold>
        <StickyOptionsTop {...args} />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Simulated **mobile** view (~390px). With \`mobileVersion="pill"\`, the bar stays
            inline at the top.
          </Typography>
        </Box>
      </PageScaffold>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Mobile behavior keeping the sticky options inline with labels, using the default \`mobileVersion="pill"\` presentation.',
      },
    },
  },
};

export const WithNavBar: StoryObj<typeof StickyOptionsTop> = {
  args: {
    items: ITEMS_WITH_COLORS,
    mobileVersion: 'pill',
  },
  render: (args) => (
    <PageScaffold>
      <NavBar title="Demo App" />
      <Box sx={(theme) => ({ pt: `${theme?.layout?.insets?.nav ?? 0}px` })}>
        <StickyOptionsTop {...args} />
        <Box sx={{ p: 2 }}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100)}
        </Box>
      </Box>
    </PageScaffold>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example with **NavBar** mounted. The sticky options bar now respects the nav inset (height of the AppBar) automatically.',
      },
    },
  },
};
