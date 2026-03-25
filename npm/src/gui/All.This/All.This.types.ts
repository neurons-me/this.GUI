import type { ReactNode } from 'react';

export type ModuleSource = 'local' | 'cdn';
export type RuntimeModuleState = 'pending' | 'on' | 'off';

export type ModuleSurfaceProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
};

export type ModuleCardProps = ModuleSurfaceProps;
export type ModuleRowProps = ModuleSurfaceProps;

export type RuntimeModuleProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  source: ModuleSource;
  state: RuntimeModuleState;
  assetUrl?: ReactNode;
  version?: ReactNode;
  onSourceChange?: (nextSource: ModuleSource) => void;
};

export type ModulesGridProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  children?: ReactNode;
  minColumnWidth?: number | string;
};

export type ModulesListProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  children?: ReactNode;
};
