import { ThemeProvider, CssBaseline } from '@mui/joy/styles';
import lightTheme from './themes/light';  // Adjust the path to your theme

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;