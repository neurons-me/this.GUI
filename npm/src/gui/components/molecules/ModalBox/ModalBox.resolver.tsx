import * as React from 'react';
import type { RegistryEntry } from '@/registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import ModalBox from './ModalBox';
import type { ModalBoxProps } from './ModalBox.types.ts';

/**
 * ModalBoxResolver
 * - Declaratively maps a JSON-friendly spec to <ModalBox /> props.
 * - Supports declarative 3D position via xyz prop.
 * - Keeps it registry-compatible for GUI schema systems.
 */
const ModalBoxResolver: RegistryEntry = {
  type: 'ModalBox',
  resolve(spec: any) {
    const p: ModalBoxProps = spec.props ?? {};
    const rootProps: any = {
      open: p.open ?? false,
      title: p.title ?? '',
      onClose: p.onClose ?? (() => {}),
      width: p.width ?? 'auto',
      height: p.height ?? 'auto',
      blurBackground: p.blurBackground ?? true,
      xyz: p.xyz,
      id: ensureNodeId('modalbox', p.id),
      className: p.className,
      'data-testid': p['data-testid'],
    };

    return (
      <ModalBox {...rootProps}>
        {p.children}
      </ModalBox>
    );
  },
};

export default ModalBoxResolver;