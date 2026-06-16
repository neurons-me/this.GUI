import ME from "this.me";
import { writeMeValue } from "this.gui/runtime";
import { appConfig } from "./config";

export function createAppMe() {
  const me = new ME() as any;

  writeMeValue(me, "app.name", appConfig.name);
  writeMeValue(me, "app.title", appConfig.title);
  writeMeValue(me, "profile.status", "ready");

  return me;
}

