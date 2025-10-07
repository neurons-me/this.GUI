import type { SxProps, Theme } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material/AppBar';
import type { TopBarLinkProps } from './TopBarLink/TopBarLink.types';
import type { TopBarMenuProps } from './TopBarMenu/TopBarMenu.types';
import type { TopBarActionProps } from './TopBarAction/TopBarAction.types';

export interface TopBarProps extends AppBarProps {
  title?: string;
  logo?: string;
  elementsCenter?: TopBarElement[];
  elementsRight?: TopBarElement[];
  /** Icon name used when center elements are collapsed (mobile). Default: "settings". */
  collapsedIconCenter?: string;
  /** Icon name used when right elements are collapsed (mobile). Default: "more_horiz". */
  collapsedIconRight?: string;
  homeTo?: string;
  sx?: SxProps<Theme>;
  appBarSx?: SxProps<Theme>;
  toolbarSx?: SxProps<Theme>;
  brandSx?: SxProps<Theme>;
  logoSx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  linksSx?: SxProps<Theme>;
  linkSx?: SxProps<Theme>;
  menuSx?: SxProps<Theme>;
  menuItemSx?: SxProps<Theme>;
  id?: string;
  className?: string;
}

export type TopBarElement =
  | { type: 'link'; props: TopBarLinkProps }
  | { type: 'menu'; props: TopBarMenuProps }
  | { type: 'action'; props: TopBarActionProps };
  
export type TopBarResolverSpec = {
  type: 'TopBar';
  props?: TopBarProps;
};