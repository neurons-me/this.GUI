import React from 'react';
import clsx from 'clsx';
import { Box, Typography } from '@/gui/Atoms';
import { Tooltip } from '@/gui/Molecules';
import Icon from '@/gui/Atoms/Icon/Icon';
import type { LeftSidebarMode } from '../../LeftSidebar.types';
import { useLeftSidebar } from '@/gui/Hooks';
import resolveLeftSidebarAction from './LeftSidebarAction.resolver';

const SIDEBAR_RAIL_FLYOUT_Z_INDEX = 1705;

export type LeftSidebarActionProps = {
  label?: string;
  icon?: string;
  iconColor?: string;
  onClick?: () => void;
  action?: string | (() => any);
  element?: React.ReactNode;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
  resolver?: string; // legacy global action name; inline JS execution is disabled for CSP safety
  view: LeftSidebarMode; // added line
};

const LeftSidebarAction: React.FC<LeftSidebarActionProps> = ({
  label,
  icon,
  iconColor,
  onClick,
  action,
  element,
  active = false,
  className,
  style,
  resolver,
  view,
  ...rest
}) => {
  const legacyResolver = typeof resolver === 'string' ? resolver.trim() : '';
  const handleClick =
    onClick ||
    (typeof action !== 'undefined'
      ? () => {
          resolveLeftSidebarAction({ action });
        }
      : legacyResolver
        ? () => {
            console.warn(
              '[LeftSidebarAction] `resolver` string execution is disabled. Use `action` with a global function name or pass `onClick`.'
            );
            resolveLeftSidebarAction({ action: legacyResolver });
          }
        : undefined);

  const content = (
    <Box
      sx={{
        display: 'flex',
        gap: 1.123,
        justifyContent: view === 'rail' ? 'center' : 'flex-start',
        alignItems: 'center',
        width: '100%',
        textAlign: view === 'rail' ? 'center' : 'left',
        px: view === 'rail' ? 0 : 1.23,
      }}
    >
      <Icon name={icon || ''} iconColor={iconColor || (active ? 'primary.main' : 'text.secondary')} />
      {view !== 'rail' && (
        <Typography
          variant="body2"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: active ? 'primary.main' : 'text.primary',
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );

  if (element) {
    return (
      <Box
        {...rest}
        className={clsx('LeftSidebarAction', className)}
        style={style}
        sx={{
          p: 1.123,
          display: 'flex',
          justifyContent: view === 'rail' ? 'center' : 'flex-start',
          alignItems: 'center',
          width: '100%',
          textAlign: view === 'rail' ? 'center' : 'left',
        }}
      >
        {element}
      </Box>
    );
  }

  return (
    <Box
      component="button"
      onClick={handleClick}
      {...rest}
      className={clsx('LeftSidebarAction', className)}
      style={style}
      sx={{
        p: 1.123,
        display: 'flex',
        flexDirection: 'column',
        alignItems: view === 'rail' ? 'center' : 'flex-start',
        borderLeft: 2,
        borderLeftColor: active ? 'primary.main' : 'transparent',
        borderLeftStyle: 'solid',
        cursor: 'pointer',
        backgroundColor: active ? 'action.selected' : 'transparent',
        '&:hover': {
          backgroundColor: 'action.hover',
          borderLeftColor: 'primary.main',
        },
        color: active ? 'primary.main' : 'text.primary',
        width: '100%',
        textAlign: view === 'rail' ? 'center' : 'left',
        outline: 'none',
        border: 'none',
      }}
      aria-pressed={active}
      type="button"
    >
      {view === 'rail' ? (
        <Tooltip
          title={label}
          placement="right"
          arrow
          slotProps={{
            popper: {
              sx: {
                zIndex: SIDEBAR_RAIL_FLYOUT_Z_INDEX,
                '& .MuiTooltip-tooltip': {
                  backgroundColor: 'var(--gui-bg-nav) !important',
                  backgroundImage: 'none !important',
                  color: 'var(--gui-text-primary) !important',
                  border: '1px solid var(--gui-border)',
                  boxShadow: 3,
                },
                '& .MuiTooltip-arrow': {
                  color: 'var(--gui-bg-nav) !important',
                },
              },
            },
            tooltip: {
              sx: {
                fontSize: '0.9rem',
                py: 0.5,
                px: 1,
                bgcolor: 'var(--gui-bg-nav)',
                color: 'var(--gui-text-primary)',
                border: '1px solid',
                borderColor: 'var(--gui-border)',
                backgroundImage: 'none',
              },
            },
            arrow: { sx: { color: 'var(--gui-bg-nav)' } },
          }}
        >
          {content}
        </Tooltip>
      ) : (
        content
      )}
    </Box>
  );
};

export default LeftSidebarAction;
