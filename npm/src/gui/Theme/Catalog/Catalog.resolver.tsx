import ThemesCatalog from './Catalog';
import type { ThemesCatalogResolverSpec } from './Catalog.types';

const resolver = {
  type: 'ThemesCatalog',
  resolve: (props?: ThemesCatalogResolverSpec) => {
    const { variant, sx, hideDescription, hideAuthor, minimal, compact, hideTitle, hideModeToggle } = props || {};

    // `minimal` is a convenience preset: hide both author + description.
    const resolvedHideDescription = minimal ? true : hideDescription;
    const resolvedHideAuthor = minimal ? true : hideAuthor;
    return {
      component: () => (
        <ThemesCatalog
          variant={variant}
          sx={sx}
          hideDescription={resolvedHideDescription}
          hideAuthor={resolvedHideAuthor}
          minimal={minimal}
          compact={compact}
          hideTitle={hideTitle}
          hideModeToggle={hideModeToggle}
        />
      ),
      props,
    };
  },
};

export default resolver;
