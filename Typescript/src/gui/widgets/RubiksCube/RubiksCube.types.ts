// src/gui/widgets/RubiksCube/RubiksCube.types.ts
export interface RubiksCubeProps {
  /** Canvas height in px. Width always fills its container. */
  height?: number;
  /** Animate the gentle rotation. */
  spin?: boolean;
  /** Allow drag-to-rotate via OrbitControls. */
  orbit?: boolean;
  /** Corner radius of the canvas wrapper, in px. */
  borderRadius?: number;
}
