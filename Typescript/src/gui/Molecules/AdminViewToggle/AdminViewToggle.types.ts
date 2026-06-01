import type { SxProps, Theme } from '@mui/material/styles';

export type AdminViewToggleProps = {
  variant?: 'button' | 'minimal';
  show?: 'state' | 'label' | 'both';
  label?: string;
  onText?: string;
  offText?: string;
  size?: 'small' | 'medium' | 'large';
  id?: string;
  className?: string;
  ['data-testid']?: string;
  ['data-gui-inspector-control']?: boolean | string;
  sx?: SxProps<Theme>;
  iconSx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
};

export type AdminViewToggleResolverSpec = {
  type?: 'AdminViewToggle';
  props?: AdminViewToggleProps;
};
