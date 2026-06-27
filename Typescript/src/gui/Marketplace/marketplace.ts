/*
 * .GUI — Marketplace
 * Custom, community/app-contributed components — distinct from the curated
 * core (Atoms/Molecules/Compounds). Apps built on top of GUI (FullTrailer,
 * netget, ...) can "donate" a component they built back into this layer so
 * other apps can reuse it, without it bloating the core bundle.
 *
 * Export rules:
 *  - Every entry here is lazy (`React.lazy`) — nothing in this file pulls the
 *    actual component code into the importing bundle until it's rendered.
 *  - Keep this registry explicit. Do not `export *` from here.
 *  - Add new entries at the end of the list, not in the middle.
 */
import { lazy } from 'react';

const JsonSearchMe = lazy(() => import('@/gui/Marketplace/JsonSearchMe/JsonSearchMe'));
export type { JsonSearchMeProps, JsonSearchItem, JsonSearchIcon } from '@/gui/Marketplace/JsonSearchMe/JsonSearchMe.types';

type MarketplaceRegistry = {
  JsonSearchMe: typeof JsonSearchMe;
};

const Marketplace: MarketplaceRegistry = {
  JsonSearchMe,
};

export { JsonSearchMe };

export default Marketplace;
