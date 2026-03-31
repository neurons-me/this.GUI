import * as React from "react";
import type { RegistryEntry } from "@/Registry/types";
import CleakerComposer, { type CleakerComposerProps } from "./CleakerComposer";

type CleakerComposerSpec = {
  type: "CleakerComposer";
  props?: CleakerComposerProps;
};

export const meta = {
  id: "components.identity-noise.cleaker-composer",
  type: "CleakerComposer",
  label: "Cleaker Composer",
  group: "Components",
  path: ["Identity Noise", "Cleaker", "Composer"],
  tags: ["cleaker", "composer", "gui", "me"],
  demoSpec: {
    type: "CleakerComposer",
    props: {},
  },
} as const;

const CleakerComposerResolver: RegistryEntry = {
  type: "CleakerComposer",
  resolve(spec: CleakerComposerSpec) {
    const props = spec.props ?? {};
    return <CleakerComposer {...props} />;
  },
};

export default CleakerComposerResolver;
