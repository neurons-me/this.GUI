//this.GUI/src/themes/light.js
import { extendTheme } from '@mui/joy/styles';

const lightTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#1976d2',
        },
        background: {
          body: '#ffffff',
        },
      },
    },
  },
  fontFamily: {
    body: 'Arial, sans-serif',
  },
});

export default lightTheme;