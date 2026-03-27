/*
 * This.GUI — primitives
 * Stable design-system import surface for MUI-backed wrappers.
 *
 * Use this path when a component should depend on library-owned primitives
 * instead of reaching into "@mui/material" directly.
 *
 * Notes:
 * - Atoms remain the core primitive layer.
 * - Molecule wrappers that stay close to MUI semantics are also exposed here
 *   so docs and stories can import from one stable path.
 */

export * from '../Atoms/atoms';
export * from '../Molecules/molecules';
