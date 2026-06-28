// src/gui/Theme/Inspector/ThemeInspector.tsx
// A real, in-app view of the active theme's palette + typography scale —
// opened from ThemeLauncher's settings icon, not a Storybook-only debug dump.
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Icon from '@/gui/Atoms/Icon/Icon';
import { useGuiTheme } from '@/gui-internals/Hooks';

export interface ThemeInspectorProps {
  open: boolean;
  onClose: () => void;
}

const TYPOGRAPHY_VARIANTS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline',
] as const;

function PaletteTab() {
  const theme = useGuiTheme();
  const palette: Record<string, any> = theme.palette as any;

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 2 }}>
      {Object.entries(palette).map(([colorKey, colorValue]) => {
        if (typeof colorValue === 'string') {
          return (
            <Box key={colorKey} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>{colorKey}</Typography>
              <Box sx={{ bgcolor: colorValue, height: 40, borderRadius: 1, mt: 0.5, mb: 0.5 }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>{colorValue}</Typography>
            </Box>
          );
        }
        if (colorValue && typeof colorValue === 'object') {
          const shades = Object.entries(colorValue).filter(([, v]) => typeof v === 'string');
          if (!shades.length) return null;
          return (
            <Box key={colorKey} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>{colorKey}</Typography>
              {shades.map(([shadeKey, shadeValue]) => (
                <Box key={shadeKey} sx={{ mt: 0.5 }}>
                  <Box sx={{ bgcolor: shadeValue as string, height: 28, borderRadius: 1, border: '1px solid', borderColor: 'divider' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {shadeKey}: {shadeValue as string}
                  </Typography>
                </Box>
              ))}
            </Box>
          );
        }
        return null;
      })}
    </Box>
  );
}

function TypographyTab() {
  const theme = useGuiTheme();
  const typography: Record<string, any> = theme.typography as any;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {TYPOGRAPHY_VARIANTS.map((variant) => {
        const style = typography[variant];
        if (!style) return null;
        return (
          <Box key={variant} sx={{ display: 'flex', alignItems: 'baseline', gap: 2, borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}>
            <Typography variant="caption" sx={{ width: 80, flexShrink: 0, color: 'text.secondary', fontWeight: 700 }}>
              {variant}
            </Typography>
            <Typography variant={variant as any} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              The quick brown fox
            </Typography>
            <Typography variant="caption" sx={{ ml: 'auto', color: 'text.secondary', flexShrink: 0 }}>
              {style.fontSize}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

const ThemeInspector: React.FC<ThemeInspectorProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Icon name="palette" fontSize={20} />
        <Typography variant="subtitle1" sx={{ fontWeight: 700, flex: 1 }}>
          Theme
        </Typography>
        <IconButton size="small" aria-label="Close theme inspector" onClick={onClose}>
          <Icon name="close" fontSize="1rem" />
        </IconButton>
      </DialogTitle>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Tab label="Palette" />
        <Tab label="Typography" />
      </Tabs>
      <DialogContent dividers={false} sx={{ maxHeight: '60vh' }}>
        {tab === 0 ? <PaletteTab /> : <TypographyTab />}
      </DialogContent>
    </Dialog>
  );
};

export default ThemeInspector;
