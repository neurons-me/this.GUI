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
import TooltipResolver from "@/gui/Atoms/Tooltip/Tooltip.resolver";
import TypographyResolver from "@/gui/Atoms/Typography/Typography.resolver";

// Molecules
import HeroResolver from "@/gui/Molecules/Hero/Hero.resolver";
import PageResolver from "@/gui/Molecules/Page/Page.resolver";
import MarkdownDocumentRegistration from "@/gui/Molecules/Documents/MarkdownDocument/MarkdownDocument.registration";
import DrawerResolver from "@/gui/Molecules/Drawer/Drawer.resolver";
import AdminViewToggleResolver from "@/gui/Molecules/AdminViewToggle/AdminViewToggle.resolver";
import InspectorToggleResolver from "@/gui/Molecules/InspectorToggle/InspectorToggle.resolver";
import SearchFieldResolver from "@/gui/Molecules/SearchField/SearchField.resolver";
import LineChartResolver from "@/gui/Compounds/Charts/LineChart/LineChart.resolver";
import BarChartResolver from "@/gui/Compounds/Charts/BarChart/BarChart.resolver";
import ChartSliderResolver from "@/gui/Compounds/Charts/Slider/Slider.resolver";

// Layout
import LayoutResolver from "@/gui/Layout/Layout.resolver";
import StickyOptionsTopResolver, {
  StickyOptionsResolver,
} from "@/gui/Layout/StickyOptions/StickyOptionsTop.resolver";
import FooterResolver from "@/gui/Layout/Sidebars/Footer/Footer.resolver";
import LeftBarResolver from "@/gui/Layout/Sidebars/LeftBar/LeftBar.resolver";
import RightBarResolver from "@/gui/Layout/Sidebars/RightBar/RightBar.resolver";
import TopBarResolver from "@/gui/Layout/Sidebars/TopBar/TopBar.resolver";
import TabViewsResolver from "@/gui/Layout/Stage/TabViews/TabViews.resolver";

// All.This
import CleakerResolver from "@/gui/All.This/Cleaker/Cleaker.resolver";
import CleakerComposerResolver from "@/gui/All.This/Cleaker/CleakerComposer.resolver";
import CleakerQRResolver from "@/gui/All.This/Cleaker/QR/CleakerQR.resolver";
import CleakerGroupResolver from "@/gui/All.This/Cleaker/Group/CleakerGroup.resolver";
import CleakerUserResolver from "@/gui/All.This/Cleaker/User/CleakerUser.resolver";
import NamespaceResolver from "@/gui/All.This/Cleaker/Namespace/Namespace.resolver";
import NamespaceUsersResolver from "@/gui/All.This/Cleaker/Namespace/NamespaceUsers.resolver";
import NamespaceSurfaceResolver from "@/gui/All.This/Cleaker/Namespace/NamespaceSurface.resolver";
import QRmeResolver from "@/gui/All.This/me/QR/QR.me.resolver";
import SessionQRResolver from "@/gui/All.This/me/QR.resolver";
import MeResolver from "@/gui/All.This/me/me.resolver";
import SearchBarResolver from "@/gui/All.This/SearchBar/SearchBar.resolver";

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
  TooltipResolver,
  TypographyResolver,
  // Molecules
  HeroResolver,
  PageResolver,
  MarkdownDocumentRegistration,
  DrawerResolver,
  AdminViewToggleResolver,
  InspectorToggleResolver,
  SearchFieldResolver,
  // Charts
  LineChartResolver,
  BarChartResolver,
  ChartSliderResolver,
  // Layout
  LayoutResolver,
  StickyOptionsTopResolver,
  StickyOptionsResolver,
  TopBarResolver,
  LeftBarResolver,
  RightBarResolver,
  FooterResolver,
  TabViewsResolver,
  // All.This
  MeResolver,
  SessionQRResolver,
  QRmeResolver,
  CleakerQRResolver,
  CleakerComposerResolver,
  CleakerResolver,
  NamespaceResolver,
  NamespaceUsersResolver,
  NamespaceSurfaceResolver,
  CleakerGroupResolver,
  CleakerUserResolver,
  SearchBarResolver,
]);
