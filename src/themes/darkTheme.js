import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    icon: { main: '#b0b0b0' },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
      nav: 'black'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem: (size) => `${size / 16}rem`,
  },
});

export default darkTheme;