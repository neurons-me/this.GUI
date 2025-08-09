types/this.gui.d.ts
declare module "this.gui" {
  // Basic stubs for now
  export function mountGuiApp(options: {
    rootId?: string;
    app: React.ReactNode;
  }): void;

  export const DynamicPageWrapper: React.ComponentType<any>;
}