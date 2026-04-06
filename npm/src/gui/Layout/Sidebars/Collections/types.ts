export type SideBarsLinkLikeElement = {
  type: 'link';
  props: Record<string, any>;
};

export type SideBarsMenuLikeElement = {
  type: 'menu';
  props: Record<string, any>;
};

export type SideBarsActionLikeElement = {
  type: 'action';
  props: Record<string, any>;
};

export type SideBarsSidebarElement =
  | SideBarsLinkLikeElement
  | SideBarsMenuLikeElement
  | SideBarsActionLikeElement;

export type SideBarsFooterElement =
  | SideBarsLinkLikeElement
  | SideBarsActionLikeElement;

export type SideBarsCollectionSlot =
  | 'leftSidebar'
  | 'leftSidebarFooter'
  | 'rightSidebar'
  | 'rightSidebarFooter'
  | 'rightBar'
  | 'rightBarFooter'
  | 'topBarCenter'
  | 'topBarRight'
  | 'footerLeft'
  | 'footerCenter'
  | 'footerRight';

export type SideBarsCollectionContext = {
  slot: SideBarsCollectionSlot;
  collectionId?: string;
};

export type SideBarsCollectionSlotFactory<TElement> =
  | TElement[]
  | ((context: SideBarsCollectionContext) => TElement[]);

export type SideBarsCollection = {
  id?: string;
  leftSidebar?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  leftSidebarFooter?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  rightSidebar?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  rightSidebarFooter?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  rightBar?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  rightBarFooter?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  topBarCenter?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  topBarRight?: SideBarsCollectionSlotFactory<SideBarsSidebarElement>;
  footerLeft?: SideBarsCollectionSlotFactory<SideBarsFooterElement>;
  footerCenter?: SideBarsCollectionSlotFactory<SideBarsFooterElement>;
  footerRight?: SideBarsCollectionSlotFactory<SideBarsFooterElement>;
};

export type SideBarsCollectionInput = SideBarsCollection | null | false | undefined;
