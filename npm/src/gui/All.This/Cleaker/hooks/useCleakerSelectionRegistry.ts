import { useEffect } from 'react';
import { selectionStore } from '@/runtime/selectionStore';
import type { ConnectionStatus } from '../Namespace/scripts/connection';

type SurfaceEntryLike = {
  type: string;
  hostId?: string | null;
  status: {
    lastSeen?: number | null;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type UseCleakerSelectionRegistryOptions = {
  rootNodeId: string;
  rootNodeType: string;
  nodeId: (segment: string) => string;
  nodePath: (segment: string) => string;

  namespaceConfigExpression: string;
  namespaceInput: string;
  namespaceHost: string;
  namespaceOrigin: string;
  namespaceDisplayHost: string;
  rootHostNamespace: string;
  effectiveSemanticRootName: string;
  resolvedNamespaceRootName: string;
  namespaceSeedHandle: string;
  surfaceNamespace: string;
  subjectSurfaceNamespace: string;
  subjectHandleNamespace: string;
  localNamespaceUrl: string;
  networkNamespaceUrl: string;
  activeNamespaceUrl: string;
  resolverHostName: string;
  resolverDisplayName: string;
  resolverSurfaceNamespace: string;
  resolverSubjectSurfaceNamespace: string;
  surfaceEntry: SurfaceEntryLike;
  compactMonadLabel: string;
  compactRootLabel: string;
  previewQrValue: string;
  globalNamespaceRootHash: string;
  subjectNamespaceHash: string;

  identityNamespace: string;
  typingNamespace: string;
  identityRoot: string;

  actionTarget: string;
  actionBaseUrl: string;
  actionTargetLabel: string;
  claimResolution: string;
  claimResolutionNote: string | null;
  authStatus: string;
  authError: string | null;
  authProgressMessage: string;
  authSuccessMessage: string;
  isClaimed: boolean;
  isActionDisabled: boolean;

  liveUsernameState: string;
  username: string;
  usernameError: string | null;
  secret: string;
  showSecret: boolean;

  settingsOpen: boolean;
  registerOpen: boolean;
  registerFullName: string;
  registerEmail: string;
  registerPhone: string;
  registerUsername: string;
  currentViewMode: string;
  showProfileView: boolean;
  avatarExpanded: boolean;

  activeProfileUsername: string;
  activeProfileName: string;
  activeProfileEmail: string;
  activeProfilePhone: string;
  activeSessionNamespace: string;
  claimedAt: number | null;
  claimedAtPath: number | null;
  runtimeAuthenticated: boolean;

  profileUsername: string;
  profileName: string;
  profileEmail: string;
  profilePhone: string;
  sanitizeRuntimeUsername: (raw: string) => string;

  parentStatus: ConnectionStatus;
  describeConnectionStatus: (status: ConnectionStatus) => string;
  themeMode: string;
  primaryColor: string;
};

function cleanString(value: unknown): string {
  return String(value || '').trim();
}

function maskHash(hash: string): string {
  const value = String(hash || '').trim();
  if (!value) return '';
  if (value.length <= 18) return value;
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

export default function useCleakerSelectionRegistry(
  options: UseCleakerSelectionRegistryOptions,
) {
  const {
    rootNodeId,
    rootNodeType,
    nodeId,
    nodePath,
    namespaceConfigExpression,
    namespaceInput,
    namespaceHost,
    namespaceOrigin,
    namespaceDisplayHost,
    rootHostNamespace,
    effectiveSemanticRootName,
    resolvedNamespaceRootName,
    namespaceSeedHandle,
    surfaceNamespace,
    subjectSurfaceNamespace,
    subjectHandleNamespace,
    localNamespaceUrl,
    networkNamespaceUrl,
    activeNamespaceUrl,
    resolverHostName,
    resolverDisplayName,
    resolverSurfaceNamespace,
    resolverSubjectSurfaceNamespace,
    surfaceEntry,
    compactMonadLabel,
    compactRootLabel,
    previewQrValue,
    globalNamespaceRootHash,
    subjectNamespaceHash,
    identityNamespace,
    typingNamespace,
    identityRoot,
    actionTarget,
    actionBaseUrl,
    actionTargetLabel,
    claimResolution,
    claimResolutionNote,
    authStatus,
    authError,
    authProgressMessage,
    authSuccessMessage,
    isClaimed,
    isActionDisabled,
    liveUsernameState,
    username,
    usernameError,
    secret,
    showSecret,
    settingsOpen,
    registerOpen,
    registerFullName,
    registerEmail,
    registerPhone,
    registerUsername,
    currentViewMode,
    showProfileView,
    avatarExpanded,
    activeProfileUsername,
    activeProfileName,
    activeProfileEmail,
    activeProfilePhone,
    activeSessionNamespace,
    claimedAt,
    claimedAtPath,
    runtimeAuthenticated,
    profileUsername,
    profileName,
    profileEmail,
    profilePhone,
    sanitizeRuntimeUsername,
    parentStatus,
    describeConnectionStatus,
    themeMode,
    primaryColor,
  } = options;

  useEffect(() => {
    const registeredIds: string[] = [];

    const registerNode = (
      id: string,
      path: string,
      type: string,
      resolvedProps: Record<string, unknown>,
    ) => {
      registeredIds.push(id);
      selectionStore.actions.registerNode({
        id,
        path,
        type,
        spec: { type, props: resolvedProps },
        resolvedProps,
      });
    };

    registerNode(rootNodeId, rootNodeId, rootNodeType, {
      namespaceExpression: namespaceConfigExpression,
      namespace: identityNamespace,
      namespaceHost,
      namespaceOrigin,
      actionTarget,
      actionBaseUrl,
      claimResolution,
      themeMode,
      primaryColor,
    });

    registerNode(nodeId('card'), nodePath('card'), 'Cleaker.Card', {
      namespace: identityNamespace,
      expandedAvatar: avatarExpanded,
      namespaceSurface: namespaceDisplayHost,
      namespaceStatus: describeConnectionStatus(parentStatus),
    });

    registerNode(nodeId('header'), nodePath('header'), 'Cleaker.Header', {
      namespace: identityNamespace,
      settingsOpen,
    });

    registerNode(nodeId('avatar'), nodePath('avatar'), 'Cleaker.AvatarQR', {
      identityRoot,
      namespaceUrl: activeNamespaceUrl,
      expanded: avatarExpanded,
    });

    registerNode(nodeId('identity-shell'), nodePath('identity-shell'), 'Cleaker.IdentityShell', {
      username,
      namespaceSuffix: namespaceSeedHandle,
    });

    registerNode(nodeId('identity'), nodePath('identity'), 'Cleaker.IdentityField', {
      username,
      namespace: typingNamespace,
      valid: liveUsernameState === 'valid',
      error: usernameError,
    });

    registerNode(nodeId('identity-input'), nodePath('identity-input'), 'Cleaker.IdentityInput', {
      username,
      placeholder: 'username',
      namespaceSuffix: namespaceSeedHandle,
    });

    registerNode(nodeId('namespace'), nodePath('namespace'), 'Cleaker.NamespaceSurface', {
      label: namespaceDisplayHost,
      status: describeConnectionStatus(parentStatus),
      expression: namespaceConfigExpression,
    });

    registerNode(nodeId('password'), nodePath('password'), 'Cleaker.PasswordField', {
      hasValue: Boolean(secret),
      visible: showSecret,
    });

    registerNode(nodeId('action-login'), nodePath('action-login'), 'Cleaker.PrimaryAction', {
      label: '⟁.me',
      title: 'Login',
      disabled: isActionDisabled,
      intent: 'open',
      target: actionTargetLabel,
    });

    registerNode(nodeId('action-register'), nodePath('action-register'), 'Cleaker.RegisterAction', {
      label: 'Sign Up',
      title: 'Sign Up',
      disabled: false,
      intent: 'claim',
      target: actionTargetLabel,
    });

    registerNode(nodeId('feedback'), nodePath('feedback'), 'Cleaker.Feedback', {
      claimResolution,
      claimResolutionNote,
      authStatus,
      authError,
      authProgressMessage,
      authSuccessMessage,
    });

    registerNode(nodeId('settings'), nodePath('settings'), 'Cleaker.Settings', {
      open: settingsOpen,
      expression: namespaceConfigExpression,
      namespaceOrigin,
      namespaceHost,
      rootHostNamespace,
      semanticRootName: effectiveSemanticRootName,
      resolvedNamespaceRootName,
      localNamespaceUrl,
      networkNamespaceUrl,
      surfaceNamespace,
      resolverHostName,
      resolverDisplayName,
      resolverSurfaceNamespace,
      resolverSubjectSurfaceNamespace,
      surfaceEntry,
      subjectSurfaceNamespace,
      subjectHandleNamespace,
      globalNamespaceRootHash,
      subjectNamespaceHash,
    });

    registerNode(nodeId('settings-toggle'), nodePath('settings-toggle'), 'Cleaker.SettingsToggle', {
      open: settingsOpen,
    });

    registerNode(nodeId('settings-panel'), nodePath('settings-panel'), 'Cleaker.SettingsPanel', {
      open: settingsOpen,
      expression: namespaceConfigExpression,
    });

    registerNode(nodeId('settings-namespace'), nodePath('settings-namespace'), 'Cleaker.SettingsNamespace', {
      value: namespaceInput,
      expression: namespaceConfigExpression,
    });

    registerNode(nodeId('settings-preview'), nodePath('settings-preview'), 'Cleaker.NamespacePreview', {
      monadLabel: compactMonadLabel,
      namespace: compactRootLabel,
      rootHash: maskHash(globalNamespaceRootHash),
    });

    registerNode(nodeId('settings-preview-qr'), nodePath('settings-preview-qr'), 'Cleaker.NamespacePreviewQR', {
      value: previewQrValue,
      size: 88,
    });

    registerNode(nodeId('settings-preview-meta'), nodePath('settings-preview-meta'), 'Cleaker.NamespacePreviewMeta', {
      monadLabel: compactMonadLabel,
      namespace: compactRootLabel,
      rootHash: maskHash(globalNamespaceRootHash),
    });

    registerNode(nodeId('controls'), nodePath('controls'), 'Cleaker.Controls', {
      hasSecret: Boolean(secret),
      authStatus,
      mode: currentViewMode,
    });

    registerNode(nodeId('actions'), nodePath('actions'), 'Cleaker.Actions', {
      authStatus,
      actionTargetLabel,
      disabled: isActionDisabled,
    });

    registerNode(nodeId('profile-card'), nodePath('profile-card'), 'Cleaker.ProfileCard', {
      visible: showProfileView,
      username: sanitizeRuntimeUsername(profileUsername) || activeProfileUsername,
      name: cleanString(profileName) || activeProfileName,
      email: cleanString(profileEmail) || activeProfileEmail,
      phone: cleanString(profilePhone) || activeProfilePhone,
      namespace: activeSessionNamespace,
      claimed: Boolean(claimedAtPath ?? claimedAt),
      authenticated: runtimeAuthenticated,
      rootHash: maskHash(globalNamespaceRootHash),
    });

    registerNode(nodeId('profile-actions'), nodePath('profile-actions'), 'Cleaker.ProfileActions', {
      visible: showProfileView,
    });

    registerNode(nodeId('password-visibility-toggle'), nodePath('password-visibility-toggle'), 'Cleaker.PasswordVisibilityToggle', {
      visible: showSecret,
      disabled: !secret,
    });

    registerNode(nodeId('register-modal'), nodePath('register-modal'), 'Cleaker.RegisterModal', {
      open: registerOpen,
      name: registerFullName,
      username: registerUsername,
      email: registerEmail,
      phone: registerPhone,
    });

    registerNode(nodeId('register-form'), nodePath('register-form'), 'Cleaker.RegisterForm', {
      open: registerOpen,
    });

    registerNode(nodeId('register-actions'), nodePath('register-actions'), 'Cleaker.RegisterActions', {
      open: registerOpen,
      busy: authStatus === 'checking',
    });

    return () => {
      registeredIds.forEach((id) => selectionStore.actions.unregisterNode(id));
    };
  }, [
    rootNodeId,
    rootNodeType,
    nodeId,
    nodePath,
    namespaceConfigExpression,
    namespaceInput,
    namespaceHost,
    namespaceOrigin,
    namespaceDisplayHost,
    rootHostNamespace,
    effectiveSemanticRootName,
    resolvedNamespaceRootName,
    namespaceSeedHandle,
    surfaceNamespace,
    subjectSurfaceNamespace,
    subjectHandleNamespace,
    localNamespaceUrl,
    networkNamespaceUrl,
    activeNamespaceUrl,
    resolverHostName,
    resolverDisplayName,
    resolverSurfaceNamespace,
    resolverSubjectSurfaceNamespace,
    surfaceEntry,
    compactMonadLabel,
    compactRootLabel,
    previewQrValue,
    globalNamespaceRootHash,
    subjectNamespaceHash,
    identityNamespace,
    typingNamespace,
    identityRoot,
    actionTarget,
    actionBaseUrl,
    actionTargetLabel,
    claimResolution,
    claimResolutionNote,
    authStatus,
    authError,
    authProgressMessage,
    authSuccessMessage,
    isClaimed,
    isActionDisabled,
    liveUsernameState,
    username,
    usernameError,
    secret,
    showSecret,
    settingsOpen,
    registerOpen,
    registerFullName,
    registerEmail,
    registerPhone,
    registerUsername,
    currentViewMode,
    showProfileView,
    avatarExpanded,
    activeProfileUsername,
    activeProfileName,
    activeProfileEmail,
    activeProfilePhone,
    activeSessionNamespace,
    claimedAt,
    claimedAtPath,
    runtimeAuthenticated,
    profileUsername,
    profileName,
    profileEmail,
    profilePhone,
    sanitizeRuntimeUsername,
    parentStatus,
    describeConnectionStatus,
    themeMode,
    primaryColor,
  ]);
}