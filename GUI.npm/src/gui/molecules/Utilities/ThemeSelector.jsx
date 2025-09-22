// src/gui/molecules/Utilities/ThemeSelector.jsx
import React from 'react';
import {
  IconButton, // .yes
  Tooltip, // .yes
  Menu, //yes
  MenuItem,//yes
  ListItemIcon,//yes
  ListItemText, // yes
  Box, // .yes
  Divider, // .yes
  Typography // .yes
} from '@/gui/atoms';
import MuiSwitch from '@mui/material/Switch';
import * as MuiIcons from '@mui/icons-material';
import { useThemeContext } from '@/context/GuiProvider';
import { AVAILABLE_THEMES } from '@/themes';
import { useTheme } from '@mui/material/styles';
// Icons ---------------------------------------------------------------
const Sun = MuiIcons.WbSunnyRounded || MuiIcons.WbSunny;
const Moon = MuiIcons.DarkModeRounded || MuiIcons.NightlightRound;
const Check = MuiIcons.Check || MuiIcons.Done;
const Info = MuiIcons.InfoOutlined || MuiIcons.Info;
const Brush = MuiIcons.Brush || MuiIcons.Edit;
const Palette = MuiIcons.Palette || MuiIcons.ColorLens;
// Render an icon spec from manifest (or string name for MUI icons)
const IconRenderer = ({ icon, fontSize = 'small', sx }) => {
  if (typeof icon === 'string') {
    const Comp = MuiIcons[icon] || Palette;
    return <Comp fontSize={fontSize} sx={sx} />;
  }
  if (!icon || typeof icon !== 'object') return <Palette fontSize={fontSize} sx={sx} />;
  const { type, value } = icon;
  if (type === 'mui') {
    const Comp = MuiIcons[value] || Palette;
    return <Comp fontSize={fontSize} sx={sx} />;
  }
  if (type === 'url' || type === 'data') {
    return <img src={value} alt="" style={{ display: 'inline-block', width: 18, height: 18 }} />;
  }
  if (type === 'svg') {
    return (
      <span aria-hidden style={{ display: 'inline-block', width: 18, height: 18 }}
        dangerouslySetInnerHTML={{ __html: value }} />
    );
  }
  return <Palette fontSize={fontSize} sx={sx} />;
};

// Group available themes by family id. Each item is expected like:
// { id: 'neurons-light', family: 'neurons', name: 'Neurons Light', mode: 'light', manifest }
function groupByFamily(items = []) {
  const map = new Map();
  for (const t of items) {
    const family = String(t.family || t.id || t?.manifest?.id || '').trim();
    if (!family) continue;
    const entry = map.get(family) || { family, meta: t.manifest || {}, modes: {} };
    entry.meta = t.manifest || entry.meta;
    const hasMode = typeof t.mode === 'string' && t.mode.length > 0;
    if (hasMode) {
      const mode = String(t.mode).toLowerCase();
      entry.modes[mode] = t;
    } else if (t.manifest && t.manifest.modes && typeof t.manifest.modes === 'object') {
      for (const mk of Object.keys(t.manifest.modes)) {
        const modeKey = String(mk).toLowerCase();
        if (!entry.modes[modeKey]) {
          entry.modes[modeKey] = {
            id: `${family}-${modeKey}`,
            family,
            name: `${t.manifest.name || family} ${modeKey[0].toUpperCase()}${modeKey.slice(1)}`,
            mode: modeKey,
            manifest: t.manifest,
          };
        }
      }
    }
    map.set(family, entry);
  }
  return Array.from(map.values());
}

// Build up to N tiny color swatches from an item that may carry a compiled palette
const getPreviewSwatches = (item, fallbackTheme, limit = 8) => {
  const p = item?.palette || item?.theme?.palette || fallbackTheme?.palette;
  if (!p) return [];
  const candidates = [
    { key: 'background.default', label: 'background.default', value: p.background?.default },
    { key: 'background.paper',   label: 'background.paper',   value: p.background?.paper },
    { key: 'primary.main',       label: 'primary.main',       value: p.primary?.main },
    { key: 'secondary.main',     label: 'secondary.main',     value: p.secondary?.main },
    { key: 'link.main',          label: 'link.main',          value: p.link?.main || p.secondary?.main || p.primary?.main },
    { key: 'text.primary',       label: 'text.primary',       value: p.text?.primary },
    { key: 'text.secondary',     label: 'text.secondary',     value: p.text?.secondary },
    { key: 'divider',            label: 'divider',            value: p.divider },
  ];
  return candidates.filter(c => Boolean(c.value)).slice(0, limit);
};

