import type { AccessResponse, IssuedAccessToken, RequestAccessInput, ScopeValidationResult } from './types';
import {
  defaultValidateScopes,
  finalizeAccessRequest,
  generateEphemeralToken,
  normalizeAccessRequest,
  readKernelValue,
  readPinVerified,
  stageAccessRequest,
} from './internal';
import { resolveSession } from './handlers/resolveSession';
import { requestAccessConfirmationFromUi, requestPinVerificationFromUi } from './ui/bridge';

function buildAccessError(
  code: AccessResponse['code'],
  error: string,
  extra: Partial<AccessResponse> = {}
): AccessResponse {
  return {
    success: false,
    code,
    error,
    ...extra,
  };
}

export async function requestAccess(input: RequestAccessInput): Promise<AccessResponse> {
  const request = normalizeAccessRequest(input.request);

  if (!request.appName) {
    return buildAccessError('INVALID_REQUEST', 'Access request requires an appName.');
  }

  if (request.requestedScopes.length === 0) {
    return buildAccessError('INVALID_REQUEST', 'Access request requires at least one requested scope.');
  }

  const session = resolveSession(input);
  if (!session.hasSession) {
    return buildAccessError('NO_ACTIVE_SESSION', 'No active session. User must open or claim first.');
  }

  if (!session.isClaimed) {
    return buildAccessError('CLAIM_REQUIRED', 'Namespace is not fully claimed yet.');
  }

  stageAccessRequest(input, request);

  const confirmAccess = input.confirmAccess ?? requestAccessConfirmationFromUi;
  const confirmationResult = await confirmAccess({ request, session });
  if (confirmationResult == null) {
    finalizeAccessRequest(input, 'error', {
      appName: request.appName,
      error: 'Access confirmation UI is not wired yet.',
    });
    return buildAccessError(
      'CONFIRMATION_REQUIRED',
      'Access confirmation is required before granting scopes.'
    );
  }

  if (!confirmationResult) {
    finalizeAccessRequest(input, 'denied', {
      appName: request.appName,
      deniedScopes: request.requestedScopes,
      error: 'User denied access.',
    });
    return buildAccessError('ACCESS_DENIED', 'User denied access.', {
      deniedScopes: request.requestedScopes,
    });
  }

  if (request.requirePin) {
    let pinVerified = readPinVerified(input);
    if (!pinVerified) {
      const verifyPin = input.verifyPin ?? requestPinVerificationFromUi;
      const pinResult = await verifyPin({ request, session });
      if (pinResult == null) {
        finalizeAccessRequest(input, 'error', {
          appName: request.appName,
          error: 'PIN verification UI is not wired yet.',
        });
        return buildAccessError('PIN_REQUIRED', 'PIN verification required.');
      }
      pinVerified = Boolean(pinResult);
    }

    if (!pinVerified) {
      finalizeAccessRequest(input, 'error', {
        appName: request.appName,
        error: 'PIN verification required.',
      });
      return buildAccessError('PIN_REQUIRED', 'PIN verification required.');
    }
  }

  const authKeys = readKernelValue<Record<string, unknown> | null>(input, 'auth.keys');
  const validation: ScopeValidationResult =
    typeof input.validateScopes === 'function'
      ? await input.validateScopes({ request, session, authKeys: authKeys || null })
      : defaultValidateScopes(request.requestedScopes, request.appName, authKeys || null);

  const grantedScopes = validation.grantedScopes || [];
  const deniedScopes = validation.deniedScopes || [];

  if (grantedScopes.length === 0) {
    finalizeAccessRequest(input, 'denied', {
      appName: request.appName,
      deniedScopes: deniedScopes.length ? deniedScopes : request.requestedScopes,
      error: 'No scopes were granted.',
    });
    return buildAccessError('NO_SCOPES_GRANTED', 'No scopes were granted.', {
      deniedScopes: deniedScopes.length ? deniedScopes : request.requestedScopes,
    });
  }

  const now = input.now?.() || Date.now();
  const expiresAt = now + request.ttlMs;
  const issueToken = input.issueToken;
  const issued: IssuedAccessToken =
    typeof issueToken === 'function'
      ? await issueToken({
          request,
          session,
          grantedScopes,
          issuedAt: now,
          expiresAt,
        })
      : {
          value: generateEphemeralToken(request.appName, now),
          expiresAt,
        };

  if (!issued?.value) {
    finalizeAccessRequest(input, 'error', {
      appName: request.appName,
      grantedScopes,
      deniedScopes,
      error: 'Unable to issue an access token.',
    });
    return buildAccessError('TOKEN_ISSUE_FAILED', 'Unable to issue an access token.', {
      grantedScopes,
      deniedScopes,
    });
  }

  finalizeAccessRequest(input, 'granted', {
    appName: request.appName,
    grantedScopes,
    deniedScopes,
    issuedAt: now,
    expiresAt: issued.expiresAt,
    error: null,
  });

  return {
    success: true,
    token: issued.value,
    expiresAt: issued.expiresAt,
    grantedScopes,
    deniedScopes,
  };
}
