import { useEffect, useRef, useState, useContext } from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { LeftSidebarContext } from '@/gui-internals/Contexts/LeftSidebarContext';
import BeetleSVG from './BeetleSVG';

const ENDPOINT = 'http://local.netget';

type Status = 'checking' | 'online' | 'offline';

export type LocalNetGetProps = {
  endpoint?: string;
  pollMs?: number;
  sx?: any;
};

async function probe(endpoint: string): Promise<boolean> {
  try {
    await fetch(endpoint + '/apps', { cache: 'no-store', signal: AbortSignal.timeout(3000) });
    return true;
  } catch {
    return false;
  }
}

export default function LocalNetGet({ endpoint = ENDPOINT, pollMs = 8000, sx }: LocalNetGetProps) {
  const [status, setStatus] = useState<Status>('checking');
  const [hoverOpen, setHoverOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const leftSidebarContext = useContext(LeftSidebarContext);
  const isRailView = leftSidebarContext?.view === 'rail';

  useEffect(() => {
    let cancelled = false;
    async function check() {
      const alive = await probe(endpoint);
      if (!cancelled) setStatus(alive ? 'online' : 'offline');
      if (!cancelled && pollMs > 0) timerRef.current = setTimeout(check, pollMs);
    }
    check();
    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [endpoint, pollMs]);

  const dotColor = status === 'online' ? '#66bb6a' : '#555e66';
  const statusLabel = status === 'online' ? 'On' : status === 'offline' ? 'Off' : '…';

  return (
    <Box sx={{ width: '100%', minWidth: 0, ...sx }}
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
    >
      <Box
        component={status === 'online' ? 'a' : 'div'}
        href={status === 'online' ? endpoint : undefined}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'relative',
          width: isRailView ? 44 : '100%',
          height: 44,
          mx: isRailView ? 'auto' : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isRailView ? 'center' : 'flex-start',
          gap: 1,
          cursor: status === 'online' ? 'pointer' : 'default',
          textDecoration: 'none',
          color: 'inherit',
          background: 'transparent',
          border: 'none',
          boxSizing: 'border-box',
        }}
      >
        {/* Beetle bubble — mirrors ThemeLauncher avatar bubble */}
        <Box
          ref={bubbleRef}
          sx={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              transition: 'border-color 120ms ease, transform 120ms ease',
              '&:hover': status === 'online' ? { transform: 'translateY(-1px)' } : {},
            }}
          >
            <BeetleSVG size={24} />
          </Box>

          {/* Status dot — bottom-right, mirrors mode indicator in ThemeLauncher */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 12,
              height: 12,
              borderRadius: '999px',
              bgcolor: dotColor,
              border: '2px solid',
              borderColor: 'background.paper',
              transition: 'background-color 0.3s ease',
              opacity: status === 'checking' ? 0.4 : 1,
            }}
          />
        </Box>

        {/* Label + status — expanded view only */}
        {!isRailView && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0, flex: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
              local.netget
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: dotColor, fontWeight: 700, flexShrink: 0, transition: 'color 0.3s ease' }}
            >
              {statusLabel}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Hover tooltip — rail view only */}
      <Popper
        open={isRailView && hoverOpen}
        anchorEl={bubbleRef.current}
        placement="right-start"
        sx={{ zIndex: (t: any) => t.zIndex.drawer + 3 }}
      >
        <ClickAwayListener onClickAway={() => setHoverOpen(false)}>
          <Box
            sx={{
              ml: 1,
              px: 1.5, py: 1,
              borderRadius: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              boxShadow: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              whiteSpace: 'nowrap',
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dotColor, flexShrink: 0 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              local.netget
            </Typography>
            <Typography variant="caption" sx={{ color: dotColor, fontWeight: 700 }}>
              {statusLabel}
            </Typography>
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}
