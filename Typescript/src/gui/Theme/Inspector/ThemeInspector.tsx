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
import Button from '@/gui/Atoms/Button/Button';
import Chip from '@/gui/Atoms/Chip/Chip';
import Link from '@/gui/Atoms/Link/Link';
import Divider from '@/gui/Atoms/Divider/Divider';
import Paper from '@/gui/Atoms/Paper/Paper';
import { useGuiTheme } from '@/gui-internals/Hooks';

export interface ThemeInspectorProps {
  open: boolean;
  onClose: () => void;
}

const TYPOGRAPHY_VARIANTS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline',
] as const;

// One row per *semantic role* (not every raw palette key/shade) — each
// shown via the real component that actually uses that color in the app,
// so "what is primary" or "what is a link" is answered by example instead
// of an abstract swatch + hex you have to mentally map back to usage.
function PaletteRow({
  label,
  hex,
  preview,
}: {
  label: string;
  hex?: string;
  preview: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="caption" sx={{ width: 88, flexShrink: 0, color: 'text.secondary', fontWeight: 700 }}>
        {label}
      </Typography>
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>{preview}</Box>
      {hex && (
        <Typography variant="caption" sx={{ flexShrink: 0, color: 'text.secondary', fontFamily: 'monospace' }}>
          {hex}
        </Typography>
      )}
    </Box>
  );
}

function PaletteTab() {
  const theme = useGuiTheme();
  const palette: Record<string, any> = theme.palette as any;

  return (
    <Box>
      <PaletteRow
        label="Primary"
        hex={palette.primary?.main}
        preview={<Button variant="contained" color="primary" size="small">Primary action</Button>}
      />
      <PaletteRow
        label="Secondary"
        hex={palette.secondary?.main}
        preview={<Button variant="contained" color="secondary" size="small">Secondary action</Button>}
      />
      <PaletteRow
        label="Success"
        hex={palette.success?.main}
        preview={<Chip label="Success" color="success" size="small" />}
      />
      <PaletteRow
        label="Warning"
        hex={palette.warning?.main}
        preview={<Chip label="Warning" color="warning" size="small" />}
      />
      <PaletteRow
        label="Error"
        hex={palette.error?.main}
        preview={<Chip label="Error" color="error" size="small" />}
      />
      <PaletteRow
        label="Info"
        hex={palette.info?.main}
        preview={<Chip label="Info" color="info" size="small" />}
      />
      <PaletteRow
        label="Text"
        hex={palette.text?.primary}
        preview={<Typography variant="body2">The quick brown fox</Typography>}
      />
      <PaletteRow
        label="Text (muted)"
        hex={palette.text?.secondary}
        preview={<Typography variant="body2" color="text.secondary">The quick brown fox</Typography>}
      />
      <PaletteRow
        label="Link"
        hex={palette.primary?.main}
        preview={<Link href="#" onClick={(e: any) => e.preventDefault()}>Visit neurons.me</Link>}
      />
      <PaletteRow
        label="Divider"
        preview={<Divider sx={{ width: '100%' }} />}
      />
      <PaletteRow
        label="Background"
        hex={palette.background?.default}
        preview={
          <Box sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 1.5, py: 0.75, width: '100%' }}>
            <Typography variant="caption">Page background</Typography>
          </Box>
        }
      />
      <PaletteRow
        label="Surface"
        hex={palette.background?.paper}
        preview={
          <Paper elevation={1} sx={{ px: 1.5, py: 0.75, width: '100%' }}>
            <Typography variant="caption">Card / paper surface</Typography>
          </Paper>
        }
      />
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
