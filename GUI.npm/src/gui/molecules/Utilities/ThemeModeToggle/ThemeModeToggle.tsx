import React from 'react';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/context/GuiProvider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
type ThemeModeToggleProps = {
  variant?: 'minimal' | 'switch';
  show?: 'icons' | 'label' | 'both';
  switchSize?: 'small' | 'medium';
  iconSize?: 'small' | 'medium' | 'large';
  id?: string;
  className?: string;
  ['data-testid']?: string;
};

const ThemeModeToggle: React.FC<ThemeModeToggleProps> = ({
  variant = 'minimal',
  show = 'icons',
  switchSize = 'medium',
  iconSize = 'medium',
  id,
  className,
  ['data-testid']: dataTestId,
}) => {
  const { mode, toggleMode } = useThemeContext();
  const isLight = mode === 'light';
  const labelText = isLight ? 'Light' : 'Dark';
  if (variant === 'switch') {
    return (
      <Box id={id} display="flex" alignItems="center" onClick={toggleMode} sx={{ cursor: 'pointer' }} className={className} data-testid={dataTestId}>
        {show !== 'label' && (
          <>
            <LightModeIcon color={isLight ? 'primary' : 'disabled'} />
            <Switch
              checked={!isLight}
              onChange={toggleMode}
              color="primary"
              size={switchSize}
              inputProps={{ 'aria-label': 'toggle theme mode' }}
            />
            <DarkModeIcon color={!isLight ? 'primary' : 'disabled'} />
          </>
        )}
        {(show === 'label' || show === 'both') && (
          <Typography sx={{ ml: show === 'both' ? 1 : 0 }}>{labelText}</Typography>
        )}
      </Box>
    );
  }

  // variant === 'minimal'
  return (
    <IconButton id={id} onClick={toggleMode} color="inherit" aria-label="toggle theme mode" size={iconSize} className={className} data-testid={dataTestId}>
      {show !== 'label' && (isLight ? <LightModeIcon /> : <DarkModeIcon />)}
      {(show === 'label' || show === 'both') && (
        <Typography sx={{ ml: show === 'both' ? 1 : 0 }}>{labelText}</Typography>
      )}
    </IconButton>
  );
};

export default ThemeModeToggle;
