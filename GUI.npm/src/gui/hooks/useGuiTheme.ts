import { useTheme as useMuiTheme } from '@mui/material/styles';
import type { GuiTheme } from '@/types/theme';
export function useGuiTheme(): GuiTheme {
  return useMuiTheme() as GuiTheme;
}

export default useGuiTheme;
