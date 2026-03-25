import { createRegistry } from "./factory";
import ButtonResolver from "../gui/Atoms/Button/Button.resolver";
import LinkResolver from "../gui/Atoms/Link/Link.resolver";
import TypographyResolver from "@/gui/Atoms/Typography/Typography.resolver";
import DrawerResolver from "@/gui/Molecules/Drawer/Drawer.resolver";
import CheckboxResolver from "@/gui/Atoms/Checkbox/Checkbox.resolver";
import NavBarResolver from "@/gui/Layout/TopBar/TopBar.resolver";
import FooterResolver from "@/gui/Layout/Footer/Footer.resolver";
import LeftSidebarResolver from "@/gui/Layout/Sidebars/LeftSidebar/LeftSidebar.resolver";
import RightSidebarResolver from "@/gui/Layout/Sidebars/RightSidebar/RightSidebar.resolver";
import SessionQRResolver from "@/gui/All.This/me/QR.resolver";
import MeResolver from "@/gui/All.This/me/me.resolver";
import CleakerQRResolver from "@/gui/All.This/Cleaker/QR/CleakerQR.resolver";
import CleakerResolver from "@/gui/All.This/Cleaker/Cleaker.resolver";
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
  MeResolver,
  SessionQRResolver,
  CleakerQRResolver,
  CleakerResolver,
  // ...
]);

//and this.
