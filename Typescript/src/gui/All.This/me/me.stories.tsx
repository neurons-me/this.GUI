import Me from './me';

export default {
  title: 'All.This/.me',
  component: Me,
};

export const Default = () => (
  <Me
    label=".me Name"
    path="name"
    initialValue="Jose Abella"
    description="Commit mode: local draft with explicit publish into .me."
  />
);

export const Display = () => (
  <Me
    label=".me Display"
    path="name"
    initialValue="Jose Abella"
    mode="display"
  />
);

export const TextArea = () => (
  <Me
    label=".me Bio"
    path="bio"
    type="textarea"
    rows={5}
    initialValue="Building semantic systems with React-first tooling."
    buttonLabel="Save Bio"
  />
);

export const Live = () => (
  <Me
    label=".me Live Status"
    path="profile.status"
    initialValue="online"
    mode="live"
    rows={1}
  />
);

export const NumberField = () => (
  <Me
    label=".me Count"
    path="metrics.count"
    type="number"
    coerce="number"
    initialValue={3}
    buttonLabel="Update Count"
  />
);
