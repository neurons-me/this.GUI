// src/components/generics/Theme/ThemeSelector.jsx
import React from 'react';
import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import { useThemeContext } from '../../../context/ThemeContext';

// Fallback a un icono si no existe el solicitado
const getMuiIcon = (name) => {
  if (!name || typeof name !== 'string') return MuiIcons.Brush;
  return MuiIcons[name] || MuiIcons.Palette || MuiIcons.Brush;
};

export default function ThemeSelector({ tooltip = 'Seleccionar tema' }) {
  const { themeName, setThemeName, availableThemes = [] } = useThemeContext();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Icono actual (según meta del tema activo)
  const activeMeta =
    availableThemes.find((t) => t.key === themeName) || availableThemes[0];

  const ActiveIcon = getMuiIcon(activeMeta?.icon?.value);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (key) => {
    setThemeName(key);
    handleClose();
  };

  const disabled = !availableThemes.length;

  return (
    <>
      <Tooltip title={tooltip}>
        <span>
          <IconButton
            onClick={handleOpen}
            disabled={disabled}
            aria-label="theme-selector"
            size="small"
          >
            {/* Icono combinado: tema + pincel superpuesto */}
            <Box
              sx={{
                position: 'relative',
                width: 22,
                height: 22,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActiveIcon fontSize="small" />
              <MuiIcons.Brush
                sx={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  fontSize: 14,
                  opacity: 0.9,
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </IconButton>
        </span>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {availableThemes.map((t) => {
          const ItemIcon = getMuiIcon(t?.icon?.value);
          const isActive = t.key === themeName;

          return (
            <MenuItem key={t.key} onClick={() => handleSelect(t.key)} selected={isActive}>
              <ListItemIcon>
                <ItemIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={t.name || t.key}
                secondary={t.mode ? t.mode.toUpperCase() : undefined}
              />
              {/* Swatches de previsualización */}
              {Array.isArray(t.preview) && t.preview.length > 0 && (
                <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
                  {t.preview.slice(0, 4).map((c, i) => (
                    <Box
                      key={`${t.key}-sw-${i}`}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '3px',
                        bgcolor: c,
                        border: '1px solid rgba(0,0,0,0.15)',
                      }}
                    />
                  ))}
                </Box>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}