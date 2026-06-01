import type { RegistryEntry } from '@/Registry/types';
import Footer from './Footer';
import type { FooterProps } from './Footer.types';

type FooterSpec = {
  type: 'Footer';
  props?: FooterProps;
};

const FooterResolver: RegistryEntry = {
  type: 'Footer',
  resolve(spec: FooterSpec) {
    const props = spec.props ?? {};
    return (
      <Footer
        brandLabel={props.brandLabel}
        brandLogo={props.brandLogo}
        brandHref={props.brandHref}
        leftElements={props.leftElements}
        leftCollections={props.leftCollections}
        centerElements={props.centerElements}
        centerCollections={props.centerCollections}
        rightElements={props.rightElements}
        rightCollections={props.rightCollections}
        position={props.position}
        elevation={props.elevation}
        className={props.className}
        id={props.id}
        data-testid={props['data-testid']}
      />
    );
  },
};

export default FooterResolver;
