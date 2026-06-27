// This.GUI — widgets barrel
// Re-export widgets from a single entrypoint.
import HighLighter from './HighLighter/HighLighter';
import HighLightsDrawer from './HighLighter/HighLightsDrawer';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import RubiksCube from './RubiksCube/RubiksCube';
import Monad from '../All.This/monad.ai/monad.ai';
export type { MonadProps } from '../All.This/monad.ai/monad.ai';
export { HighLighter };
export type { HighLighterProps, HighLighterColor } from './HighLighter/HighLighter';
export { DEFAULT_COLORS as HIGH_LIGHTER_DEFAULT_COLORS } from './HighLighter/HighLighter';
export { HighLightsDrawer };
export type { HighLightsDrawerProps, HighLightsFilterMode } from './HighLighter/HighLightsDrawer';
export { FaceRecognition };
export { RubiksCube };
export type { RubiksCubeProps } from './RubiksCube/RubiksCube.types';
export { Monad };
// Default registry (mirrors components/molecules barrels)
const Widgets = {
  HighLighter,
  HighLightsDrawer,
  FaceRecognition,
  RubiksCube,
  Monad,
};

export default Widgets;
