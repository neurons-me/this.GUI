import { Button } from "@mui/material";
import { useThemeToggle } from "../../context/ThemeContext";

export default function ThemeSelector() {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <Button 
      variant="outlined" 
      onClick={toggleTheme} 
      sx={{ mt: 2 }}
    >
      {isDarkMode ? "Switch to Light" : "Switch to Dark"}
    </Button>
  );
}