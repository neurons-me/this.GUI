/*
 * This.GUI — Typography (polymorphic)
 * Wrapper for MUI's Typography that preserves its full polymorphic API:
 * - component/as
 * - variantMapping
 * - support for RouterLink (to) and anchors (href) when appropriate
 *
 * Import from "@/gui/primitives" instead of "@mui/material" so the engine
 * can be changed without breaking consumers.
 */

import type { OverridableComponent } from '@mui/material/OverridableComponent';
import MuiTypography from '@mui/material/Typography';
import type { TypographyTypeMap } from '@mui/material/Typography';
import * as React from 'react';
// Public type (correctly typed MUI polymorphic props)
export type TypographyProps = React.ComponentProps<
  OverridableComponent<TypographyTypeMap<{}, 'span'>>
>;
// Component: preserves the OverridableComponent from MUI
const Typography = MuiTypography as unknown as OverridableComponent<
  TypographyTypeMap<{}, 'span'>
>;
(Typography as any).displayName = 'Gui.Typography';
// Note: displayName is not typed in OverridableComponent; casting to any avoids TS noise.
(Typography as any).displayName = 'Gui.Typography';
export default Typography;