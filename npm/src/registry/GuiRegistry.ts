import { createRegistry } from "./factory";
import ButtonResolver from "../gui/atoms/Button/Button.resolver";
import LinkResolver from "../gui/atoms/Link/Link.resolver";
import TypographyResolver from "@/gui/atoms/Typography/Typography.resolver";
import DrawerResolver from "@/gui/atoms/Drawer/Drawer.resolver";
import NavBarResolver from "@/gui/Layout/TopBar/TopBar.resolver";
import FooterResolver from "@/gui/Layouts/ResponsiveUI/Footer/Footer.resolver";
// etc...
export const GuiRegistry = createRegistry([
  //Atoms
  ButtonResolver,
  TypographyResolver,
  LinkResolver,
  DrawerResolver,
  //Molecules
  NavBarResolver,
  FooterResolver,
  // ...
]);