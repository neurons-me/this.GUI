import { Box, Typography } from '@/gui/Atoms';
export default function GUIHero() {
  return (
    <>
      <Box sx={{ color: 'text.primary' }}>
        <img
          src="GUI.png"
          alt="This.GUI"
          style={{ width: '320px', height: 'auto', imageRendering: 'auto', marginBottom: '14px' }}
        />
        <Typography variant="h1" sx={{ fontWeight: 700, letterSpacing: '-0.04em', mb: 1, color: 'text.primary' }}>
          .GUI
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500, opacity: 1, mb: 2, color: 'text.primary' }}>
          Generative User Interfaces.
        </Typography>      
      </Box>
    </>
  );
}
