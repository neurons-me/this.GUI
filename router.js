import { guiIntroSpec } from "./data/intro.js";
import { guiExportsSpec } from "./data/exports.js";
import { buildGuiLeftBar } from "./data/leftBar.js";
import { buildGuiMainMenu } from "./data/GUI-Menu.js";

export function registerGuiRoutes(router) {
  function buildLayoutSpec(pageSpec) {
    return {
      type: "Layout",
      props: {
        leftBar: buildGuiLeftBar(),
        rightBar: buildGuiMainMenu(),
      },
      children: [pageSpec],
    };
  }

  router.get("/", function buildHomeSpec() {
    return buildLayoutSpec(guiIntroSpec);
  });

  router.get("/exports", function buildExportsSpec() {
    return buildLayoutSpec(guiExportsSpec);
  });
}
