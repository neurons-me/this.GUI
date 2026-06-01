import * as React from 'react';
import Modal from '@/gui/Molecules/Modal/Modal';
import Box from '@/gui/Atoms/Box/Box';
import Button from '@/gui/Atoms/Button/Button';
import TextField from '@/gui/Atoms/TextField/TextField';
import Typography from '@/gui/Atoms/Typography/Typography';
import Stack from '@/gui/Molecules/Stack/Stack';

export type PinVerificationModalProps = {
  open: boolean;
  appName: string;
  error?: string | null;
  onCancel: () => void;
  onConfirm: (pin: string) => void | Promise<void>;
};

export default function PinVerificationModal(props: PinVerificationModalProps) {
  const { open, appName, error, onCancel, onConfirm } = props;
  const [pin, setPin] = React.useState('');

  React.useEffect(() => {
    if (!open) {
      setPin('');
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onCancel}
      title="Verify Access"
      width={420}
    >
      <Stack spacing={1.5}>
        <Typography variant="body1" sx={{ lineHeight: 1.55 }}>
          Confirm access for{' '}
          <Box component="span" sx={{ fontWeight: 800 }}>
            {appName || 'this app'}
          </Box>{' '}
          by entering your current `.me` secret.
        </Typography>

        <Typography variant="caption" sx={{ opacity: 0.72, lineHeight: 1.5 }}>
          This is acting as PIN verification for now. Once we define a dedicated session PIN, this modal can switch without changing the access protocol.
        </Typography>

        <TextField
          label="PIN / Secret"
          type="password"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
          autoComplete="current-password"
          fullWidth
          onKeyDown={(event) => {
            if (event.key === 'Enter' && pin.trim()) {
              event.preventDefault();
              void onConfirm(pin);
            }
          }}
        />

        {error ? (
          <Typography variant="caption" sx={{ color: 'error.main', lineHeight: 1.5 }}>
            {error}
          </Typography>
        ) : null}

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => void onConfirm(pin)} disabled={!pin.trim()}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
