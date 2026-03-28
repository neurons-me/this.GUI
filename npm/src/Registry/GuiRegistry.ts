import { createRegistry } from "./factory";

// Atoms
import AppBarResolver from "@/gui/Atoms/AppBar/AppBar.resolver";
import AvatarResolver from "@/gui/Atoms/Avatar/Avatar.resolver";
import BadgeResolver from "@/gui/Atoms/Badge/Badge.resolver";
import BoxResolver from "@/gui/Atoms/Box/Box.resolver";
import ButtonResolver from "@/gui/Atoms/Button/Button.resolver";
import CardActionsResolver from "@/gui/Atoms/Card/CardActions/CardActions.resolver";
import CardContentResolver from "@/gui/Atoms/Card/CardContent/CardContent.resolver";
import CardHeaderResolver from "@/gui/Atoms/Card/CardHeader/CardHeader.resolver";
import CardResolver from "@/gui/Atoms/Card/Card.resolver";
import CheckboxResolver from "@/gui/Atoms/Checkbox/Checkbox.resolver";
import ChipResolver from "@/gui/Atoms/Chip/Chip.resolver";
import DividerResolver from "@/gui/Atoms/Divider/Divider.resolver";
import IconResolver from "@/gui/Atoms/Icon/Icon.resolver";
import IconButtonResolver from "@/gui/Atoms/IconButton/IconButton.resolver";
import InputResolver from "@/gui/Atoms/Input/Input.resolver";
import LinkResolver from "@/gui/Atoms/Link/Link.resolver";
import PaperResolver from "@/gui/Atoms/Paper/Paper.resolver";
import ProgressResolver from "@/gui/Atoms/Progress/Progress.resolver";
import SectionResolver from "@/gui/Atoms/Section/Section.resolver";
import SliderResolver from "@/gui/Atoms/Slider/Slider.resolver";
import SurfaceResolver from "@/gui/Atoms/Surface/Surface.resolver";
import SwitchResolver from "@/gui/Atoms/Switch/Switch.resolver";
import TextFieldResolver from "@/gui/Atoms/TextField/TextField.resolver";
import TypographyResolver from "@/gui/Atoms/Typography/Typography.resolver";

// Molecules
import DrawerResolver from "@/gui/Molecules/Drawer/Drawer.resolver";
import TooltipResolver from "@/gui/Molecules/Tooltip/Tooltip.resolver";

// Layout
import FooterResolver from "@/gui/Layout/Footer/Footer.resolver";
import LeftSidebarResolver from "@/gui/Layout/Sidebars/LeftSidebar/LeftSidebar.resolver";
import RightSidebarResolver from "@/gui/Layout/Sidebars/RightSidebar/RightSidebar.resolver";
import NavBarResolver from "@/gui/Layout/TopBar/TopBar.resolver";

// All.This
import CleakerResolver from "@/gui/All.This/Cleaker/Cleaker.resolver";
import CleakerQRResolver from "@/gui/All.This/Cleaker/QR/CleakerQR.resolver";
import CleakerGroupResolver from "@/gui/All.This/Cleaker/Group/CleakerGroup.resolver";
import QRmeResolver from "@/gui/All.This/me/QR.me/QR.me.resolver";
import SessionQRResolver from "@/gui/All.This/me/QR.resolver";
import MeResolver from "@/gui/All.This/me/me.resolver";

export const GuiRegistry = createRegistry([
  // Atoms
  AppBarResolver,
  AvatarResolver,
  BadgeResolver,
  BoxResolver,
  ButtonResolver,
  CardResolver,
  CardActionsResolver,
  CardContentResolver,
  CardHeaderResolver,
  CheckboxResolver,
  ChipResolver,
  DividerResolver,
  IconResolver,
  IconButtonResolver,
  InputResolver,
  LinkResolver,
  PaperResolver,
  ProgressResolver,
  SectionResolver,
  SliderResolver,
  SurfaceResolver,
  SwitchResolver,
  TextFieldResolver,
  TypographyResolver,
  // Molecules
  DrawerResolver,
  TooltipResolver,
  // Layout
  NavBarResolver,
  LeftSidebarResolver,
  RightSidebarResolver,
  FooterResolver,
  // All.This
  MeResolver,
  SessionQRResolver,
  QRmeResolver,
  CleakerQRResolver,
  CleakerResolver,
  CleakerGroupResolver,
]);
