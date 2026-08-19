// src/gui/widgets/RubiksCube/RubiksCubeLazy.tsx
//
// RubiksCube.tsx is the only file in this package that imports
// @react-three/fiber, and react-reconciler@0.27 (a transitive dependency of
// @react-three/fiber@8.x) touches React's internal
// __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED export the moment its
// module is evaluated — not lazily, on first render. React 19 renamed that
// internal, so any STATIC import of RubiksCube.tsx crashes at load time
// under React 19, even for consumers who never render a cube.
//
// This is the one place that dependency chain is loaded from — both the
// root barrel (index.ts) and the widgets barrel (widgets.ts) import THIS
// module instead of RubiksCube.tsx directly, so the fix lives in one place,
// not two. lazy() defers the import (and react-reconciler's side effect) to
// first render; the inner <Suspense> means direct/imperative consumers
// (`import { RubiksCube } from 'this.gui'; <RubiksCube />`, exactly how it
// worked before this fix) don't have to add their own Suspense boundary —
// this component is synchronous-looking from the outside, same as before.
import { lazy, Suspense } from 'react';
import type { RubiksCubeProps } from './RubiksCube.types';

const LazyRubiksCube = lazy(() => import('./RubiksCube'));

export default function RubiksCube(props: RubiksCubeProps) {
  return (
    <Suspense fallback={null}>
      <LazyRubiksCube {...props} />
    </Suspense>
  );
}
