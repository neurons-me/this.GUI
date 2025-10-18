// this.gui/src/index.ts
console.log("[this.gui] loaded.");
// TEMPLATES
// THEME
import { GuiProvider, useThemeContext } from "./themes/GuiProvider";
// APPBARS
import TopBar from "@/gui/Layout/TopBar/TopBar";
import Footer from "@/gui/Layouts/ResponsiveUI/Footer/Footer";
import LeftSidebar from "@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar";
import RightSidebar from "@/gui/Layouts/ResponsiveUI/Sidebars/RightSidebar/RightSidebar";
import StickyOptionsTop from "@/gui/Layouts/ResponsiveUI/StickyOptions/StickyOptionsTop";
// TEXT
import TextTitle from "./components/generics/Text/TextTitle";
import TextParagraph from "./components/generics/Text/TextParagraph";
import TextList from "./components/generics/Text/TextList";
import TextQuote from "./components/generics/Text/TextQuote";
// MEDIA
import Img from "./components/generics/Media/Img";
import VideoEmbed from "./components/generics/Media/VideoEmbed";
// ORGANIZATION
import TableOfContents from "./components/generics/Organization/TableOfContents";
import Tabs from "./components/generics/Organization/Tabs";
// LAYOUT
import PageContainer from "./components/generics/Layout/PageContainer";
import Gridx from "./components/generics/Layout/GridX";
import Section from "./components/generics/Layout/Section";
import SectionHeader from "./components/generics/Layout/SectionHeader";
import PageDivider from "./components/generics/Layout/PageDivider";
import Hero2 from "./components/generics/Layout/Hero2";
// CODE
import CodeBlock from "./components/generics/Code/CodeBlock";
// FEEDBACK
import Callout from "./components/generics/Feedback/Callout";
// Cards
import ModuleCard from "./components/generics/Cards/ModuleCard";
import LilBox from "./components/generics/Cards/LilBox";
import Gridme from "./components/generics/Cards/Gridme";
// Named exports (para `import { TextTitle } from "this.gui"`)
export {
  GuiProvider, 
  useThemeContext,
  TopBar, 
  Footer, 
  StickyOptionsTop, 
  LeftSidebar, 
  RightSidebar,
  TextTitle, 
  TextParagraph,
  TextList,
  TextQuote,
  Img,
  VideoEmbed,
  TableOfContents,
  Tabs,
  PageContainer,
  Gridx, 
  Section, 
  SectionHeader, 
  PageDivider, 
  Hero2,
  CodeBlock,
  Callout,
  ModuleCard, 
  LilBox,
  Gridme
};

// Default namespace (para `import GUI from "this.gui"`)
type GUIType = {
  GuiProvider: typeof GuiProvider;
  useThemeContext: typeof useThemeContext;
  TopBar: typeof TopBar;
  LeftSidebar: typeof LeftSidebar;
  RightSidebar: typeof RightSidebar;
  StickyOptionsTop: typeof StickyOptionsTop;
  TextTitle: typeof TextTitle;
  TextParagraph: typeof TextParagraph;
  TextList: typeof TextList;
  TextQuote: typeof TextQuote;
  Img: typeof Img;
  VideoEmbed: typeof VideoEmbed;
  TableOfContents: typeof TableOfContents;
  Tabs: typeof Tabs;
  PageContainer: typeof PageContainer;
  Gridx: typeof Gridx;
  Section: typeof Section;
  SectionHeader: typeof SectionHeader;
  PageDivider: typeof PageDivider;
  Hero2: typeof Hero2;
  CodeBlock: typeof CodeBlock;
  Footer: typeof Footer;
  Callout: typeof Callout;
  ModuleCard: typeof ModuleCard;
  LilBox: typeof LilBox;
  Gridme: typeof Gridme;
};

const GUI: GUIType = {
  GuiProvider,
  useThemeContext,
  TopBar,
  LeftSidebar,
  RightSidebar,
  StickyOptionsTop,
  TextTitle,
  TextParagraph,
  TextList,
  TextQuote,
  Img,
  VideoEmbed,
  TableOfContents,
  Tabs,
  PageContainer,
  Gridx,
  Section,
  SectionHeader,
  PageDivider,
  Hero2,
  CodeBlock,
  Footer,
  Callout,
  ModuleCard,
  LilBox,
  Gridme,
};
export default GUI;
