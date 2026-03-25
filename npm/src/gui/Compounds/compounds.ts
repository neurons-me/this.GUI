/*
 * This.GUI — Compounds registry
 * High-level UI compositions built from molecules and atoms.
 * Exported here so consumers can import from a single namespace.
 */
import AllThis from '@/gui/All.This/All.This';
import Cleaker from '@/gui/All.This/Cleaker/Cleaker';
// IMPORTANT:
// - Keep this registry explicit.
// - Do not `export *` from here.
// - Add new high-level compositions intentionally.
const Compounds = {
  AllThis,
  Cleaker,
} as const;
export { AllThis, Cleaker };
export { Compounds };
export default Compounds;
