import * as React from 'react';
import { useMe } from '@/react/useMe';
import { useMeValue } from '@/react/useMeValue';
import { writeMeValue } from '@/runtime/run-me';
import { SESSION_SECRET_STORAGE_KEY } from '../../runtimeUsername';
import type { AccessConfirmationInput, PinVerificationInput } from '../types';
import AccessConfirmationModal from './AccessConfirmationModal';
import PinVerificationModal from './PinVerificationModal';
import { registerCleakerAccessUiBridge } from './bridge';

type PendingConfirmation = {
  input: AccessConfirmationInput;
  resolve: (approved: boolean) => void;
};

type PendingPinVerification = {
  input: PinVerificationInput;
  resolve: (verified: boolean) => void;
};

function readStoredSecret(): string {
  if (typeof window === 'undefined') return '';
  try {
    return String(localStorage.getItem(SESSION_SECRET_STORAGE_KEY) || '').trim();
  } catch {
    return '';
  }
}

function notifyKernel(runtime: ReturnType<typeof useMe>['runtime'], path: string) {
  runtime?.notify?.(path);
}

export default function AccessRequestHandler() {
  const { me, runtime } = useMe();
  const stagedAppName = useMeValue<string>('ui.cleaker.access.appName') || '';
  const stagedReason = useMeValue<string>('ui.cleaker.access.reason') || '';
  const stagedRequestedScopes = useMeValue<string[]>('ui.cleaker.access.requestedScopes') || [];
  const stagedNamespace = useMeValue<string>('identity.session.namespace') || '';
  const [pendingConfirmation, setPendingConfirmation] = React.useState<PendingConfirmation | null>(null);
  const [pendingPin, setPendingPin] = React.useState<PendingPinVerification | null>(null);
  const [pinError, setPinError] = React.useState<string | null>(null);
  const confirmationRef = React.useRef<PendingConfirmation | null>(null);
  const pinRef = React.useRef<PendingPinVerification | null>(null);

  const closeConfirmation = React.useCallback((approved: boolean) => {
    const current = confirmationRef.current;
    confirmationRef.current = null;
    setPendingConfirmation(null);
    current?.resolve(approved);
  }, []);

  const closePin = React.useCallback((verified: boolean) => {
    const current = pinRef.current;
    pinRef.current = null;
    setPendingPin(null);
    setPinError(null);
    current?.resolve(verified);
  }, []);

  React.useEffect(() => {
    return () => {
      confirmationRef.current?.resolve(false);
      pinRef.current?.resolve(false);
      confirmationRef.current = null;
      pinRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    const unregister = registerCleakerAccessUiBridge({
      requestConfirmation: async (input) =>
        await new Promise<boolean>((resolve) => {
          const request = { input, resolve };
          confirmationRef.current = request;
          setPendingConfirmation(request);
        }),
      requestPinVerification: async (input) =>
        await new Promise<boolean>((resolve) => {
          const request = { input, resolve };
          pinRef.current = request;
          setPendingPin(request);
        }),
    });

    return unregister;
  }, []);

  const handlePinConfirm = React.useCallback(async (pin: string) => {
    const expectedSecret = readStoredSecret();
    const normalizedPin = String(pin || '').trim();

    if (!expectedSecret) {
      setPinError('No active .me secret is available for verification yet.');
      return;
    }

    if (!normalizedPin || normalizedPin !== expectedSecret) {
      setPinError('PIN did not match the active .me secret.');
      writeMeValue(me, 'runtime.cleaker.pin_verified', false, { allowBarePath: true });
      notifyKernel(runtime, 'runtime.cleaker.pin_verified');
      return;
    }

    const verifiedAt = Date.now();
    writeMeValue(me, 'runtime.cleaker.pinVerifiedAt', verifiedAt, { allowBarePath: true });
    writeMeValue(me, 'runtime.cleaker.pin_verified', true, { allowBarePath: true });
    notifyKernel(runtime, 'runtime.cleaker.pinVerifiedAt');
    notifyKernel(runtime, 'runtime.cleaker.pin_verified');
    closePin(true);
  }, [closePin, me, runtime]);

  const confirmationInput = pendingConfirmation?.input;
  const pinInput = pendingPin?.input;

  return (
    <>
      <AccessConfirmationModal
        open={Boolean(confirmationInput)}
        appName={confirmationInput?.request.appName || stagedAppName}
        reason={confirmationInput?.request.reason || stagedReason}
        requestedScopes={confirmationInput?.request.requestedScopes || stagedRequestedScopes}
        namespace={confirmationInput?.session.namespace || stagedNamespace}
        onApprove={() => closeConfirmation(true)}
        onDeny={() => closeConfirmation(false)}
      />
      <PinVerificationModal
        open={Boolean(pinInput)}
        appName={pinInput?.request.appName || stagedAppName}
        error={pinError}
        onCancel={() => closePin(false)}
        onConfirm={handlePinConfirm}
      />
    </>
  );
}
