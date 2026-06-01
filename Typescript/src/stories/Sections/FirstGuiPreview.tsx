import { Box, Button, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';

export default function FirstGuiPreview() {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.78 }}>
        Rendered output
      </Typography>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Stack spacing={1.5} alignItems="flex-start">
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary' }}>
              Hello GUI
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Your first rendered screen
            </Typography>
          </Box>
          <Button variant="contained">
            Click me
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
