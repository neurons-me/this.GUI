import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@/gui/Atoms/Box/Box';
import Icon from '@/gui/Atoms/Icon/Icon';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import {
  getAdminViewEnabled,
  getInspectorEnabled,
  toggleAdminView,
  toggleInspector,
} from '@/runtime/controlSurface';
import type { ThemeModeToggleProps } from '@/gui/Theme/ToggleMode/ToggleMode.types';
import type { SideBarsCollection, SideBarsFooterElement, SideBarsSidebarElement } from './types';

const DEFAULT_BRAND_HREF = 'https://neurons.me/';
const DEFAULT_BRAND_LOGO_SRC = 'https://neurons.me/media/neurons-grey.png';
const DEFAULT_THEMES_HREF = './themes.html';

declare global {
  interface Window {
    __guiToggleRuntimeControls?: () => void;
  }
}

export type GUISettingsCollectionOptions = {
  includeThemeToggle?: boolean;
  includeSettingsMenu?: boolean;
  includeBrand?: boolean;
  includeAdminViewToggle?: boolean;
  includeInspectorToggle?: boolean;
  includeThemesLink?: boolean;
  includeRuntimeControlsToggle?: boolean;
  settingsIcon?: string;
  settingsTooltip?: string;
  themeTooltip?: string;
  brandTooltip?: string;
  themesHref?: string;
  onOpenThemes?: () => void;
  brandHref?: string;
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  brandImageSx?: Record<string, any>;
  themeToggleProps?: Partial<ThemeModeToggleProps>;
  getAdminViewState?: () => boolean;
  getInspectorState?: () => boolean;
  getRuntimeControlsCollapsed?: () => boolean;
  onToggleAdminView?: () => void;
  onToggleInspector?: () => void;
  onToggleRuntimeControls?: () => void;
};


type SettingsMenuItem = {
  key: string;
  label: string;
  icon: string;
  onClick: () => void;
};

type ActionMeta = {
  label: string;
  icon: string;
  tooltip?: string;
};

function defaultRuntimeControlsCollapsed(): boolean {
  if (typeof document === 'undefined') return false;
  return document.body.classList.contains('runtime-collapsed');
}

function defaultOpenThemes(href: string) {
  if (typeof window === 'undefined') return;
  window.location.href = href;
}

function themeAction(options: GUISettingsCollectionOptions): React.ReactNode {
  const tooltip = options.themeTooltip ?? 'Theme mode';
  const props: ThemeModeToggleProps = {
    variant: 'minimal',
    show: 'icons',
    iconSize: 'small',
    ...options.themeToggleProps,
  };
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
      aria-label={tooltip}
      title={tooltip}
    >
      <ThemeModeToggle {...props} />
    </Box>
  );
}

function brandAction(options: GUISettingsCollectionOptions): React.ReactNode {
  const href = options.brandHref ?? DEFAULT_BRAND_HREF;
  const logoSrc = options.brandLogoSrc ?? DEFAULT_BRAND_LOGO_SRC;
  const alt = options.brandLogoAlt ?? 'this.GUI';
  const tooltip = options.brandTooltip ?? 'this.GUI';
  return (
    <Box
      component="a"
      href={href}
      aria-label={tooltip}
      title={tooltip}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit',
        textDecoration: 'none',
        minWidth: 32,
        minHeight: 32,
      }}
    >
      <Box
        component="img"
        src={logoSrc}
        alt={alt}
        sx={{
          width: 40,
          height: 40,
          objectFit: 'contain',
          display: 'block',
          opacity: 0.8,
          ...options.brandImageSx,
        }}
      />
    </Box>
  );
}

function buildSettingsMenuItems(options: GUISettingsCollectionOptions): SettingsMenuItem[] {
  const items: SettingsMenuItem[] = [];
  const readAdminState = options.getAdminViewState ?? getAdminViewEnabled;
  const readInspectorState = options.getInspectorState ?? getInspectorEnabled;
  const readRuntimeState =
    options.getRuntimeControlsCollapsed ?? defaultRuntimeControlsCollapsed;
  const handleAdminView = options.onToggleAdminView ?? toggleAdminView;
  const handleInspector = options.onToggleInspector ?? toggleInspector;
  const handleRuntimeControls =
    options.onToggleRuntimeControls ??
    (() => {
      if (typeof window !== 'undefined' && typeof window.__guiToggleRuntimeControls === 'function') {
        window.__guiToggleRuntimeControls();
      }
    });

  if (options.includeAdminViewToggle !== false) {
    const enabled = Boolean(readAdminState());
    items.push({
      key: 'admin-view',
      label: enabled ? 'Admin View · ON' : 'Admin View · OFF',
      icon: enabled ? 'visibility' : 'visibility_off',
      onClick: handleAdminView,
    });
  }

  if (options.includeThemesLink !== false) {
    const themesHref = options.themesHref ?? DEFAULT_THEMES_HREF;
    items.push({
      key: 'themes',
      label: 'Themes',
      icon: 'palette',
      onClick: () => {
        if (typeof options.onOpenThemes === 'function') {
          options.onOpenThemes();
          return;
        }
        defaultOpenThemes(themesHref);
      },
    });
  }

  if (options.includeInspectorToggle !== false) {
    const enabled = Boolean(readInspectorState());
    items.push({
      key: 'inspector',
      label: enabled ? 'Inspector · ON' : 'Inspector · OFF',
      icon: enabled ? 'code' : 'code_off',
      onClick: handleInspector,
    });
  }

  if (options.includeRuntimeControlsToggle !== false) {
    const collapsed = Boolean(readRuntimeState());
    items.push({
      key: 'runtime-controls',
      label: collapsed ? 'Runtime Controls · Hidden' : 'Runtime Controls · Visible',
      icon: collapsed ? 'unfold_more' : 'unfold_less',
      onClick: handleRuntimeControls,
    });
  }

  return items;
}

