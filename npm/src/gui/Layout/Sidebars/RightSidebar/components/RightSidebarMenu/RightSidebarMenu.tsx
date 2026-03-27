import React, { useState } from 'react';
import { Box, Typography } from '@/gui/Atoms';
import { Collapse } from '@/gui/Molecules';
import Icon from '@/gui/Atoms/Icon/Icon';

const VIEWPORT_MARGIN = 12;

type RightSidebarMenuItem = {
  label?: string;
  icon?: string;
  iconColor?: string;
  onClick?: () => void;
};

type RightSidebarMenuProps = {
  label?: string;
  icon?: string;
  iconColor?: string;
  items?: RightSidebarMenuItem[];
  view?: 'rail' | 'expanded' | 'mobile';
};

const RightSidebarMenu: React.FC<RightSidebarMenuProps> = ({ label, icon, iconColor, items, view }) => {
  const [open, setOpen] = useState(false);
  const [anchorTop, setAnchorTop] = useState<number | null>(null);
  const [tooltipTop, setTooltipTop] = useState<number>(VIEWPORT_MARGIN);
  const isRail = view === 'rail';
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);

  const updateTooltipPosition = React.useCallback(() => {
    if (!isRail || !open || typeof window === 'undefined') return;
    const tooltipHeight = tooltipRef.current?.getBoundingClientRect().height ?? 0;
    const desiredTop = anchorTop ?? VIEWPORT_MARGIN;
    const maxTop = Math.max(VIEWPORT_MARGIN, window.innerHeight - tooltipHeight - VIEWPORT_MARGIN);
    setTooltipTop(Math.min(Math.max(VIEWPORT_MARGIN, desiredTop), maxTop));
  }, [anchorTop, isRail, open]);

  React.useLayoutEffect(() => {
    updateTooltipPosition();
  }, [updateTooltipPosition]);

  React.useEffect(() => {
    if (!isRail || !open || typeof window === 'undefined') return;
    const handleViewportChange = () => updateTooltipPosition();
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);
    return () => {
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
    };
  }, [isRail, open, updateTooltipPosition]);

  return (
    <Box
      onMouseEnter={(e) => {
        if (isRail) {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setAnchorTop(rect.top);
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (isRail) {
          setOpen(false);
          setAnchorTop(null);
        }
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: 1.123,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        borderRadius: 1,
        color: 'text.primary',
        '&:hover': { backgroundColor: 'action.hover' },
        position: 'relative',
      }}
      onClick={() => !isRail && setOpen((prev) => !prev)}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          justifyContent: isRail ? 'center' : 'flex-start',
          alignItems: 'center',
          width: '100%',
          textAlign: isRail ? 'center' : 'left',
          px: isRail ? 0 : 1.23,
        }}
      >
        <Icon name={icon ?? ''} iconColor={iconColor} />
        {view !== 'rail' && <Typography variant="body2">{label}</Typography>}
        {!isRail && <Icon name={open ? 'expand_less' : 'expand_more'} />}
      </Box>

      {isRail ? (
        open && (
          <Box
            ref={tooltipRef}
            sx={{
              position: 'fixed',
              right: 'var(--gui-rail-width, 72px)',
              top: tooltipTop,
              backgroundColor: 'background.paper',
              color: 'text.primary',
              borderRadius: 1,
              boxShadow: 3,
              zIndex: 1300,
              border: '1px solid',
              borderColor: 'divider',
              minWidth: 180,
              maxHeight: `calc(100vh - ${VIEWPORT_MARGIN * 2}px)`,
              overflowY: 'auto',
              py: 1,
            }}
          >
            {(items ?? []).map((item, idx) => (
              <Box
                key={item.label ?? idx}
                onClick={item.onClick}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  py: 0.75,
                  gap: 1.5,
                  cursor: 'pointer',
                  borderRadius: 1,
                  color: 'text.primary',
                  '&:hover': { backgroundColor: 'action.hover' },
                }}
              >
                <Icon name={item.icon ?? ''} iconColor={item.iconColor} />
                <Typography variant="body2">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        )
      ) : (
        <Collapse in={open}>
          {(items ?? []).map((item, idx) => (
            <Box
              key={item.label ?? idx}
              onClick={item.onClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 2,
                py: 0.75,
                gap: 1.123,
                cursor: 'pointer',
                borderRadius: 1,
                color: 'text.primary',
                '&:hover': { backgroundColor: 'action.hover' },
              }}
            >
              <Icon name={item.icon ?? ''} iconColor={item.iconColor} />
              <Typography variant="body2">{item.label}</Typography>
            </Box>
          ))}
        </Collapse>
      )}
    </Box>
  );
};

export default RightSidebarMenu;
