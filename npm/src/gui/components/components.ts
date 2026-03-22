/*
 * This.GUI — Components registry
 * High-level UI compositions built from molecules and atoms.
 * Exported here so consumers can import from a single namespace.
 */
import Blockchain from '@/gui/components/Blockchain/blockchain';
import Cleaker from '@/gui/Session/cleaker/Cleaker';
// IMPORTANT:
// - Keep this registry explicit.
// - Do not `export *` from here.
// - Add new high-level compositions intentionally.
const Components = {
  Blockchain,
  Cleaker,
} as const;
export { Components };
export default Components;
