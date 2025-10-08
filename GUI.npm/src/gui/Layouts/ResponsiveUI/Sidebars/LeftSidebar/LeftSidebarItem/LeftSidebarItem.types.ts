export type LeftSidebarItemProps = {
  label: string;
  icon?: string;
  iconColor?: string;
  href?: string;
  active?: boolean;
  external?: boolean;
  onClick?: () => void;
  children?: LeftSidebarItemProps[];
};
