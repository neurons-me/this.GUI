// src/gui/widgets/RubiksCube/RubiksCube.types.ts
export interface RubiksCubeColors {
  /** +X face */
  px: string;
  /** -X face */
  nx: string;
  /** +Y face */
  py: string;
  /** -Y face */
  ny: string;
  /** +Z face */
  pz: string;
  /** -Z face */
  nz: string;
  /** Cubelet body color, visible in the gaps between stickers. */
  base: string;
}

export interface RubiksCubeProps {
  /** Canvas height in px. Width always fills its container. */
  height?: number;
  /** Animate the gentle rotation. */
  spin?: boolean;
  /** Allow drag-to-rotate via OrbitControls. */
  orbit?: boolean;
  /** Corner radius of the canvas wrapper, in px. */
  borderRadius?: number;
  /** 'classic' = real Rubik's colors (default). 'themed' = neurons.me teal/amber/coral palette. */
  palette?: 'classic' | 'themed';
  /** Override any/all of the 6 face colors + cubelet base color. */
  colors?: Partial<RubiksCubeColors>;
}
