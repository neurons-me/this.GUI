import { Box, Typography } from '@/gui/Atoms';
import RubiksCube from '@/gui/widgets/RubiksCube/RubiksCube';
export default function GUIHero() {
  return (
    <>
      <Box sx={{ color: 'text.primary' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          <Box sx={{ width: 320, maxWidth: '100%' }}>
            <RubiksCube height={240} borderRadius={0} />
          </Box>
        </Box>
        <Typography variant="h1" >
          .GUI
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 500, opacity: 1, mb: 2, color: 'text.primary' }}>
          Generative User Interfaces.
        </Typography>      
      </Box>
    </>
  );
}
