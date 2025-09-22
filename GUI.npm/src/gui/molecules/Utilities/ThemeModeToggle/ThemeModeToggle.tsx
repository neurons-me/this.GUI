import React from 'react';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/context/GuiProvider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
type ThemeModeToggleProps = {
  variant?: 'minimal' | 'switch';
  show?: 'icons' | 'label' | 'both';
  switchSize?: 'small' | 'medium';
  iconSize?: 'small' | 'medium' | 'large';
  // Granular styling
  sx?: SxProps<Theme>;          // root container (IconButton or Box)
  iconSx?: SxProps<Theme>;      // both Light/Dark icons
  switchSx?: SxProps<Theme>;    // Switch component (when variant='switch')
  labelSx?: SxProps<Theme>;     // Typography label
  id?: string;
  className?: string;
  ['data-testid']?: string;
};

const ThemeModeToggle: React.FC<ThemeModeToggleProps> = ({
  variant = 'minimal',
  show = 'icons',
  switchSize = 'medium',
  iconSize = 'medium',
  sx,
  iconSx,
  switchSx,
  labelSx,
  id,
  className,
  ['data-testid']: dataTestId,
}) => {
  const { mode, toggleMode } = useThemeContext();
  const isLight = mode === 'light';
  const labelText = isLight ? 'Light' : 'Dark';
  if (variant === 'switch') {
    return (
      <Box
        id={id}
        display="flex"
        alignItems="center"
        onClick={toggleMode}
        sx={sx ? ([{ cursor: 'pointer' }, sx] as SxProps<Theme>) : ({ cursor: 'pointer' } as SxProps<Theme>)}
        className={className}
        data-testid={dataTestId}
      >
        {show !== 'label' && (
          <>
            <LightModeIcon color={isLight ? 'primary' : 'disabled'} sx={iconSx} />
            <Switch
              checked={!isLight}
              onChange={toggleMode}
              color="primary"
              size={switchSize}
              inputProps={{ 'aria-label': 'toggle theme mode' }}
              sx={switchSx}
            />
            <DarkModeIcon color={!isLight ? 'primary' : 'disabled'} sx={iconSx} />
          </>
        )}
        {(show === 'label' || show === 'both') && (
          <Typography
            sx={
              labelSx
                ? ([{ ml: show === 'both' ? 1 : 0 }, labelSx] as SxProps<Theme>)
                : ({ ml: show === 'both' ? 1 : 0 } as SxProps<Theme>)
            }
          >
            {labelText}
          </Typography>
        )}
      </Box>
    );
  }

  // variant === 'minimal'
  return (
    <IconButton id={id} onClick={toggleMode} color="inherit" aria-label="toggle theme mode" size={iconSize} className={className} data-testid={dataTestId} sx={sx}>
      {show !== 'label' && (isLight ? <LightModeIcon sx={iconSx} /> : <DarkModeIcon sx={iconSx} />)}
      {(show === 'label' || show === 'both') && (
        <Typography
          sx={
            labelSx
              ? ([{ ml: show === 'both' ? 1 : 0 }, labelSx] as SxProps<Theme>)
              : ({ ml: show === 'both' ? 1 : 0 } as SxProps<Theme>)
          }
        >
          {labelText}
        </Typography>
      )}
    </IconButton>
  );
};

export default ThemeModeToggle;
