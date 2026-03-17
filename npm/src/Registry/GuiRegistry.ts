import { createRegistry } from "./factory";
import ButtonResolver from "../gui/atoms/Button/Button.resolver";
import LinkResolver from "../gui/atoms/Link/Link.resolver";
import TypographyResolver from "@/gui/atoms/Typography/Typography.resolver";
import DrawerResolver from "@/gui/atoms/Drawer/Drawer.resolver";
import CheckboxResolver from "@/gui/atoms/Checkbox/Checkbox.resolver";
import NavBarResolver from "@/gui/Layout/TopBar/TopBar.resolver";
import FooterResolver from "@/gui/Layout/Footer/Footer.resolver";
import LeftSidebarResolver from "@/gui/Layout/Sidebars/LeftSidebar/LeftSidebar.resolver";
import RightSidebarResolver from "@/gui/Layout/Sidebars/RightSidebar/RightSidebar.resolver";
import SessionQRResolver from "@/gui/Session/me/QR.resolver";
import CleakerQRResolver from "@/gui/Session/cleaker/CleakerQR.resolver";
import CleakerResolver from "@/gui/Session/Session.resolver";
// etc...
export const GuiRegistry = createRegistry([
  //Atoms
  ButtonResolver,
  TypographyResolver,
  LinkResolver,
  DrawerResolver,
  CheckboxResolver,
  //Molecules
  NavBarResolver,
  LeftSidebarResolver,
  RightSidebarResolver,
  FooterResolver,
  SessionQRResolver,
  CleakerQRResolver,
  CleakerResolver,
  // ...
]);

//and this.
