/*
 * .GUI — Marketplace
 * Not a place components live — an export pattern. Apps built on top of GUI
 * (FullTrailer, netget, ...) "donate" a component they built back into this
 * layer so other apps can reuse it, without bloating the core bundle.
 *
 * Export rules, once an app contributes a component here:
 *  - Every entry must be lazy (`React.lazy`) — nothing in this file pulls the
 *    actual component code into the importing bundle until it's rendered.
 *  - Keep this registry explicit. Do not `export *` from here.
 *  - Add new entries at the end of the list, not in the middle.
 *
 * Nothing has been donated yet — this file is the empty scaffold for that
 * mechanism. (First-party components like SearchBar live under All.This/
 * and are registered in Compounds, not here.)
 */
type MarketplaceRegistry = Record<string, never>;

const Marketplace: MarketplaceRegistry = {};

export default Marketplace;
