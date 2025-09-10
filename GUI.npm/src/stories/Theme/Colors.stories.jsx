// src/stories/Theme/Colors.stories.jsx
import { ThemeProvider, CssBaseline, Box, Typography, Paper, Stack, Divider, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Helpers ------------------------------------------------------------
const Swatch = ({ label, value, subtitle, border = '1px solid rgba(0,0,0,0.08)' }) => (
  <Paper
    elevation={0}
    sx={{
      p: 1.25,
      border,
      minWidth: 160,
      maxWidth: 240,
    }}
  >
    <Box
      sx={{
        height: 44,
        borderRadius: 1,
        bgcolor: value,
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    />
    <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
      {label}
    </Typography>
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
      {subtitle || value}
    </Typography>
  </Paper>
);

const Row = ({ title, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
      {children}
    </Stack>
  </Box>
);

const Section = ({ title, hint, children }) => (
  <Box sx={{ my: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {hint ? <Chip size="small" label={hint} /> : null}
    </Box>
    <Divider sx={{ my: 1.5 }} />
    {children}
  </Box>
);

// Stories ------------------------------------------------------------
function ColorsPreview() {
  const theme = useTheme();
  const border = `1px solid ${theme.custom?.border || theme.palette.divider}`;

  const p = theme.palette;

  return (
    <Box sx={{ p: 2, bgcolor: 'background.default', color: 'text.primary' }}>
      <Section title="Core Palette">
        <Row title="Brand">
          <Swatch label="primary.main" value={p.primary?.main} border={border} />
          <Swatch label="secondary.main" value={p.secondary?.main} border={border} />
          <Swatch label="icon.main" value={p.icon?.main} border={border} />
        </Row>

        <Row title="Background">
          <Swatch label="background.default" value={p.background?.default} border={border} />
          <Swatch label="background.paper" value={p.background?.paper} border={border} />
          <Swatch label="background.nav" value={p.background?.nav} border={border} />
        </Row>

        <Row title="Text">
          <Swatch label="text.primary" value={p.text?.primary} border={border} />
          <Swatch label="text.secondary" value={p.text?.secondary} border={border} />
          <Swatch label="divider" value={p.divider} border={border} />
        </Row>

        <Row title="Links">
          <Swatch label="link.main" value={p.link?.main} border={border} />
          <Swatch label="link.visited" value={p.link?.visited} border={border} />
        </Row>
      </Section>

      <Section title="Semantic States" hint="Extended colors">
        <Row title="Status">
          <Swatch label="success.main" value={p.success?.main} border={border} />
          <Swatch label="warning.main" value={p.warning?.main} border={border} />
          <Swatch label="error.main" value={p.error?.main} border={border} />
          <Swatch label="info.main" value={p.info?.main} border={border} />
        </Row>
      </Section>

      <Section title="Gradients & Overlays" hint="theme.custom.*">
        <Row title="Gradients">
          {theme.custom?.gradients
            ? Object.entries(theme.custom.gradients).map(([k, v]) => (
                <Swatch key={k} label={`custom.gradients.${k}`} value="transparent" subtitle={String(v)} border={border} />
              ))
            : <Typography variant="body2" sx={{ color: 'text.secondary' }}>No custom.gradients defined.</Typography>}
        </Row>

        <Row title="Overlays">
          {theme.custom?.overlays
            ? Object.entries(theme.custom.overlays).map(([k, v]) => (
                <Swatch key={k} label={`custom.overlays.${k}`} value="transparent" subtitle={String(v)} border={border} />
              ))
            : <Typography variant="body2" sx={{ color: 'text.secondary' }}>No custom.overlays defined.</Typography>}
        </Row>
      </Section>

      <Section title="CSS Variables" hint="For non-MUI DOM usage">
        <Row title="Auto-exported">
          {[
            '--gui-primary',
            '--gui-secondary',
            '--gui-bg-default',
            '--gui-bg-paper',
            '--gui-bg-nav',
            '--gui-text-primary',
            '--gui-text-secondary',
            '--gui-link',
            '--gui-link-visited',
            '--gui-border',
          ].map((varName) => (
            <Paper key={varName} elevation={0} sx={{ p: 1, border }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{varName}</Typography>
              <Box sx={{ mt: 0.5, height: 24, borderRadius: 1, bgcolor: `var(${varName})`, border: '1px solid rgba(0,0,0,0.06)'}} />
            </Paper>
          ))}
        </Row>
      </Section>
    </Box>
  );
}

// “How to” (solo Docs): explica creación/override de tokens de color
const HOWTO_MD = `
### Add / Override Colors (Token-first)

**1) Global token (shared across themes)**

\`\`\`json
{
  "colors": {
    "success": { "$type": "color", "$value": "#4caf50" },
    "warning": { "$type": "color", "$value": "#ff9800" }
  }
}
\`\`\`

**2) Theme tokens (per theme)**

\`\`\`json
{
  "color": {
    "primary": { "$type": "color", "$value": "#0a3a42" },
    "bgDefault": { "$type": "color", "$value": "#f8f9fa" },
    "link": { "$type": "color", "$value": "#008c7d" }
  },
  "extendedColors": {
    "error": { "$type": "color", "$value": "#f44336" },
    "warning": { "$type": "color", "$value": "#ff9800" },
    "success": { "$type": "color", "$value": "#4caf50" },
    "info": { "$type": "color", "$value": "#2196f3" },
    "gradients": {
      "primary": { "$type": "gradient", "$value": "linear-gradient(135deg, #00aa96 0%, #008c7d 100%)" }
    },
    "overlays": {
      "soft": { "$type": "color", "$value": "rgba(0,0,0,0.06)" }
    }
  }
}
\`\`\`

**3) Runtime mapping**

- \`color.*\` → \`theme.palette\` (brand, background, text, link, divider)
- \`extendedColors.*\` → \`theme.palette.{success,warning,error,info}\`
- \`extendedColors.gradients\` → \`theme.custom.gradients\`
- \`extendedColors.overlays\` → \`theme.custom.overlays\`

> Tip: si tu token aún no está mapeado a una prop nativa, puedes **exponerlo primero en** \`theme.custom.*\` y más tarde decidir su aterrizaje oficial.
`;

function HowTo() {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, bgcolor: 'background.default', color: 'text.primary' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        How to add custom color tokens
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
        {HOWTO_MD}
      </Typography>
    </Box>
  );
}

// CSF ---------------------------------------------------------------
export default {
  title: 'Theme/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Color system driven by tokens. Reads brand, background, text, link, divider, semantic status, and extended (gradients/overlays) directly from the active theme.',
      },
    },
  },
};

export const Palette = {
  name: 'Palette & Extended',
  render: () => <ColorsPreview />,
  parameters: {
    docs: {
      description: {
        story:
          'Core palette + semantic status + extended colors (gradients, overlays) as compiled by your token engine.',
      },
    },
  },
};

export const GuideCustomTokens = {
  name: 'How to add custom tokens',
  render: () => <HowTo />,
  parameters: {
    docs: {
      description: {
        story:
          'Step-by-step guide to define global and per-theme color tokens, and how they map into the runtime theme.',
      },
    },
  },
};