import React from 'react';
import Icon from '../../themes/icons/Icon';

// Expanded icon registry demonstration with both Lucide and Material (MUI) icons
const ICONS = [
  // Lucide icons
  { name: 'lucide:home', label: 'lucide:home' },
  { name: 'lucide:camera', label: 'lucide:camera' },
  { name: 'lucide:user', label: 'lucide:user' },
  { name: 'lucide:settings', label: 'lucide:settings' },
  // Material UI icons (MUI_ICONS map)
  { name: 'mui:BarChart', label: 'mui:BarChart' },
  { name: 'mui:Memory', label: 'mui:Memory' },
  { name: 'mui:Email', label: 'mui:Email' },
  { name: 'mui:Bolt', label: 'mui:Bolt' },
  { name: 'mui:Insights', label: 'mui:Insights' },
  { name: 'mui:AttachMoney', label: 'mui:AttachMoney' },
  { name: 'mui:Settings', label: 'mui:Settings' },
  { name: 'mui:CameraAlt', label: 'mui:CameraAlt' },
  { name: 'mui:Power', label: 'mui:Power' },
  { name: 'mui:Help', label: 'mui:Help' },
  { name: 'mui:SmartToy', label: 'mui:SmartToy' },
  { name: 'mui:Chat', label: 'mui:Chat' },
  { name: 'mui:ChatBubbleOutline', label: 'mui:ChatBubbleOutline' },
  { name: 'mui:Psychology', label: 'mui:Psychology' },
  { name: 'mui:SupportAgent', label: 'mui:SupportAgent' },
  { name: 'mui:AutoAwesome', label: 'mui:AutoAwesome' },
  { name: 'mui:Sync', label: 'mui:Sync' },
  { name: 'mui:Loop', label: 'mui:Loop' },
  { name: 'mui:Cached', label: 'mui:Cached' },
  { name: 'mui:Build', label: 'mui:Build' },
  { name: 'mui:Schedule', label: 'mui:Schedule' },
  { name: 'mui:CalendarMonth', label: 'mui:CalendarMonth' },
  { name: 'mui:Message', label: 'mui:Message' },
  { name: 'mui:Forum', label: 'mui:Forum' },
  { name: 'mui:Telegram', label: 'mui:Telegram' },
  { name: 'mui:BusinessCenter', label: 'mui:BusinessCenter' },
  { name: 'mui:TrendingUp', label: 'mui:TrendingUp' },
  { name: 'mui:ShoppingCart', label: 'mui:ShoppingCart' },
  { name: 'mui:Cloud', label: 'mui:Cloud' },
  { name: 'mui:Code', label: 'mui:Code' },
  { name: 'mui:Storage', label: 'mui:Storage' },
  { name: 'mui:Dns', label: 'mui:Dns' },
  { name: 'mui:Layers', label: 'mui:Layers' },
  { name: 'mui:Security', label: 'mui:Security' },
  { name: 'mui:Policy', label: 'mui:Policy' },
  { name: 'mui:CalendarToday', label: 'mui:CalendarToday' },
  { name: 'mui:VideoLibrary', label: 'mui:VideoLibrary' },
  { name: 'mui:DeveloperMode', label: 'mui:DeveloperMode' },
  { name: 'mui:CurrencyBitcoin', label: 'mui:CurrencyBitcoin' },
  { name: 'mui:Brush', label: 'mui:Brush' },
];

export default {
  title: 'Theme/Icons',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Gallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 120px)',
      gap: 24,
      alignItems: 'center',
      justifyItems: 'center',
      margin: 16,
    }}
  >
    {ICONS.map((i) => (
      <div
        key={i.label}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Icon name={i.name} size={32} />
        <code style={{ fontSize: 12, textAlign: 'center', wordBreak: 'break-all' }}>{i.label}</code>
      </div>
    ))}
  </div>
);

export const ColoredGallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 120px)',
      gap: 24,
      alignItems: 'center',
      justifyItems: 'center',
      margin: 16,
    }}
  >
    {ICONS.map((i) => (
      <div
        key={i.label}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {/* Lucide usa color directamente; MUI requiere htmlColor */}
        <Icon
          name={i.name}
          size={32}
          {...(i.name.startsWith('lucide:')
            ? { color: '#4caf50' } // verde
            : { htmlColor: '#ff9800' } // naranja
          )}
        />
        <code style={{ fontSize: 12, textAlign: 'center', wordBreak: 'break-all' }}>{i.label}</code>
      </div>
    ))}
  </div>
);

export const UsageModesDocs = () => (
  <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
    <h2 style={{ marginTop: 0 }}>Two Usage Modes for Icons in This.GUI</h2>

    <h3>1. <strong>Declarative Mode</strong> (via JSON)</h3>
    <p>
      In declarative mode, icons are specified as <code>strings</code> with prefixes like <code>lucide:</code> or <code>mui:</code> in JSON props.
      This mode is ideal for declarative UI configurations such as NavBars, SideBars, or any dynamic content where icons are defined in JSON or similar data structures.
      The <code>&lt;Icon&gt;</code> component automatically resolves these string names to the correct icon component.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Example JSON config:
{
  "menuItems": [
    { "label": "Home", "icon": "lucide:home" },
    { "label": "Dashboard", "icon": "mui:BarChart" }
  ]
}

// Usage in React:
menuItems.map(item => (
  <div key={item.label}>
    <Icon name={item.icon} size={24} />
    <span>{item.label}</span>
  </div>
))
`}</code>
    </pre>

    <h3>2. <strong>Direct React Mode</strong> (manual imports)</h3>
    <p>
      Developers can also import Material UI or Lucide icons directly as React components and use them manually.
      This mode offers full control over props, styling, and behavior, making it suitable when you need fine-grained customization.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Import icons directly
import { Camera as LucideCamera } from 'lucide-react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

// Use in JSX
<LucideCamera size={24} color="#4caf50" />
<CameraAltIcon fontSize="medium" htmlColor="#ff9800" />
`}</code>
    </pre>

    <h3>Dynamic Theming Support</h3>
    <p>
      If you pass a static <code>color</code> or <code>htmlColor</code> prop to <code>&lt;Icon&gt;</code>, the icon color will not update when the theme changes.
      To make icons react to theme changes, omit the <code>color</code> or <code>htmlColor</code> props and rely on the default behavior, which uses <code>theme.palette.text.primary</code> or <code>theme.palette.text.secondary</code>.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Theme-aware icon (auto-updates with dark/light theme)
