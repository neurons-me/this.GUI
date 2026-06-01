import type { SxProps, Theme } from '@mui/material/styles';

export type InspectorToggleProps = {
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

export type InspectorToggleResolverSpec = {
  type?: 'InspectorToggle';
  props?: InspectorToggleProps;
};
