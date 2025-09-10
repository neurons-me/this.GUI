// this.gui/src/index.js
console.log("[this.gui] loaded.");
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
// TEMPLATES
import MinimalLayout from "./templates/Minimal";
// THEME
import { CustomThemeProvider, useThemeContext } from "./context/ThemeContext";
// APPBARS
import TopBarAndSideBar from "./components/generics/AppBars/TopBarAndSideBar/TopBarAndSideBar";
import RightContextDrawer from "./components/generics/AppBars/RightContextDrawer/RightContextDrawer";
import Footer from "./components/generics/AppBars/Footer/Footer";
import StickyOptions from "./components/generics/AppBars/StickyOptions/StickyOptions";
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
  TextTitle, TextParagraph, TextList, TextQuote,
  Img, VideoEmbed,
  TableOfContents, Tabs,
  PageContainer, Gridx, Section, SectionHeader, PageDivider, Hero2,
  CodeBlock,
  MinimalLayout,
  CustomThemeProvider, useThemeContext,
  TopBarAndSideBar, RightContextDrawer, Footer, StickyOptions,
  Callout,
  ModuleCard, LilBox, Gridme,
  FullChatBot,
};

// Default namespace (para `import GUI from "this.gui"`)
const GUI = {
  TextTitle, TextParagraph, TextList, TextQuote,
  Img, VideoEmbed,
  TableOfContents, Tabs,
  PageContainer, Gridx, Section, SectionHeader, PageDivider, Hero2,
  CodeBlock,
  MinimalLayout,
  CustomThemeProvider, useThemeContext,
  TopBarAndSideBar, RightContextDrawer, Footer, StickyOptions,
  Callout,
  ModuleCard, LilBox, Gridme,
  FullChatBot,
};
export default GUI;