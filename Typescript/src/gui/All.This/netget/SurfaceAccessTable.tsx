import { Box } from '@mui/material';
import Typography from '@/gui/Atoms/Typography/Typography';

type Row = {
  address: string;
  handler: string;
  surface: string;
  kind: 'netget' | 'monad' | 'direct' | 'public';
  href: string;
};

const ROWS: Row[] = [
  { address: 'local.netget',         handler: 'NetGet Express',              surface: 'NetGet Dashboard',  kind: 'netget', href: 'http://local.netget' },
  { address: 'hostname.local',       handler: 'surface_proxy.lua → Monad',   surface: 'Namespace Root',    kind: 'monad',  href: 'https://neurons-me.github.io/monad/docs/Initiating-Monads' },
  { address: '{handle}.hostname.local', handler: 'nrp_handle.lua → Monad',  surface: 'Handle Surface',    kind: 'monad',  href: 'https://neurons-me.github.io/NRP/' },
  { address: 'IP:80 / IP:443',       handler: 'NetGet OpenResty',            surface: 'Public Gateway',    kind: 'public', href: 'https://neurons-me.github.io/netget/Typescript/typedocs/Placement' },
  { address: 'domain.com',           handler: 'surface_proxy.lua → routing', surface: 'Public Surface',    kind: 'public', href: 'https://neurons-me.github.io/netget/Typescript/typedocs/custom-domains' },
];

const KIND_COLOR: Record<Row['kind'], string> = {
  netget: '#4fc3f7',
  monad:  '#81c784',
  direct: '#ffb74d',
  public: '#ce93d8',
};

const KIND_LABEL: Record<Row['kind'], string> = {
  netget: 'NetGet',
  monad:  'Monad',
  direct: 'Direct',
  public: 'Public',
};

export default function SurfaceAccessTable() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', mb: 1.5, color: 'text.secondary', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}
      >
        Surface Access Points
      </Typography>

      <Box
        sx={{
          width: '100%',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr 1fr 28px',
            px: 2, py: 1,
            bgcolor: 'action.hover',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          {['Address', 'Handled by', 'Surface', ''].map(h => (
            <Typography key={h} variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {h}
            </Typography>
          ))}
        </Box>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <Box
            key={row.address}
            component="a"
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr 1fr 28px',
              px: 2, py: 1.25,
              borderBottom: i < ROWS.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              transition: 'background 120ms ease',
              '&:hover': { bgcolor: 'action.hover' },
              '&:hover .row-arrow': { opacity: 1 },
            }}
          >
            {/* Address */}
            <Typography
              variant="caption"
              sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.78rem', color: KIND_COLOR[row.kind] }}
            >
              {row.address}
            </Typography>

            {/* Handler */}
            <Typography variant="caption" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              {row.handler}
            </Typography>

            {/* Surface */}
            <Typography variant="caption" sx={{ fontSize: '0.75rem', fontWeight: 600, color: KIND_COLOR[row.kind] }}>
              {row.surface}
            </Typography>

            {/* Arrow */}
            <Typography
              className="row-arrow"
              variant="caption"
              sx={{ fontSize: '0.8rem', color: KIND_COLOR[row.kind], opacity: 0.3, transition: 'opacity 120ms ease', textAlign: 'right' }}
            >
              ↗
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Legend */}
      <Box sx={{ display: 'flex', gap: 2.5, mt: 1.5, flexWrap: 'wrap' }}>
        {(Object.keys(KIND_LABEL) as Row['kind'][]).map(kind => (
          <Box key={kind} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: KIND_COLOR[kind], flexShrink: 0 }} />
            <Typography variant="caption" sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
              {KIND_LABEL[kind]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
