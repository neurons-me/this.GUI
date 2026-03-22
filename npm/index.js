"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterProvider = exports.Router = exports.toggleInspector = exports.toggleAdminView = exports.setInspectorEnabled = exports.setAdminViewEnabled = exports.getInspectorEnabled = exports.getAdminViewEnabled = exports.ensureRuntimeControlSurface = exports.mount = exports.menus = exports.registry = exports.Registry = exports.theme = exports.components = exports.widgets = exports.molecules = exports.atoms = exports.ThemeRuntime = exports.Components = exports.Widgets = exports.Molecules = exports.Atoms = exports.guiToolsLeftSidebarConfig = exports.guiToolsElements = exports.GUITools = exports.Catalog = exports.ThemesCatalog = exports.Modal = exports.CodeBlock = exports.HighLighter = exports.Monad = exports.FaceRecognition = exports.Cleaker = exports.Blockchain = exports.ThemeModeToggle = exports.DomIcon = exports.Icon = exports.Layout = exports.Theme = exports.Input = exports.Text = exports.Typography = exports.TextField = exports.Paper = exports.Link = exports.Checkbox = exports.Button = exports.Box = exports.version = void 0;
exports.RunMe = void 0;
var injectedVersion = typeof __GUI_VERSION__ !== 'undefined' ? __GUI_VERSION__ : undefined;
exports.version = injectedVersion || '0.0.0-dev';
// 2) named exports (tree-shakeable)
// Core primitives (ergonomic root exports)
// NOTE: Export from concrete modules (not barrels) to preserve tree-shaking and avoid pulling in the whole atoms surface.
var Box_1 = require("@/gui/atoms/Box/Box");
Object.defineProperty(exports, "Box", { enumerable: true, get: function () { return Box_1.default; } });
var Button_1 = require("@/gui/atoms/Button/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.default; } });
var Checkbox_1 = require("@/gui/atoms/Checkbox/Checkbox");
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return Checkbox_1.default; } });
var Link_1 = require("@/gui/atoms/Link/Link");
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return Link_1.default; } });
var Paper_1 = require("@/gui/atoms/Paper/Paper");
Object.defineProperty(exports, "Paper", { enumerable: true, get: function () { return Paper_1.default; } });
var TextField_1 = require("@/gui/atoms/TextField/TextField");
Object.defineProperty(exports, "TextField", { enumerable: true, get: function () { return TextField_1.default; } });
var Typography_1 = require("@/gui/atoms/Typography/Typography");
Object.defineProperty(exports, "Typography", { enumerable: true, get: function () { return Typography_1.default; } });
// Friendly aliases (optional ergonomics)
var Typography_2 = require("@/gui/atoms/Typography/Typography");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return Typography_2.default; } });
var TextField_2 = require("@/gui/atoms/TextField/TextField");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return TextField_2.default; } });
var Theme_1 = require("@/gui/Theme/Theme");
Object.defineProperty(exports, "Theme", { enumerable: true, get: function () { return Theme_1.default; } });
var Layout_1 = require("@/gui/Layout/Layout");
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return Layout_1.default; } });
var Icon_1 = require("@/gui/Theme/Icon/Icon");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return Icon_1.default; } });
var DomIcon_1 = require("@/gui/Theme/Icon/DomIcon");
Object.defineProperty(exports, "DomIcon", { enumerable: true, get: function () { return DomIcon_1.default; } });
var ToggleMode_1 = require("@/gui/Theme/ToggleMode/ToggleMode");
Object.defineProperty(exports, "ThemeModeToggle", { enumerable: true, get: function () { return ToggleMode_1.default; } });
var blockchain_1 = require("@/gui/components/Blockchain/blockchain");
Object.defineProperty(exports, "Blockchain", { enumerable: true, get: function () { return blockchain_1.default; } });
var Cleaker_1 = require("@/gui/Session/cleaker/Cleaker");
Object.defineProperty(exports, "Cleaker", { enumerable: true, get: function () { return Cleaker_1.default; } });
var FaceRecognition_1 = require("@/gui/widgets/FaceRecognition/FaceRecognition");
Object.defineProperty(exports, "FaceRecognition", { enumerable: true, get: function () { return FaceRecognition_1.default; } });
var monad_ai_1 = require("@/gui/Session/monad.ai/monad.ai");
Object.defineProperty(exports, "Monad", { enumerable: true, get: function () { return monad_ai_1.default; } });
var HighLighter_1 = require("@/gui/widgets/HighLighter/HighLighter");
Object.defineProperty(exports, "HighLighter", { enumerable: true, get: function () { return HighLighter_1.default; } });
var CodeBlock_1 = require("@/gui/molecules/CodeBlock/CodeBlock");
Object.defineProperty(exports, "CodeBlock", { enumerable: true, get: function () { return CodeBlock_1.default; } });
var Modal_1 = require("@/gui/molecules/Modal/Modal");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return Modal_1.default; } });
var Theme_2 = require("@/gui/Theme");
Object.defineProperty(exports, "ThemesCatalog", { enumerable: true, get: function () { return Theme_2.ThemesCatalog; } });
Object.defineProperty(exports, "Catalog", { enumerable: true, get: function () { return Theme_2.Catalog; } });
var GUI_Tools_1 = require("@/gui/molecules/menus/GUI-Tools/GUI-Tools");
Object.defineProperty(exports, "GUITools", { enumerable: true, get: function () { return GUI_Tools_1.default; } });
Object.defineProperty(exports, "guiToolsElements", { enumerable: true, get: function () { return GUI_Tools_1.guiToolsElements; } });
Object.defineProperty(exports, "guiToolsLeftSidebarConfig", { enumerable: true, get: function () { return GUI_Tools_1.guiToolsLeftSidebarConfig; } });
// 3) runtime aggregates (UMD/global convenience)
// These are *named exports* so in UMD builds you can do:
//   window.GUI.mount(...)
//   window.GUI.Button
//   window.GUI.Atoms.Button
// without any `window.GUI.default` wrapper.
// NOTE: We still import concrete modules (not barrels) to preserve tree-shaking.
var Theme_3 = require("@/gui/Theme/Theme");
var Registry_1 = require("@/Registry");
var Box_2 = require("@/gui/atoms/Box/Box");
var Button_2 = require("@/gui/atoms/Button/Button");
var Checkbox_2 = require("@/gui/atoms/Checkbox/Checkbox");
var Link_2 = require("@/gui/atoms/Link/Link");
var Paper_2 = require("@/gui/atoms/Paper/Paper");
var TextField_3 = require("@/gui/atoms/TextField/TextField");
var Typography_3 = require("@/gui/atoms/Typography/Typography");
var Layout_2 = require("@/gui/Layout/Layout");
var Icon_2 = require("@/gui/Theme/Icon/Icon");
var DomIcon_2 = require("@/gui/Theme/Icon/DomIcon");
var ToggleMode_2 = require("@/gui/Theme/ToggleMode/ToggleMode");
var blockchain_2 = require("@/gui/components/Blockchain/blockchain");
var FaceRecognition_2 = require("@/gui/widgets/FaceRecognition/FaceRecognition");
var monad_ai_2 = require("@/gui/Session/monad.ai/monad.ai");
var HighLighter_2 = require("@/gui/widgets/HighLighter/HighLighter");
var HighLightsDrawer_1 = require("@/gui/widgets/HighLighter/HighLightsDrawer");
var CodeBlock_2 = require("@/gui/molecules/CodeBlock/CodeBlock");
var Dialog_1 = require("@/gui/molecules/Dialog/Dialog");
var Hero_1 = require("@/gui/molecules/Hero/Hero");
var Modal_2 = require("@/gui/molecules/Modal/Modal");
var Page_1 = require("@/gui/molecules/Page/Page");
var GUI_Tools_2 = require("@/gui/molecules/menus/GUI-Tools/GUI-Tools");
var Cleaker_2 = require("@/gui/Session/cleaker/Cleaker");
exports.Atoms = {
    Box: Box_2.default,
    Button: Button_2.default,
    Checkbox: Checkbox_2.default,
    Link: Link_2.default,
    Paper: Paper_2.default,
    TextField: TextField_3.default,
    Typography: Typography_3.default,
};
exports.Molecules = {
    Dialog: Dialog_1.default,
    Hero: Hero_1.Hero,
    Modal: Modal_2.default,
    Page: Page_1.default,
    CodeBlock: CodeBlock_2.default,
};
exports.Widgets = {
    FaceRecognition: FaceRecognition_2.default,
    HighLighter: HighLighter_2.default,
    HighLightsDrawer: HighLightsDrawer_1.default,
    Monad: monad_ai_2.default,
};
exports.Components = {
    Blockchain: blockchain_2.default,
    Cleaker: Cleaker_2.default,
    Icon: Icon_2.default,
    DomIcon: DomIcon_2.default,
    ThemeModeToggle: ToggleMode_2.default,
};
exports.ThemeRuntime = {
    Theme: Theme_3.default,
    Layout: Layout_2.default,
    Icon: Icon_2.default,
    DomIcon: DomIcon_2.default,
    ThemeModeToggle: ToggleMode_2.default,
};
// Lowercase aliases for explorer/runtime conventions
exports.atoms = exports.Atoms;
exports.molecules = exports.Molecules;
exports.widgets = exports.Widgets;
exports.components = exports.Components;
exports.theme = exports.ThemeRuntime;
exports.Registry = Registry_1.GuiRegistry;
exports.registry = Registry_1.GuiRegistry;
// Menus registry (kept explicit to avoid accidental surface growth)
exports.menus = {
    'GUI-Tools': {
        GUITools: GUI_Tools_2.default,
        elements: GUI_Tools_2.guiToolsElements,
        leftSidebarConfig: GUI_Tools_2.guiToolsLeftSidebarConfig,
    },
};
// Mount API (React runtime)
// GuiNode → renderer → ReactDOM, expects React/ReactDOM globals in UMD usage.
var mount_1 = require("@/runtime/mount");
Object.defineProperty(exports, "mount", { enumerable: true, get: function () { return mount_1.mount; } });
var controlSurface_1 = require("@/runtime/controlSurface");
Object.defineProperty(exports, "ensureRuntimeControlSurface", { enumerable: true, get: function () { return controlSurface_1.ensureRuntimeControlSurface; } });
Object.defineProperty(exports, "getAdminViewEnabled", { enumerable: true, get: function () { return controlSurface_1.getAdminViewEnabled; } });
Object.defineProperty(exports, "getInspectorEnabled", { enumerable: true, get: function () { return controlSurface_1.getInspectorEnabled; } });
Object.defineProperty(exports, "setAdminViewEnabled", { enumerable: true, get: function () { return controlSurface_1.setAdminViewEnabled; } });
Object.defineProperty(exports, "setInspectorEnabled", { enumerable: true, get: function () { return controlSurface_1.setInspectorEnabled; } });
Object.defineProperty(exports, "toggleAdminView", { enumerable: true, get: function () { return controlSurface_1.toggleAdminView; } });
Object.defineProperty(exports, "toggleInspector", { enumerable: true, get: function () { return controlSurface_1.toggleInspector; } });
var Router_1 = require("@/Router/Router");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return Router_1.Router; } });
Object.defineProperty(exports, "RouterProvider", { enumerable: true, get: function () { return Router_1.RouterProvider; } });
var run_me_1 = require("@/runtime/run-me");
Object.defineProperty(exports, "RunMe", { enumerable: true, get: function () { return run_me_1.RunMe; } });
