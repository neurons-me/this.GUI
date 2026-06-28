import React, { useEffect, useRef, useState } from 'react';
import Box from '@/gui/Atoms/Box/Box';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Avatar from '@/gui/Atoms/Avatar/Avatar';
import Icon from '@/gui/Atoms/Icon/Icon';
import Typography from '@/gui/Atoms/Typography/Typography';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import ThemesCatalog from '@/gui/Theme/Catalog/Catalog';
import { useThemeContext } from '@/gui-internals/Contexts/ThemeContext';
import { getGuiThemes } from '@/gui/Theme/utils/catalog';
import { LeftSidebarContext } from '@/gui-internals/Contexts/LeftSidebarContext';

export interface ThemeLauncherProps {
  sx?: any;
}

const ThemeLauncher: React.FC<ThemeLauncherProps> = ({ sx }) => {
  const { themeId, mode } = useThemeContext();
  const leftSidebarContext = React.useContext(LeftSidebarContext);
  const isRailView = leftSidebarContext?.view === 'rail';
  // Mirror the LeftBar's own view: when the sidebar itself is expanded
  // (not the narrow rail), the launcher should default to its expanded
  // view too — names visible — instead of staying collapsed to a bubble.
  const [expanded, setExpanded] = useState(!isRailView);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [optimisticThemeId, setOptimisticThemeId] = useState<string | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  const themes = getGuiThemes();
  const displayThemeId = optimisticThemeId || themeId;
  const activeTheme = themes.find((t) => t.themeId === displayThemeId);
  const activeLabel = activeTheme?.themeName ?? 'Theme';

  useEffect(() => {
    setOptimisticThemeId(null);
  }, [themeId]);

  // Keep following the LeftBar's own view if it toggles between rail and
  // expanded at runtime (e.g. user collapses/expands the sidebar itself).
  useEffect(() => {
    setExpanded(!isRailView);
  }, [isRailView]);

  const handleMouseEnter = () => {
    if (!expanded) setHoverOpen(true);
  };
  const handleMouseLeave = () => setHoverOpen(false);

  return (
    <Box
      ref={anchorRef}
      sx={{ width: '100%', minWidth: 0, ...sx }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!expanded ? (
        <Box
          sx={{
            position: 'relative',
            width: 44,
            height: 44,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="button"
            type="button"
            aria-label="Open theme options"
            aria-expanded={false}
            onClick={() => setExpanded(true)}
            sx={{
              width: 44,
              height: 44,
              p: 0,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '999px',
              background: 'transparent',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
              boxSizing: 'border-box',
              transition: 'border-color 120ms ease, transform 120ms ease',
              '&:hover': { transform: 'translateY(-1px)' },
            }}
          >
            {activeTheme?.badgeUrl ? (
              <Avatar src={activeTheme.badgeUrl} alt={activeLabel} sx={{ width: 34, height: 34 }} />
            ) : (
              <Avatar sx={{ width: 34, height: 34, fontSize: 13 }}>{activeLabel[0] ?? 'T'}</Avatar>
            )}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 16,
              height: 16,
              borderRadius: '999px',
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <Icon name={mode === 'light' ? 'light_mode' : 'dark_mode'} fontSize="0.7rem" iconColor="primary" />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 1,
            position: 'relative',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: isRailView ? 0.5 : 2.5,
            pt: isRailView ? 1.25 : 3,
            // in rail view: expand just enough to give avatars a small breathing room
            mx: isRailView ? -0.75 : 0,
            width: isRailView ? 'calc(100% + 12px)' : '100%',
            boxSizing: 'border-box',
          }}
        >
          <IconButton
            size="small"
            aria-label="Collapse theme options"
            onClick={() => setExpanded(false)}
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              width: 20,
              height: 20,
              p: 0,
              color: 'text.secondary',
            }}
          >
            <Icon name="unfold_less" fontSize="0.85rem" />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <ThemeModeToggle variant="minimal" />
          </Box>
          <ThemesCatalog
            variant="grid"
            sidebarView={isRailView ? 'rail' : 'expanded'}
            minimal
            hideTitle
            sx={{ maxWidth: '100%', width: '100%' }}
            onThemeSelect={(theme, selectedId) => {
              setOptimisticThemeId(selectedId || theme.themeId || null);
              setHoverOpen(false);
            }}
          />
        </Box>
      )}

      <Popper
        open={hoverOpen && !expanded}
        anchorEl={anchorRef.current}
        placement="right-start"
        sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 3 }}
      >
        <ClickAwayListener onClickAway={() => setHoverOpen(false)}>
          <Box
            sx={{
              ml: 1,
              p: 1.5,
              minWidth: 200,
              maxWidth: 260,
              borderRadius: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              boxShadow: 4,
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
              Theme
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {activeLabel}
            </Typography>
            <Box
              component="button"
              type="button"
              onClick={() => {
                setHoverOpen(false);
                setExpanded(true);
              }}
              sx={{
                width: '100%',
                p: 0.75,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                background: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              Show All
            </Box>
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default ThemeLauncher;