<Icon name="mui:Settings" size={24} />

// Fixed-color icon (doesn't change with theme)
<Icon name="mui:Settings" size={24} htmlColor="#ff9800" />
`}</code>
    </pre>
  </div>
);

export const LucideDocs = () => (
  <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
    <h2 style={{ marginTop: 0 }}>Lucide — Usage & Catalog</h2>
    <p>
      <strong>All Lucide icons</strong> are available by using the <code>lucide:</code> prefix with the
      icon name. Names are flexible: you can use kebab-case, snake_case, spaces or PascalCase — the
      registry normalizes them for you.
    </p>

    <p>
      Full catalog: <a href="https://lucide.dev/icons" target="_blank" rel="noreferrer">https://lucide.dev/icons</a>
    </p>

    <h3>Basic usage</h3>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Import once
import Icon from '../../icons/Icon';

// Use in your components
<Icon name="lucide:camera" size={24} />
<Icon name="lucide:arrow-left" size={20} color="#4caf50" />
`}</code>
    </pre>

    <h3>Name mapping examples</h3>
    <p>
      These all resolve to the same icon (<code>video-off</code>):
    </p>
    <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 16 }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '6px 8px' }}>Input</th>
          <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '6px 8px' }}>Resolved slug</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '6px 8px' }}><code>lucide:video-off</code></td>
          <td style={{ padding: '6px 8px' }}><code>video-off</code></td>
        </tr>
        <tr>
          <td style={{ padding: '6px 8px' }}><code>lucide/video_off</code></td>
          <td style={{ padding: '6px 8px' }}><code>video-off</code></td>
        </tr>
        <tr>
          <td style={{ padding: '6px 8px' }}><code>Lucide:VideoOff</code></td>
          <td style={{ padding: '6px 8px' }}><code>video-off</code></td>
        </tr>
        <tr>
          <td style={{ padding: '6px 8px' }}><code>video off</code></td>
          <td style={{ padding: '6px 8px' }}><code>video-off</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Color & size</h3>
    <p>
      Lucide components accept standard SVG props. Use <code>size</code> (number) and <code>color</code> (CSS color):
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`<Icon name="lucide:heart" size={28} color="#e91e63" />
<Icon name="lucide:star" size={20} color="gold" />
`}</code>
    </pre>
    <p>
      Tip: Material UI icons use <code>htmlColor</code> instead of <code>color</code>. Example:
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`<Icon name="mui:CameraAlt" htmlColor="#ff9800" />
`}</code>
    </pre>

    <h3>Lazy loading & tree-shaking</h3>
    <p>
      Each Lucide icon is loaded on demand from <code>lucide-react/icons/&lt;slug&gt;</code> via <code>React.lazy</code>. This
      keeps bundles small: only the icons you actually render are fetched.
    </p>

    <h3>Fallback behavior</h3>
    <p>
      If an icon name is wrong or unavailable, the registry renders a neutral placeholder instead of
      crashing. Check the console for the attempted slug.
    </p>
  </div>
);

export const MaterialDocs = () => (
  <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
    <h2 style={{ marginTop: 0 }}>Material UI Icons (MUI) — Usage & Catalog</h2>
    <p>
      <strong>All Material UI icons</strong> are available by using the <code>mui:</code> prefix with the icon name.
      The icon names correspond to the official Material UI icon component names.
    </p>

    <p>
      Full catalog: <a href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noreferrer">https://mui.com/material-ui/material-icons/</a>
    </p>

    <h3>Basic usage</h3>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Import once
import Icon from '../../icons/Icon';

// Use in your components
<Icon name="mui:CameraAlt" fontSize="medium" htmlColor="#ff9800" />
<Icon name="mui:BarChart" fontSize="small" />
`}</code>
    </pre>

    <h3>Important props</h3>
    <ul>
      <li><code>htmlColor</code>: sets the icon color (preferred over <code>color</code> for Material UI icons)</li>
      <li><code>fontSize</code>: controls size with values like <code>small</code>, <code>medium</code>, <code>large</code>, etc.</li>
    </ul>

    <h3>Lazy loading & tree-shaking</h3>
    <p>
      Each Material UI icon is loaded on demand from <code>@mui/icons-material/&lt;IconName&gt;</code> via <code>React.lazy</code>,
      ensuring your bundles include only the icons you use.
    </p>

    <h3>Fallback behavior</h3>
    <p>
      If an icon name is wrong or unavailable, the registry renders a neutral placeholder instead of crashing.
      Check the console for the attempted slug.
    </p>
  </div>
);