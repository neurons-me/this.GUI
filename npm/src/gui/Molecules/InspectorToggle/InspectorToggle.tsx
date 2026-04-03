import * as React from 'react';
import Button from '@/gui/Atoms/Button/Button';
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Icon from '@/gui/Atoms/Icon/Icon';
import Typography from '@/gui/Atoms/Typography/Typography';
import Box from '@/gui/Atoms/Box/Box';
import {
  INSPECTOR_CHANGED_EVENT,
  INSPECTOR_STORAGE_KEY,
  getInspectorEnabled,
  toggleInspector,
} from '@/runtime/controlSurface';
import type { InspectorToggleProps } from './InspectorToggle.types';

function buildLabel(
  enabled: boolean,
  show: NonNullable<InspectorToggleProps['show']>,
  label: string,
  onText: string,
  offText: string
) {
  const stateLabel = enabled ? onText : offText;
  if (show === 'label') return label;
  if (show === 'both') return `${label} · ${stateLabel}`;
  return stateLabel;
}

const InspectorToggle: React.FC<InspectorToggleProps> = ({
  variant = 'button',
  show = 'state',
  label = 'Inspector',
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
  const [enabled, setEnabled] = React.useState<boolean>(() => getInspectorEnabled());

  React.useEffect(() => {
    const sync = () => setEnabled(getInspectorEnabled());
    const onStorage = (event: StorageEvent) => {
      if (event.key === INSPECTOR_STORAGE_KEY) sync();
    };

    window.addEventListener(INSPECTOR_CHANGED_EVENT, sync as EventListener);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener(INSPECTOR_CHANGED_EVENT, sync as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const handleToggle = React.useCallback(() => {
    const next = toggleInspector();
    setEnabled(Boolean(next));
  }, []);

  const iconName = enabled ? 'code' : 'code_off';
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

export default InspectorToggle;
