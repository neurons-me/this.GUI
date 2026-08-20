// MeLauncher.tsx — sidebar bubble for the current .me session. Mirrors
// ThemeLauncher/DevToolsLauncher's bubble+popper shape so all three sit
// consistently in a LeftBar footer. This is the visible face of
// SessionSurface: entering/leaving here is the single action that changes
// what the rest of the app can see and write — every view reading
// useSessionSurface()/useMeValue() reacts to it, nothing else needs wiring.
//
// Uses useOptionalSessionSurface() (not useSessionSurface()) so an app that
// renders AppShell without SessionSurface (no identity concept at all)
// doesn't crash — it just renders nothing, the same graceful-degradation
// DevToolsLauncher already established for useOptionalSelection().
import React, { useRef, useState } from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Icon from '@/gui/Atoms/Icon/Icon';
import Typography from '@/gui/Atoms/Typography/Typography';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { LeftSidebarContext } from '@/gui-internals/Contexts/LeftSidebarContext';
import { useOptionalSessionSurface } from './SessionSurface';

export interface MeLauncherProps {
  sx?: any;
}

const MeLauncher: React.FC<MeLauncherProps> = ({ sx }) => {
  const surface = useOptionalSessionSurface();
  const leftSidebarContext = React.useContext(LeftSidebarContext);
  const isRailView = leftSidebarContext?.view === 'rail';
  const [open, setOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  if (!surface) return null;
  const { authenticated, handle, pending, error, enter, logout } = surface;

  const openMenu = () => setOpen((v) => !v);

  const handleEnter = async () => {
    await enter();
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <Box data-gui-inspector-control="true" sx={{ width: '100%', minWidth: 0, ...sx }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isRailView ? 'center' : 'flex-start',
          gap: 1,
          width: isRailView ? 44 : '100%',
          minWidth: 0,
          height: 44,
          mx: isRailView ? 'auto' : 0,
          boxSizing: 'border-box',
        }}
      >
        <Box
          ref={bubbleRef}
          data-gui-node-id="MeLauncher.icon"
          data-gui-component="MeLauncherIcon"
          role={isRailView ? 'button' : undefined}
          tabIndex={isRailView ? 0 : undefined}
          aria-label={isRailView ? 'Open .me session' : undefined}
          onMouseEnter={openMenu}
          onClick={isRailView ? openMenu : undefined}
          sx={{
            position: 'relative',
            width: 44,
            height: 44,
            flexShrink: 0,
            cursor: isRailView ? 'pointer' : 'default',
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              border: '1px solid',
              borderColor: authenticated ? 'primary.main' : 'divider',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              transition: 'border-color 120ms ease, transform 120ms ease',
              '&:hover': { transform: 'translateY(-1px)' },
            }}
          >
            <Icon
              name="account_circle"
              fontSize="1.3rem"
              iconColor={authenticated ? 'primary' : undefined}
            />
          </Box>
          {authenticated && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 2,
                right: 2,
                width: 12,
                height: 12,
                borderRadius: '999px',
                bgcolor: 'primary.main',
                border: '2px solid',
                borderColor: 'background.paper',
              }}
            />
          )}
        </Box>
        {!isRailView && (
          <Box
            component="button"
            type="button"
            data-gui-node-id="MeLauncher.label"
            data-gui-component="MeLauncherLabel"
            aria-label="Open .me session"
            aria-expanded={open}
            onClick={openMenu}
            sx={{
              flex: 1,
              minWidth: 0,
              p: 0,
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
              {authenticated ? handle : 'Entrar con .me'}
            </Typography>
          </Box>
        )}
      </Box>

      <Popper
        open={open}
        anchorEl={bubbleRef.current}
        placement="right-start"
        sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 3 }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box
            data-gui-inspector-control="true"
            sx={{
              ml: 1,
              p: 1.5,
              minWidth: 220,
              maxWidth: 280,
              borderRadius: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              boxShadow: 4,
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, display: 'block', mb: 1 }}>
              .me
            </Typography>
            {authenticated ? (
              <>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  {handle}
                </Typography>
                <Box
                  component="button"
                  type="button"
                  onClick={handleLogout}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    p: 0.75,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    background: 'transparent',
                    color: 'inherit',
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon name="logout" fontSize="1rem" />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Salir</Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Sin sesión — datos públicos visibles, escritura deshabilitada.
                </Typography>
                {error && (
                  <Typography variant="body2" sx={{ color: 'error.main', mb: 1 }}>
                    {error.message}
                  </Typography>
                )}
                <Box
                  component="button"
                  type="button"
                  onClick={handleEnter}
                  disabled={pending}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    p: 0.75,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 1,
                    background: 'transparent',
                    color: 'primary.main',
                    cursor: pending ? 'wait' : 'pointer',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {pending ? 'Entrando…' : 'Entrar con .me'}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default MeLauncher;
