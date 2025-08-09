import { Box, Typography } from "@mui/material";
import { MeFloating } from "this.gui";

export default function FloatingMePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Floating .Me Demo
      </Typography>
      <Typography variant="body1" gutterBottom>
        Below is the floating .Me component as it would appear in a real page. 
        Click the floating medusa button (⊙) at the bottom-right corner to interact with it.
      </Typography>

      {/* Render the floating Me component */}
      <MeFloating />
    </Box>
  );
}
