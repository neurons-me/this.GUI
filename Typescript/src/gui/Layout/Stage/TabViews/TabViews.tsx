// Layout/Stage/TabViews/TabViews.tsx
//
// TabViews — N views, one "front" (active, full render), the rest "parked"
// (dimmed preview tiles you click to bring forward). Extracted from
// local.netget's WelcomeNetget.jsx, which hand-built exactly this shape for
// exactly two views (terminal/netget) — generalized here to N, since a third
// view (a resolved monad's Namespace) already didn't fit that fixed
// left/right assumption. The wiring/decoration each view's content draws
// (SVG paths, custom layouts) stays with the caller — this component only
// owns the front/parked state machine and the frame around it.
//
// Lives in Layout/, not Molecules/: it's a main-content region a Layout
// composes (the same tier as Content, TopBar, LeftBar, RightBar, Footer),
// not an atoms-composed Molecule an app assembles ad hoc. An app that wants
// tab/view rotation as its Layout's main area passes TabViews as Layout's
// children, the same way AppShellNav passes a single ActiveView today.
//
// Blurred views (secret scopes not yet decrypted, see the Web OS "blurred
// tab" design conversation) are a real, already-designed extension point:
// `blurred: true` on a view swaps both its parked preview and its front
// render for a locked placeholder, never calling `render()` — not wired to
// real decryption yet, just the visual contract.
import * as React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Typography from '@/gui/Atoms/Typography/Typography';
import Icon from '@/gui/Atoms/Icon/Icon';
import type { TabViewsProps } from './TabViews.types';

export type { TabViewsProps, TabViewsItem } from './TabViews.types';

function BlurredPlaceholder({ label, size = 'preview' }: { label: string; size?: 'preview' | 'front' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        width: '100%',
        height: '100%',
        minHeight: size === 'front' ? 240 : 72,
        color: 'text.secondary',
        filter: 'blur(2px)',
        userSelect: 'none',
      }}
    >
      <Icon name="lock" fontSize={size === 'front' ? '2rem' : '1.1rem'} />
      {size === 'front' && (
        <Typography variant="body2" sx={{ filter: 'none' }}>
          {label} — encrypted
        </Typography>
      )}
    </Box>
  );
}

export function TabViews({ views, activeId, onActiveChange, sx }: TabViewsProps) {
  const active = views.find((v) => v.id === activeId) ?? views[0];
  const parked = views.filter((v) => v.id !== active?.id);

  return (
    <Box
      data-gui-component="TabViews"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        ...sx,
      }}
    >
      {parked.length > 0 && (
        <Box
          data-gui-component="TabViewsParked"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            opacity: 0.55,
          }}
        >
          {parked.map((view) => (
            <Box
              key={view.id}
              component="button"
              type="button"
              onClick={() => onActiveChange(view.id)}
              aria-label={`Show ${view.label}`}
              sx={{
                flex: '1 1 160px',
                minWidth: 120,
                maxWidth: 260,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                background: 'transparent',
                color: 'inherit',
                textAlign: 'left',
                cursor: 'pointer',
                padding: 1.25,
                transition: 'opacity 120ms ease, transform 120ms ease',
                '&:hover': { opacity: 1, transform: 'translateY(-1px)' },
              }}
            >
              {view.blurred ? (
                <BlurredPlaceholder label={view.label} size="preview" />
              ) : view.renderPreview ? (
                view.renderPreview()
              ) : (
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {view.label}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      )}

      <Box
        data-gui-component="TabViewsFront"
        sx={{
          position: 'relative',
          flex: 1,
          minHeight: 0,
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 2,
          overflow: 'auto',
        }}
      >
        {active?.blurred ? (
          <BlurredPlaceholder label={active.label} size="front" />
        ) : (
          active?.render()
        )}
      </Box>
    </Box>
  );
}

export default TabViews;
