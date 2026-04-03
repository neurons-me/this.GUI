import * as React from 'react';
import Button from '@/gui/Atoms/Button/Button';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Icon from '@/gui/Atoms/Icon/Icon';
import Typography from '@/gui/Atoms/Typography/Typography';
import Box from '@/gui/Atoms/Box/Box';
import {
  ADMIN_VIEW_CHANGED_EVENT,
  ADMIN_VIEW_STORAGE_KEY,
  LEGACY_ADMIN_VIEW_STORAGE_KEY,
  getAdminViewEnabled,
  toggleAdminView,
} from '@/runtime/controlSurface';
import type { AdminViewToggleProps } from './AdminViewToggle.types';

function buildLabel(
  enabled: boolean,
  show: NonNullable<AdminViewToggleProps['show']>,
  label: string,
  onText: string,
  offText: string
) {
  const stateLabel = enabled ? onText : offText;
  if (show === 'label') return label;
  if (show === 'both') return `${label} · ${stateLabel}`;
  return stateLabel;
}

const AdminViewToggle: React.FC<AdminViewToggleProps> = ({
  variant = 'button',
  show = 'state',
  label = 'Admin View',
  onText = 'ON',
  offText = 'OFF',
  size = 'medium',
  id,
  className,
  ['data-testid']: dataTestId,
  ['data-gui-inspector-control']: dataGuiInspectorControl,
  sx,
  iconSx,
  labelSx,
  ...rest
}) => {
  const [enabled, setEnabled] = React.useState<boolean>(() => getAdminViewEnabled());

  React.useEffect(() => {
    const sync = () => setEnabled(getAdminViewEnabled());
    const onStorage = (event: StorageEvent) => {
      if (
        event.key === ADMIN_VIEW_STORAGE_KEY ||
        event.key === LEGACY_ADMIN_VIEW_STORAGE_KEY
      ) {
        sync();
      }
    };

    window.addEventListener(ADMIN_VIEW_CHANGED_EVENT, sync as EventListener);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener(ADMIN_VIEW_CHANGED_EVENT, sync as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const handleToggle = React.useCallback(() => {
    const next = toggleAdminView();
    setEnabled(Boolean(next));
  }, []);

  const iconName = enabled ? 'visibility' : 'visibility_off';
  const text = buildLabel(enabled, show, label, onText, offText);

  if (variant === 'minimal') {
    return (
      <Box
        id={id}
        className={className}
        data-testid={dataTestId}
        data-gui-inspector-control={dataGuiInspectorControl}
        {...rest}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: show === 'state' ? 0 : 0.75,
        }}
      >
        <IconButton
          onClick={handleToggle}
          size={size === 'large' ? 'medium' : size}
          aria-label={label}
          sx={sx}
        >
          <Box component="span" sx={iconSx}>
            <Icon name={iconName} iconColor={enabled ? 'success' : 'disabled'} />
          </Box>
        </IconButton>
        {show !== 'state' ? (
          <Typography sx={labelSx}>{text}</Typography>
        ) : null}
      </Box>
    );
  }

  return (
    <Button
      id={id}
      className={className}
      data-testid={dataTestId}
      data-gui-inspector-control={dataGuiInspectorControl}
      size={size}
      variant={enabled ? 'contained' : 'outlined'}
      color={enabled ? 'success' : 'inherit'}
      onClick={handleToggle}
      {...rest}
      sx={sx}
    >
      {text}
    </Button>
  );
};

export default AdminViewToggle;
