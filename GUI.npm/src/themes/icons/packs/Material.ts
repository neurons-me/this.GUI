// src/themes/icons/packs/Material.ts
import * as React from 'react';
export const MUI_PREFIX = 'mui';
// A Material icon component resolved via React.lazy
export type MuiIconComp = React.LazyExoticComponent<React.ComponentType<any>>;
// Whitelist de MUI Icons (añade aquí los que uses)
export const MUI_MAP: Record<string, MuiIconComp> = {
  BarChart: React.lazy(() => import('@mui/icons-material/BarChart')),
  Memory: React.lazy(() => import('@mui/icons-material/Memory')),
  Power: React.lazy(() => import('@mui/icons-material/Power')),
  Email: React.lazy(() => import('@mui/icons-material/Email')),
  ExpandLess: React.lazy(() => import('@mui/icons-material/ExpandLess')),
  ExpandMore: React.lazy(() => import('@mui/icons-material/ExpandMore')),
  Bolt: React.lazy(() => import('@mui/icons-material/Bolt')),
  AttachMoney: React.lazy(() => import('@mui/icons-material/AttachMoney')),
  Insights: React.lazy(() => import('@mui/icons-material/Insights')),
  Settings: React.lazy(() => import('@mui/icons-material/Settings')),
  CameraAlt: React.lazy(() => import('@mui/icons-material/CameraAlt')),
  Help: React.lazy(() => import('@mui/icons-material/Help')),
  SmartToy: React.lazy(() => import('@mui/icons-material/SmartToy')),
  Chat: React.lazy(() => import('@mui/icons-material/Chat')),
  ChatBubbleOutline: React.lazy(() => import('@mui/icons-material/ChatBubbleOutline')),
  Psychology: React.lazy(() => import('@mui/icons-material/Psychology')),
  SupportAgent: React.lazy(() => import('@mui/icons-material/SupportAgent')),
  AutoAwesome: React.lazy(() => import('@mui/icons-material/AutoAwesome')),
  Autorenew: React.lazy(() => import('@mui/icons-material/Autorenew')),
  Sync: React.lazy(() => import('@mui/icons-material/Sync')),
  Loop: React.lazy(() => import('@mui/icons-material/Loop')),
  Cached: React.lazy(() => import('@mui/icons-material/Cached')),
  Build: React.lazy(() => import('@mui/icons-material/Build')),
  Schedule: React.lazy(() => import('@mui/icons-material/Schedule')),
  CalendarMonth: React.lazy(() => import('@mui/icons-material/CalendarMonth')),
  Message: React.lazy(() => import('@mui/icons-material/Message')),
  Forum: React.lazy(() => import('@mui/icons-material/Forum')),
  WhatsApp: React.lazy(() => import('@mui/icons-material/WhatsApp')),
  Telegram: React.lazy(() => import('@mui/icons-material/Telegram')),
  BusinessCenter: React.lazy(() => import('@mui/icons-material/BusinessCenter')),
  TrendingUp: React.lazy(() => import('@mui/icons-material/TrendingUp')),
  ShoppingCart: React.lazy(() => import('@mui/icons-material/ShoppingCart')),
  Cloud: React.lazy(() => import('@mui/icons-material/Cloud')),
  Code: React.lazy(() => import('@mui/icons-material/Code')),
  Storage: React.lazy(() => import('@mui/icons-material/Storage')),
  Dns: React.lazy(() => import('@mui/icons-material/Dns')),
  Layers: React.lazy(() => import('@mui/icons-material/Layers')),
  Security: React.lazy(() => import('@mui/icons-material/Security')),
  Policy: React.lazy(() => import('@mui/icons-material/Policy')),
  CalendarToday: React.lazy(() => import('@mui/icons-material/CalendarToday')),
  VideoLibrary: React.lazy(() => import('@mui/icons-material/VideoLibrary')),
  DeveloperMode: React.lazy(() => import('@mui/icons-material/DeveloperMode')),
  CurrencyBitcoin: React.lazy(() => import('@mui/icons-material/CurrencyBitcoin')),
  Brush: React.lazy(() => import('@mui/icons-material/Brush')),
  Menu: React.lazy(() => import('@mui/icons-material/Menu')),
};

export function normalizeMuiName(name: string = ''): string {
  if (typeof name !== 'string') return '';
  let n = name.trim();
  n = n.replace(/^mui[:/.-]\s*/i, '');
  n = n
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return n;
}

export function getMuiIcon(name: string): MuiIconComp | null {
  const key = normalizeMuiName(name);
  return key && MUI_MAP[key] ? MUI_MAP[key] : null;
}

export function hasMuiIcon(name: string): boolean {
  const key = normalizeMuiName(name);
  return Boolean(key && MUI_MAP[key]);
}

// Default export following the pattern in Lucide.ts
const materialPack = {
  prefix: MUI_PREFIX,
  map: MUI_MAP,
  normalize: normalizeMuiName,
  get: getMuiIcon,
  has: hasMuiIcon,
};

export default materialPack;