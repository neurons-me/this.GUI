import React, { useState } from "react";
import Box from "@/gui/atoms/Box/Box";
import Collapse from "@/gui/atoms/Collapse/Collapse";
import Typography from "@/gui/atoms/Typography/Typography";
import Icon from "@/gui/Theme/Icon/Icon";

const VIEWPORT_MARGIN = 12;
type LeftSidebarMenuItem = {
  label?: string;
  icon?: string;
  onClick?: () => void;
  inspectorControl?: boolean;
};

type LeftSidebarMenuProps = {
  label?: string;
  icon?: string;
  items?: LeftSidebarMenuItem[];
  view?: 'rail' | 'expanded' | 'mobile';
  onRailTooltipChange?: (payload: {
    open: boolean;
    label?: string;
    icon?: string;
    items?: LeftSidebarMenuItem[];
  }) => void;
  onRailTooltipOpen?: (payload: {
    label?: string;
    icon?: string;
    items?: LeftSidebarMenuItem[];
  }) => void;
  onRailTooltipClose?: (payload: {
    label?: string;
    icon?: string;
    items?: LeftSidebarMenuItem[];
  }) => void;
};

const LeftSidebarMenu: React.FC<LeftSidebarMenuProps> = ({
  label,
  icon,
  items,
  view,
  onRailTooltipChange,
  onRailTooltipOpen,
  onRailTooltipClose,
}) => {
  const [open, setOpen] = useState(false);
  const [anchorTop, setAnchorTop] = useState<number | null>(null);
  const [tooltipTop, setTooltipTop] = useState<number>(VIEWPORT_MARGIN);
  const isRail = view === 'rail';
  const tooltipPayload = { label, icon, items };
  const openRef = React.useRef(open);
  const hoveringTrigger = React.useRef(false);
  const hoveringTooltip = React.useRef(false);
  const closeTimeoutRef = React.useRef<number | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    openRef.current = open;
  }, [open]);

  const updateTooltipPosition = React.useCallback(() => {
    if (!isRail || !open || typeof window === 'undefined') return;
    const tooltipHeight = tooltipRef.current?.getBoundingClientRect().height ?? 0;
    const desiredTop = anchorTop ?? VIEWPORT_MARGIN;
    const maxTop = Math.max(VIEWPORT_MARGIN, window.innerHeight - tooltipHeight - VIEWPORT_MARGIN);
    setTooltipTop(Math.min(Math.max(VIEWPORT_MARGIN, desiredTop), maxTop));
  }, [anchorTop, isRail, open]);

  const emitRailTooltip = (isOpen: boolean) => {
    if (!isRail) return;
    onRailTooltipChange?.({ open: isOpen, ...tooltipPayload });
    if (isOpen) {
      onRailTooltipOpen?.(tooltipPayload);
    } else {
      onRailTooltipClose?.(tooltipPayload);
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('this.gui:leftbarMenuTooltip', {
          detail: { open: isOpen, ...tooltipPayload },
        })
      );
    }
  };

  const setOpenState = (next: boolean) => {
    if (!isRail) {
      setOpen(next);
      return;
    }
    if (openRef.current === next) return;
    setOpen(next);
    emitRailTooltip(next);
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current != null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    if (!isRail) return;
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      if (!hoveringTrigger.current && !hoveringTooltip.current) {
        setOpenState(false);
        setAnchorTop(null);
      }
    }, 120);
  };

  React.useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

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
          hoveringTrigger.current = true;
          clearCloseTimeout();
          setOpenState(true);
        }
      }}
      onMouseLeave={() => {
        if (isRail) {
          hoveringTrigger.current = false;
          scheduleClose();
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
      onClick={() => !isRail && setOpen(!open)}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          justifyContent: view === 'rail' ? 'center' : 'flex-start',
          alignItems: 'center',
          width: '100%',
          textAlign: view === 'rail' ? 'center' : 'left',
          px: view === 'rail' ? 0 : 1.23,
        }}
      >
        <Icon name={icon ?? ''} />
        {view !== 'rail' && <Typography variant="body2">{label}</Typography>}
        {!isRail && (
          <Icon name={open ? 'expand_less' : 'expand_more'} />
        )}
      </Box>

      {isRail ? (
        open && (
          <Box
            ref={tooltipRef}
            onMouseEnter={() => {
              hoveringTooltip.current = true;
              clearCloseTimeout();
              setOpenState(true);
            }}
            onMouseLeave={() => {
              hoveringTooltip.current = false;
              scheduleClose();
            }}
            sx={{
              position: 'fixed',
              left: 'calc(var(--gui-rail-width, 60px) + 2px)',
              marginLeft: '-2px',
              top: tooltipTop,
              backgroundColor: 'background.paper',
              color: 'text.primary',
              borderRadius: 1,
              boxShadow: 3,
              zIndex: 1500,
              border: '1px solid',
              borderColor: 'divider',
              minWidth: 180,
              maxHeight: `calc(100vh - ${VIEWPORT_MARGIN * 2}px)`,
              overflowY: 'auto',
              py: 1,
            }}
          >
            {(items ?? []).map((item, idx) => {
              const isInspectorControl =
                item.inspectorControl === true || /inspector/i.test(String(item.label ?? ''));
              return (
              <Box
                key={item.label ?? idx}
                onClick={item.onClick}
                data-gui-inspector-control={isInspectorControl ? 'true' : undefined}
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
                <Icon name={item.icon ?? ''} />
                <Typography variant="body2">{item.label}</Typography>
              </Box>
              );
            })}
          </Box>
        )
      ) : (
        <Collapse in={open}>
          {(items ?? []).map((item, idx) => {
            const isInspectorControl =
              item.inspectorControl === true || /inspector/i.test(String(item.label ?? ''));
            return (
            <Box
              key={item.label ?? idx}
              onClick={item.onClick}
              data-gui-inspector-control={isInspectorControl ? 'true' : undefined}
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
              <Icon name={item.icon ?? ''} />
              <Typography variant="body2">{item.label}</Typography>
            </Box>
            );
          })}
        </Collapse>
      )}
    </Box>
  );
}

export default LeftSidebarMenu;
