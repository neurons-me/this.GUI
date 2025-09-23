import React from 'react';
import { IconButton, Switch } from '@/gui/atoms';
import Icon from '@/themes/Icon/Icon';
import { useThemeContext } from '@/themes/GuiProvider';
import { Typography, Box } from '@/gui/atoms';
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
  const iconFontSize = {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  }[iconSize];
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
            <Icon
              name="light_mode"
              iconColor={isLight ? 'primary' : 'disabled'}
              fontSize={iconFontSize}
            />
            <Switch
              checked={!isLight}
              onChange={toggleMode}
              color="primary"
              size={switchSize}
              inputProps={{ 'aria-label': 'toggle theme mode' }}
              sx={switchSx}
            />
            <Icon
              name="dark_mode"
              iconColor={!isLight ? 'primary' : 'disabled'}
              fontSize={iconFontSize}
            />
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
      {show !== 'label' &&
        (isLight ? (
          <Icon name="light_mode" iconColor="primary" fontSize={iconFontSize} />
        ) : (
          <Icon name="dark_mode" iconColor="primary" fontSize={iconFontSize} />
        ))}
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
