import { Box, Typography, Paper, Stack, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// ——— UI helpers ———
function ColorSwatch({ name, color }) {
  return (
    <Box sx={{ display:'flex', alignItems:'center', gap:1.5 }}>
      <Box sx={{ width:28, height:28, borderRadius:'50%', bgcolor: color, border:'1px solid rgba(0,0,0,0.15)' }} />
      <Typography variant="body2" sx={{ minWidth:108 }}>{name}</Typography>
      <Typography variant="caption" sx={{ color:'text.secondary' }}>{String(color)}</Typography>
    </Box>
  );
}

function TokenRow({ label, value, code }) {
  return (
    <Box sx={{ display:'flex', alignItems:'center', gap:1.5, py:0.5 }}>
      <Typography variant="body2" sx={{ minWidth:160, color:'text.secondary' }}>{label}</Typography>
      <Typography variant="body2" sx={{ fontFamily:'monospace' }}>{String(value)}{code ? `  (${code})` : ''}</Typography>
    </Box>
  );
}

function Section({ title, children, sx }) {
  return (
    <Box sx={{ mb:3, ...sx }}>
      <Typography variant="h3" sx={{ fontWeight:700, mb:1 }}>{title}</Typography>
      {children}
    </Box>
  );
}


function TokenCatalog() {
  const theme = useTheme();
  const p = theme.palette;

  const bp = theme.breakpoints?.values || {};
  const z  = theme.zIndex || {};
  const tr = theme.transitions || {};
  const ty = theme.typography || {};
  const custom = theme.custom || {};

  const spacingUnit = typeof theme.spacing === 'function' ? theme.spacing(1) : theme.spacing;

  return (
    <Box sx={{ p:3, bgcolor:'background.default', color:'text.primary' }}>
      <Typography variant="h3" sx={{ fontWeight:700, mb:1.5 }}>
        Token Catalog (read-only)
      </Typography>
      <Typography variant="body2" sx={{ mb:2.5 }}>
        Mode: <b>{p.mode}</b> • Font: <b>{ty.fontFamily}</b> • Radius: <b>{theme.shape?.borderRadius}px</b> • Spacing unit(1): <b>{String(spacingUnit)}</b>
      </Typography>

      <Section title="Palette">
        <Stack direction="row" spacing={4} useFlexGap flexWrap="wrap">
          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Core</Typography>
            <ColorSwatch name="primary.main"   color={p.primary.main} />
            <ColorSwatch name="secondary.main" color={p.secondary.main} />
            <ColorSwatch name="divider"        color={p.divider} />
            <ColorSwatch name="icon.main"      color={p?.icon?.main} />
          </Stack>

          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Background</Typography>
            <ColorSwatch name="background.default" color={p.background.default} />
            <ColorSwatch name="background.paper"   color={p.background.paper} />
            <ColorSwatch name="background.nav"     color={p.background.nav} />
          </Stack>

          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Text / Links</Typography>
            <ColorSwatch name="text.primary"   color={p.text.primary} />
            <ColorSwatch name="text.secondary" color={p.text.secondary} />
            <ColorSwatch name="link.main"      color={p?.link?.main} />
            <ColorSwatch name="link.visited"   color={p?.link?.visited} />
          </Stack>
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Semantic Colors">
        <Stack direction="row" spacing={4} useFlexGap flexWrap="wrap">
          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Success</Typography>
            {p.success && (
              <>
                <ColorSwatch name="success.main" color={p.success.main} />
                {p.success.contrastText && <ColorSwatch name="success.contrastText" color={p.success.contrastText} />}
              </>
            )}
          </Stack>
          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Info</Typography>
            {p.info && (
              <>
                <ColorSwatch name="info.main" color={p.info.main} />
                {p.info.contrastText && <ColorSwatch name="info.contrastText" color={p.info.contrastText} />}
              </>
            )}
          </Stack>
          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Warning</Typography>
            {p.warning && (
              <>
                <ColorSwatch name="warning.main" color={p.warning.main} />
                {p.warning.contrastText && <ColorSwatch name="warning.contrastText" color={p.warning.contrastText} />}
              </>
            )}
          </Stack>
          <Stack spacing={1.25}>
            <Typography variant="subtitle2">Error</Typography>
            {p.error && (
              <>
                <ColorSwatch name="error.main" color={p.error.main} />
                {p.error.contrastText && <ColorSwatch name="error.contrastText" color={p.error.contrastText} />}
              </>
            )}
          </Stack>
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Global">
        <TokenRow label="shape.borderRadius" value={`${theme.shape?.borderRadius}px`} />
        <TokenRow label="spacing(1)" value={String(spacingUnit)} />
        <TokenRow label="custom.border" value={theme.custom?.border || p.divider} />
      </Section>

      <Section title="Spacing Scale (0..8)">
        <Stack spacing={0.75}>
          {/* Visual strip */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap:'wrap' }}>
            {[0,1,2,3,4,5,6,7,8].map((n) => (
              <Box key={n} sx={{ display:'flex', alignItems:'center', gap:1, mr:1, mb:1 }}>
                <Typography variant="caption" sx={{ width:14, textAlign:'right' }}>{n}</Typography>
                <Box sx={{
                  height: 8,
                  width: typeof theme.spacing === 'function' ? theme.spacing(n * 2) : `${(Number(theme.spacing) || 8) * n * 2}px`,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  opacity: 0.6,
                }} />
              </Box>
            ))}
          </Stack>
          {/* Numeric table */}
          <Stack spacing={0.25}>
            {[0,1,2,3,4,5,6,7,8].map((n) => (
              <TokenRow
                key={`spacing-${n}`}
                label={`spacing(${n})`}
                value={typeof theme.spacing === 'function' ? String(theme.spacing(n)) : `${(Number(theme.spacing) || 8) * n}px`}
              />
            ))}
          </Stack>
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Action Opacity">
        <Stack spacing={0.5}>
          <TokenRow label="action.hoverOpacity" value={p?.action?.hoverOpacity ?? 0.04} />
          <TokenRow label="action.selectedOpacity" value={p?.action?.selectedOpacity ?? 0.08} />
          <TokenRow label="action.disabledOpacity" value={p?.action?.disabledOpacity ?? 0.38} />
          <TokenRow label="action.disabledBackgroundOpacity" value={p?.action?.disabledBackgroundOpacity ?? 0.12} />
          <TokenRow label="action.focusOpacity" value={p?.action?.focusOpacity ?? 0.12} />
          <TokenRow label="action.activatedOpacity" value={p?.action?.activatedOpacity ?? 0.12} />
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Typography">
        <Stack spacing={0.5}>
          <Typography variant="h1">H1 Preview</Typography>
          <Typography variant="h2">H2 Preview</Typography>
          <Typography variant="h3">H3 Preview</Typography>
          <Typography variant="h4">H4 Preview</Typography>
          <Typography variant="h5">H5 Preview</Typography>
          <Typography variant="subtitle1">Subtitle1 Preview</Typography>
          <Typography variant="body1">Body1: The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant="body2">Body2: The quick brown fox jumps over the lazy dog.</Typography>
        </Stack>
        <Box sx={{ mt:1.5 }}>
          <Typography variant="subtitle2" sx={{ mb:0.5 }}>Line heights & sizes</Typography>
          <Stack spacing={0.5}>
            {['h1','h2','h3','h4','h5','subtitle1','body1','body2','button'].map(v => (
              <TokenRow
                key={v}
                label={`${v}`}
                value={`lineHeight: ${ty?.[v]?.lineHeight ?? '—'} • fontSize: ${ty?.[v]?.fontSize ?? '—'}`}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ mt:1.5 }}>
          <Typography variant="subtitle2" sx={{ mb:0.5 }}>Font weights</Typography>
          <Stack spacing={0.5}>
            <TokenRow label="fontWeightLight"   value={ty?.fontWeightLight   ?? 300} />
            <TokenRow label="fontWeightRegular" value={ty?.fontWeightRegular ?? 400} />
            <TokenRow label="fontWeightMedium"  value={ty?.fontWeightMedium  ?? 500} />
            <TokenRow label="fontWeightBold"    value={ty?.fontWeightBold    ?? 700} />
          </Stack>
        </Box>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Shadows">
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {[0,1,2,3,4,6,8,12,16,24].map(e => (
            <Paper key={e} elevation={e} sx={{ width:90, height:56, display:'grid', placeItems:'center', bgcolor:'background.paper' }}>
              <Typography variant="caption">elevation {e}</Typography>
            </Paper>
          ))}
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Z-Index">
        <Stack spacing={0.5}>
          <TokenRow label="appBar"   value={z.appBar} />
          <TokenRow label="drawer"   value={z.drawer} />
          <TokenRow label="modal"    value={z.modal} />
          <TokenRow label="snackbar" value={z.snackbar} />
          <TokenRow label="tooltip"  value={z.tooltip} />
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Breakpoints">
        <Stack spacing={0.5}>
          {Object.entries(bp).map(([k,v]) => (
            <TokenRow key={k} label={k} value={`${v}px`} />
          ))}
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Motion">
        <Stack spacing={1}>
          <Typography variant="subtitle2">Easing</Typography>
          <TokenRow label="easing.easeInOut" value={tr?.easing?.easeInOut} />
          <TokenRow label="easing.easeOut" value={tr?.easing?.easeOut} />
          <TokenRow label="easing.easeIn" value={tr?.easing?.easeIn} />
          <TokenRow label="easing.sharp" value={tr?.easing?.sharp} />
          <Typography variant="subtitle2" sx={{ mt:2 }}>Duration</Typography>
          <TokenRow label="duration.shortest" value={`${tr?.duration?.shortest}ms`} />
          <TokenRow label="duration.shorter" value={`${tr?.duration?.shorter}ms`} />
          <TokenRow label="duration.short" value={`${tr?.duration?.short}ms`} />
          <TokenRow label="duration.standard" value={`${tr?.duration?.standard}ms`} />
          <TokenRow label="duration.complex" value={`${tr?.duration?.complex}ms`} />
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Gradients / Overlays (custom)">
        <Stack spacing={1}>
          {custom?.gradients ? (
            <Box>
              <Typography variant="subtitle2" sx={{ mb:0.5 }}>Gradients</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {Object.entries(custom.gradients).map(([k,v]) => (
                  <Paper key={k} sx={{ p:1, border:'1px solid', borderColor:'divider', bgcolor:'background.paper', minWidth:160 }}>
                    <Typography variant="caption" sx={{ display:'block', mb:0.5 }}>{k}</Typography>
                    <Box sx={{ width:'100%', height:24, borderRadius:1, background: String(v) }} />
                  </Paper>
                ))}
              </Stack>
            </Box>
          ) : (
            <Typography variant="caption" color="text.secondary">No custom.gradients defined (optional).</Typography>
          )}

          {custom?.overlays ? (
            <Box sx={{ mt:1 }}>
              <Typography variant="subtitle2" sx={{ mb:0.5 }}>Overlays</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {Object.entries(custom.overlays).map(([k,v]) => (
                  <Paper key={k} sx={{ p:1, border:'1px solid', borderColor:'divider', bgcolor:'background.paper', minWidth:160 }}>
                    <Typography variant="caption" sx={{ display:'block', mb:0.5 }}>{k}</Typography>
                    <Box sx={{ width:'100%', height:24, borderRadius:1, background: String(v) }} />
                  </Paper>
                ))}
              </Stack>
            </Box>
          ) : (
            <Typography variant="caption" color="text.secondary">No custom.overlays defined (optional).</Typography>
          )}
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Opacity (common)">
        <Stack spacing={0.5}>
          <TokenRow label="action.disabledOpacity" value={p?.action?.disabledOpacity ?? 0.38} />
        </Stack>
      </Section>

      <Divider sx={{ my:2 }} />

      <Section title="Icon Sizes (guideline)">
        <Stack direction="row" spacing={1.5}>
          {[16,20,24,28,32].map(sz => (
            <Paper key={sz} sx={{ width:64, height:64, display:'grid', placeItems:'center', bgcolor:'background.paper', border:'1px solid', borderColor:'divider' }}>
              <Typography variant="caption">{sz}px</Typography>
            </Paper>
          ))}
        </Stack>
      </Section>
    </Box>
  );
}

const meta = {
  title: 'Theme/Catalog',
};
export default meta;

export const Catalog = () => <TokenCatalog />;