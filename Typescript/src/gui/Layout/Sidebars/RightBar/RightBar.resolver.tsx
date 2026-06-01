import type { RegistryEntry } from '@/Registry/types';
import RightSidebar from './RightBar';
import type { RightSidebarElement } from './RightBar.types';

type RightSidebarSpec = {
  type: 'RightSidebar';
  props?: {
    elements?: RightSidebarElement[];
    collections?: any[];
    footerElements?: RightSidebarElement[];
    footerCollections?: any[];
    initialView?: 'rail' | 'expanded' | 'mobile';
    className?: string;
    id?: string;
    'data-testid'?: string;
    'data-gui-node-id'?: string;
    'data-gui-component'?: string;
  };
};

const RightSidebarResolver: RegistryEntry = {
  type: 'RightSidebar',
  resolve(spec: RightSidebarSpec) {
    const props = spec.props ?? {};
    return (
      <RightSidebar
        elements={props.elements ?? []}
        collections={Array.isArray(props.collections) ? props.collections : []}
        footerElements={props.footerElements ?? []}
        footerCollections={Array.isArray(props.footerCollections) ? props.footerCollections : []}
        initialView={props.initialView}
        className={props.className}
        id={props.id}
        data-testid={props['data-testid']}
        data-gui-node-id={props['data-gui-node-id']}
        data-gui-component={props['data-gui-component']}
      />
    );
  },
};

export default RightSidebarResolver;
