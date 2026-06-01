export type GuiPrimitive = string | number | boolean | null | undefined;
export type GuiNodeProps = Record<string, any>;
export type GuiNodeProvenance = {
  semanticPath?: string;
  explainPath?: string;
  binding?: string;
  source?: string;
  policy?: string;
  note?: string;
  [key: string]: any;
};

export type GuiSpecNode = {
  type: string | any;
  props?: GuiNodeProps;
  children?: GuiNode | GuiNode[];
  parts?: GuiPartSpec[];
  provenance?: GuiNodeProvenance;
};

export type GuiNode = GuiPrimitive | GuiSpecNode | GuiNode[];

export type GuiPartSpec<
  TPart extends string = string,
  TProps extends GuiNodeProps = GuiNodeProps,
> = {
  /**
   * Semantic part name exposed to authoring tools and inspector contracts.
   */
  part: TPart;
  /**
   * Runtime component/type registered in the GuiNode inspector registry.
   */
  type: string;
  /**
   * Optional stable suffix for `data-gui-node-id` / selection ids.
   * Defaults to `part` so parts stay deterministic without extra boilerplate.
  */
  segment?: string;
  props?: TProps;
  provenance?: GuiNodeProvenance;
  children?: GuiPartSpec<TPart, GuiNodeProps>[];
};

export type GuiPartsSpec<
  TPart extends string = string,
  TRootProps extends GuiNodeProps = GuiNodeProps,
> = {
  root: {
    id: string;
    type: string;
    props?: TRootProps;
    provenance?: GuiNodeProvenance;
  };
  parts?: GuiPartSpec<TPart, GuiNodeProps>[];
};
