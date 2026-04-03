export type GuiPrimitive = string | number | boolean | null | undefined;

export type GuiSpecNode = {
  type: string | any;
  props?: Record<string, any>;
  children?: GuiNode | GuiNode[];
};

export type GuiNode = GuiPrimitive | GuiSpecNode | GuiNode[];