function GUISettingsMenuButton({ options }: { options: GUISettingsCollectionOptions }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const menuItems = React.useMemo(() => buildSettingsMenuItems(options), [options, open]);
  const tooltip = options.settingsTooltip ?? 'GUI settings';
  const icon = options.settingsIcon ?? 'settings';

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        aria-label={tooltip}
        title={tooltip}
      >
        <IconButton
          aria-label={tooltip}
          color="inherit"
          size="small"
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <Icon name={icon} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => {
              handleClose();
              item.onClick();
            }}
          >
            <ListItemIcon>
              <Icon name={item.icon} />
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function asSidebarAction(
  element: React.ReactNode,
  meta: ActionMeta,
): SideBarsSidebarElement {
  return {
    type: 'action',
    props: {
      label: meta.label,
      icon: meta.icon,
      tooltip: meta.tooltip ?? meta.label,
      element,
    } as SideBarsSidebarElement['props'],
  };
}

function asFooterAction(
  element: React.ReactNode,
  meta: ActionMeta,
): SideBarsFooterElement {
  return {
    type: 'action',
    props: {
      label: meta.label,
      icon: meta.icon,
      tooltip: meta.tooltip ?? meta.label,
      element,
    } as SideBarsFooterElement['props'],
  };
}

function buildSidebarActions(options: GUISettingsCollectionOptions): SideBarsSidebarElement[] {
  const elements: SideBarsSidebarElement[] = [];

  if (options.includeThemeToggle !== false) {
    elements.push(
      asSidebarAction(themeAction(options), {
        label: options.themeTooltip ?? 'Theme mode',
        icon: 'dark_mode',
        tooltip: options.themeTooltip ?? 'Theme mode',
      }),
    );
  }

  if (options.includeSettingsMenu !== false) {
    elements.push(
      asSidebarAction(<GUISettingsMenuButton options={options} />, {
        label: options.settingsTooltip ?? 'GUI settings',
        icon: options.settingsIcon ?? 'settings',
        tooltip: options.settingsTooltip ?? 'GUI settings',
      }),
    );
  }

  if (options.includeBrand !== false) {
    elements.push(
      asSidebarAction(brandAction(options), {
        label: options.brandTooltip ?? 'this.GUI',
        icon: 'neurology',
        tooltip: options.brandTooltip ?? 'this.GUI',
      }),
    );
  }

  return elements;
}

function buildFooterActions(options: GUISettingsCollectionOptions): SideBarsFooterElement[] {
  const elements: SideBarsFooterElement[] = [];

  if (options.includeThemeToggle !== false) {
    elements.push(
      asFooterAction(themeAction(options), {
        label: options.themeTooltip ?? 'Theme mode',
        icon: 'dark_mode',
        tooltip: options.themeTooltip ?? 'Theme mode',
      }),
    );
  }

  if (options.includeSettingsMenu !== false) {
    elements.push(
      asFooterAction(<GUISettingsMenuButton options={options} />, {
        label: options.settingsTooltip ?? 'GUI settings',
        icon: options.settingsIcon ?? 'settings',
        tooltip: options.settingsTooltip ?? 'GUI settings',
      }),
    );
  }

  if (options.includeBrand !== false) {
    elements.push(
      asFooterAction(brandAction(options), {
        label: options.brandTooltip ?? 'this.GUI',
        icon: 'neurology',
        tooltip: options.brandTooltip ?? 'this.GUI',
      }),
    );
  }

  return elements;
}

export function GUISettings(options: GUISettingsCollectionOptions = {}): SideBarsCollection {
  return {
    id: 'GUISettings',
    leftSidebar: () => buildSidebarActions(options),
    leftSidebarFooter: () => buildSidebarActions(options),
    rightSidebar: () => buildSidebarActions(options),
    rightSidebarFooter: () => buildSidebarActions(options),
    topBarCenter: () => buildSidebarActions(options),
    topBarRight: () => buildSidebarActions(options),
    footerLeft: () => buildFooterActions(options),
    footerCenter: () => buildFooterActions(options),
    footerRight: () => buildFooterActions(options),
  };
}

export default GUISettings;