export default function ThemeSelector({ tooltip = 'Seleccionar tema / modo' }) {
  const {
    themeKey,
    family,
    mode,
    availableFlat,
    availableFamilies,
    getManifestForFamily,
    setMode,
    setFamilyAndMode,
  } = useThemeContext();
  const items = Array.isArray(availableFlat) && availableFlat.length > 0 ? availableFlat : AVAILABLE_THEMES;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [expandedFamily, setExpandedFamily] = React.useState(null);
  const families = groupByFamily(items);
  // Active entry comes from provider’s themeKey/family/mode
  const active = items.find((t) => t.id === themeKey) || items[0];
  const activeFamily = family || active?.family || (families[0]?.family ?? '');
  const activeFamilyMeta =
    (typeof getManifestForFamily === 'function' ? getManifestForFamily(activeFamily) : undefined) ||
    families.find((f) => f.family === activeFamily)?.meta;
  const activeIconSpec = activeFamilyMeta?.icon;
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const disabled = items.length === 0;
  // -- Helpers ---------------------------------------------------------------
  const parseFamilyAndMode = (id, fallbackFamily = activeFamily) => {
    if (!id) return { family: fallbackFamily, mode: 'light' };
    const parts = String(id).split('-');
    const m = parts.pop();
    const fam = parts.join('-') || fallbackFamily;
    return { family: fam, mode: m };
  };

  const applyMode = (fam, m) => {
    if (typeof setFamilyAndMode === 'function') {
      try { setFamilyAndMode(fam, m); } catch {}
    } else if (typeof setMode === 'function' && fam === activeFamily) {
      try { setMode(m); } catch {}
    }
  };

  const handleSelect = (id) => {
    if (!id) return;
    const { family: fam, mode: m } = parseFamilyAndMode(id, activeFamily);
    applyMode(fam, m);
    handleClose();
  };

  const muiTheme = useTheme();
  const activeFamilyEntry = families.find((f) => f.family === activeFamily);
  const lightMode = activeFamilyEntry?.modes?.light;
  const darkMode = activeFamilyEntry?.modes?.dark;
  const isDarkSelected = mode === 'dark' || (!!darkMode && themeKey === darkMode.id);
  const isLightSelected = mode === 'light' || (!!lightMode && themeKey === lightMode.id);
  return (
    <>
      <Tooltip title={tooltip}>
        <span>
          <IconButton onClick={handleOpen} disabled={disabled} aria-label="theme-selector" size="small">
            <IconRenderer icon={activeIconSpec || 'Palette'} fontSize="small" />
          </IconButton>
        </span>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
        {families.length === 0 ? (
          <MenuItem disabled>No themes available</MenuItem>
        ) : (
          families.map((fam, idx) => {
            const { family, meta, modes } = fam;
            const light = modes.light;
            const dark = modes.dark;
            const isActiveLight = !!light && themeKey === light.id;
            const isActiveDark = !!dark && themeKey === dark.id;
            return (
              <Box key={family} component="div" sx={{ minWidth: 280 }}>
                {/* Header: theme name + info icon (not disabled; full-contrast) */}
                <MenuItem
                  disableRipple
                  sx={{
                    cursor: 'default',
                    opacity: 1,
                    '&:hover': { backgroundColor: 'transparent' },
                    py: 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 34, color: 'text.secondary' }}>
                    <IconRenderer icon={meta?.icon || 'Palette'} fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}>
                        {meta?.name || family}
                      </Typography>
                    }
                    secondary={
                      meta?.description ? (
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {meta.description}
                        </Typography>
                      ) : undefined
                    }
                  />
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedFamily(expandedFamily === family ? null : family);
                    }}
                  >
                    <Info fontSize="small" />
                  </IconButton>
                </MenuItem>

                {/* Single row: Light / Dark pills, preview swatches, active check */}
                <Box sx={{ display: 'flex', alignItems: 'center', px: 1.5, pb: 1 }}>
                  {/* Preview swatches */}
                  <Box sx={{ display: 'flex', gap: 0.75, ml: 'auto', mr: 1 }}>
                    {getPreviewSwatches(
                      isDarkSelected ? dark : (isLightSelected ? light : (dark || light)),
                      muiTheme
                    ).map((sw, i) => (
                      <Tooltip key={`${family}-sw-${sw.key}-${i}`} title={sw.label}>
                        <Box
                          sx={{
                            width: 14,
                            height: 14,
                            borderRadius: '4px',
                            ...(String(sw.value).includes('gradient')
                              ? { background: sw.value }
                              : { bgcolor: sw.value }),
                            border: '1px solid rgba(0,0,0,0.2)',
                          }}
                        />
                      </Tooltip>
                    ))}
                  </Box>
                  {/* Removed checkmark line */}
                  {/* Controls: Sun • Switch • Moon (compact group) aligned right */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Sun fontSize="small" sx={{ opacity: light ? 1 : 0.4 }} />
                    <MuiSwitch
                      size="small"
                      checked={isDarkSelected}
                      disabled={!light || !dark}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const nextMode = checked ? 'dark' : 'light';
                        if (typeof setMode === 'function') {
                          try { setMode(nextMode); } catch {}
                        } else {
                          applyMode(activeFamily, nextMode);
                        }
                      }}
                      inputProps={{ 'aria-label': 'Toggle light/dark mode' }}
                    />
                    <Moon fontSize="small" sx={{ opacity: dark ? 1 : 0.4 }} />
                  </Box>
                </Box>
                {/* Expanded manifest info */}
                {expandedFamily === family && (
                  <Box sx={{ px: 2, pb: 1.25, color: 'text.secondary', fontSize: 12 }}>
                    {meta?.author && (
                      <div><strong>Author:</strong> {typeof meta.author === 'string' ? meta.author : meta.author?.name}</div>
                    )}
                    {meta?.version && <div><strong>Version:</strong> {meta.version}</div>}
                    {meta?.homepage && <div><strong>Homepage:</strong> {meta.homepage}</div>}
                    {meta?.license && <div><strong>License:</strong> {meta.license}</div>}
                    {Array.isArray(meta?.tags) && meta.tags.length > 0 && (
                      <div><strong>Tags:</strong> {meta.tags.join(', ')}</div>
                    )}
                  </Box>
                )}
                {idx < families.length - 1 ? <Divider sx={{ my: 0.5 }} /> : null}
              </Box>
            );
          })
        )}
      </Menu>
    </>
  );
}