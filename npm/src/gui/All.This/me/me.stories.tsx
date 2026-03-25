import Me from './me';
export default {
  title: 'All.This/.me',
  component: Me,
};

export const Default = () => <Me />;
export const WithCommand = () => (
  <Me defaultValue='profile.name("abella.eggleton")' />
);
