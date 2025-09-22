// this.gui/src/index.js
console.log("[this.gui] loaded.");
// TEMPLATES
import MinimalLayout from "./templates/Minimal";
// THEME
import { GuiProvider, useThemeContext } from "./context/GuiProvider";
// APPBARS
import TopBar from "@/gui/molecules/AppBars/TopBar/TopBar";
import Footer from "@/gui/molecules/AppBars/Footer/Footer";
import LeftSidebar from "@/gui/molecules/AppBars/LeftSidebar/LeftSidebar";
import RightSidebar from "@/gui/molecules/AppBars/RightSidebar/RightSidebar";
import StickyOptionsTop from "@/gui/molecules/AppBars/StickyOptions/StickyOptionsTop";
import TopBarAndSideBar from "@/gui/molecules/AppBars/TopBarAndSideBar/TopBarAndSideBar";//REMOVE SOON
import RightContextDrawer from "@/gui/molecules/AppBars/RightContextDrawer/RightContextDrawer"; //REMOVE SOON
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
import Gridx from "./components/generics/Layout/Gridx";
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
// Chats
import FullChatBot from "./components/generics/Chats/FullChatBot";

// Named exports (para `import { TextTitle } from "this.gui"`)
export {
  GuiProvider, 
  useThemeContext,
  TopBar, 
  Footer, 
  StickyOptionsTop, 
  LeftSidebar, 
  RightSidebar,
  MinimalLayout, //soon to be removed
  TopBarAndSideBar, //soon to be removed
  RightContextDrawer, //soon to be removed
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
  Gridme,
  FullChatBot,
};

// Default namespace (para `import GUI from "this.gui"`)
const GUI = {
  GuiProvider, 
  useThemeContext,
  NavBar, 
  LeftDrawer, 
  RightDrawer,
  StickyOptionsTop,
  TopBarAndSideBar, // soon to be removed 
  RightContextDrawer, // soon to be removed
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
  MinimalLayout,
  Footer, 
  Callout,
  ModuleCard, 
  LilBox, 
  Gridme,
  FullChatBot,
};
export default GUI;