import React from 'react';
import Icon from '../../themes/Icon/Icon';

// Material Symbols icon registry demonstration
const ICONS = [
  { name: 'home', label: 'home', color: '#4caf50' },
  { name: 'search', label: 'search', color: '#2196f3' },
  { name: 'settings', label: 'settings', color: '#ff9800' },
  { name: 'favorite', label: 'favorite', color: '#e91e63' },
  { name: 'person', label: 'person', color: '#673ab7' },
  { name: 'chat', label: 'chat', color: '#009688' },
  { name: 'info', label: 'info', color: '#3f51b5' },
  { name: 'warning', label: 'warning', color: '#ff5722' },
  { name: 'camera_alt', label: 'camera_alt', color: '#795548' },
  { name: 'power_settings_new', label: 'power_settings_new', color: '#607d8b' },
  { name: 'help', label: 'help', color: '#9c27b0' },
  { name: 'build', label: 'build', color: '#ff9800' },
  { name: 'schedule', label: 'schedule', color: '#2196f3' },
  { name: 'calendar_today', label: 'calendar_today', color: '#4caf50' },
  { name: 'message', label: 'message', color: '#f44336' },
  { name: 'forum', label: 'forum', color: '#3f51b5' },
  { name: 'cloud', label: 'cloud', color: '#00bcd4' },
  { name: 'code', label: 'code', color: '#9e9e9e' },
  { name: 'storage', label: 'storage', color: '#607d8b' },
  { name: 'security', label: 'security', color: '#673ab7' },
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
        <Icon
          name={i.name}
          fontSize={32}
          iconColor={i.color}
        />
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
        <Icon
          name={i.name}
          fontSize={32}
          iconColor={i.color}
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
      In declarative mode, icons are specified as <code>strings</code> with icon names like <code>home</code> or <code>settings</code> in JSON props.
      This mode is ideal for declarative UI configurations such as NavBars, SideBars, or any dynamic content where icons are defined in JSON or similar data structures.
      The <code>&lt;Icon&gt;</code> component automatically resolves these string names to the correct icon component.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Example JSON config:
{
  "menuItems": [
    { "label": "Home", "icon": "home" },
    { "label": "Dashboard", "icon": "bar_chart" }
  ]
}

// Usage in React:
menuItems.map(item => (
  <div key={item.label}>
    <Icon name={item.icon} fontSize={24} />
    <span>{item.label}</span>
  </div>
))
`}</code>
    </pre>

    <h3>2. <strong>Direct React Mode</strong> (manual imports)</h3>
    <p>
      Developers can also import Material Symbols icons directly as React components and use them manually.
      This mode offers full control over props, styling, and behavior, making it suitable when you need fine-grained customization.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Import icons directly
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

// Use in JSX
<HomeIcon fontSize="medium" htmlColor="#4caf50" />
<SettingsIcon fontSize="medium" htmlColor="#ff9800" />
`}</code>
    </pre>

    <h3>Dynamic Theming Support</h3>
    <p>
      If you pass a static <code>htmlColor</code> prop to <code>&lt;Icon&gt;</code>, the icon color will not update when the theme changes.
      To make icons react to theme changes, omit the <code>htmlColor</code> prop and rely on the default behavior, which uses <code>theme.palette.text.primary</code> or <code>theme.palette.text.secondary</code>.
    </p>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Theme-aware icon (auto-updates with dark/light theme)
<Icon name="settings" fontSize={24} />

// Fixed-color icon (doesn't change with theme)
<Icon name="settings" fontSize={24} iconColor="#ff9800" />
`}</code>
    </pre>
  </div>
);

export const MaterialDocs = () => (
  <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
    <h2 style={{ marginTop: 0 }}>Material Symbols — Usage & Catalog</h2>
    <p>
      <strong>All Material Symbols icons</strong> are available by using their icon names directly.
      The icon names correspond to the official Material Symbols icon names.
    </p>

    <p>
      Full catalog: <a href="https://fonts.google.com/icons" target="_blank" rel="noreferrer">https://fonts.google.com/icons</a>
    </p>

    <h3>Basic usage</h3>
    <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
      <code>{`// Import once
import Icon from '../../icons/Icon';

// Use in your components
<Icon name="camera_alt" fontSize={24} iconColor="#ff9800" />
<Icon name="bar_chart" fontSize={20} />
`}</code>
    </pre>

    <h3>Important props</h3>
    <ul>
      <li><code>iconColor</code>: sets the icon color (preferred over <code>color</code> for Material Symbols icons)</li>
      <li><code>fontSize</code>: controls size with numeric values like <code>20</code>, <code>24</code>, <code>32</code>, etc.</li>
    </ul>

    <h3>Lazy loading & tree-shaking</h3>
    <p>
      Each Material Symbols icon is loaded on demand from <code>@mui/icons-material/&lt;IconName&gt;</code> via <code>React.lazy</code>,
      ensuring your bundles include only the icons you use.
    </p>

    <h3>Fallback behavior</h3>
    <p>
      If an icon name is wrong or unavailable, the registry renders a neutral placeholder instead of crashing.
      Check the console for the attempted slug.
    </p>
  </div>
);