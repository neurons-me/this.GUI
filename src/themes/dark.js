//this.GUI/src/themes/dark.js
import { extendTheme } from '@mui/joy/styles';

const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          solidBg: '#90caf9',
        },
        background: {
          body: '#121212',
        },
      },
    },
  },
  fontFamily: {
    body: 'Arial, sans-serif',
  },
});

export default darkTheme;